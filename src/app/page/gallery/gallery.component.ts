import { Component } from '@angular/core';
import {GALLERY_PAGE_INFO, SEARCH_PAGE_INFO} from "../../model/page-info";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

    protected readonly SEARCH_PAGE_INFO = SEARCH_PAGE_INFO;
  protected readonly GALLERY_PAGE_INFO = GALLERY_PAGE_INFO;
}
