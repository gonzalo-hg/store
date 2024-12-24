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
    //corre una vez
    console.log('Constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges){
    //before and during render
    console.log('ngOnchanges');
    console.log('-'.repeat(10));
    console.log(changes)
  }

  ngOnInit(){
    //after render
    //corre una vez
    //perfecto para cosas asincronas async, then, subs y observables
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
  }

  
  /**
   * Lifecycle hook that is called after a component's view has been fully initialized.
   * This method is called once after the first `ngAfterContentChecked` call.
   * 
   * Here, it logs a message to the console and prints a separator line.
   */
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
    console.log('-'.repeat(20));
  }

  ngOnDestroy(){
    console.log('ngOnDrestroy');
    console.log('-'.repeat(20));
  }


}
