import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { DynamicComponentExampleComponent } from './components/dynamic-component-example/dynamic-component-example/dynamic-component-example.component';
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
