import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input() lengthy?: number;

  date: Date = new Date();

  object: { [key: number]: string } = { 2: 'foo', 1: 'bar' };

  title: string = 'chrome is the extension of future';
}
