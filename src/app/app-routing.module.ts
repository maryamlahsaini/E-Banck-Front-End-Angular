import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgentComponent} from './agent/agent.component';
import {NewAgentComponent} from './new-agent/new-agent.component';
import {ParametersComponent} from './parameters/parameters.component';
import {LibellesComponent} from './libelles/libelles.component';
import {LoginComponent} from './login/login.component';
import {OperateurComponent} from "./operateur/operateur.component";
import {ClientsComponent} from "./clients/clients.component";
import {ClientComptesComponent} from "./client-comptes/client-comptes.component";
import {OperationComponent} from "./operation/operation.component";
import {HomeComponent} from "./home/home.component";
import {LogoutComponent} from "./logout/logout.component";
import {NewAgenceComponent} from "./new-agence/new-agence.component";
import {AgenceComponent} from "./agence/agence.component";
import {NewClientComponent} from "./new-client/new-client.component";
import {NewCompteComponent} from "./new-compte/new-compte.component";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'agents', component: AgentComponent},
  {
    path: "agence" , component:AgenceComponent
  },
  {path: 'agents/new-agent', component: NewAgentComponent},
  {path:"agence/new-agence" , component:NewAgenceComponent},
  {path: 'parameters', component: ParametersComponent},
  {path: 'libelles',component: LibellesComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'Operateur', component:OperateurComponent},
  {path:"clients",component:ClientsComponent},
  {path:"client/comptes",component:ClientComptesComponent},
  {path:"operation" , component:OperationComponent},
  {path: "home", component: HomeComponent},
  {path:" ", component:HomeComponent},
  {path: "logout" , component: LogoutComponent},
  {
    path:"client/comptes/new-client",component:NewClientComponent
  },
  {
    path:"client/comptes/new-compte",component:NewCompteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
