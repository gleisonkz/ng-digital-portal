import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  userRoles: string[] = [];

  login(email: string, password: string): boolean {
    const isRsiUser = email === 'rsi' && password === 'rsi';
    const isIfdUser = email === 'ifd' && password === 'ifd';
    const isAdmin = email === 'admin' && password === 'admin';

    if (isRsiUser) {
      this.isLoggedIn = true;
      this.userRoles = ['rsi'];
      localStorage.setItem('userRoles', JSON.stringify(this.userRoles));
      return true;
    }

    if (isIfdUser) {
      this.isLoggedIn = true;
      this.userRoles = ['ifd'];
      localStorage.setItem('userRoles', JSON.stringify(this.userRoles));
      return true;
    }

    if (isAdmin) {
      this.isLoggedIn = true;
      this.userRoles = ['ifd', 'rsi'];
      localStorage.setItem('userRoles', JSON.stringify(this.userRoles));
      return true;
    }

    this.isLoggedIn = false;
    return false;
  }

  logout() {
    this.isLoggedIn = false;
    this.userRoles = [];
    localStorage.removeItem('userRoles');
  }
}
