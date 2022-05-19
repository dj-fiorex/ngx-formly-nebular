import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-textarea',
  template: `
    <textarea
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
      [formControl]="$any(formControl)"
      [cols]="to.cols"
      [rows]="to.rows"
      class="form-control"
      [formlyAttributes]="field"
    >
    </textarea>
  `,
})
export class FormlyFieldTextArea extends FieldType {
  override defaultOptions = {
    templateOptions: {
      cols: 1,
      rows: 1,
    },
  };
}
