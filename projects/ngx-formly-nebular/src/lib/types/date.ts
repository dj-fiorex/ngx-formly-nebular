import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-date',
  template: `
    <p
      style="margin-bottom: 10px;"
      class="subtitle-2"
      *ngIf="to['descriptionBefore']"
    >
      {{ to.description }}
    </p>
    <ng-container *ngIf="to.type === 'single'; else rangeDate">
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
        [nbDatepicker]="formpicker"
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
      />
      <nb-datepicker #formpicker></nb-datepicker>
    </ng-container>

    <ng-template #rangeDate>
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
        [nbDatepicker]="rangepicker"
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
      />
      <nb-rangepicker #rangepicker></nb-rangepicker>
    </ng-template>
    <p
      style="margin-top: 10px;"
      class="subtitle-2"
      *ngIf="to['descriptionAfter']"
    >
      {{ to.description }}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldDate extends FieldType {
  override defaultOptions = {
    templateOptions: {
      type: 'single',
      description:
        'Questo checkbox segnala che la nuova entità è una nuova entità',
      descriptionBefore: true,
      descriptionAfter: false,
    },
  };
}
