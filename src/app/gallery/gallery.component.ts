import { Component, OnInit } from '@angular/core';
import { ArtworkService } from "../shared/artwork.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: string[] = [];

  constructor(private artworkService: ArtworkService) {}

  ngOnInit(): void {
    this.artworkService.getAll().subscribe((list: string[]) => {
      this.images = list ?? [];
    });
  }

  getColumnImages(col: number): string[] {
    return this.images.filter((_, i) => i % 4 === col);
  }
}
