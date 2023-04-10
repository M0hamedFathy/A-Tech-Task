import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { DragDropModule } from "@angular/cdk/drag-drop";

import { UiModule } from "./shared/components/ui.module";
import { DealsComponent } from "./module/deals/deals.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, DealsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    UiModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
