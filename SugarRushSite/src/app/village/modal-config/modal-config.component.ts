import { Component, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-config',
  templateUrl: './modal-config.component.html',
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal]
})

export class ModalConfigComponent {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  @ViewChild('content', { static: true }) private content;

  ngOnInit(): void {
     this.open(this.content);
  }

  open(content) {
    this.modalService.open(content);
  }
}
