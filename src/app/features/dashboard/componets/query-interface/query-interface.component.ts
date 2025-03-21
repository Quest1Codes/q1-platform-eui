import { Component } from "@angular/core";
import { EuiCardModule } from "@eui/components/eui-card";
import { EuiTextAreaModule } from "@eui/components/eui-textarea";
import { EuiButtonModule } from "@eui/components/eui-button";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: "app-query-interface",
    imports: [
        EuiCardModule,
        EuiTextAreaModule,
        EuiButtonModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    templateUrl: "./query-interface.component.html",
    styleUrl: "./query-interface.component.scss",
    standalone: true,
})
export class QueryInterfaceComponent {
    public query: string = "";
    exampleQueries = [
        "How many customers purchased product X in the last quarter?",
        "Summarize the sentiment from customer feedback in March",
        "Which data sources contain information about product returns?",
        "What are the common issues reported in system logs?",
    ];

    runQuery() {
        console.log(this.query);
    }

    runExampleQuery(query: string) {
        this.query = query;
        // this.runQuery();
    }
}
