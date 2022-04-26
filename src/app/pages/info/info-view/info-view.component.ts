import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../../../store";
import { Generation } from "../store/info.action";
import { selectCount } from "../store/info.reducer";

@Component({
  selector: "info-view",
  templateUrl: "./info-view.component.html",
  styleUrls: ["./info-view.component.scss"],
})
export class InfoViewComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.count$ = this.store.select(selectCount);
  }

  increment() {
    this.store.dispatch(new Generation());
  }
}
