import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { of } from "rxjs";
import { DashboardService } from "./dashboard.service";
import { EuiAppConfig } from "@eui/base";
import { CONFIG_TOKEN } from "@eui/core";

describe("DashboardService", () => {
    let service: DashboardService;
    let httpMock: any;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                {
                    provide: CONFIG_TOKEN,
                    useValue: {
                        modules: {
                            core: {
                                base: "https://example.com",
                                dashboardOverviewStats: "/stats",
                            },
                        },
                    } as unknown as EuiAppConfig,
                },
            ],
        });
    });

    beforeEach(() => {
        service = TestBed.inject(DashboardService);
        httpMock = TestBed.inject(HttpClientTestingModule);
    });

    // it("should return an observable when moduleCoreApi and url are defined", () => {
    //     const response = [{ title: "Test", value: 10, changePercentage: 5 }];
    //     httpMock.expectOne("https://example.com/stats").flush(response);
    //     service.fetchOverviewStats().subscribe((result) => {
    //         expect(result).toEqual(response);
    //     });
    // });

    it("should return an observable with an empty array when moduleCoreApi is undefined", () => {
        const config = TestBed.inject(CONFIG_TOKEN) as EuiAppConfig;
        config.modules = undefined;
        service.fetchOverviewStats().subscribe((result) => {
            expect(result).toEqual([]);
        });
    });

    it("should return an observable with an empty array when url is undefined", () => {
        const config = TestBed.inject(CONFIG_TOKEN) as EuiAppConfig;
        config.modules.core.dashboardOverviewStats = undefined;
        service.fetchOverviewStats().subscribe((result) => {
            expect(result).toEqual([]);
        });
    });

    it("should throw an error when http is undefined", () => {
        service.http = undefined;
        expect(() => service.fetchOverviewStats()).toThrowError();
    });
});
