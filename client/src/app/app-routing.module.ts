import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SurveyOverviewComponent } from './features/survey-overview/survey-overview.component';
import { AppShellComponent } from './_layouts/app-shell/app-shell.component';

const routes: Routes = [
  { path: '', component: AppShellComponent, children: [
    { path: '', component: SurveyOverviewComponent }  
  ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
