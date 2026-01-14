import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../service/auth';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
  imports: [RouterLink, RouterLinkActive],
})
export class Sidebar {
  bibliotecario: Usuario | null = null

  constructor(private router: Router, private auth: AuthService){
      this.bibliotecario = this.auth.getUser();
  }

  logout(): void {
      this.auth.logout();
      this.router.navigate(['/'])
  }
}
