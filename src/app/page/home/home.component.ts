import {Component, OnInit} from '@angular/core';
import {HOME_PAGE_INFO} from "../../model/page.info.model";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {AuthService} from "../../service/auth/auth.service";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {environment} from "../../../environments/environment";
import {BffService} from "../../service/bff/bff.service";
import {ActivatedRoute} from "@angular/router";
import {exhaustMap} from "rxjs";
import {TimelineComponent} from "../../component/timeline/timeline.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    PageHeaderComponent,
    AsyncPipe,
    NgIf,
    JsonPipe,
    TimelineComponent
  ],
  standalone: true
})
export class HomeComponent implements OnInit {
  protected readonly HOME_PAGE_INFO = HOME_PAGE_INFO;
  appVersion = environment.version;
  bffApiVersion: string | 'CHECKING' | 'NOT_AVAILABLE' = 'CHECKING';

  constructor(
    protected authService: AuthService,
    private bffService: BffService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(exhaustMap(__ => this.bffService.getVersion()))
      .subscribe({
        next: result => this.bffApiVersion = 'v' + result.version,
        error: err => {
          console.error(err);
          this.bffApiVersion = 'NOT_AVAILABLE';
        }
      });
  }

}

