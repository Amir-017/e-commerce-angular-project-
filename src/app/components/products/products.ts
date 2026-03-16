import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  products = [
    {
      id: 1,
      name: "smart watch",
      price: 120,
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80",
      inStock: true
    },
    {
      id: 2,
      name: "classic watch",
      price: 90,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
      inStock: false
    },
    {
      id: 3,
      name: "sport watch",
      price: 150,
      image: "https://images.unsplash.com/photo-1617161034531-cb9a7b0b0c8f?auto=format&fit=crop&w=400&q=80",
      inStock: true
    }
  ]
}
