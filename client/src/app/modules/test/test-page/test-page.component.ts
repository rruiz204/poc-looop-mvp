import { Component } from '@angular/core';
import { CardExampleComponent } from '../../../shared/components/common/molecules/card-example/card-example.component';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [CardExampleComponent],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss'
})
export class TestPageComponent {
  public value: number = 100;
}
