import { Directive, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models';
import { DataService } from '../../services';
@Directive() // This is a hotfix, please see
// https://stackoverflow.com/questions/60116361/angular-9-basecomponent-with-injectable
// https://github.com/angular/angular/issues/35367#issuecomment-585136872

// tslint:disable-next-line:directive-class-suffix
export class UserComponent implements OnInit, OnDestroy {

    //  Public Properties
    showText = false;
    user: User;
    dataService: DataService;
    constructor() {
    }

    //  Life Cycle Hooks
    ngOnInit() {
    }
    ngOnDestroy() {
        console.log('Dynamic Component OnDestroy');
    }

    //  Public Methods
    clickMe() {
        this.dataService.getUser().subscribe(user => {
            if (user) {
                this.user = user;
                this.showText = true;
            }
        });
    }
}
