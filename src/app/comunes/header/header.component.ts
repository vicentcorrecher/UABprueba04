import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  textofinal:any;
  ngOnInit(): void {
  }

  cargar(texto:any) {
    console.log(texto);
    this.textofinal = texto;
  }

  buscar(){
    console.log(this.textofinal);
    this.route.navigate(['/Heroe/',this.textofinal]);
  }
  regresar(){
    this.route.navigate(['/Heroes'])
  }


}
