import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentComponent } from './agent/agent.component';
import { NewAgentComponent } from './new-agent/new-agent.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ParametersComponent } from './parameters/parameters.component';
import { LibellesComponent } from './libelles/libelles.component';
import { AgenceComponent } from './agence/agence.component';
import { ClientComptesComponent } from './client-comptes/client-comptes.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { NewAgenceComponent } from './new-agence/new-agence.component';
import { NewClientComponent } from './new-client/new-client.component';
import { NewCompteComponent } from './new-compte/new-compte.component';
import { OperateurComponent } from './operateur/operateur.component';
import { OperationComponent } from './operation/operation.component';
import {CollapseModule} from 'ngx-bootstrap';
import {httpInterceptorProviders} from './auth/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AgentComponent,
    NewAgentComponent,
    ParametersComponent,
    LibellesComponent,
    AgenceComponent,
    ClientComptesComponent,
    ClientsComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    NewAgenceComponent,
    NewClientComponent,
    NewCompteComponent,
    OperateurComponent,
    OperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
