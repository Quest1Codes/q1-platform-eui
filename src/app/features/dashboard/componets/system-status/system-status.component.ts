import { Component } from "@angular/core";
import { EuiListModule } from "@eui/components/eui-list";
import { EuiCardModule } from "@eui/components/eui-card";
import { EuiIconModule } from "@eui/components/eui-icon";
import { CommonModule } from "@angular/common";
import { EuiProgressBarComponent } from "@eui/components/eui-progress-bar";
@Component({
    selector: "app-system-status",
    imports: [
        EuiListModule,
        EuiCardModule,
        EuiIconModule,
        CommonModule,
        EuiProgressBarComponent,
    ],
    templateUrl: "./system-status.component.html",
    styleUrl: "./system-status.component.scss",
})
export class SystemStatusComponent {
    systemStats = [
        {
            title: "Query Engine",
            latency: 0,
            uptime: "99.99%",
            icon: "happy:outline",
            statusLable: "Operational",
            status: "success",
        },
        {
            title: "Data Ingestion",
            latency: 0,
            uptime: "99.99%",
            icon: "happy:outline",
            statusLable: "Operational",
            status: "success",
        },
        {
            title: "API Gateway",
            latency: 0,
            uptime: "99.99%",
            icon: "happy:outline",
            statusLable: "Performance Degraded",
            status: "warning",
        },
    ];

    resources = [
        {
            title: "CPU Usage",
            value: 42,
            total: 100,
            scale: "%",
        },
        {
            title: "Memory Usage",
            value: 6.2,
            total: 16,
            scale: "GB",
        },
        {
            title: "Storage",
            value: 156,
            total: 500,
            scale: "GB",
        },
    ];
}
