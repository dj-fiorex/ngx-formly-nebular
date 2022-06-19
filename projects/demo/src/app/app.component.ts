import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-6',
          type: 'input',
          key: 'name',
          templateOptions: {
            placeholder: 'Name',
            label: 'Nome',
            type: 'text',
            required: true,
          },
          // expressionProperties: {
          //   "templateOptions.disabled": "!model.firstName",
          // },
        },
        {
          className: 'col-md-6',
          type: 'input',
          key: 'password',
          templateOptions: {
            label: 'Pwd',
            type: 'password',
            required: true,
            // pattern:
            //   '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}$',
          },
          // validation: {
          //   messages: {
          //     pattern: (error, field: FormlyFieldConfig) =>
          //       `"${field.formControl?.value}" is not a valid IP Address`,
          //   },
          // },
          // expressionProperties: {
          //   "templateOptions.disabled": "!model.firstName",
          // },
        },
        {
          className: 'col-md-6',
          type: 'input',
          key: 'number',
          templateOptions: {
            label: 'Number',
            type: 'number',
            required: true,
            min: 0,
            max: 100,
            step: 1,
          },
          // validation: {
          //   messages: {
          //     required: (error, field: FormlyFieldConfig) => `"${field.formControl?.value}" is not a valid IP Address`,
          //   },
          // },
          // expressionProperties: {
          //   "templateOptions.disabled": "!model.firstName",
          // },
        },
        {
          className: 'col-md-6',
          key: 'Checkboxx',
          type: 'checkbox',
          validators: {
            validation: ['requiredTrue'],
          },
          templateOptions: {
            label: 'Checkbox',
            checkboxLabel: 'Checkbox label',
            description:
              'Questo checkbox segnala che la nuova entità è una nuova entità',
            descriptionBefore: false,
            descriptionAfter: true,
            required: true,
          },
        },

        {
          className: 'col-md-6',
          key: 'Radio',
          type: 'radio',
          templateOptions: {
            label: 'Multi-Checkbox',
            options: [
              { value: 'user', label: 'User' },
              { value: 'admin', label: 'Admin' },
              { value: 'sss', label: 'sss' },
              { value: 'ddd', label: 'ddd' },
            ],
            description:
              'Questo checkbox segnala che la nuova entità è una nuova entità',
            descriptionBefore: false,
            descriptionAfter: true,
            horizontal: false,
            required: true,
          },
        },

        {
          className: 'col-md-6',
          key: 'Icon',
          type: 'icon',
          templateOptions: {
            label: 'Icon',
            type: 'text',
            placeholder: 'Icon (ex. "alert-triangle-outline")',
            required: true,
            iconListUrl: 'https://akveo.github.io/eva-icons/#/',
            iconListLabel: 'Click here to see all icons',
            iconPack: 'eva',
          },
        },
        {
          className: 'col-md-6',
          key: 'role',
          type: 'select',
          templateOptions: {
            label: 'Parent',
            options: [
              { value: 'user', label: 'User' },
              { value: 'admin', label: 'Admin' },
            ],
            required: false,
          },
        },
        {
          className: 'col-md-6',
          type: 'input',
          key: 'email',
          templateOptions: {
            label: 'Email',
            type: 'email',
            required: true,
          },
        },

        {
          className: 'col-md-6',
          key: 'multicheck',
          type: 'multicheckbox',
          templateOptions: {
            label: 'Multi-Checkbox',
            options: [
              { value: 'user', label: 'User' },
              { value: 'admin', label: 'Admin' },
            ],
            horizontal: false,
            required: false,
          },
        },
        {
          className: 'col-md-6',
          key: 'dateSingle',
          type: 'date',
          templateOptions: {
            label: 'Date single',
            placeholder: 'Seleziona una data',
            type: 'single',
            required: true,
          },
        },
        {
          className: 'col-md-6',
          key: 'dateRange',
          type: 'date',
          templateOptions: {
            label: 'Date range',
            placeholder: 'Seleziona un range di date',
            type: 'multiple',
            required: true,
          },
        },
        {
          className: 'col-md-6',
          type: 'textarea',
          key: 'textarea',
          templateOptions: {
            label: 'Textarea',
            required: true,
            description:
              'Questo checkbox segnala che la nuova entità è una nuova entità',
            descriptionBefore: false,
            descriptionAfter: true,
            cols: 30,
            rows: 5,
          },
        },
      ],
    },
  ];

  onSubmit(model: any) {
    this.form.disable();
    console.log(model);
    this.form.enable();
  }
}
