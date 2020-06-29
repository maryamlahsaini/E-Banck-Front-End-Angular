import { Component, OnInit } from '@angular/core';
import {Libelle} from '../Libelle';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-libelles',
  templateUrl: './libelles.component.html',
  styleUrls: ['./libelles.component.css']
})
export class LibellesComponent implements OnInit {
  public Libelles:Libelle=new Libelle();
  public message: any;
  public host:String="http://localhost:8080";

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.host+"/Admin/ListLibelles").subscribe(data=>{
      this.Libelles.id=data["id"];
      this.Libelles.messageClientVirement=data["messageClientVirement"];
      this.Libelles.messageClientVirsement=data["messageClientVirsement"];
      this.Libelles.messageClientRetrait=data["messageClientRetrait"];
      this.Libelles.messageAgentAddClient=data["messageAgentAddClient"];
      this.Libelles.messageAgentDeleteClient=data["messageAgentDeleteClient"];
      this.Libelles.messageAgentUpdateClient=data["messageAgentUpdateClient"];
      this.Libelles.messageAgentBloqueClient=data["messageAgentBloqueClient"];
      this.Libelles.messageAgentdeBloqueClient=data["messageAgentdeBloqueClient"];
      this.Libelles.agenceTitre=data["agenceTitre"];
      this.Libelles.banqueTitre=data["banqueTitre"];
      /* this.Agence=data["agence"]["name"];*/
    },err=>{
      console.log(err);
    })
  }
  onEditLibelle() {
    this.httpClient.post(this.host+"/Admin/SetLibelles",this.Libelles,{responseType:'text'as 'json'}).subscribe(data=>{
      this.message=data;
    },err=>{
      console.log(err);
    })
  }
  Onreload() {
    window.location.reload();
  }


}
