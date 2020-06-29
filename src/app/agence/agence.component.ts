import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Agence} from '../Agence';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {
  public Agences:any;
  public Agence:any;
  public agence: Agence= new Agence();
  public messagedelete:any;
  public message:any;
  public host:String="http://localhost:8080";
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.host+"/Admin/getAgences").subscribe(data=>{
      this.Agences
        =data;
      /* this.Agence=data["agence"]["name"];*/
    },err=>{
      console.log(err);
    })
  }
  Onreload() {
    window.location.reload();
  }

  onGetAgence(){
    this.httpClient.get(this.host+"/Admin/getAgences").subscribe(data=>{
      this.Agences
        =data;
      /* this.Agence=data["agence"]["name"];*/
    },err=>{
      console.log(err);
    })
  }
  onEditAgence(code:number) {
    this.httpClient.get(this.host+"/Admin/FindAgence/"+code).subscribe(data=>{
      this.Agence=data;
      this.agence.code=data["code"];
      this.agence.name=data["name"];
      this.agence.admin.nom=data["admin"]["nom"]
    },err=>{
      console.log(err);
    })


  }

  onEditAgence2() {
    this.httpClient.post(this.host+"/Admin/updateAgence",this.agence ,{responseType:'text'as 'json'}).subscribe(data=>{
      this.message=data;
    },err=>{
      console.log(err);
    })
  }

  onDeleteAgence(code: number) {
    this.httpClient.post(this.host+"/Admin/deleteAgence/"+code,{responseType:'text'as 'json'}).subscribe(data=>{
      this.messagedelete=data;
    },err=>{
      console.log(err);
    })
  }
}
