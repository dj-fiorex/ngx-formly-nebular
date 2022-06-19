import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

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
        *ngFor="
          let opt of to.options | formlySelectOptions: field | async as opts
        "
      >
        <nb-option [value]="opt.value" [disabled]="opt.disabled">{{
          opt.label
        }}</nb-option>
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
        <nb-option
          *ngFor="
            let opt of to.options | formlySelectOptions: field | async as opts
          "
          [value]="opt.value"
          [disabled]="opt.disabled"
          >{{ opt.label }}</nb-option
        >
      </nb-select>
    </ng-template>
  `,
})
export class FormlyFieldSelect extends FieldType {
  constructor() {
    super();
  }

  override defaultOptions = {
    templateOptions: {
      options: [],
      compareWith(o1: any, o2: any) {
        return o1 === o2;
      },
    },
  };
}
