import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css'],
})
export class AtividadeComponent implements OnInit {
  tasks: String[] = [];
  model: FormGroup = new FormGroup({});

  constructor() {
    this.tasks.push('osso');
    this.tasks.push('ovo');
    this.tasks.push('A grama é amarga');
    this.tasks.push(
      'Me vê se a panela da moça é de aço, Madalena Paes, e vem.'
    );
  }

  addTask() {
    this.tasks.push(this.model.value.task);
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
