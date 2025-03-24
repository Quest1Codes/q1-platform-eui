/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, Injectable } from "@angular/core";
import {
    HttpClient,
    HttpEvent,
    HttpEventType,
    HttpResponse,
} from "@angular/common/http";
import { pipe, Subject } from "rxjs";
import { filter, map, takeUntil, tap } from "rxjs/operators";
import { EuiAppConfig } from "@eui/base";
import { CONFIG_TOKEN } from "@eui/core";

@Injectable({
    providedIn: "root",
})
export class UploadServiceService {
    httpClient = inject(HttpClient);
    private config: EuiAppConfig = inject(CONFIG_TOKEN);

    public sendData(data: any) {
        const moduleCoreApi = this.config.modules?.["core"];
        const url = `${moduleCoreApi?.["base"]}/fake-api`;
        return this.httpClient.post(url, this.toFormData(data), {
            reportProgress: true,
            observe: "events",
            withCredentials: true,
        });
    }

    public toFormData(formValue: any): FormData {
        const formData = new FormData();

        for (const key of Object.keys(formValue)) {
            formValue[key].forEach((value: any) => {
                if (value instanceof File) {
                    formData.append(key, value);
                }
            });
        }

        return formData;
    }

    public uploadProgress<T>(cb: (progress: number) => void) {
        return tap((event: HttpEvent<T>) => {
            if (event.type === HttpEventType.UploadProgress) {
                cb(Math.round((100 * event.loaded) / event.total));
            }
        });
    }

    public toResponseBody<T>() {
        return pipe(
            filter(
                (event: HttpEvent<T>) => event.type === HttpEventType.Response
            ),
            map((res: HttpResponse<T>) => res.body)
        );
    }
}
