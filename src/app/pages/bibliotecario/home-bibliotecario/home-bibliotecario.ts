import { Component } from '@angular/core';
import { Sidebar } from "../../../component/sidebar/sidebar";
import { Header } from "../../../component/header/header";

@Component({
  selector: 'app-home-bibliotecario',
  imports: [Sidebar, Header],
  templateUrl: './home-bibliotecario.html',
  styleUrl: './home-bibliotecario.css',
})
export class HomeBibliotecario {

}
