import { OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models';
import { DataService } from '../../services';

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
