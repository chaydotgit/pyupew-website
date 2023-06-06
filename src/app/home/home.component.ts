import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'contact-modal',
  template: `
    <div class="modal-header">
      <div class="modal-title">Contact</div>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body text-center">
      Contact me through the information below!
      <div class="social-links">
        <i class="bi bi-envelope-heart"> hazelsolares@gmail.com</i>
        <i class="bi bi-discord"> @pyu#7518</i>
      </div>

    </div>
  `,
})

export class ContactModalContent {
  constructor(public activeModal: NgbActiveModal) {
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {
    this.modalService.open(ContactModalContent);
  }

}
