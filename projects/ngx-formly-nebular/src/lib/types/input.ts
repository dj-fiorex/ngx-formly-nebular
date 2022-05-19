import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input',
  template: `
    <input
      *ngIf="type !== 'number'; else numberTmp"
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
      [type]="type"
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
    />
    <ng-template #numberTmp>
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
        type="number"
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
      />
    </ng-template>
  `,
})
export class FormlyFieldInput extends FieldType {
  get type() {
    return this.to.type || 'text';
  }
}
