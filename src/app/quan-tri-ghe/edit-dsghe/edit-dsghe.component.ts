import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachGheComponent } from '../danh-sach-ghe/danh-sach-ghe.component';

@Component({
  selector: 'app-edit-dsghe',
  templateUrl: './edit-dsghe.component.html',
  styleUrls: ['./edit-dsghe.component.css']
})
export class EditDSGheComponent implements OnInit {
  @ViewChild(DanhSachGheComponent) DsGheCom!:DanhSachGheComponent;
  constructor() { }
  themGheParent = (...thamSo:any[]) => {
    let gheDuocThem = {
      TenGhe:thamSo[0],
      SoGhe:thamSo[1],
      Gia:thamSo[2],
      TrangThai:thamSo[3]
    }
    if(thamSo[3] == 'false'){
      gheDuocThem.TrangThai = false;
    }else{
      gheDuocThem.TrangThai = true;
    }
    console.log(gheDuocThem);
    this.DsGheCom.ThemGhe(gheDuocThem);
  }
  ngOnInit(): void {
  }

}
