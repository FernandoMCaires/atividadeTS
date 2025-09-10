import { Component } from '@angular/core';
import { ConsultorListaComponent } from './components/consultor-lista/consultor-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConsultorListaComponent],
  template: `<app-consultor-lista></app-consultor-lista>`,
})
export class AppComponent { }
