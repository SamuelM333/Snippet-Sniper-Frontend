import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { apiUrl } from '../../api.service';

declare var $: any;

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

    authUser = localStorage.getItem('authUser');
    url = apiUrl;

    constructor(private router: Router) { }

    ngOnInit() {
        $('.button-collapse').sideNav();

        if (this.authUser) { this.authUser = JSON.parse(this.authUser); }
    }

    atProfile() {

        if (this.router.url === '/profile') {
            return true;
        } else { return false; }
    }

    logout() {
        localStorage.removeItem('authUser');
        this.router.navigateByUrl('/');
    }

}
