import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isClosed = false;
  isOpen = false;
  role: string = '';

  constructor(
    private service: ApiService,
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.auth.checkRole().subscribe(role => {
      this.role = role;
     console.log(role)
    });
  }

  toggleNav() {
    this.isClosed = !this.isClosed;
    if (window.innerWidth <= 768) {
      this.isOpen = !this.isOpen;
    }
  }

  logout() {
    this.service.logout().subscribe({
      next: data => {
        this.router.navigate(['/login']);
      }
    });
  }
}
