import { Component } from '@angular/core';

@Component({
  selector: 'app-componente12',
  standalone: true,
  imports: [],
  templateUrl: './componente12.component.html',
  styleUrl: './componente12.component.css'
})
export class Componente12Component {

  //Variável: linguagem
  linguagem:string = 'HTML'

  //Ação troca de linguagem
  trocaLinguagem(){
    if(this.linguagem=='HTML'){
      this.linguagem = 'CSS';
    } else if (this.linguagem=='CSS'){
      this.linguagem='JS';
    } else if (this.linguagem=='JS'){
      this.linguagem='Nenhum';
    } else {
      this.linguagem='HTML';
    }
  }
}
