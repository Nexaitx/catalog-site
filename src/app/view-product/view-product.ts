import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-product',
  imports: [CommonModule],
  templateUrl: './view-product.html',
  styleUrl: './view-product.scss',
})
export class ViewProduct {
products = [
  {
    id: 1,
    name: 'Threaded Rod M10',
    category: 'threaded',
    price: 120,
    image: 'assets/products/thread.png'
  },
  {
    id: 2,
    name: 'Threaded Rod M12',
    category: 'threaded',
    price: 150,
    image: 'assets/products/thread.png'
  },
  {
    id: 3,
    name: 'Stud Bolt SS',
    category: 'stud',
    price: 200,
    image: 'assets/products/stud.png'
  },
  {
    id: 4,
    name: 'Hex Nut Zinc',
    category: 'hex',
    price: 40,
    image: 'assets/products/hex.png'
  },
  {
    id: 5,
    name: 'Washer Heavy Duty',
    category: 'washer',
    price: 20,
    image: 'assets/products/washer.png'
  },
  {
    id: 6,
    name: 'Anchor Bolt',
    category: 'anchor',
    price: 300,
    image: 'assets/products/anchor.png'
  }
];
filteredProducts: any[] = [];

ngOnInit() {
  this.filteredProducts = this.products; // show all initially
}

filterProducts(category: any) {
  this.filteredProducts = this.products.filter(
    product => product.category === category
  );
  if(category === 'all') {
    this.filteredProducts = this.products;
  }
}
}
