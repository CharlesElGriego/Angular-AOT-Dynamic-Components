import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicComponentExampleComponent } from './components/dynamic-component-example/dynamic-component-example.component';
import { DynamicContentRoutingModule } from './dynamic-content-routing..module';



@NgModule({
  imports: [
    CommonModule,
    DynamicContentRoutingModule,
  ],
  declarations: [DynamicComponentExampleComponent],
})

export class DynamicContentModule {
}
