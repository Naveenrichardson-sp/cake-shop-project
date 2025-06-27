import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { InnerLayoutComponent } from './inner-layout/inner-layout.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { ServiceComponent } from './service/service.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { ContactComponent } from './contact/contact.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BakingEnquiryComponent } from './baking-enquiry/baking-enquiry.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      // { path: 'contact', component: ContactComponent },
    ]
  },
  {
    path: '',
    component: InnerLayoutComponent,
    children: [
      { path: 'about', component: AboutUsComponent,  data: { title: 'About Us' } },
      { path: 'menu', component: MenuListComponent, data: { title: 'Menu & Pricing' }},
      { path: 'team', component: TeamMembersComponent, data: { title: 'Master Chefs' } },
      { path: 'service', component: ServiceComponent, data: { title: 'Services' } },
      { path: 'bakingclass', component: ClassDetailsComponent, data: { title: 'Baking Class' } },
      { path: 'contact', component: ContactComponent, data: { title: 'Contact Us' } },
      { path: 'order-now', component: OrderNowComponent, data: { title: 'Order Now' } },
      { path: 'dashboard', component: AdminDashboardComponent, data: { title: 'Dashboard' } },
      { path: 'bakingenquiry', component: BakingEnquiryComponent, data: { title: 'Baking Enquiry' } },
    ]
  },
  { path: '**', redirectTo: '' } // wildcard fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
