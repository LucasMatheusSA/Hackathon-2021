import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    data : Date = new Date();
    focus;
    focus1;

    page = 0;

    constructor() { }

    nextPage(){
        if(this.page < 2){
            this.page = this.page + 1;
        }
    }

    backPage(){
        if(this.page > 0){
            this.page = this.page - 1;
        }
    }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

}
