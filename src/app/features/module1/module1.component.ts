import { Component } from '@angular/core';
import { EuiPageModule } from '@eui/components/eui-page';

@Component({
    templateUrl: './module1.component.html',
    standalone: true,
    imports: [
        EuiPageModule,
    ],
})
export class Module1Component {}
