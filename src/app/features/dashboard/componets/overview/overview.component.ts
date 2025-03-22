import { Component, inject, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EuiCardModule } from "@eui/components/eui-card";
import { EuiIconModule } from "@eui/components/eui-icon";
import { DataSourceDistributionComponent } from "../data-source-distribution/data-source-distribution.component";
import { QueryInterfaceComponent } from "../query-interface/query-interface.component";
import { SystemStatusComponent } from "../system-status/system-status.component";
import { DashboardService } from "src/app/services/dashboard.service";
import { OVERVIEW_STATS } from "src/app/types";
import { LoadingSkeltonComponent } from "src/app/common/components/loading-skelton/loading-skelton.component";
@Component({
    selector: "app-overview",
    imports: [
        EuiCardModule,
        CommonModule,
        EuiIconModule,
        DataSourceDistributionComponent,
        QueryInterfaceComponent,
        SystemStatusComponent,
        LoadingSkeltonComponent,
    ],
    templateUrl: "./overview.component.html",
    styleUrl: "./overview.component.scss",
    standalone: true,
})
export class OverviewComponent implements OnInit {
    stats = signal<Array<OVERVIEW_STATS>>([]);
    dashboardService = inject(DashboardService);

    ngOnInit(): void {
        this.dashboardService.fetchOverviewStats().subscribe((data) => {
            this.dashboardService.changeStateLoader(false);
            this.stats.set(data);
        });
    }
}
