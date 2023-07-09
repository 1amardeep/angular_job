import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewModuleRoutingModule } from './view-module-routing.module';
import { ViewComponent } from './component/view/view.component';
import { JokerViewComponent } from './component/joker-view/joker-view.component';

@NgModule({
  declarations: [ViewComponent, JokerViewComponent],
  imports: [CommonModule, ViewModuleRoutingModule],
})
export class ViewModuleModule {}
