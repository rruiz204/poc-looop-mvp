import { Component, signal, effect } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-home-page',
  imports: [FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  public message = signal<string>("");

  private loggingMessageEffect = effect(() => {
    console.log(`Message: ${this.message()}`);
  });
};
