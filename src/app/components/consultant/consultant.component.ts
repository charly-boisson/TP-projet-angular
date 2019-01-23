import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Consultant } from '../../models/consultant.model';
import { ConsultantService } from '../../services/consultant.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.less']
})
export class ConsultantComponent implements OnInit {

  consultants: Array<Consultant>;
  consultant: Consultant;

  constructor(private titleService: Title,private consultantService: ConsultantService,private notificationsService: NotificationService) { }

  ngOnInit() {
    this.titleService.setTitle("Consultants");
    this.list()
  }

  list(){
    this.consultantService.List()
      .subscribe(
        (response: Array<Consultant>) => {
          this.consultants = response
        },
      );
  }


  delete(consultant){
    this.consultantService.Delete(consultant.id)
      .subscribe(
        _ => {
          this.list()
          this.notificationsService.Add("Le consultant "+ consultant.nom +" a été supprimé !")
        },
        err => console.log('erreur',err)
      );
  }


}
