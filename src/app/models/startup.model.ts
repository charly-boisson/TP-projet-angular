export class Startup {

  public id: number;
  public nom: string;
  public secteurActivite: string;
  public nomRepresentant: string;
  public nbrCoFondateurs: number;
  public description: string;
  public idConsultant: number;
  public adresse: string;

  constructor(id,nom,secteurActivite,nomRepresentant,nbrCoFondateurs,description,idConsultant,adresse=''){

    this.id = id;
    this.nom = nom;
    this.secteurActivite = secteurActivite;
    this.nomRepresentant = nomRepresentant;
    this.nbrCoFondateurs = nbrCoFondateurs;
    this.description = description;
    this.idConsultant = idConsultant;
    this.adresse = adresse;

  }

}
