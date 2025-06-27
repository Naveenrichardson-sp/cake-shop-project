import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter,map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pageTitle = '';

 constructor(private router: Router, private activatedRoute: ActivatedRoute) {
   this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute.firstChild;
        while (route?.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route?.data ?? [])
    ).subscribe(data => {
      this.pageTitle = data['title'] || '';
    });
 }

 isInnerPage(): boolean {
    const innerPages = ['/about', '/menu', '/team', '/service', '/bakingclass', '/contact', '/order-now', '/dashboard', '/bakingenquiry'];
    return innerPages.some(page => this.router.url.startsWith(page));
  }

}
