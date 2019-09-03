import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesComponent } from './times/times.component';
import { GruposComponent } from './grupos/grupos.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { BuscarComponent } from './buscar/buscar.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';

const routes: Routes = [
    {path: '', redirectTo: '/bem-vindo', pathMatch:'full'},
    {path: 'bem-vindo', component: BemVindoComponent},
    { path: 'times', component: TimesComponent },
    { path: 'grupos', component: GruposComponent },
    { path: 'resultados', component: ResultadosComponent },
    { path: 'buscardados', component: BuscarComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
