import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StartupService } from '../../services/startup.service';
import { ConsultantService } from '../../services/consultant.service';
import { Startup } from '../../models/startup.model';
import { Consultant } from '../../models/consultant.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  startups: Array<Startup>;
  consultants: Array<Consultant>;

  constructor(private titleService: Title,private startupService: StartupService, private consultantService: ConsultantService) { }

  ngOnInit() {
    this.titleService.setTitle( "Home" );
    this.startupService.List()
      .subscribe(
        (response: Array<Startup>) => {
          this.startups = response
        },
      );
    this.consultantService.List()
      .subscribe(
        (response: Array<Consultant>) => {
          this.consultants = response
        },
      );
  }
}
