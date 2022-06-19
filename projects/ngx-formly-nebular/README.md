# Ngx Formly Nebular

This ngx-formly plugin uses Nebular component to render your form!

## How to use

Read the documentation of [ngx-formly](https://https://formly.dev/).

### Different properties than ngx-formly

```javascript
templateOptions: {
    //This configuration add a <p> after or before the input
     description:
        'Questo checkbox segnala che la nuova entità è una nuova entità',
      descriptionBefore: true,
      descriptionAfter: false,
}
```

### Components

- Date

  ```javascript
   {
          className: 'col-md-6',
          key: 'dateRange',
          type: 'date',
          templateOptions: {
            label: 'Date range',
            placeholder: 'Seleziona un range di date',
            type: 'multiple', //Could be 'single' or 'multiple'
            required: true,
          },
    },
  ```

## Changelog

- Version 0.1.1:
  - General fix
  - Add date type
  - Add demo project

### Development

- In the main folder
  - `npm i` to install deps
  - `npm run start:demo` to start demo in development mode, so you can edit the library and show the result live
