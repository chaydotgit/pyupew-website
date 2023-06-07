import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'contact-modal',
  templateUrl: '../contact-modal.html',
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
