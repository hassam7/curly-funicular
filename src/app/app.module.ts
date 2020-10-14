import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import { CoreModule } from './core-module/core-module';
import { LayoutModule } from './layout-module/layout.module';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SharedModule } from './shared-module/shared.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    LayoutModule,
    SharedModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, NzModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
