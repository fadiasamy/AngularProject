import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ProductsModule } from './products/products.module';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import { CartsModule } from './carts/carts.module';


=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
>>>>>>> 71c38d601e2902544b47e84122f437521337e811
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
<<<<<<< HEAD
    RouterModule,
    CartsModule


=======
    FormsModule,
    ReactiveFormsModule,
    AuthModule
>>>>>>> 71c38d601e2902544b47e84122f437521337e811
  ],
  providers: [
    provideHttpClient(withFetch())

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


