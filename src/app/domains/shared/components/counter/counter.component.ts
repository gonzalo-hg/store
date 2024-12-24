import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  /**
   * Ver el ciclo de vida con esots input
   */
  @Input({required:true }) duration: number = 0;
  @Input({required:true }) message = '';//esto representa el motor de inferencia de ts y el tipado de angular

  constructor() {
    //NO ASYNC
    //before render
    console.log('Constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges){
    //before and during render
    console.log('ngOnchanges');
    console.log('-'.repeat(10));
    console.log(changes)
  }

}
