import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-welcome',
  template: '<div class="mt-4 text-green-600 font-bold">{{ message }}</div>',
})
export class WelcomeComponent {
  @Input() message: string | null = null;
}
