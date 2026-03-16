import { Component } from '@angular/core';

@Component({
  selector: 'app-reuseable-card',
  imports: [],
  templateUrl: './reuseable-card.html',
  styleUrls: ['./reuseable-card.css'],
  styles: [`
    .prod-card { border: 1px solid #ccc; border-radius: 8px; padding: 8px; }
    .prod-media { position: relative; }
    .prod-stock-badge { position: absolute; top: 8px; right: 8px; }
  `]
})
export class ReuseableCard {}
