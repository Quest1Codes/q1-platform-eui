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
        { label: "Dashboard", url: "screen/dashboard" },
        { label: "Home", url: "screen/home" },
        {
            label: "Module 1",
            url: "screen/module1",
            children: [
                { label: "page 1", url: "screen/module1/page1" },
                { label: "page 2", url: "screen/module1/page2" },
            ],
        },
    ];
    notificationItems = [
        { label: "Title label 1", subLabel: "Subtitle label" },
        { label: "Title label 2", subLabel: "Subtitle label" },
        { label: "Title label 3", subLabel: "Subtitle label" },
        { label: "Title label 4", subLabel: "Subtitle label" },
    ];
}
