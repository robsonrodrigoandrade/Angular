import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css'],
})
export class AtividadeComponent implements OnInit {
  lista: String[] = [];
  model: FormGroup = new FormGroup({});

  constructor() {
    this.lista.push('osso');
    this.lista.push('ovo');
    this.lista.push('A grama é amarga');
  }

  addItem() {
    if (!this.lista.includes(this.model.value.task))
      this.lista.push(this.model.value.task);
  }

  validarPalindromo(text: String) {
    let original: String = text.replace(/[^0-9a-z]/gi, '').toUpperCase();
    let invertido: String = text
      .split('')
      .reverse()
      .join('')
      .replace(/[^0-9a-z]/gi, '')
      .toUpperCase();

    return original === invertido;
  }

  nrcaracteres(text: String) {
    let str = ' - Este palíndromo tem : ' + text.length + ' caracteres.';
    return str;
  }

  ngOnInit(): void {
    this.model = this.getNewModel();
  }

  getNewModel(): FormGroup {
    return new FormGroup({
      task: new FormControl(),
    });
  }
}
