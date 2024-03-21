import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { provideHttpClient, withFetch } from '@angular/common/http';
import { ProductsModule } from './products/products.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,

  ],
  // providers: [
  //   provideHttpClient(withFetch())

  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }


