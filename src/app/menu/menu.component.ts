import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedIn = false;
  private roles: string[];
  private authority: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    console.log('menu ->' + this.isLoggedIn);
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn=true;
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_CLIENT') {
          this.authority = 'client';
          return false;
        }
        this.authority = 'agent';
        return true;
      });
    }
  }
  logout(){
    this.tokenStorage.signOut();
  }
}

