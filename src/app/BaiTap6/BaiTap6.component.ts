import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bai-tap-6',
    template: `
        <div class="container">
            <h3>Bài tập 6</h3>
            <div class="card">
                <div class="card-header bg-dark"><h5 class="text-white">Quản lý danh mục sản phẩm</h5></div>
                <div class="card-body">
                    <div class="form-group">
                        <p>Mã SP</p>
                        <input class="form-control" [(ngModel)]="sanPham.maSP">
                    </div>
                    <div class="form-group">
                        <p>Tên SP</p>
                        <input class="form-control" [(ngModel)]="sanPham.tenSP">
                    </div>
                    <div class="form-group">
                        <p>Giá</p>
                        <input class="form-control" [(ngModel)]="sanPham.gia">
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-success" (click)="themSanPham()">Thêm sản phẩm</button>
                </div>
            </div>
            <br>
            <table class="table">
                <thead class="bg-dark text-white">
                    <tr>
                        <th>Mã SP</th>
                        <th>Tên SP</th>
                        <th>Giá</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let sp of mangSanPham let i = index" [ngClass]="{'bg-light': (i+1)%2 ===0}">
                        <td>{{sp.maSP}}</td>
                        <td>{{sp.tenSP}}</td>
                        <td>{{sp.gia}}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})

export class BaiTap6Component implements OnInit {
    sanPham:SanPham = {maSP:'',tenSP:'',gia:0}
    mangSanPham:SanPham[] = [
        {maSP:'1',tenSP:'Iphone',gia: 1000}
    ]
    themSanPham = () => {
        this.mangSanPham.push({...this.sanPham});
    }
    constructor() { }

    ngOnInit() { }
}

interface SanPham {
    maSP:string,
    tenSP:string,
    gia:number
}