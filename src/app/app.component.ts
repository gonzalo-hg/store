import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet/>'//Se usa solo si se tiene un template pequeño
})
export class AppComponent {
  title = 'store';
}
