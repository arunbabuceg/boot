import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  welcomeMessage: string | null = null;

  submitForm() {
    const nameInput = document.getElementById('name') as HTMLInputElement;

    if (nameInput.value.trim() === '') {
      alert('Please enter your name.');
      return;
    }

    this.welcomeMessage = `Welcome, ${nameInput.value}!`;
  }
}
