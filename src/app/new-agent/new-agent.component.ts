import { Component, OnInit } from '@angular/core';
import {Agent} from '../Agent';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-new-agent',
  templateUrl: './new-agent.component.html',
  styleUrls: ['./new-agent.component.css']
})
export class NewAgentComponent implements OnInit {
  public message:any;
  private agenctest:number;
  public Agence:any;
  public agent:Agent=new Agent();
  public host:String="http://localhost:8080";
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.host+"/Admin/getAgences/").subscribe(data=>{
      this.Agence=data;
    },err=>{
      console.log(err);
    })
  }
  OnCreateAgent(){
    this.httpClient.post(this.host+"/Admin/addAgent/"+this.agenctest,this.agent,{responseType:'text'as 'json'}).subscribe(data=>{
      this.message=data;
    },err=>{
      console.log(err);
    })
  }

}
