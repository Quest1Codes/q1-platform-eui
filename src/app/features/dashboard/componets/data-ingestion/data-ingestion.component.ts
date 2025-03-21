import { Component } from "@angular/core";
import { EuiCardModule } from "@eui/components/eui-card";
import { EuiTabsModule } from "@eui/components/eui-tabs";
import { EuiProgressBarComponent } from "@eui/components/eui-progress-bar";
import { EuiIconModule } from "@eui/components/eui-icon";
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from "@angular/forms";
import {
    EuiFileUploadModule,
    EuiFileUploadUtilsService,
} from "@eui/components/eui-file-upload";

import { EuiButtonComponent } from "@eui/components/eui-button";
@Component({
    selector: "app-data-ingestion",
    imports: [
        EuiCardModule,
        EuiTabsModule,
        EuiProgressBarComponent,
        EuiIconModule,
        EuiFileUploadModule,
        // FormControl,
        // FormGroup,
        ReactiveFormsModule,
        EuiButtonComponent,
    ],
    templateUrl: "./data-ingestion.component.html",
    styleUrl: "./data-ingestion.component.scss",
})
export class DataIngestionComponent {
    public form: FormGroup;
    public progress = 0;

    public tabs = [
        { tabLabel: "Structured Data", tabContent: "Content 1" },
        { tabLabel: "Unstructured Data", tabContent: "Content 2" },
        { tabLabel: "API Connection", tabContent: "Content 3" },
    ];
    uplaodedPercentage = (size: number, uploaded: number) => {
        return parseInt(`${(uploaded / size) * 100}`);
    };

    submit() {
        console.log(this.form);
    }

    recentUploads = [
        {
            filename: "customer_data.csv",
            sizeInMB: 2.4,
            uploaded: 2.4,
        },
        {
            filename: "product_catalog.json",
            sizeInMB: 8.1,
            uploaded: 8.1,
        },
        {
            filename: "user_feedback.txt",
            sizeInMB: 1.2,
            uploaded: 1,
        },
        {
            filename: "system_logs.log",
            sizeInMB: 4.7,
            uploaded: 1,
        },
    ];
}
