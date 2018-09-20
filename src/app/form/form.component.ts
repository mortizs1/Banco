import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  /* en que etiqueta se va a cagar el componente*/
  selector: 'form',
  /*en que vista*/
  templateUrl: './form.component.html'
})

export class FormComponent{
  modalForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.modalForm = fb.group({
      modalFormNameEx: ['', Validators.required],
      modalFormEmailEx: ['', [Validators.email, Validators.required]],
      modalFormSubjectEx: ['', Validators.required],
      modalFormTextEx: ['', Validators.required]
    });
  }
}