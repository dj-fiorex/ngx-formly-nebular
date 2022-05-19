import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-checkbox',
  template: `
    <nb-checkbox
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
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
    >
      {{ to.label }}
    </nb-checkbox>
    <p>{{ to.description }}</p>
  `,
})
export class FormlyFieldCheckbox extends FieldType {
  override defaultOptions = {
    templateOptions: {
      indeterminate: true,
      hideLabel: true,
      formCheck: 'custom', // 'custom' | 'custom-inline' | 'custom-switch' | 'stacked' | 'inline' | 'nolabel'
    },
  };
}
