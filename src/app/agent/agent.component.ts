import { Component, OnInit } from '@angular/core';
import {Agence} from '../Agence';
import {Agent} from '../Agent';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  public Agents:any;
  public Agent:any;
  public Agence:any;
  public agence:Agence;
  public agent:Agent=new Agent();
  public message:any
  private agenctest:number;
  public host:String="http://localhost:8080";
  private messagedelete: any;
  private edit:any;
  private delete:any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.host+"/Admin/ListLibelles").subscribe(data=>{
      this.edit=data["agenceTitre"];
      this.delete=data["messageAgentBloqueClient"];
    },err=>{
      console.log(err);
    })
    this.httpClient.get(this.host+"/Admin/ListAgents").subscribe(data=>{
      this.Agents=data;
      /* this.Agence=data["agence"]["name"];*/
    },err=>{
      console.log(err);
    })
  }

  onGetAgents(){
    this.httpClient.get(this.host+"/Admin/ListAgents").subscribe(data=>{
      this.Agents=data;
      /* this.Agence=data["agence"]["name"];*/
    },err=>{
      console.log(err);
    })
  }

  onEditAgent(code:number) {
    this.httpClient.get(this.host+"/Admin/FindAgent/"+code).subscribe(data=>{
      this.Agent=data;
      this.agent.code=data["code"];
      this.agent.username=data["username"];
      this.agent.prenom=data["prenom"];
      this.agent.email=data["email"];
      this.agent.password=data["password"];
      this.agent.nom=data["nom"];
      this.agenctest=parseInt(data["agence"]["code"]);
    },err=>{
      console.log(err);
    })
    this.httpClient.get(this.host+"/Admin/getAgences/").subscribe(data=>{
      this.Agence=data;
    },err=>{
      console.log(err);
    })

  }

  onEditAgent2() {
    this.httpClient.post(this.host+"/Admin/updateAgent/"+this.agenctest,this.agent,{responseType:'text'as 'json'}).subscribe(data=>{
      this.message=data;
    },err=>{
      console.log(err);
    })
  }

  onDeleteAgent(code: number) {
    this.httpClient.post(this.host+"/Admin/deleteAgent/"+code,{responseType:'text'as 'json'}).subscribe(data=>{
      this.messagedelete=data;
    },err=>{
      console.log(err);
    })
  }
  Onreload() {
    window.location.reload();
  }

}

