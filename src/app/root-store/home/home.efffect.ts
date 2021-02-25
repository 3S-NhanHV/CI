import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { forkJoin, Observable, of } from "rxjs";
import { BackendService } from "src/app/core/service/backend-service/backend-service.service";
import { ActionTypes, HandleLoading, LoadData, LoadDataByIDSuccess, LoadDataFailure, LoadDataSuccess } from "./home.action";
import { switchMap, map, catchError, mergeMap, distinct, bufferCount, tap, delay } from 'rxjs/operators';
import { StateService } from "src/app/core/service/state-service/state-service.service";
import { LoaderService } from "src/app/core/service/loader-service/loader.service";
@Injectable()
export class HomeEffects {
    constructor(private actions$: Actions,
        private backendService: BackendService,
        private stateService: StateService,
        private loader: LoaderService
    ) { }

    @Effect()
    public getData() {
        return this.actions$.pipe(
            ofType<LoadData>(ActionTypes.LoadData),
            switchMap(() => {
                return this.backendService.getDataAlBumsExample().pipe(
                    delay(5000),
                    map((res) => {
                        console.log("LoadDataSuccess,home")
                        return new LoadDataSuccess(res);
                    }),
                    catchError((err) => of(new LoadDataFailure({ code: err.status, reason: err.message }))),
                );
            }));
    }

    // @Effect()
    // public getDataByID(id) {
    //     return this.actions$.pipe(
    //         ofType<LoadData>(ActionTypes.LoadDataByID),
    //         switchMap(() => {
    //             return this.backendService.getDataAlBumByID().pipe(
    //                 delay(10000),
    //                 map((res) => {
    //                     console.log("LoadDataByIDSuccess")
    //                     return new LoadDataByIDSuccess(res);
    //                 }),
    //                 catchError((err) => of(new LoadDataFailure({ code: err.status, reason: err.message }))),
    //             );
    //         }));
    // }

    @Effect({ dispatch: false })
    public waitForActions(): Observable<any> {
        this.stateService.listAPI = [ActionTypes.LoadDataSuccess,
        ActionTypes.LoadDataByIDSuccess];
        return this.actions$
            .pipe(
                ofType(...this.stateService.listAPI),
                distinct((action) => action.type),
                bufferCount(this.stateService.listAPI.length),
                tap(() => {
                    this.loader.hide()
                }),
            );
    }

    @Effect({ dispatch: false })
    public waitForActionsOpen(): Observable<any> {
        const waitFor: string[] = [
            ActionTypes.LoadData,
            ActionTypes.LoadDataByID,
        ];

        return this.actions$
            .pipe(
                ofType(...waitFor),
                distinct((action) => action.type),
                bufferCount(waitFor.length),
                tap(() => this.loader.show()),
            );
    }

}