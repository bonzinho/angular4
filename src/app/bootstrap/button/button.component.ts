import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() // para poder aceder atraves de propertybind e anterar a cor do botao neste caso
  color = 'danger';

  constructor() { }

  ngOnInit() {
  }

}
