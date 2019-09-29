import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicComponentExampleComponent } from './components/dynamic-component-example/dynamic-component-example.component';
const routes: Routes = [
    {
        path: '',
        component: DynamicComponentExampleComponent
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DynamicContentRoutingModule { }
