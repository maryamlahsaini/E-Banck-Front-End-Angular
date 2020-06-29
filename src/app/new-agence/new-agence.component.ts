import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Agent} from '../Agent';
import {Agence} from '../Agence';

@Component({
  selector: 'app-new-agence',
  templateUrl: './new-agence.component.html',
  styleUrls: ['./new-agence.component.css']
})
export class NewAgenceComponent implements OnInit {
  public message:any;
  public agence:Agence=new Agence();
  public host:String="http://localhost:8080";
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {


  }
  OnCreateAgence(){
    this.httpClient.post(this.host+"/Admin/addAgence/1/",this.agence,{responseType:'text'as 'json'}).subscribe(data=>{
      this.message=data;
    },err=>{
      console.log(err);
    })
  }
}
