import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Journey';

  ngOnInit(): void {
    // Check for Windows OS
    const isWindows = navigator.userAgent.toLowerCase().indexOf('win') > -1;
    if (isWindows) {
      document.getElementsByTagName('html')?.item(0)?.classList.add('base-fs-windows');
    }
  }
}
