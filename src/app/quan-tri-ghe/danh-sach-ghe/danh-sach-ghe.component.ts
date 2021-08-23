import { Component, OnInit, ViewChild } from '@angular/core';
import { GheComponent } from '../ghe/ghe.component';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.css']
})
export class DanhSachGheComponent implements OnInit {
  DanhSachGhe = [
    { SoGhe: 1, TenGhe: " s ố 1 ", Gia: 100, TrangThai: false },
    { SoGhe: 2, TenGhe: " s ố 2 ", Gia: 100, TrangThai: false }, 
    { SoGhe: 3, TenGhe: " s ố 3 ", Gia: 100, TrangThai: false }, 
    { SoGhe: 4, TenGhe: " s ố 4 ", Gia: 100, TrangThai: false }, 
    { SoGhe: 5, TenGhe: " s ố 5 ", Gia: 100, TrangThai: false }, 
    { SoGhe: 6, TenGhe: " s ố 6 ", Gia: 100, TrangThai: false }, 
    { SoGhe: 7, TenGhe: " s ố 7 ", Gia: 100, TrangThai: false }, 
    { SoGhe: 8, TenGhe: " s ố 7 ", Gia: 100, TrangThai: false }, 
    { SoGhe: 9, TenGhe: " s ố 9 ", Gia: 100, TrangThai: false }, 
    { SoGhe: 10, TenGhe: " s ố 10 ", Gia: 100, TrangThai: false }, 
    { SoGhe: 11, TenGhe: " s ố 11 ", Gia: 100, TrangThai: false }, { SoGhe: 12, TenGhe: " s ố 12 ", Gia: 100, TrangThai: false }, { SoGhe: 13, TenGhe: " s ố 13 ", Gia: 100, TrangThai: false }, { SoGhe: 14, TenGhe: " s ố 14 ", Gia: 100, TrangThai: false }, { SoGhe: 15, TenGhe: " s ố 15 ", Gia: 100, TrangThai: false }, { SoGhe: 16, TenGhe: " s ố 16 ", Gia: 100, TrangThai: false }, { SoGhe: 17, TenGhe: " s ố 17 ", Gia: 100, TrangThai: false }, { SoGhe: 18, TenGhe: " s ố 18 ", Gia: 100, TrangThai: false }, { SoGhe: 19, TenGhe: " s ố 19 ", Gia: 100, TrangThai: false }, { SoGhe: 20, TenGhe: " s ố 20 ", Gia: 100, TrangThai: false }, { SoGhe: 21, TenGhe: " s ố 21 ", Gia: 100, TrangThai: false }, { SoGhe: 22, TenGhe: " s ố 22 ", Gia: 100, TrangThai: false }, { SoGhe: 23, TenGhe: " s ố 23 ", Gia: 100, TrangThai: false }, { SoGhe: 24, TenGhe: " s ố 24 ", Gia: 100, TrangThai: false }, { SoGhe: 25, TenGhe: " s ố 25 ", Gia: 100, TrangThai: false }, { SoGhe: 26, TenGhe: " s ố 26 ", Gia: 100, TrangThai: false }, { SoGhe: 27, TenGhe: " s ố 27 ", Gia: 100, TrangThai: false }, { SoGhe: 28, TenGhe: " s ố 28 ", Gia: 100, TrangThai: false }, { SoGhe: 29, TenGhe: " s ố 29 ", Gia: 100, TrangThai: false }, { SoGhe: 30, TenGhe: " s ố 30 ", Gia: 100, TrangThai: true }, { SoGhe: 31, TenGhe: " s ố 31 ", Gia: 100, TrangThai: false }, { SoGhe: 32, TenGhe: " s ố 32 ", Gia: 100, TrangThai: false }, { SoGhe: 33, TenGhe: " s ố 33 ", Gia: 100, TrangThai: false }, { SoGhe: 34, TenGhe: " s ố 34 ", Gia: 100, TrangThai: false }, { SoGhe: 35, TenGhe: " s ố 35 ", Gia: 100, TrangThai: false }
  ]
  soGheDaDat:number = 0;
  soGheChuaDat:number = 0;
  constructor() { }
  ngOnInit(): void {
    if(this.DanhSachGhe.find(ghe => ghe.TrangThai == false)){
      this.soGheChuaDat++;
    }
  }
  mangGheDaDat:any[] = [];
  DatGheParent = (value1:boolean,value2:string,value3:number) => {
    let gheDat = {tenGhe:value2,gia:value3};
    if(value1){
      this.soGheDaDat ++;
      this.soGheChuaDat --;
      this.mangGheDaDat.push(gheDat);
    }else{
      let index = this.mangGheDaDat.find(object => object.tenGhe === value2);
      this.mangGheDaDat.splice(index,1);
      this.soGheDaDat --;
      this.soGheChuaDat ++;
    }
  }
  ThemGhe = (gheDuocThem:any) => {
    this.DanhSachGhe.push(gheDuocThem);
    console.log('gheDuocThem',gheDuocThem)
  }
}
