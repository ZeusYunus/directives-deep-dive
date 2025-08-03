import { Directive, effect, inject, input } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>();
  private authServices = inject(AuthService);

  constructor() {
    effect(() => {
      if (this.authServices.activePermission() === this.userType()) {
        console.log('Show elemnt');
      } else {
        console.log('Do not show elements');
      }
    });
   }

}
