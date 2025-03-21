import { Component, Inject } from '@angular/core';
import { CONFIG_TOKEN, EuiAppConfig } from '@eui/core';
import { EuiPageModule } from '@eui/components/eui-page';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    templateUrl: './home.component.html',
    standalone: true,
    imports: [
        EuiPageModule,
        TranslateModule,
    ],
})
export class HomeComponent {
    constructor(@Inject(CONFIG_TOKEN) protected config: EuiAppConfig) {
        console.log(config);
    }
}
