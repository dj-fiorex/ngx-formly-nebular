import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-multicheckbox',
  template: `
    <nb-checkbox
      *ngFor="
        let option of to.options | formlySelectOptions: field | async;
        let i = index
      "
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
      {{ to.label }}
    </nb-checkbox>
  `,
})
export class FormlyFieldMultiCheckbox extends FieldType {
  override defaultOptions = {
    templateOptions: {
      options: [],
      formCheck: 'custom', // 'custom' | 'custom-inline' | 'custom-switch' | 'stacked' | 'inline'
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
