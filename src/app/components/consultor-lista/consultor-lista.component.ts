import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Consultor } from '../../models/consultor.model';
import { ConsultorCardComponent } from '../consultor-card/consultor-card.component';

@Component({
  selector: 'app-consultor-lista',
  standalone: true,
  imports: [CommonModule, ConsultorCardComponent],
  templateUrl: './consultor-lista.component.html',
  styleUrls: ['./consultor-lista.component.css']
})
export class ConsultorListaComponent {
  private _consultores = signal<Consultor[]>([
    { id: 1, nome: 'Ana Costa', especialidade: 'TI', ativo: true },
    { id: 2, nome: 'Bruno Silva', especialidade: 'RH', ativo: false },
    { id: 3, nome: 'Carla Mendes', especialidade: 'Financeiro', ativo: true },
    { id: 4, nome: 'Diego Rocha', especialidade: 'Jurídico', ativo: false },
  ]);

  consultores = computed(() => this._consultores());

  totalAtivos = computed(() =>
    this._consultores().filter(c => c.ativo).length
  );

  totalInativos = computed(() =>
    this._consultores().filter(c => !c.ativo).length
  );

  onStatusToggle(id: number) {
    this._consultores.update(consultores =>
      consultores.map(c =>
        c.id === id ? { ...c, ativo: !c.ativo } : c
      )
    );
  }
}
