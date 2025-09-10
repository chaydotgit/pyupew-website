import {Component} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'contact-modal',
  templateUrl: '../contact-modal.html',
  standalone: true
})

export class ContactModalContent {
  constructor(public activeModal: NgbActiveModal) {
  }
}
