import { Component } from "@angular/core";
import { EuiCardModule } from "@eui/components/eui-card";
import { EuiIconModule } from "@eui/components/eui-icon";
@Component({
    selector: "app-coming-soon",
    imports: [EuiCardModule, EuiIconModule],
    templateUrl: "./coming-soon.component.html",
    styleUrl: "./coming-soon.component.scss",
})
export class ComingSoonComponent {}
