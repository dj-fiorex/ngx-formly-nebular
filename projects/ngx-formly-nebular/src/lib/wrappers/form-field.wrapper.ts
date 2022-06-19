import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-form-field',
  template: `
    <div class="form-group">
      <label
        *ngIf="to.label && to['hideLabel'] !== true"
        [attr.for]="id"
        class="label"
      >
        {{ to.label }}
        <span *ngIf="to.required && to['hideRequiredMarker'] !== true">*</span>
      </label>
      <ng-template #fieldComponent></ng-template>
      <div *ngIf="showError" class="invalid-feedback">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>
    </div>
  `,
  styles: [
    `
      .form-group {
        margin-bottom: 10px;
        margin-top: 10px;
      }
      .label {
        margin-bottom: 10px;
        display: block;
      }

      .invalid-feedback {
        display: block;
        width: 100%;
        margin-top: 0.25rem;
        font-size: 0.875em;
        color: #dc3545;
      }
    `,
  ],
})
export class FormlyWrapperFormField extends FieldWrapper {}
