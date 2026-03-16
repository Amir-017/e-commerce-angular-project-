import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products:Product[]=[



      {
        id: 1,
        name: 'Laptop',
        price: 25000,
        description: 'High performance laptop suitable for work and study.',
        image: 'https://loremflickr.com/900/700/laptop',
        category: 'Electronics',
        quantity: 0
      },
      {
        id: 2,
        name: 'Smartphone',
        price: 15000,
        description: 'Modern smartphone with fast performance.',
        image: 'https://loremflickr.com/900/700/smartphone',
        category: 'Electronics',
        quantity: 10
      },
      {
        id: 3,
        name: 'Headphones',
        price: 2000,
        description: 'Wireless headphones with clear sound.',
        image: 'https://loremflickr.com/900/700/headphones',
        category: 'Accessories',
        quantity: 15
      },
      {
        id: 4,
        name: 'Keyboard',
        price: 1200,
        description: 'Mechanical keyboard for gaming and office work.',
        image: 'https://loremflickr.com/900/700/keyboard',
        category: 'Accessories',
        quantity: 8
      },
      {
        id: 5,
        name: 'Mouse',
        price: 800,
        description: 'Wireless computer mouse.',
        image: 'https://loremflickr.com/900/700/mouse',
        category: 'Accessories',
        quantity: 12
      },
      {
        id: 6,
        name: 'Monitor',
        price: 7000,
        description: 'Full HD monitor with vibrant colors.',
        image: 'https://loremflickr.com/900/700/monitor',
        category: 'Electronics',
        quantity: 6
      },
      {
        id: 7,
        name: 'Tablet',
        price: 11000,
        description: 'Portable tablet perfect for browsing.',
        image: 'https://loremflickr.com/900/700/tablet',
        category: 'Electronics',
        quantity: 7
      },
      {
        id: 8,
        name: 'Smart Watch',
        price: 3500,
        description: 'Smart watch with health tracking.',
        image: 'https://loremflickr.com/900/700/smartwatch',
        category: 'Wearables',
        quantity: 9
      },
      {
        id: 9,
        name: 'Camera',
        price: 18000,
        description: 'Digital camera with high resolution.',
        image: 'https://loremflickr.com/900/700/camera',
        category: 'Electronics',
        quantity: 4
      },
      {
        id: 10,
        name: 'Speaker',
        price: 2500,
        description: 'Portable bluetooth speaker.',
        image: 'https://loremflickr.com/900/700/speaker',
        category: 'Audio',
        quantity: 11
      }
    ];





  getproducts(){
    return this.products
  }
}
