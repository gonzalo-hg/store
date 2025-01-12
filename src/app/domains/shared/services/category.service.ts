import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '@shared/models/category.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  /**
     * Nos permite conectarnos a un servidor para obtener información de los productos.
     */
    private http = inject(HttpClient);

  

  constructor() { }

  getAll() {
    const url = new URL('https://api.escuelajs.co/api/v1/categories');
    return this.http.get<Category[]>(url.toString()).pipe(
      map(categories => categories.filter(category => category.name !== 'Testing Category' && 
        category.name !== 'Category 101'&& 
        category.name !== 'string'&& 
        category.name !== 'Nueva categoria'&& 
        category.name !== 'New Category' && 
        category.name !== 'category_B'&& 
        category.id !== 2))
    );
    }

}
