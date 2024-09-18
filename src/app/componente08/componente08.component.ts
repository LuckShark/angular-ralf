import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente08',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente08.component.html',
  styleUrl: './componente08.component.css'
})
export class Componente08Component {

  //Variável lógica
  condicao:boolean = false;

  //Botão muda true-false
  alteraBoolean(){
    if(this.condicao===true){
      this.condicao=false;
    } else {
      this.condicao=true;
    }
  }

  //Lista de aprovados e reprovados
  lista:string[] = ['Aprovado', 'Aprovado', 'Reprovado'];

  //Botão muda string
  alteraString(){
    if(this.lista.join() === ['Aprovado', 'Aprovado', 'Reprovado'].join()){
      this.lista = ['Reprovado', 'Reprovado', 'Aprovado']
    } else {
      this.lista = ['Aprovado', 'Aprovado', 'Reprovado']
    }
  }


}
