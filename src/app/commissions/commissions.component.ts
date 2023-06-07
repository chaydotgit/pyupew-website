import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'terms-modal',
  templateUrl: './terms-modal.component.html',
  styles: [`
    .modal-body {
      margin: 10px 10px 10px;
    }
  `]
})

export class TermsModalContent {
  constructor(public activeModal: NgbActiveModal) {
  }
}

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

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openTerms() {
    this.modalService.open(TermsModalContent, {
      size: 'xl'
    });
  }

  openContact() {
    this.modalService.open(ContactModalContent);
  }

}
