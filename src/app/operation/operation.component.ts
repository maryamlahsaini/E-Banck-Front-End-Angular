import { Component, OnInit } from '@angular/core';
import {Compte} from '../Compte';
import {HttpClient} from '@angular/common/http';
import {Agent} from '../Agent';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {
  private Comptes:any;
  private comptes:any;
  private selectedagent:number;
  private selectedcompte:number;
  private selectedagent2:number;
  private selectedcompte2:number;
  private agentusername:String;
  private Agents:any;
  private Agent:Agent =new Agent();
  private Compte:Compte = new Compte();
  private montant:number;
  private montant2:number;
  private messversement:any;
  private messretrait:any;

  private dhtoeuro:number;
  private eurotodh:number;
  private resultETD:any;
  private resultDTE:any;
  private dolartodh:number;
  private dhtodolar:number;
  private resultDtDO:any;
  private resultDOtD:any;
  public host:String="http://localhost:8080";
  c: any;
  a: any;
  private ret:any;
  private vir:any;
  public Agentt :any;
  private agentcode:number;

  constructor( private httpClient:HttpClient , private tokennservice:TokenStorageService) { }

  ngOnInit() {
    this.httpClient.get(this.host+"/Admin/ListLibelles").subscribe(data=>{
      this.ret=data["messageClientRetrait"];
      this.vir=data["messageClientVirsement"];
    },err=>{
      console.log(err);
    })
    this.agentusername= this.tokennservice.getUsername();
    this.httpClient.get(this.host+"/Admin/agents/"+this.agentusername).subscribe(data=>{
      this.Agentt=data;
      this.agentcode=data["code"];
    },err=>{
      console.log(err);
    })
    this.httpClient.get(this.host+"/affichercomptes")
      .subscribe(data=>{
        this.Comptes=data;
      },err=>{
        console.log(err);
      } )
    this.httpClient.get(this.host+"/agents")
      .subscribe(data=>{
        this.Agents=data;
      },err=>{
        console.log(err);
      } )
  }

  versement(code:number , montant:number ){
    this.httpClient.get(this.host+"/affichercomptes")
      .subscribe(data=>{
        this.Comptes=data;
        this.Compte.code=data["code"]
      },err=>{
        console.log(err);
      } )
    this.httpClient.get(this.host+"/agents")
      .subscribe(data=>{
        this.Agents=data;
        this.Agent.code=data["code"]
      },err=>{
        console.log(err);
      } )
    // @ts-ignore
    this.httpClient.put(this.host+"/versement/"+code +"/"+montant+"/"+this.agentcode)
      .subscribe(data=>{
        this.messversement=data;
      },err=>{
        console.log(err);
      } )


  }
  retrait(code2:number , montant2:number ){
    this.httpClient.get(this.host+"/affichercomptes")
      .subscribe(data=>{
        this.Comptes=data;
        this.Compte.code=data["code"]
      },err=>{
        console.log(err);
      } )
    this.httpClient.get(this.host+"/agents")
      .subscribe(data=>{
        this.Agents=data;
        this.Agent.code=data["code"]
      },err=>{
        console.log(err);
      } )
    // @ts-ignore
    this.httpClient.put(this.host+"/retrait/"+code2 +"/"+montant2+"/"+this.agentcode)
      .subscribe(data=>{
        this.messretrait=data;
      },err=>{
        console.log(err);
      } )


  }
  Onreload() {
    window.location.reload();
  }

  onEuroToDh(){
    // @ts-ignore
    this.httpClient.put(this.host+"/convertEuroToDh/"+this.eurotodh)
      .subscribe(data=>{
        this.resultETD=data;

      },err=>{
        console.log(err);
      } )
  }
  onDhToEuro(){
    // @ts-ignore
    this.httpClient.put(this.host+"/convertdhToEuro/"+this.dhtoeuro)
      .subscribe(data=>{
        this.resultDTE=data;

      },err=>{
        console.log(err);
      } )
  }
  onDolarToDh(){
    // @ts-ignore
    this.httpClient.put(this.host+"/convertDolarToDh/"+this.dolartodh)
      .subscribe(data=>{
        this.resultDOtD=data;

      },err=>{
        console.log(err);
      } )
  }
  onDhToDolar(){
    // @ts-ignore
    this.httpClient.put(this.host+"/convertDhToDolar/"+this.dhtodolar)
      .subscribe(data=>{
        this.resultDtDO=data;

      },err=>{
        console.log(err);
      } )
  }

}
