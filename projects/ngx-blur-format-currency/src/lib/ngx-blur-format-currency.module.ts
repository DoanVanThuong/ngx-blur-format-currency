import { CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxBlurFormatCurrencyComponent } from './ngx-blur-format-currency.component';
import { AutoFormatCurrencyDirective } from './ngx-blur-format-currency.directive';



@NgModule({
  declarations: [NgxBlurFormatCurrencyComponent, AutoFormatCurrencyDirective],
  imports: [
  ],
  exports: [NgxBlurFormatCurrencyComponent],
  providers: [
    CurrencyPipe
  ],
})
export class NgxBlurFormatCurrencyModule { }
