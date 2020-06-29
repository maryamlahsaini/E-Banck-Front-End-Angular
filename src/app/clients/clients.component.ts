import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../Client';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  private Comptes:any;
  private Compte:any;
  private compte:any;
  Comptesclient:any;
  private montant:number;
  private selectedcompteVir3:number;
  private selectedcompteVir31:number;
  private messvirement:any;
  private codeclient:number;
  username:string;
  ver:any;
  Comptesclient1:any;
  public host:String="http://localhost:8080";
  constructor(private  httpClient:HttpClient , private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.httpClient.get(this.host+"/Admin/ListLibelles").subscribe(data=>{
      this.ver=data["messageClientVirement"];
    },err=>{
      console.log(err);
    })
    this.httpClient.get(this.host+"/affichercomptes")
      .subscribe(data=>{
        this.Comptes=data;
      },err=>{
        console.log(err);
      } )
    this.username=this.tokenStorage.getUsername();

    this.httpClient.get(this.host+"/Operateur/recharge/compte/"+this.username).subscribe(data=>{
      this.Comptesclient1=data;
    },err=>{
      console.log(err);
    })

  }


  virement(codevir1:number , codevir2:number , solde:number){
    this.httpClient.get(this.host+"/affichercomptes")
      .subscribe(data=>{
        this.Comptes=data;
        //this.Compte.code=data["code"]
      },err=>{
        console.log(err);
      } )

    // @ts-ignore
    this.httpClient.put(this.host+"/virement/"+codevir1+"/"+codevir2+"/"+solde)
      .subscribe(data=>{
        this.messvirement=data;
      },err=>{
        console.log(err);
      } )


  }
  onvalider(){

    this.username=this.tokenStorage.getUsername();

    this.httpClient.get(this.host+"/Operateur/recharge/compte/"+this.username).subscribe(data=>{
      this.Comptesclient=data;
    },err=>{
      console.log(err);
    })


  }
  Onreload() {
    window.location.reload();
  }



}
