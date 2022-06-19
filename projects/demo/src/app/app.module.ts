import { NgModule } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  NbButtonModule,
  NbLayoutModule,
  NbSidebarModule,
  NbThemeModule,
} from '@nebular/theme';
import { FormlyModule } from '@ngx-formly/core';
import { NgxFormlyNebularModule } from 'projects/ngx-formly-nebular/src/public-api';

import { AppComponent } from './app.component';

export function minlengthValidationMessage(err: any, field: any) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

export function maxlengthValidationMessage(err: any, field: any) {
  return `This value should be less than ${field.templateOptions.maxLength} characters`;
}

export function minValidationMessage(err: any, field: any) {
  return `This value should be more than ${field.templateOptions.min}`;
}

export function maxValidationMessage(err: any, field: any) {
  return `This value should be less than ${field.templateOptions.max}`;
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validators: [
        { name: 'requiredTrue', validation: Validators.requiredTrue },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minlength', message: minlengthValidationMessage },
        { name: 'maxlength', message: maxlengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
      ],
    }),
    NgxFormlyNebularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
