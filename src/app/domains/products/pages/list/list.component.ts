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
    }
    ];
    this.products.set(initProducts);
  }

  fromChild(event: Event) {
    console.log('Este fue un click desde el parent', event);
    console.log(event);
  }

}
