import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bai-tap-5',
    template: `<div class="container">
        <h3>Bài tập 5</h3>
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <a class="navbar-brand" href="#">CYBERSOFT</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item" *ngIf="!isLogin">
                        <a class="nav-link" href="#" data-toggle="modal" data-target="#modelId">Login</a>
                    </li>
                    <li class="nav-item" *ngIf="isLogin">
                        <a class="nav-link" href="#">Hello {{name}}!</a>
                    </li>
                    <li class="nav-item" *ngIf="isLogin">
                        <a class="nav-link" href="#" (click)="logout()">Đăng xuất</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    
                </form>
            </div>
        </nav>
        <br>
        <hr>
        
        <!-- Modal -->
        <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Login</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="">Username</label>
                            <input class="form-control" [(ngModel)]="userLogin.username">
                        </div>
                        <div class="form-group">
                            <label for="">Password</label>
                            <input type="text" class="form-control" [(ngModel)]="userLogin.password">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" (click)="login()">Login</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    `
})

export class BaiTap5Component implements OnInit {
    constructor() { }

    ngOnInit() { 
        if(localStorage.getItem('userLogin')){
            this.name = localStorage.getItem('userLogin')!;
            this.isLogin = true;
        }
    }
    userLogin:any= {
        username:'',
        password:''
    }
    isLogin:boolean = false;
    name:string = '';
    login = () =>{
        if(this.userLogin.username === 'cybersoft' && this.userLogin.password === 'cybersoft'){
            this.name = this.userLogin.username;
            this.isLogin = true;
            localStorage.setItem('userLogin',this.userLogin.username);
        }
    }
    logout = () => {
        this.isLogin = false;
        localStorage.clear();
    }
    
}