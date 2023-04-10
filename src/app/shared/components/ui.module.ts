import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { BtnSettingsDropdownComponent } from "./btn-settings-dropdown/btn-settings-dropdown.component";
import { CardComponent } from "./card/card.component";
import { FilterComponent } from "./filter/filter.component";

@NgModule({
  declarations: [
    HeaderComponent,
    BtnSettingsDropdownComponent,
    CardComponent,
    FilterComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    BtnSettingsDropdownComponent,
    CardComponent,
    FilterComponent,
  ],
})
export class UiModule {}
