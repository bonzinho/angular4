import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

declare let $; // para declarar o jquery
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('divModal')
  divModal: ElementRef; // para trabalhar com a referencia do elemteno par apoder pegar o DOM nativo

  constructor() { }

  ngOnInit() {
  }

  open() {
    $(this.divModal.nativeElement).modal('show');
  }

  close() {
    $(this.divModal.nativeElement).modal('hide');
  }

}
