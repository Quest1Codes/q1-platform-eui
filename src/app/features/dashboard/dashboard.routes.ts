import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { OverviewComponent } from "./componets/overview/overview.component";
import { DataIngestionComponent } from "./componets/data-ingestion/data-ingestion.component";
import { QueryInterfaceComponent } from "./componets/query-interface/query-interface.component";
import { SystemStatusComponent } from "./componets/system-status/system-status.component";
import { ApiAccessComponent } from "./componets/api-access/api-access.component";

export const DASHBOARD_ROUTES: Routes = [
    {
        path: "",
        component: DashboardComponent,
        children: [
            { path: "", component: OverviewComponent },
            { path: "data-ingestion", component: DataIngestionComponent },
            { path: "query-interface", component: QueryInterfaceComponent },
            { path: "system-status", component: SystemStatusComponent },
            { path: "api-access", component: ApiAccessComponent },
        ],
    },
];
