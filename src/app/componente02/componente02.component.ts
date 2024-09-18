import { Component } from '@angular/core';

@Component({
  selector: 'app-componente02',
  standalone: true,
  imports: [],
  templateUrl: './componente02.component.html',
  styleUrl: './componente02.component.css'
})
export class Componente02Component {

  //Função para exibir uma mensagem
  //Aqui se usa direto o nome, não precisa do 'function' antes
  mensagem(){
    'Botão funcionando'
  }

  textim:string = 'Botão OK meus amigos'


}
