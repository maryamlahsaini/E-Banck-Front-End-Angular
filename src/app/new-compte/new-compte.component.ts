import { Component, OnInit } from '@angular/core';
import {Compte} from '../Compte';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from "../auth/token-storage.service";



@Component({
  selector: 'app-new-compte',
  templateUrl: './new-compte.component.html',
  styleUrls: ['./new-compte.component.css']
})
export class NewCompteComponent implements OnInit {

  public message:any;
  private username:string;
  private agentcode:number;
  public Client:any;
  public Compte:any;
  public Agent :any;

  private clientcode:number;
  public compte:Compte=new Compte();
  public host:String="http://localhost:8080";


  constructor(private httpClient:HttpClient,private tokenStorage:TokenStorageService ) { }

  ngOnInit() {

    this.username=this.tokenStorage.getUsername();

    this.httpClient.get(this.host+"/Admin/agents/"+this.username).subscribe(data=>{
      this.Agent=data;
      this.agentcode=data["code"];
    },err=>{
      console.log(err);
    })

    this.httpClient.get(this.host+"/afficherclients").subscribe(data=>{
      this.Client=data;
      this.clientcode=data["code"];
    },err=>{
      console.log(err);
    })



  }


  OnCreateCompte(){
    console.log(this.agentcode)
    console.log(this.clientcode)
    console.log(this.compte.code)
    //parseInt(this.compte.code);
    this.httpClient.post(this.host+"/addcompte/"+this.agentcode+"/"+this.clientcode,this.compte,{responseType:'text'as 'json'}).subscribe(data=>{
      this.message=data;
    },err=>{
      console.log(err);
    })
  }


}
