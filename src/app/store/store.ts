import { Consultant } from '../models/consultant.model';
import { Startup } from '../models/startup.model';

export const ConsultantStore = [
  new Consultant(1,'NomConsultant1','PrenomConsultant1','DescriptionConsultant1'),
  new Consultant(2,'NomConsultant2','PrenomConsultant2','DescriptionConsultant2'),
  new Consultant(3,'NomConsultant3','PrenomConsultant3','DescriptionConsultant3'),
  new Consultant(4,'NomConsultant4','PrenomConsultant4','DescriptionConsultant4'),
  new Consultant(5,'NomConsultant5','PrenomConsultant5','DescriptionConsultant5'),
]


export const StartupStore = [
  new Startup(1,'NomStartup1','secteurActiviteStartup1','NomRepresentantStartup1',1,'DescriptionStartup1',5),
  new Startup(2,'NomStartup2','secteurActiviteStartup2','NomRepresentantStartup2',2,'DescriptionStartup2',4,'AdresseStartup2'),
  new Startup(3,'NomStartup3','secteurActiviteStartup3','NomRepresentantStartup3',3,'DescriptionStartup3',3),
  new Startup(4,'NomStartup4','secteurActiviteStartup4','NomRepresentantStartup4',4,'DescriptionStartup4',2,'AdresseStartup4'),
  new Startup(5,'NomStartup5','secteurActiviteStartup5','NomRepresentantStartup5',5,'DescriptionStartup5',1),
]
