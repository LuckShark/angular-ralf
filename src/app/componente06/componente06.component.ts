import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente06',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente06.component.html',
  styleUrl: './componente06.component.css'
})
export class Componente06Component {

  //Variável contendo uma linguagem
  linguagem:string = 'JS';
  linguagem2:string = 'JS'
  //Atenção, é case sensitive

  alteraLinguagem(){
    if (this.linguagem === 'JS'){
      this.linguagem = 'HTML'
      this.linguagem2 = 'HTML'
    } else if (this.linguagem === 'HTML'){
      this.linguagem = 'CSS'
      this.linguagem2 = 'CSS'
    } else {
      this.linguagem = 'JS'
      this.linguagem2 = 'JS'
    }
  }
}
