import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbCheckboxModule,
  NbDatepickerModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbOptionModule,
  NbRadioModule,
  NbSelectModule,
  NbThemeModule,
} from '@nebular/theme';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyNebularAddonsModule } from './addons/public_api';
import { FIELD_TYPE_COMPONENTS, NEBULAR_FORMLY_CONFIG } from './nebular.config';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [FIELD_TYPE_COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot(),
    NbFormFieldModule,
    NbInputModule,
    NbIconModule,
    NbCheckboxModule,
    NbRadioModule,
    NbSelectModule,
    NbDatepickerModule.forRoot(),
    NbOptionModule,
    FormlySelectModule,
    NbEvaIconsModule,
    NbIconModule,
    FormlyModule.forChild(NEBULAR_FORMLY_CONFIG),
    FormlyNebularAddonsModule,
  ],
})
export class NgxFormlyNebularModule {}
