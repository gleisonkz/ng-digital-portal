import { AuthService } from 'src/app/services/auth.service';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
    <h1>Bem vindo ao Portal Digital</h1>

    <main>
      <a
        class="rsi"
        *ngIf="hasRole('rsi')"
        routerLink="rsi/app"
        routerLinkActive="router-link-active"
        >Rsi</a
      >
      <a
        class="ifd"
        *ngIf="hasRole('ifd')"
        routerLink="ifd/app"
        routerLinkActive="router-link-active"
        >Ifd</a
      >
    </main>
    <button (click)="logout()">Sair</button>
  `,
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  constructor(private authService: AuthService, private router: Router) {}

  hasRole(role: string) {
    return this.authService.userRoles.includes(role);
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/sign-in');
  }
}
