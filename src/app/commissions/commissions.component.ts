import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ContactModalContent} from "../home/home.component";

@Component({
  selector: 'terms-modal',
  template: `
    <div class="modal-header">
      <div class="modal-title">Terms of Service</div>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body text-center">
      By commissioning me in any kind of way, you are agreeing to the terms of service below.

      Any statement can be bound to change if discussed with me, the artist, prior to the commission.

      <h1>I. GENERAL TERMS.</h1>

      Please write in a clear and nice manner.
      Provide neat references.
      Not a wall of text.
      Any ill behaviour will not be tolerated and your commission will be canceled if it occurs.
      Follow the rules provided in the commission journal, YCH or Adoptable deviation.
      If you fail to follow the rules provided I have the right to decline your commission.

      <h1>II. PAYMENT</h1>

      All commissions must all be paid in full upfront.
      The currency accepted is DeviantArt points and USD.
      The points shall only be paid through the commission widget unless stated otherwise.

      <h1>III. PROCESS</h1>

      Work In Progress will only be given if the commissioner personally ask for it and if the price exceed 50$/5000 points.
      WIPs might be given as well if I the artist, wonder something about the commission.

      The time for your commission to be completed can be up to 3 months depending on many factors such as;
      Health, order of commission, complexity, Work, school or family issues.

      If any of the things stated above occurs you will be notified asap.

      <h1>IV. CUSTOMER SATISFACTION</h1>

      I will do everything I can to make my customers happy.
      However after a commission is finished, only small changes are allowed to be made.
      Such as small colouring/marking mistakes.

      Any great changes will come with an extra charge.
      Such as an outfit change, outfit addition or subtraction, background change or anything that makes me have to redraw it completely.


      If your reference was unclear to start with, then you are not allowed to do minor changes without a fee.
      Make sure to be clear in your order what you aim for.


      <h1>V. COPYRIGHT / USAGE POLICY</h1>

      I, the artist, hold every right to the produced drawing, not the commissioner.

      Therefore I´m allowed to use the copyrighted artwork to;
      Promote myself with in any place or site.
      Publish books with.
      To display it anywhere to my liking.
      Post it wherever I want.

      The commissioner are allowed to;
      Use the copyrighted artwork for personal use only unless agreed otherwise.
      Print the art, and claim the right of their character(s) but not the drawing itself.
      Use the art to promote themselves with proper credit given to the artist.

      If you break the copyright infringement in any way, every right you had to the drawing will be retracted.

      The following is considered Copyright infringement:

      Reproducing/using the copyrighted artwork commercially. (Meaning making money of it in any way)
      Taking Credit for the creation of the artwork.
      Removing any watermarks/signatures.
      altering the artwork without my, the artist´s, consent.

      A Purchase of Commercial rights to the artwork will always be 300% of original price.
      With commercial rights you are allowed to make any sort of merch with the artwork.
      Use it in books, covers, as Props, change it to your liking and promote your own brand with.
      Credit is still required for usage of the artwork, even if altered or edited.

      PRIVATE COMMISSIONS ALWAYS COME WITH A 50% FEE


      <h1>VI. CANCELING/REFUNDING POLICY</h1>

      I have the right to cancel and refund the money for your commission at any time.
      You have no right to cancel or demand a refund from the artist under any circumstances after payment are received.
      If money has not been sent yet the commissioner has the right to cancel the commission.

      If you file a chargeback against me, your right to everything I have ever made for you will be retracted and I have the right to sell the copyrighted artwork to new buyers.
      You will forbidden to ever commission me, Yamio, ever again.
      Your name will be publicly posted everywhere I want to for others to watch out for.
      I also have every right to file a complaint and I have all the right to the money you have given me.


      Any statement can be bound to change if discussed with me, the artist, prior to the commission.
    </div>
  `
})

export class TermsModalContent {
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

  open() {
    this.modalService.open(TermsModalContent);
  }

}
