import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {
  status:boolean = false;
  @Output() emitStatus = new EventEmitter();
  @Input() itemGhe:any;
  constructor() { }
  datGhe = () => {
    if(!this.status){
      this.status = true;
    }else{
      this.status = false;
    }
    this.emitStatus.emit(this.status);
  }
  ngOnInit(): void {
  }

}
