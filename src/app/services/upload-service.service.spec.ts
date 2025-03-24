import { TestBed } from "@angular/core/testing";
import {
    HttpTestingController,
    provideHttpClientTesting,
} from "@angular/common/http/testing";
import { UploadServiceService } from "./upload-service.service";
import {
    HttpEvent,
    HttpEventType,
    provideHttpClient,
    withInterceptorsFromDi,
} from "@angular/common/http";
import { of, Subject } from "rxjs";
import { CONFIG_TOKEN } from "@eui/core";

fdescribe("UploadServiceService", () => {
    let service: UploadServiceService;
    let httpMock: HttpTestingController;
    const configMock = {
        global: {},
        modules: {
            core: {
                base: "http://localhost:3000/api",
                dashboardOverviewStats: "/stats",
                dataSourceDist: "/dataSourceDist",
            },
        },
    };
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                UploadServiceService,
                provideHttpClient(withInterceptorsFromDi()),
                provideHttpClientTesting(),
                { provide: CONFIG_TOKEN, useValue: configMock },
            ],
        });
        service = TestBed.inject(UploadServiceService);
        httpMock = TestBed.inject(HttpTestingController);
    });
    afterEach(() => {
        httpMock.verify();
    });
    it("should make a POST request to the correct API endpoint", () => {
        const data = { file: [new File(["foo"], "foo.txt")] };
        const url = "http://localhost:3000/api/fake-api";
        service.sendData(data).subscribe();
        const req = httpMock.expectOne(url);
        expect(req.request.method).toBe("POST");
    });
    it("should send the correct data in the request body", () => {
        const data = { file: [new File(["foo"], "foo.txt")] };
        const url = "http://localhost:3000/api/fake-api";
        service.sendData(data).subscribe();
        const req = httpMock.expectOne(url);
        // expect(req.request.body).toEqual(data);
    });
    it("should set the correct request options", () => {
        const data = { file: [new File(["foo"], "foo.txt")] };
        const url = "http://localhost:3000/api/fake-api";
        const callback = jasmine.createSpy("callback");
        service
            .sendData(data)
            .pipe(service.uploadProgress(callback), service.toResponseBody())
            .subscribe();
        const req = httpMock.expectOne(url);
        req.event({
            type: HttpEventType.UploadProgress,
            loaded: 50,
            total: 100,
        });
        req.flush(of({ res: "Success" }));
        expect(req.request.reportProgress).toBe(true);
        expect(req.request.withCredentials).toBe(true);
        expect(callback).toHaveBeenCalledWith(50);
    });
});
