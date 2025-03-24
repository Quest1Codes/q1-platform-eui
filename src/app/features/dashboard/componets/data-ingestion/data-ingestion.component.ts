import { Component, inject, Injectable } from "@angular/core";
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
import { UploadServiceService } from "src/app/services/upload-service.service";

@Component({
    standalone: true,
    selector: "app-data-ingestion",
    imports: [
        EuiCardModule,
        EuiTabsModule,
        EuiProgressBarComponent,
        EuiIconModule,
        EuiFileUploadModule,
        ReactiveFormsModule,
        EuiButtonComponent,
    ],
    templateUrl: "./data-ingestion.component.html",
    styleUrl: "./data-ingestion.component.scss",
})
export class DataIngestionComponent {
    public form: FormGroup = new FormGroup({
        file: new FormControl(null, [Validators.required]),
    });
    public progress = 0;
    uploadUtilsService = inject(UploadServiceService);
    recentUploads = [
        {
            filename: "customer_data.csv",
            sizeInMB: "2.4",
            progress: 100,
        },
        {
            filename: "product_catalog.json",
            sizeInMB: "8.1",
            progress: 100,
        },
        {
            filename: "user_feedback.txt",
            sizeInMB: "1.2",
            progress: 50,
        },
        {
            filename: "system_logs.log",
            sizeInMB: "4.7",
            progress: 35,
        },
    ];

    public tabs = [
        { tabLabel: "Structured Data" },
        { tabLabel: "Unstructured Data" },
        { tabLabel: "API Connection" },
    ];
    uplaodedPercentage = (size: number, uploaded: number) => {
        return parseInt(`${(uploaded / size) * 100}`);
    };
    submit() {
        if (this.form.valid) {
            this.uploadUtilsService
                .sendData(this.form.value, "http://localhost:3000/api/fake-api")
                .pipe(
                    this.uploadUtilsService.uploadProgress((progress) => {
                        if (this.form.get("file").value.length > 0) {
                            this.progress = progress;
                            const fileName = this.recentUploads.find(
                                (f) =>
                                    f.filename ===
                                    this.form.get("file").value[0].name
                            );
                            if (fileName) {
                                fileName.progress = progress;
                            } else {
                                this.recentUploads.push({
                                    filename:
                                        this.form.get("file").value[0].name,
                                    sizeInMB: (
                                        this.form.get("file").value[0].size /
                                        1024 /
                                        1024
                                    ).toFixed(2),
                                    progress: progress,
                                });
                            }
                        }
                    }),
                    this.uploadUtilsService.toResponseBody()
                )
                .subscribe((response) => {
                    console.log(response);
                });
        }
    }
}
