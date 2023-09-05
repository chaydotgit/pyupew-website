import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'contact-modal',
  templateUrl: '../contact-modal.html',
})

export class ContactModalContent {
  constructor(public activeModal: NgbActiveModal) {
  }
}


@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.css']
})
export class CommissionsComponent implements OnInit {
  commissionStatus = false;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openContact() {
    this.modalService.open(ContactModalContent);
  }

}
