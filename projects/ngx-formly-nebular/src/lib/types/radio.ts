import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-radio',
  template: `
    <p
      style="margin-bottom: 10px;"
      class="subtitle-2"
      *ngIf="to['descriptionBefore']"
    >
      {{ to.description }}
    </p>
    <nb-radio-group
      [formControl]="$any(formControl)"
      [name]="id"
      [formlyAttributes]="field"
    >
      <nb-radio
        [class]="to['horizontal'] ? 'nb-radio-horizontal' : ''"
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
      .nb-radio-horizontal {
        display: inline-block;
      }
    `,
  ],
})
export class FormlyFieldRadio extends FieldType {
  override defaultOptions = {
    templateOptions: {
      options: [],
      description:
        'Questo checkbox segnala che la nuova entità è una nuova entità',
      descriptionBefore: false,
      descriptionAfter: false,
      horizontal: false,
      formCheck: 'custom', // 'custom' | 'custom-inline' | 'stacked' | 'inline'
    },
  };
}
