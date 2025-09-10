import { Component, EventEmitter, Input, Output, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Consultor } from '../../models/consultor.model';

@Component({
  selector: 'app-consultor-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultor-card.component.html',
  styleUrls: ['./consultor-card.component.css']
})
export class ConsultorCardComponent {
  @Input({ required: true }) consultor!: Consultor;
  @Output() statusChange = new EventEmitter<number>();

  consultorSignal = signal<Consultor | null>(null);

  constructor() {
    effect(() => {
      if (this.consultor) {
        this.consultorSignal.set(this.consultor);
      }
    });
  }

  toggleStatus() {
    this.statusChange.emit(this.consultor.id);
  }
}
