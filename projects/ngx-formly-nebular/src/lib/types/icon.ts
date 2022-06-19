import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-map',
  template: `
    <label for="inputIcon" class="label">
      <a [href]="to['iconListUrl']" target="_blank">
        {{ to['iconListLabel'] }}
      </a>
    </label>

    <nb-form-field>
      <nb-icon
        nbPrefix
        [icon]="formControl.value"
        [pack]="to['iconPack']"
      ></nb-icon>
      <input
        nbInput
        type="text"
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
        [formlyAttributes]="field"
      />
    </nb-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldIcon extends FieldType {
  override defaultOptions = {
    templateOptions: {
      iconListUrl: 'https://akveo.github.io/eva-icons/#/',
      iconListLabel: 'Click here to see all icons',
      iconPack: 'eva',
    },
  };
}
