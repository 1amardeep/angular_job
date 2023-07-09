import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsModuleRoutingModule } from './elements-module-routing.module';
import { ElementsViewComponent } from './component/elements-view/elements-view.component';
import { JokerElementsViewComponent } from './component/joker-elements-view/joker-elements-view.component';

@NgModule({
  declarations: [ElementsViewComponent, JokerElementsViewComponent],
  imports: [CommonModule, ElementsModuleRoutingModule],
  exports: [],
})
export class ElementsModuleModule {}
