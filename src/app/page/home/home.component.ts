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
import {TimelineData, TimelineImage} from "../../component/timeline/timeline-data.model";

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
  timelineData: TimelineData | undefined;

  constructor(
    protected authService: AuthService,
    private bffService: BffService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    let images: TimelineImage[] = [
      {
        src: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        args: {fileName: 'MainAfter.jpg'},
        caption: 'Caption 1'
      },
      {
        src: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
        args: {fileName: 'free-nature-images.jpg'},
        caption: 'Caption 2'
      },
      {
        src: 'https://buffer.com/library/content/images/2023/10/free-images.jpg',
        args: {fileName: 'free-images.jpg'},
        caption: 'Caption 3'
      },
      {
        src: 'https://t4.ftcdn.net/jpg/02/56/10/07/360_F_256100731_qNLp6MQ3FjYtA3Freu9epjhsAj2cwU9c.jpg',
        args: {fileName: '360_F_256100731_qNLp6MQ3FjYtA3Freu9epjhsAj2cwU9c.jpg'},
        caption: 'Caption 4'
      }
    ];
    this.timelineData = {
      title: 'Timeline Title',
      images: images
    };

    this.activatedRoute.params
      .pipe(exhaustMap(__ => this.bffService.getVersion()))
      .subscribe({
        next: result => this.bffApiVersion = 'v' + result.version,
        error: error => {
          this.bffApiVersion = 'NOT_AVAILABLE';
        }
      });
  }

}

