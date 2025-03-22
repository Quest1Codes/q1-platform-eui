import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { DATA_SOURCE_DIST, OVERVIEW_STATS } from "../types";
import { BehaviorSubject, catchError, Observable, of } from "rxjs";
import { EuiAppConfig } from "@eui/base";
import { CONFIG_TOKEN } from "@eui/core";

@Injectable({
    providedIn: "root",
})
export class DashboardService {
    http: HttpClient = inject(HttpClient);
    private config: EuiAppConfig = inject(CONFIG_TOKEN);
    statLoader$ = new BehaviorSubject(false);
    dataSourceLoader$ = new BehaviorSubject(false);

    changeStateLoader(state: boolean) {
        this.statLoader$.next(state);
    }

    changeDataSourceLoader(state: boolean) {
        this.dataSourceLoader$.next(state);
    }

    fetchOverviewStats(): Observable<Array<OVERVIEW_STATS>> {
        this.changeStateLoader(true);
        const moduleCoreApi = this.config.modules?.["core"];
        const url = `${moduleCoreApi?.["base"]}${moduleCoreApi?.["dashboardOverviewStats"]}`;
        return this.http.get<Array<OVERVIEW_STATS>>(url);
    }

    fetchDataSourceDist(): Observable<Array<DATA_SOURCE_DIST>> {
        this.changeDataSourceLoader(true);
        const moduleCoreApi = this.config.modules?.["core"];
        const url = `${moduleCoreApi?.["base"]}${moduleCoreApi?.["dataSourceDist"]}`;
        return this.http.get<Array<DATA_SOURCE_DIST>>(url);
    }
}
