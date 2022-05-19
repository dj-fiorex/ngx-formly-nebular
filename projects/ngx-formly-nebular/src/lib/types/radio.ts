import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-radio',
  template: `
    <nb-radio-group
      [formControl]="$any(formControl)"
      [name]="id"
      [formlyAttributes]="field"
    >
      <nb-radio
        *ngFor="
          let option of to.options | formlySelectOptions: field | async;
          let i = index
        "
        [id]="id + '_' + i"
        [value]="option.value"
        [attr.value]="option.value"
        [disabled]="option.disabled || formControl.disabled ? true : null"
      >
        {{ option.label }}
      </nb-radio>
    </nb-radio-group>
  `,
})
export class FormlyFieldRadio extends FieldType {
  override defaultOptions = {
    templateOptions: {
      options: [],
      formCheck: 'custom', // 'custom' | 'custom-inline' | 'stacked' | 'inline'
    },
  };
}
