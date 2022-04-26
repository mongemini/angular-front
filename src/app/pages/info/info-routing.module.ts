import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InfoViewComponent } from "./info-view/info-view.component";

const routes: Routes = [
  {
    path: "",
    component: InfoViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
