import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokerElementsViewComponent } from './component/joker-elements-view/joker-elements-view.component';
import { ElementsViewComponent } from './component/elements-view/elements-view.component';

const routes: Routes = [
  { path: 'jokerElements', component: JokerElementsViewComponent },
  { path: 'viewElements', component: ElementsViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsModuleRoutingModule {}
