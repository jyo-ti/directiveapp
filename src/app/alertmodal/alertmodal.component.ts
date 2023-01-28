import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-alertmodal',
  templateUrl: './alertmodal.component.html',
  styleUrls: ['./alertmodal.component.css']
})
export class AlertmodalComponent implements OnInit {
@Input() error: string='';
@Output() onclose=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
close(){
  this.onclose.emit('');
}
}
