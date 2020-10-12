import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ItemListsComponent } from './item-lists/item-lists.component';

@NgModule({
  declarations: [ViewsHomeComponent, StatisticsComponent, ItemListsComponent],
  imports: [CommonModule, ViewsRoutingModule, SharedModule],
  exports: [ViewsHomeComponent],
})
export class ViewsModule {}
