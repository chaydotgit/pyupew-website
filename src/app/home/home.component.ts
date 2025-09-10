import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ContactModalContent} from "./contact-modal-content.component";
import {ArtworkService} from "../shared/artwork.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal,
              private artworkService: ArtworkService) { }

  latestArtworkPath: string | null = null;

  ngOnInit(): void {
    this.artworkService.getLatestOne().subscribe( latest => this.latestArtworkPath = latest);
  }

  open() {
    this.modalService.open(ContactModalContent);
  }
}
