import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EuiCardModule } from "@eui/components/eui-card";
import { EuiIconModule } from "@eui/components/eui-icon";
import { DataSourceDistributionComponent } from "../data-source-distribution/data-source-distribution.component";
import { QueryInterfaceComponent } from "../query-interface/query-interface.component";
import { SystemStatusComponent } from "../system-status/system-status.component";
@Component({
    selector: "app-overview",
    imports: [
        EuiCardModule,
        CommonModule,
        EuiIconModule,
        DataSourceDistributionComponent,
        QueryInterfaceComponent,
        SystemStatusComponent,
    ],
    templateUrl: "./overview.component.html",
    styleUrl: "./overview.component.scss",
})
export class OverviewComponent {
    cardTitle = "Sample";
    cardSubtitle = "Sample Sub";

    stats = [
        {
            title: "Total Data Sources",
            value: "1658",
            changePercentage: 8,
            icon: "",
        },
        {
            title: "Active Queries",
            value: "284",
            changePercentage: 12,
            icon: "",
        },

        {
            title: "Avg. Response Time",
            value: "1.2s",
            changePercentage: -5,
            icon: "",
        },
    ];
}
