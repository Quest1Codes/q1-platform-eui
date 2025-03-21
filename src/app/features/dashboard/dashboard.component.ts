import { Component, OnInit } from "@angular/core";
import { EuiPageModule } from "@eui/components/eui-page";
import { EuiTabComponent, EuiTabsModule } from "@eui/components/eui-tabs";
import { OverviewComponent } from "./componets/overview/overview.component";
import { RouterModule, Routes } from "@angular/router";

@Component({
    templateUrl: "./dashboard.component.html",
    standalone: true,
    imports: [EuiPageModule, EuiTabsModule, RouterModule],
})
export class Dashboard implements OnInit {
    tabs = [];
    ngOnInit(): void {
        import("./componets/overview/overview.component").then(
            ({ OverviewComponent }) => {
                this.tabs = [
                    { tabLabel: "Overview", url: "/screen/dashboard" },
                    {
                        tabLabel: "Data Ingestion",
                        url: "/screen/dashboard/data-ingestion",
                    },
                    {
                        tabLabel: "Query Interface",
                        url: "/screen/dashboard/query-interface",
                    },
                    {
                        tabLabel: "System Status",
                        url: "/screen/dashboard/system-status",
                    },
                    {
                        tabLabel: "API Access",
                        url: "/screen/dashboard/api-access",
                    },
                ];
            }
        );
    }

    onTabClose(event: { tab: EuiTabComponent; index: number }) {
        console.log(event);
    }

    onTabSelect(event: { tab: EuiTabComponent; index: number }) {
        console.log(event);
        event.tab.templateContent.templateRef.createEmbeddedView(
            OverviewComponent
        );
    }
}
