import { ComponentFixture, TestBed } from "@angular/core/testing";
import { OverviewComponent } from "./overview.component";
import { DashboardService } from "src/app/services/dashboard.service";
import { of, throwError } from "rxjs";
import { EUI_CONFIG_TOKEN } from "@eui/core";
import { environment } from "src/environments/environment";
import { appConfig as euiAppConfig } from "src/config/index";

describe("OverviewComponent", () => {
    let component: OverviewComponent;
    let fixture: ComponentFixture<OverviewComponent>;
    let dashboardService: DashboardService;
    let statsSpy: any;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                {
                    provide: DashboardService,
                    useValue: { fetchOverviewStats: () => {} },
                },
                {
                    provide: EUI_CONFIG_TOKEN,
                    useValue: { appConfig: euiAppConfig, environment },
                },
            ],
        });
        fixture = TestBed.createComponent(OverviewComponent);
        component = fixture.componentInstance;
        dashboardService = TestBed.inject(DashboardService);
        statsSpy = spyOn(component.stats, "set");
    });
    it("should call fetchOverviewStats when ngOnInit is executed", () => {
        const fetchOverviewStatsSpy = spyOn(
            dashboardService,
            "fetchOverviewStats"
        ).and.returnValue(of([]));
        component.ngOnInit();
        expect(fetchOverviewStatsSpy).toHaveBeenCalledTimes(1);
    });
    it("should update stats with received data", () => {
        const data = [{ title: "Test", value: "10" }];
        const fetchOverviewStatsSpy = spyOn(
            dashboardService,
            "fetchOverviewStats"
        ).and.returnValue(of(data as any));
        component.ngOnInit();
        expect(statsSpy).toHaveBeenCalledTimes(1);
        expect(statsSpy).toHaveBeenCalledWith(data);
    });
});
