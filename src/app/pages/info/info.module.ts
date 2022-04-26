import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ThemeModule } from "../../@theme/theme.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducer } from "./store/info.reducer";
import { NbCardModule, NbIconModule } from "@nebular/theme";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { InfoRoutingModule } from "./info-routing.module";
import { InfoEffects } from "./store/info.effect";
import { FormsModule } from "@angular/forms";
import { InfoViewComponent } from "./info-view/info-view.component";

const materialModules = [
  MatFormFieldModule,
  MatAutocompleteModule,
  MatInputModule,
  MatSelectModule,
  MatTooltipModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatButtonModule,
  MatButtonToggleModule,
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [InfoViewComponent],
  imports: [
    FormsModule,
    ThemeModule,
    InfoRoutingModule,
    StoreModule.forFeature("info", reducer),
    EffectsModule.forFeature([InfoEffects]),

    NbCardModule,
    NbIconModule,
    ...materialModules,
  ],
})
export class InfoModule {}
