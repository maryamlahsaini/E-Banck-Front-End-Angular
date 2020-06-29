import { Component, OnInit } from '@angular/core';
import {Client} from '../Client';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  public message:any;

  public client:Client=new Client();
  public host:String="http://localhost:8080";
  private add:any;


  constructor(private httpClient:HttpClient) {

  }

  ngOnInit() {
    this.httpClient.get(this.host+"/Admin/ListLibelles").subscribe(data=>{
      this.add=data["messageAgentAddClient"];
    },err=>{
      console.log(err);
    })
  }

  OnCreateClient(){
    this.httpClient.post(this.host+"/addclients",this.client,{responseType:'text'as 'json'}).subscribe(data=>{
      this.message=data;
    },err=>{
      console.log(err);
    })
  }

}
