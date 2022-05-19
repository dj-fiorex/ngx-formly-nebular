import { Component, ViewChild, NgZone } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'formly-field-select',
  template: `
    <nb-select
      *ngIf="to['multiple']; else singleSelect"
      multiple
      fullWidth
      [status]="
        formControl.touched
          ? formControl.invalid
            ? 'danger'
            : 'success'
          : 'basic'
      "
      [attr.aria-invalid]="
        formControl.invalid && formControl.touched ? true : null
      "
      [formControl]="$any(formControl)"
      [compareWith]="to['compareWith']"
      [formlyAttributes]="field"
    >
      <ng-container
        *ngIf="to.options | formlySelectOptions: field | async as opts"
      >
        <ng-container *ngFor="let opt of opts">
          <nb-option [value]="opt.value" [disabled]="opt.disabled">{{
            opt.label
          }}</nb-option>
        </ng-container>
      </ng-container>
    </nb-select>

    <ng-template #singleSelect>
      <nb-select
        fullWidth
        [status]="
          formControl.touched
            ? formControl.invalid
              ? 'danger'
              : 'success'
            : 'basic'
        "
        [attr.aria-invalid]="
          formControl.invalid && formControl.touched ? true : null
        "
        [formlyAttributes]="field"
        [formControl]="$any(formControl)"
        [compareWith]="to['compareWith']"
        [placeholder]="to.placeholder ?? ''"
      >
        <ng-container
          *ngIf="to.options | formlySelectOptions: field | async as opts"
        >
          <nb-option
            *ngFor="let opt of opts"
            [value]="opt.value"
            [disabled]="opt.disabled"
            >{{ opt.label }}</nb-option
          >
        </ng-container>
      </nb-select>
    </ng-template>
  `,
})
export class FormlyFieldSelect extends FieldType {
  override defaultOptions = {
    templateOptions: {
      options: [],
      compareWith(o1: any, o2: any) {
        return o1 === o2;
      },
    },
  };

  // workaround for https://github.com/angular/angular/issues/10010
  @ViewChild(SelectControlValueAccessor) set selectAccessor(s: any) {
    if (!s) return;

    const writeValue = s.writeValue.bind(s);
    if (s._getOptionId(s.value) === null) {
      writeValue(s.value);
    }

    s.writeValue = (value: any) => {
      const id = s._idCounter;
      writeValue(value);
      if (value === null) {
        this.ngZone.onStable
          .asObservable()
          .pipe(take(1))
          .subscribe(() => {
            if (
              id !== s._idCounter &&
              s._getOptionId(value) === null &&
              s._elementRef.nativeElement.selectedIndex !== -1
            ) {
              writeValue(value);
            }
          });
      }
    };
  }

  constructor(private ngZone: NgZone) {
    super();
  }
}
