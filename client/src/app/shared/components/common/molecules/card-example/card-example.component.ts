import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-card-example',
  standalone: true,
  imports: [],
  templateUrl: './card-example.component.html',
  styleUrl: './card-example.component.scss'
})
export class CardExampleComponent {
  public readonly title = input.required<string>();
  public readonly description = input.required<string>();

  public readonly sample = output<string>();

  public emitMessage(): void {
    this.sample.emit("Hello World!!");
  };
}
