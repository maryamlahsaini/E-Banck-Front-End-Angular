import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../auth/token-storage.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn = false;
  private roles: string[];
  private authority: string;
  public host:String="http://localhost:8080";
  Parameters:any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private tokenStorage: TokenStorageService,private httpClient:HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get(this.host+"/Admin/ListLibelles").subscribe(data=>{
      this.Parameters=data["banqueTitre"];
    },err=>{
      console.log(err);
    })

    console.log('menu ->' + this.isLoggedIn);
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
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
}
