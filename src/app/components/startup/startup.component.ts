import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Startup } from '../../models/startup.model';
import { Consultant } from '../../models/consultant.model';
import { StartupService } from '../../services/startup.service';
import { ConsultantService } from '../../services/consultant.service';
import { NotificationService } from '../../services/notification.service';
import { FormBuilder, FormGroup, FormControl, Validators } from'@angular/forms';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.less']
})
export class StartupComponent implements OnInit {

  startups: Array<Startup>;
  startup: Startup;
  startupForm: FormGroup;
  modifEnCours: Boolean = false;

  actionNameFormStartup: string = "Ajouter une startup";
  actionFormStartup: boolean = false;
  startupNomCtrl: FormControl;
  startupSecteurActiviteCtrl: FormControl;
  startupNomRepresentantCtrl: FormControl;
  startupNbrCoFondateursCtrl: FormControl;
  startupDescriptionCtrl: FormControl;
  startupAdresseCtrl: FormControl;
  startupIdConsultantCtrl: FormControl;

  constructor(private titleService: Title,private startupService: StartupService,private consultantService: ConsultantService,private notificationsService: NotificationService,private fb: FormBuilder) {

    this.startupNomCtrl = this.fb.control('', [Validators.required, Validators.maxLength(20)] );
    this.startupSecteurActiviteCtrl = this.fb.control('', [Validators.required, Validators.maxLength(10)] );
    this.startupNomRepresentantCtrl = this.fb.control('', [Validators.required, Validators.maxLength(15)]);
    this.startupNbrCoFondateursCtrl = this.fb.control('',[Validators.required]);
    this.startupDescriptionCtrl = this.fb.control('',[Validators.required, Validators.maxLength(250)]);
    this.startupAdresseCtrl = this.fb.control('', [Validators.maxLength(25)]);

    this.startupForm = this.fb.group({
      nom: this.startupNomCtrl,
      secteurActivite: this.startupSecteurActiviteCtrl,
      nomRepresentant: this.startupNomRepresentantCtrl,
      nbrCoFondateurs: this.startupNbrCoFondateursCtrl,
      description: this.startupDescriptionCtrl,
      adresse: this.startupAdresseCtrl
    });

  }

  ngOnInit() {
    this.titleService.setTitle("Startups");
    this.list()
  }

  list(){
    this.startupService.List()
      .subscribe(
        (response: Array<Startup>) => {
          this.startups = response
          console.log(this.startups)
        },
      );
  }

  add(){
    this.startupForm.value.idConsultant = this.GetIdRandomConsultant()
    this.startupService.Add(this.startupForm.value)
      .subscribe(
        _ => {
          this.list()
          this.notificationsService.Add("La startup "+ this.startupForm.value.nom +" a été créé !")
        },
        err => console.log(err)
      );
  }

  delete(startup){
    this.startupService.Delete(startup.id)
      .subscribe(
        _ => {
          this.list()
          this.notificationsService.Add("La startup "+ startup.nom +" a été supprimé !")
        },
        err => console.log('erreur',err)
      );
  }

  edit(startup){
    this.actionFormStartup = true;
    this.actionNameFormStartup = "Cacher le formulaire";
    this.startup = startup
    this.modifEnCours = true
    this.startupForm = this.fb.group({
      nom: startup.nom,
      secteurActivite: startup.secteurActivite,
      nomRepresentant: startup.nomRepresentant,
      nbrCoFondateurs: startup.nbrCoFondateurs,
      description: startup.description,
      adresse: startup.adresse
    });
  }

  GetIdRandomConsultant(){
    // var idConsultant: number
    // this.startupService.List().pipe(
    //     map( (xs:Array<Consultant>) => {
    //       var xsLength = xs.length;
    //       if(xsLength > 0){
    //            // get random array index
    //            var random = xs[Math.floor(Math.random()* xs.length)];
    //            idConsultant random.id;
    //       }
    //     } )
    // ).subscribe(
    //   x => { idConsultant = x }
    // );
    // console.log(idConsultant)
    return 1
  }

  update(){
    const startupTemp: Startup = this.startupForm.value
    startupTemp.id = this.startup.id
    this.startupService.Update(startupTemp)
      .subscribe(
        _ => {
          this.list()
          this.notificationsService.Add("La startup "+ startupTemp.nom +" a été modifié !")
        },
        err => console.log(err)
      );
  }

  formStartup(){
    if(this.actionFormStartup == false){
      this.actionFormStartup = true;
      this.actionNameFormStartup = "Cacher le formulaire";
    }else{
      this.actionNameFormStartup = "Ajouter une startup";
      this.actionFormStartup = false;
    }
  }

}
