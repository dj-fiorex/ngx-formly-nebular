import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-textarea',
  template: `
    <p
      style="margin-bottom: 10px;"
      class="subtitle-2"
      *ngIf="to['descriptionBefore']"
    >
      {{ to.description }}
    </p>
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
    <p
      style="margin-top: 10px;"
      class="subtitle-2"
      *ngIf="to['descriptionAfter']"
    >
      {{ to.description }}
    </p>
  `,
})
export class FormlyFieldTextArea extends FieldType {
  override defaultOptions = {
    templateOptions: {
      cols: 1,
      rows: 1,
      description:
        'Questo checkbox segnala che la nuova entità è una nuova entità',
      descriptionBefore: true,
      descriptionAfter: false,
    },
  };
}
