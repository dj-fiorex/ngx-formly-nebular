import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-multicheckbox',
  template: `
    <p
      style="margin-bottom: 10px;"
      class="subtitle-2"
      *ngIf="to['descriptionBefore']"
    >
      {{ to.description }}
    </p>
    <nb-checkbox
      *ngFor="
        let option of to.options | formlySelectOptions: field | async;
        let i = index
      "
      [class]="!to['horizontal'] ? 'nb-checkbox-vertical' : ''"
      [id]="id + '_' + i"
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
      [indeterminate]="to['indeterminate'] && formControl.value == null"
      [checked]="option.value"
      [checked]="isChecked(option)"
      [formlyAttributes]="field"
      (change)="onChange(option.value, $any($event.target).checked)"
    >
      {{ option.label }}
    </nb-checkbox>
    <p
      style="margin-top: 10px;"
      class="subtitle-2"
      *ngIf="to['descriptionAfter']"
    >
      {{ to.description }}
    </p>
  `,
  styles: [
    `
      nb-checkbox:not(:only-child) {
        margin-right: 1.5rem;
      }
      .nb-checkbox-vertical {
        display: block;
      }
    `,
  ],
})
export class FormlyFieldMultiCheckbox extends FieldType {
  override defaultOptions = {
    templateOptions: {
      options: [],
      horizontal: true,
      description:
        'Questo checkbox segnala che la nuova entità è una nuova entità',
      descriptionBefore: true,
      descriptionAfter: false,
    },
  };

  onChange(value: any, checked: boolean) {
    if (this.to.type === 'array') {
      this.formControl.patchValue(
        checked
          ? [...(this.formControl.value || []), value]
          : [...(this.formControl.value || [])].filter((o) => o !== value)
      );
    } else {
      this.formControl.patchValue({
        ...this.formControl.value,
        [value]: checked,
      });
    }
    this.formControl.markAsTouched();
  }

  isChecked(option: any) {
    const value = this.formControl.value;

    return (
      value &&
      (this.to.type === 'array'
        ? value.indexOf(option.value) !== -1
        : value[option.value])
    );
  }
}
