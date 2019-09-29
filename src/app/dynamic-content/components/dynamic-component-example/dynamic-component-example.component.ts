import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { UserComponent } from '../../components-dynamic';
import { SafeurlPipe } from '../../safeurl.pipe';
import { DataService, DynamicComponentService } from '../../services';


@Component({
  selector: 'app-dynamic-component-example',
  templateUrl: './dynamic-component-example.component.html',
  styleUrls: ['./dynamic-component-example.component.css']
})
export class DynamicComponentExampleComponent implements OnInit {

  //  Public Properties
  template: string;
  // The container that will have the dynamic template
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container: ViewContainerRef;
  dynamicComponent: ComponentRef<any>;
  show = true;
  constructor(
    private dataService: DataService,
    private dynamicComponentService: DynamicComponentService,
    private safeUrl: SafeurlPipe,
  ) { }

  //  Life Cycle Hooks
  ngOnInit() {
    this.dataService.getHtml().subscribe(template => {
      if (template) {
        const safe: any = this.safeUrl.transform(template.content, 'html');
        this.template = safe.changingThisBreaksApplicationSecurity;

        this.generateUserDynamicComponent();
      }
    });
  }

  //  Public Methods
  destroyDynamicComponent(): void {
    this.dynamicComponent.destroy();
    this.dynamicComponent = null;
  }

  //  Private Methods
  private async generateUserDynamicComponent() {

    //  Define the component using Component decorator.
    const component = Component({
      selector: 'user-dynamic',
      template: this.template,
      styles: ['button { color:red;}']
    })(UserComponent);

    const dataService = this.dataService;

    const componentFactory = await this.dynamicComponentService.generateDynamic(component);
    //  Create the component and add to the view.
    const componentRef = this.container.createComponent(componentFactory);
    // Assign the service to the component instance
    componentRef.instance.dataService = dataService;
    this.dynamicComponent = componentRef;
  }

}


