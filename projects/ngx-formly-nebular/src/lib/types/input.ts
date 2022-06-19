import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input',
  template: `
    <input
      nbInput
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
      [type]="to.type"
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
    />
  `,
})
export class FormlyFieldInput extends FieldType {
  override defaultOptions = {
    templateOptions: {
      type: 'text',
    },
  };
}
