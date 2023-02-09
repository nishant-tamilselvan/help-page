import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpPageComponent } from './help-page/help-page.component';

const routes: Routes = [{ path: 'help-page', loadChildren: () => import('./help-page/help-page.module').then(m => m.HelpPageModule) },
{ path: 'help', component: HelpPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
