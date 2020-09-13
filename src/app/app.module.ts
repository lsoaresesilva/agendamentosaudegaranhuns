import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MenubarModule} from 'primeng/menubar';


import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AcessoComponent } from './login/acesso/acesso.component';
import { LoginModule } from './login/login.module';
import { PacienteModule } from './paciente/paciente.module';
import { PostoSaudeService } from './servicos/posto-saude.service';
import { AgendamentoModule } from './agendamento/agendamento.module';

@NgModule({
  declarations: [
    AppComponent,
    AcessoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    MenubarModule,
    BrowserAnimationsModule,
    PacienteModule,
    ButtonModule,
    AgendamentoModule,
    LoginModule
  ],
  providers: [HttpClient, MessageService, PostoSaudeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
