import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './component/view/view.component';
import { JokerViewComponent } from './component/joker-view/joker-view.component';

const routes: Routes = [
  {
    path: 'viewV',
    component: ViewComponent,
  },
  {
    path: 'jokerV',
    component: JokerViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewModuleRoutingModule {}
