import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../Client';
import {Compte} from '../Compte';


@Component({
  selector: 'app-client-comptes',
  templateUrl: './client-comptes.component.html',
  styleUrls: ['./client-comptes.component.css']
})
export class ClientComptesComponent implements OnInit {
  public comptes:any;
  private Client:any;
  private Compte:any;
  private  client:Client= new Client();
  private compte:Compte =new Compte();
  private  messagedelete:any;
  private message:any;
  private edit:any;
  private delete:any;
  public Clients:any;
  public host:String="http://localhost:8080";
  constructor(private  httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.host+"/Admin/ListLibelles").subscribe(data=>{
      this.edit=data["messageAgentUpdateClient"];
      this.delete=data["messageAgentDeleteClient"];
    },err=>{
      console.log(err);
    })
    // @ts-ignore
    // @ts-ignore
    this.httpClient.get(this.host+"/affichercomptes")
      .subscribe(data=>{
        this.comptes=data;
      },err=>{
        console.log(err);
      } )
    this.httpClient.get(this.host+"/afficherclients")
      .subscribe(data=>{
        this.Clients=data;
      },err=>{
        console.log(err);
      } )

  }
  Onreload() {
    window.location.reload();
  }

  onGetComptes() {
    // @ts-ignore
    this.httpClient.get(this.host+"/affichercomptes")
      .subscribe(data=>{
        this.comptes=data;
      },err=>{
        console.log(err);
      } )
  }
  onEditClient(code:number) {
    this.httpClient.get(this.host+"/client/"+code).subscribe(data=>{
      this.Client=data;
      this.client.code=data["code"];
      this.client.username=data["username"];
      this.client.prenom=data["prenom"];
      this.client.email=data["email"];
      this.client.nom=data["nom"];
      this.httpClient.get(this.host+"/clients/comptes/"+code).subscribe(data=>{
        this.Compte=data;
      },err=>{
        console.log(err);
      })
    },err=>{
      console.log(err);
    })
  }
  /* onEditCompte(code:number){
     this.httpClient.get(this.host+"/affichercompte/"+code).subscribe(data=>{
       this.Compte=data;
       this.compte.code=data["code"];
       this.compte.type=data["type"];
       this.compte.solde=data["solde"];
       this.compte.client=data["client"]["nom"];
       this.compte.datedecreation=data["datedecreation"];
     },err=>{
       console.log(err);
     })

   }*/

  onDeleteClient(code: number) {
    this.httpClient.post(this.host+"/supprimerClient/"+code,{responseType:'text'as 'json'}).subscribe(data=>{
      this.messagedelete=data;
    },err=>{
      console.log(err);
    })
  }
  onDeleteCompte(code: number) {
    this.httpClient.post(this.host+"/supprimerCompte/"+code,{responseType:'text'as 'json'}).subscribe(data=>{
      this.messagedelete=data;
    },err=>{
      console.log(err);
    })
  }
  onGetClients(){
    this.httpClient.get(this.host+"/afficherclients")
      .subscribe(data=>{
        this.Clients=data;
      },err=>{
        console.log(err);
      } )
  }

  onValide() {
    this.httpClient.post(this.host+"/modifierClient",this.client ,{responseType:'text'as 'json'}).subscribe(data=>{
      this.message=data;

    },err=>{
      console.log(err);
    })
  }
  onValider() {
    this.httpClient.post(this.host+"/modifierCompte",this.compte ,{responseType:'text'as 'json'}).subscribe(data=>{

      this.message=data;

    },err=>{
      console.log(err);
    })
  }


}
