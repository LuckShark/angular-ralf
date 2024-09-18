import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compontente13',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './compontente13.component.html',
  styleUrl: './compontente13.component.css'
})
export class Compontente13Component {

  //Variável para manipular formulário
  nome:string = '';
  cidade:string = '';

}
