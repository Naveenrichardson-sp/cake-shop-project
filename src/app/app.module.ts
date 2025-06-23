import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderOneComponent } from './header-one/header-one.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { ServiceComponent } from './service/service.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterOneComponent } from './footer-one/footer-one.component';
import { FooterTwoComponent } from './footer-two/footer-two.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { InnerLayoutComponent } from './inner-layout/inner-layout.component';
import { ContactComponent } from './contact/contact.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    HeaderOneComponent,
    HeaderTwoComponent,
    HomeBannerComponent,
    AboutUsComponent,
    MenuListComponent,
    ServiceComponent,
    TeamMembersComponent,
    ClassDetailsComponent,
    TestimonialsComponent,
    FooterOneComponent,
    FooterTwoComponent,
    MainLayoutComponent,
    InnerLayoutComponent,
    ContactComponent,
    OrderNowComponent,
    AdminDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
