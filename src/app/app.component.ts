import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { EuiLayoutModule } from "@eui/components/layout";
import { EuiLanguageSelectorModule } from "@eui/components/eui-language-selector";
import { EuiUserProfileModule } from "@eui/components/eui-user-profile";
import { EuiIconModule } from "@eui/components/eui-icon";
import { EuiMenuItem } from "@eui/components/eui-menu";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    standalone: true,
    imports: [
        TranslateModule,
        EuiLayoutModule,
        EuiIconModule,
        EuiUserProfileModule,
        EuiLanguageSelectorModule,
    ],
})
export class AppComponent {
    sidebarItems: EuiMenuItem[] = [
        { label: "Main Navigation" },
        {
            label: "Dashboard",
            url: "screen/dashboard",
            iconSvgName: "eui-home",
        },
        {
            label: "Datasource",
            url: "screen/datasource",
            iconSvgName: "database:fa-solid",
        },
        {
            label: "Data Ingestion",
            url: "screen/data-ingestion",
            iconSvgName: "cloud-arrow-up:fa-solid",
        },
        {
            label: "Query Interface",
            url: "screen/query-interface",
            iconSvgName: "eui-search",
        },
        {
            label: "Analytics",
            url: "screen/analytics",
            iconSvgName: "pie-chart:sharp",
        },
        {
            label: "API Access",
            url: "screen/api-access",
            iconSvgName: "code:fa-solid",
        },
    ];
}
