import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl } from "@angular/forms";

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
  commissionForm = new FormGroup({
    contact: new FormControl(),
    type: new FormControl(),
    numCharacters: new FormControl(),
    hasBackground: new FormControl(),
    description: new FormControl(),
    refImages: new FormControl(),
    isPrivate: new FormControl()
  });
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openContact() {
    this.modalService.open(ContactModalContent);
  }

}
