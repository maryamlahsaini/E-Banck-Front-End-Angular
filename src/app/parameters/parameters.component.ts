import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Parameter} from '../Parameter';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {
  Parameters: Parameter=new Parameter();
  param:any
  public message: any;
  public host:String="http://localhost:8080";

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.host+"/Admin/ListParameters").subscribe(data=>{
      this.param=data;
      this.Parameters.id=data["id"];
      console.log(data["id"]);
      this.Parameters.dtd=data["dtd"];
      console.log(data["dtD"]);
      this.Parameters.etd=data["etd"];
      console.log(data["etD"]);
    },err=>{
      console.log(err);
    })
  }

  onEditParameters() {
    console.log(this.Parameters.id);
    console.log(this.Parameters.dtd);
    console.log(this.Parameters.etd);
    this.httpClient.post(this.host+"/Admin/SetParameters",this.Parameters,{responseType:'text'as 'json'}).subscribe(data=>{
      this.message=data;
    },err=>{
      console.log(err);
    })

  }
  Onreload() {
    window.location.reload();
  }

}

