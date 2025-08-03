import { Directive, effect, inject, input } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  private authServices = inject(AuthService);

  constructor() {
    effect(() => {
      if (this.authServices.activePermission() === this.userType()) {
        console.log('Show element');
      } else {
        console.log('Do not show elements');
      }
    });
  }

}
