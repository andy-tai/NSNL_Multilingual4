import {Component} from "@angular/core";

import * as Platform from "platform";
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang("nl");
        this.translate.use(Platform.device.language);
    }
}
