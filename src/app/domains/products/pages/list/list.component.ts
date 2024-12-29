import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from './../../../shared/models/product.model';
import { HeaderComponent } from './../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([])
  cart = signal<Product[]>([])

  constructor() {
    const initProducts: Product[] = [{
      id: Date.now(),
      title: 'Producto 1',
      price: 1000,
      image: 'https://picsum.photos/200/300?r=21',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 2',
      price: 1002,
      image: 'https://picsum.photos/200/300?r=22',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 3',
      price: 1003,
      image: 'https://picsum.photos/200/300?r=23',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 4',
      price: 1000,
      image: 'https://picsum.photos/200/300?r=24',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 5',
      price: 1002,
      image: 'https://picsum.photos/200/300?r=25',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Producto 6',
      price: 1003,
      image: 'https://picsum.photos/200/300?r=26',
      creationAt: new Date().toISOString()
    }
    ];
    this.products.set(initProducts);
  }

  /**
   * Handles events emitted from a child component.
   * 
   * @param event - The event object emitted from the child component.
   */
  addToCart(product: Product) {
    this.cart.update(prevState => [...prevState, product]);
  }

}
