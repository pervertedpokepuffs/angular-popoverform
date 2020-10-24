import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DEMO: angular-popoverform';

  constructor(
    private http: HttpClient
  ) { 
    this.init();
  }

  init() {
    this.http.post('command/config', '{"delay":1500}');
  }

}
