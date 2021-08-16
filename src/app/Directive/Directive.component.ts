import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    template: `<div class="container">
        <h3 class="text-center">Directive Demo</h3>
        <h2>*ngIf Dùng để xác định render hoặc không render ra giao diện</h2>
        <p *ngIf="status">Title: Cybersoft</p>
        <button class="btn btn-success" (click)="anHien()">Ẩn/Hiện</button>
        <div class="form-group mt-5">
            <input class="form-control" #num>
            <button class="btn btn-success" (click)="changeNum(num.value)">OK</button>
        </div>
        <h2>Số: {{number}}</h2>
        <div *ngIf="number%2===0">Số chẵn</div>
        <div *ngIf="number%2!==0">Số lẻ</div>
        <h2>Ví dụ</h2>
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item" href="#">Action 1</a>
                            <a class="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <div class="nav-item" *ngIf="isLogin;else divLogin">
                        <a class="nav-link text-white" href="#">Hello {{userName}} !</a>
                        <a class="nav-link text-white" href="#" (click)="logout()">Đăng xuất</a>
                    </div>
                    <ng-template #divLogin>
                        <div class="nav-item">
                            <a class="nav-link text-white" href="#" (click)="login()">Đăng nhập</a>
                        </div>
                    </ng-template>
                </form>
            </div>
        </nav>
        <hr>

        <h3>ngSwitchCase</h3>
        <div [ngSwitch]="color">
            <div *ngSwitchCase="'red'" style="color:red;">Red</div>
            <div *ngSwitchCase="'green'" style="color:green;">Green</div>
            <div *ngSwitchCase="'blue'" style="color:blue;">Blue</div>
            <div *ngSwitchDefault="'blue'" style="color:orange;">Orange</div>
        </div>

        <select class="form-control" [(ngModel)]="color">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="orange">Orange</option>
        </select>
    <hr>
    <button mat-raised-button color="accent">Accent</button>
    <br>
    <div class="example-button-container">
        <button mat-fab disabled aria-label="Example icon button with a heart icon">
          <mat-icon>favorite</mat-icon>
        </button>
    </div>
</div>


`
})

export class DirectiveComponent implements OnInit {
    status:boolean = true;
    number:number = 2;

    color:string = 'red';

    userName:string = 'cybersoft';
    isLogin:boolean = false;
    login = () => {
        this.isLogin = true;
    }
    logout = () => {
        this.isLogin = false;
    }


    changeNum = (num:string) => {
        this.number = Number(num);
    }
    anHien = () => {
        this.status = !this.status
    }
    constructor() { }

    ngOnInit() { }
}