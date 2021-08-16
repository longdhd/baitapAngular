import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaiTap5Component } from './BaiTap5.component';


@NgModule({
    imports: [CommonModule,FormsModule],
    exports: [BaiTap5Component],
    declarations: [BaiTap5Component],
    providers: [],
})
export class BaiTap5Module { }
