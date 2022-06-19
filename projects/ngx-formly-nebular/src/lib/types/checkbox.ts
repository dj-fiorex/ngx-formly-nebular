import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-checkbox',
  template: `
    <div>
      <p
        style="margin-bottom: 10px;"
        class="subtitle-2"
        *ngIf="to['descriptionBefore']"
      >
        {{ to.description }}
      </p>
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
        {{ to['checkboxLabel'] }}
      </nb-checkbox>
      <p
        style="margin-top: 10px;"
        class="subtitle-2"
        *ngIf="to['descriptionAfter']"
      >
        {{ to.description }}
      </p>
    </div>
  `,
})
export class FormlyFieldCheckbox extends FieldType {
  override defaultOptions = {
    templateOptions: {
      descriptionBefore: true,
      descriptionAfter: false,
      checkboxLabel: 'checkboxLabel',
      indeterminate: true,
      hideLabel: false,
      formCheck: 'custom', // 'custom' | 'custom-inline' | 'custom-switch' | 'stacked' | 'inline' | 'nolabel'
    },
  };
}
