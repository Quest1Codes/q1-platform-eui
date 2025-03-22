import { Component, inject, OnInit } from "@angular/core";
import {
    ApexChart,
    ApexStroke,
    EuiApexChartComponent,
} from "@eui/components/externals/charts";
import { EuiCardModule } from "@eui/components/eui-card";
import { DashboardService } from "src/app/services/dashboard.service";
import { LoadingSkeltonComponent } from "src/app/common/components/loading-skelton/loading-skelton.component";
import { CommonModule } from "@angular/common";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    fill: ApexFill;
    title: ApexTitleSubtitle;
};

@Component({
    selector: "app-data-source-distribution",
    imports: [
        EuiCardModule,
        EuiApexChartComponent,
        LoadingSkeltonComponent,
        CommonModule,
    ],
    templateUrl: "./data-source-distribution.component.html",
    styleUrl: "./data-source-distribution.component.scss",
})
export class DataSourceDistributionComponent implements OnInit {
    dashboardService = inject(DashboardService);

    chartOptions = {
        series: [
            {
                name: "Data points",
                data: [],
            },
        ],
        chart: {
            height: 350,
            type: "bar",
        } as ApexChart,
        plotOptions: {
            bar: {
                dataLabels: {
                    position: "top", // top, center, bottom
                },
            },
        },
        dataLabels: {
            enabled: true,
            offsetY: -20,
            style: {
                fontSize: "12px",
                colors: ["#304758"],
            },
        },

        xaxis: {
            categories: [],
            position: "bottom",
            labels: {
                offsetY: 0,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                fill: {
                    type: "gradient",
                    gradient: {
                        colorFrom: "#D8E3F0",
                        colorTo: "#BED1E6",
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    },
                },
            },
            tooltip: {
                enabled: true,
                offsetY: -35,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "light",
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [50, 0, 100, 100],
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: true,
            },
        },
    };

    ngOnInit(): void {
        this.dashboardService.fetchDataSourceDist().subscribe((data) => {
            data.forEach((item) => {
                this.chartOptions.series[0].data.push(item.value);
                this.chartOptions.xaxis.categories.push(item.type);
            });
            this.dashboardService.changeDataSourceLoader(false);
        });
    }
}
