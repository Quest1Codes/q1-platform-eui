import {
    Component,
    input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from "@angular/core";
import { EuiSkeletonComponent } from "@eui/components/eui-skeleton";
import { CommonModule } from "@angular/common";
@Component({
    selector: "app-loading-skelton",
    imports: [EuiSkeletonComponent, CommonModule],
    templateUrl: "./loading-skelton.component.html",
    styleUrl: "./loading-skelton.component.scss",
})
export class LoadingSkeltonComponent implements OnInit {
    skeltonType = input.required<"rectangle" | "circle" | "line" | "square">();
    rows = input.required<number | string>();
    columns = input.required<number | string>();
    height = input.required<number | string>();
    columnClass = "";
    rowsArray: number[] = [];
    columnsArray: number[] = [];

    ngOnInit(): void {
        this.columnClass = `col-md-${
            12 / parseInt(this.columns().toString()) || 1
        }`;

        this.rowsArray = Array(parseInt(this.rows().toString()) || 0)
            .fill(1)
            .map((x, i) => i);
        this.columnsArray = Array(parseInt(this.columns().toString()) || 0)
            .fill(0)
            .map((x, i) => i);
    }
}
