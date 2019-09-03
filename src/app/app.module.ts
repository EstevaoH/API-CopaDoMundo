import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimesComponent } from './times/times.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { GruposComponent } from './grupos/grupos.component';
import { GruposService } from './services/grupos.service';
import { TimeService } from './services/time.service';
import { ResultadosComponent } from './resultados/resultados.component';
import { BuscarComponent } from './buscar/buscar.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';

@NgModule({
  declarations: [
    AppComponent,
    TimesComponent,
    GruposComponent,
    ResultadosComponent,
    BuscarComponent,
    BemVindoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FilterPipeModule,
  ],
  providers: [
    GruposService,
    TimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
