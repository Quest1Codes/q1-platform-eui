import { TestBed } from "@angular/core/testing";
import {
    HttpClientTestingModule,
    HttpTestingController,
    provideHttpClientTesting,
} from "@angular/common/http/testing";
import { of } from "rxjs";
import { DashboardService } from "./dashboard.service";
import { EuiAppConfig } from "@eui/base";
import { CONFIG_TOKEN } from "@eui/core";
import {
    provideHttpClient,
    withInterceptorsFromDi,
} from "@angular/common/http";

describe("DashboardService", () => {
    let service: DashboardService;
    let httpMock: HttpTestingController;
    let configMock: EuiAppConfig;

    beforeEach(() => {
        configMock = {
            global: {},
            modules: {
                core: {
                    base: "localhost:3000",
                    dashboardOverviewStats: "/stats",
                    dataSourceDist: "/dataSourceDist",
                },
            },
        };
        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(withInterceptorsFromDi()),
                provideHttpClientTesting(),
                { provide: CONFIG_TOKEN, useValue: configMock },
            ],
        });
    });

    beforeEach(() => {
        service = TestBed.inject(DashboardService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it("should return an observable when moduleCoreApi and url are defined", () => {
        const response = [{ title: "Test", value: 10, changePercentage: 5 }];
        service.fetchOverviewStats().subscribe((data) => {
            expect(data).toEqual(response);
        });

        const req = httpMock.expectOne(
            `${configMock.modules?.["core"]["base"]}${configMock.modules?.["core"]["dashboardOverviewStats"]}`
        );
        expect(req.request.method).toBe("GET");
        req.flush(response);
    });

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

    it("should return an observable with an empty array when moduleCoreApi is undefined", () => {
        const config = TestBed.inject(CONFIG_TOKEN) as EuiAppConfig;
        config.modules = undefined;
        service.fetchDataSourceDist().subscribe((result) => {
            expect(result).toEqual([]);
        });
    });
    it("should return an observable with an empty array when url is undefined", () => {
        const config = TestBed.inject(CONFIG_TOKEN) as EuiAppConfig;
        config.modules.core.dataSourceDist = undefined;
        service.fetchDataSourceDist().subscribe((result) => {
            expect(result).toEqual([]);
        });
    });
    it("should make a GET request to the correct URL when moduleCoreApi and url are defined", () => {
        const response = [{ type: "Test", value: 10 }];
        service.fetchDataSourceDist().subscribe((data) => {
            expect(data).toEqual(response);
        });

        const req = httpMock.expectOne(
            `${configMock.modules?.["core"]["base"]}${configMock.modules?.["core"]["dataSourceDist"]}`
        );
        expect(req.request.method).toBe("GET");
        req.flush(response);
    });
    it("should call changeDataSourceLoader with true before making the request", () => {
        spyOn(service, "changeDataSourceLoader");
        service.fetchDataSourceDist().subscribe();
        expect(service.changeDataSourceLoader).toHaveBeenCalledWith(true);
    });
});
