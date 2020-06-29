import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../auth/token-storage.service";
import {HttpClient} from "@angular/common/http";
import {Compte} from "../Compte";

@Component({
  selector: 'app-operateur',
  templateUrl: './operateur.component.html',
  styleUrls: ['./operateur.component.css']
})
export class OperateurComponent implements OnInit {
  Compte: any;
  numero: number;
  montant: number;
  username: String;
  public host:String="http://localhost:8080";
  operateur: any;
  Comptetest: number;
  Test: any;
  private operateurmessg:any;

  constructor(private httpClient:HttpClient,private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.httpClient.get(this.host+"/Admin/ListLibelles").subscribe(data=>{
      this.operateurmessg=data["messageAgentdeBloqueClient"];
    },err=>{
      console.log(err);
    })
    this.username=this.tokenStorage.getUsername();

    this.httpClient.get(this.host+"/Operateur/recharge/compte/"+this.username).subscribe(data=>{
      this.Compte=data;
    },err=>{
      console.log(err);
    })

  }

  onRecharge() {
    console.log(this.Compte);
    this.httpClient.post(this.host+"/Operateur/recharge/"+this.numero+"/"+this.operateur+"/"+this.Comptetest+"/"+this.montant,{responseType:'text'as 'json'}).subscribe(data=>{
      this.Test=data;
    },err=>{
      console.log(err);
    })

  }
  Onreload() {
    window.location.reload();
  }
}
