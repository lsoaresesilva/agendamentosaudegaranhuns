import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroPacienteComponent } from './paciente/cadastro-paciente/cadastro-paciente.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    CadastroPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [HttpClient, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
