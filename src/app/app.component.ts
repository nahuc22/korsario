import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'korsario';

  constructor(private dataSvc: DataService) {

  }

  ngOnInit() {
    this.dataSvc.getAll().subscribe( (res) => {
      console.log('Res ', res);
    })
  }
}
