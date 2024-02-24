import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {AppButton} from "../../shared/components/button/button.component";

@NgModule({
  imports: [AppButton],
  providers: [],
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ],
})
export class HomeModule {}
