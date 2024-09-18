import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente14',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './componente14.component.html',
  styleUrl: './componente14.component.css'
})
export class Componente14Component {

  formulario = new FormGroup({
    //Criando atributos (caracteristicas) do objeto
    nome : new FormControl(''),
    cidade : new FormControl('')
  });


}
