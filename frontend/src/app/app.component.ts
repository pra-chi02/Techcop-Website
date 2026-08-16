import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsappButtonComponent, BackToTopComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private meta: Meta) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        const description = data['description'] as string | undefined;
        if (description) {
          this.meta.updateTag({ name: 'description', content: description });
        }
      });
  }
}
