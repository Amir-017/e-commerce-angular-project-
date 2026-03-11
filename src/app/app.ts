import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { HomeProducts } from './components/home-products/home-products';
import { Footer } from './components/footer/footer';
import { Slider } from './components/slider/slider';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,HomeProducts,Footer,Slider],
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {
  protected readonly title = signal('e-commerce');
}
