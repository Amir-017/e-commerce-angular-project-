import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service';
import { SplitDescriptionPipe } from '../../pipes/split-description-pipe';
import { ReuseableCard } from '../reuseable-card/reuseable-card';

@Component({
  selector: 'app-products',
  imports: [CommonModule,SplitDescriptionPipe,ReuseableCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit ,AfterViewInit {
products:Product[] = []
constructor(private productService:ProductService){}

ngOnInit(): void {
  this.products = this.productService.getproducts()
}
ngAfterViewInit(): void {
  console.log('ngAfterViewInit');


}
ngOnDestroy(): void {
  console.log('ngOnDestroy');

}
}

