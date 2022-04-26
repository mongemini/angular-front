import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { EMPTY, Observable, of } from "rxjs";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { ApiHttpService } from "../../../@core/utils/api-http.service";
import { AppState } from "../../../store";

import * as info from "./info.action";
import { InfoLoadedSuccess, InfoLoadedFail, Increment } from "./info.action";
import { selectInfo } from "./info.reducer";

@Injectable()
export class InfoEffects {
  apiName = "info";
  constructor(
    private actions$: Actions,
    private apiHttpService: ApiHttpService,
    private store$: Store<AppState>
  ) {}

  loadInfo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(info.LOAD_INFO),
      withLatestFrom<any, Observable<Array<any>>>(
        this.store$.select(selectInfo)
      ),
      switchMap(([action, bookmakers]) => {
        if (bookmakers.length > 0) return EMPTY;

        return this.apiHttpService.get(this.apiName, `Info`).pipe(
          map((data: any) => {
            const list = data.map((i) => {
              return {
                id: i.id,
                name: i.name,
              };
            });
            return new InfoLoadedSuccess(list);
          }),
          catchError(() => of(new InfoLoadedFail()))
        );
      })
    );
  });

  increment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(info.GENERATION),
      switchMap(() => of(new Increment()))
    );
  });
}
