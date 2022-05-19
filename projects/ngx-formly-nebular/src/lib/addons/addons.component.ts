import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-addons',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.scss'],
})
export class FormlyWrapperAddons extends FieldWrapper {
  addonRightClick($event: any) {
    if (this.to['addonRight'].onClick) {
      this.to['addonRight'].onClick(this.to, this, $event);
    }
  }

  addonLeftClick($event: any) {
    if (this.to['addonLeft'].onClick) {
      this.to['addonLeft'].onClick(this.to, this, $event);
    }
  }
}
