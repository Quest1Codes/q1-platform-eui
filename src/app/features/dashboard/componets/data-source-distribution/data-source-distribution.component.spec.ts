/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DataSourceDistributionComponent } from "./data-source-distribution.component";
import { DashboardService } from "src/app/services/dashboard.service";
import { of } from "rxjs";

describe("DataSourceDistributionComponent", () => {
    let component: DataSourceDistributionComponent;
    let fixture: ComponentFixture<DataSourceDistributionComponent>;
    let dashboardService: DashboardService;
    let changeDataSourceLoaderSpy: jasmine.Spy;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                {
                    provide: DashboardService,
                    useValue: {
                        fetchOverviewStats: () => {},
                        changeStateLoader: () => {},
                        changeDataSourceLoader: () => {},
                        fetchDataSourceDist: () => {},
                    },
                },
            ],
        });

        fixture = TestBed.createComponent(DataSourceDistributionComponent);
        component = fixture.componentInstance;
        dashboardService = TestBed.inject(DashboardService);
        changeDataSourceLoaderSpy = spyOn(
            dashboardService,
            "changeDataSourceLoader"
        );
    });

    it("should call fetchDataSourceDist when ngOnInit is executed", () => {
        spyOn(dashboardService, "fetchDataSourceDist").and.returnValue(of([]));
        component.ngOnInit();
        expect(dashboardService.fetchDataSourceDist).toHaveBeenCalledTimes(1);
    });

    it("should update chart data when data is received", () => {
        const data = [{ value: 10, type: "Test" }];
        spyOn(dashboardService, "fetchDataSourceDist").and.returnValue(
            of(data)
        );
        component.ngOnInit();
        expect(component.chartOptions.series[0].data).toEqual([10]);
        expect(component.chartOptions.xaxis.categories).toEqual(["Test"]);
    });

    it("should call changeDataSourceLoader with false when data is received", () => {
        spyOn(dashboardService, "fetchDataSourceDist").and.returnValue(of([]));
        component.ngOnInit();
        expect(changeDataSourceLoaderSpy).toHaveBeenCalledTimes(1);
        expect(changeDataSourceLoaderSpy).toHaveBeenCalledWith(false);
    });

    it("should not throw an error when fetchDataSourceDist returns an empty array", () => {
        spyOn(dashboardService, "fetchDataSourceDist").and.returnValue(of([]));
        expect(() => component.ngOnInit()).not.toThrow();
    });

    it("should not throw an error when fetchDataSourceDist returns an array with invalid data", () => {
        const data = [{ invalid: "data" }];
        spyOn(dashboardService, "fetchDataSourceDist").and.returnValue(
            of(data) as any
        );
        expect(() => component.ngOnInit()).not.toThrow();
    });
});
