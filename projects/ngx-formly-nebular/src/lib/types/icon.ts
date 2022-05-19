import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-map',
  template: `
    <label for="inputIcon" class="label">
      <a href="https://akveo.github.io/eva-icons/#/" target="_blank"
        >Clicca qui per scegliere l'icona</a
      ></label
    >
    <div style="display: flex">
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
      <nb-icon
        *ngIf="!formControl.invalid"
        style="font-size: 2.25rem"
        [icon]="formControl.value"
        pack="eva"
      ></nb-icon>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldIcon extends FieldType {
  get point() {
    if (!this.formControl.value) {
      return {};
    }
    return {
      lat: this.formControl.value.lat,
      lng: this.formControl.value.lng,
      label: this.formControl.value.label,
    };
  }

  // newMapPointSelected(event: PointSelected) {
  //   console.log(event);
  //   this.formControl.setValue(event);
  //   //this.newCategoria.coordinates = event;
  //   this.formControl.markAsTouched();
  // }
}
