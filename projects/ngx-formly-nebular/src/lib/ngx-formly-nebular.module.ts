import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbCheckboxModule,
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

@NgModule({
  declarations: [FIELD_TYPE_COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot(),
    NbInputModule,
    NbIconModule,
    NbCheckboxModule,
    NbRadioModule,
    NbSelectModule,
    NbOptionModule,
    FormlySelectModule,
    FormlyModule.forChild(NEBULAR_FORMLY_CONFIG),
    FormlyNebularAddonsModule,
  ],
})
export class NgxFormlyNebularModule {}
