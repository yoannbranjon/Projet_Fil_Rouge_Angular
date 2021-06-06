import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmWebService } from '../shared/webservices/film.webservice';
import { AccountWebService } from '../shared/webservices/account.webservice';
import { UsersWebService } from '../shared/webservices/users.webservice';
import { RoomWebService } from '../shared/webservices/room.webservice';
import { ReservationWebService } from '../shared/webservices/reservation.webservice';
import {ContactWebService} from '../shared/webservices/contact.webservice';
import { Film } from '../shared/models/film.model';
import { Account } from '../shared/models/account.model';
import { Users } from '../shared/models/users.model';
import { Room } from '../shared/models/room.model';
import { Session } from '../shared/models/session.model';
import { Reservation } from '../shared/models/reservation.model';
import { Contact } from '../shared/models/contact.model';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionWebService } from '../shared/webservices/session.webservice';

interface ageLimit {
  value: number;
  viewValue: number;
}

@Component({
  selector: 'app-admin-parent',
  templateUrl: './admin-parent.component.html',
  styleUrls: ['./admin-parent.component.scss']
})
export class AdminParentComponent implements OnInit, AfterViewInit {

  //initialisation liste de filmms
  filmList: Film[] = [];
  filmsNameList: any[] = ["coucou"];
  roomList: Room[] = [];
  reservationList: Reservation[] = [];
  contactList: Contact[]=[];
  usersList: Users[] = [];
  sessionList: Session[] = [];
  date = new Date();
  ageLimit : ageLimit[] = [
    {value: -10, viewValue: -10},
    {value: -12, viewValue: -12},
    {value: -16, viewValue: -16}
  ];

  //récupération de l'objet d'une ligne
  element = new Film("", 0, "", "", "", "", "", "", 0);
  elementA = new Account("", "", 0);
  elementR = new Room("", 0, 0, "", 0);
  elementC = new Contact("", "", "", "", this.date);
  elementU = new Users("", "", this.elementA, this.date, "", 0, "");
  elementS = new Session(this.element, this.elementR, this.date, 0);
  elementResa = new Reservation("", 0, this.elementS, this.elementU, 0);

  filmForSession = new Film("", 0, "", "", "", "", "", "", 0);
  roomForSession = new Room("", 0, 0, "", 0);
  sessionToAdd = new Session(this.filmForSession, this.roomForSession, this.date, 0);

  //Autre
  Number1: number = 0;
  name: String = "";
  price: number = 0;
  formAddFilm!: NgForm;
  formUpdateFilm!: NgForm;
  formAddRoom!: NgForm;
  formUpdateRoom!: NgForm;
  formAddSession!: NgForm;
  sessionAddFormGroup = new FormGroup({

    Film: new FormControl(''),
    Room: new FormControl('')


  });


  //Tableau Stats
  surveyData = [
    { name: 'Janvier', value: 105 },
    { name: 'Fevrier', value: 10 },
    { name: 'mars', value: 15 },
    { name: 'avril', value: 2 },
    { name: 'mai', value: 20 },
    { name: 'Juin', value: 10 },
    { name: 'Juillet', value: 15 },
    { name: 'Aout', value: 2 },
    { name: 'Septembre', value: 20 },
    { name: 'Octobre', value: 10 },
    { name: 'Novembre', value: 15 },
    { name: 'Decembre', value: 2 },
  ];

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  //Angular material table
  displayedColumnsFilm: string[] = ['updateAction','deleteAction', 'name', 'duration', 'filmVersion', 'display', 'typeFilm', 'synopsis', 'userComment', 'director', 'pegi'];
  dataSourceFilm = new MatTableDataSource<Film>(this.filmList);

  displayedColumnsRoom: string[] = ['updateAction','deleteAction', 'name', 'sitNumber', 'maxCapacity', 'audioSystem'];
  dataSourceRoom = new MatTableDataSource<Room>(this.roomList);

  displayedColumnsReservation: string[] = ['updateAction','deleteAction', 'name', 'price', 'session', 'users', 'seatNumber'];
  dataSourceReservation = new MatTableDataSource<Reservation>(this.reservationList);

  displayedColumnsContact: string[] = ['deleteAction', 'firstName', 'lastName', 'email', 'message'];
  dataSourceContact = new MatTableDataSource<Contact>(this.contactList);

  displayedColumnsSession: string[] = ['updateAction','deleteAction', 'film', 'room'];
  dataSourceSession = new MatTableDataSource<Session>(this.sessionList);

  //Liste de films pour échantillon

  film1 = new Film("Forrest Gump", 140, "Vo", "Dolby", "Comédie", "Quelques décennies d'histoire américaine, des années 1940 à la fin du XXème siècle, à travers le regard et l'étrange odyssée d'un homme simple et pur, Forrest Gump.", "", "Robert Zemeckis", 10);
  film2 = new Film("La Liste de Schindler", 195, "Vo", "Dolby", "Historique, Guerre", "Evocation des années de guerre d'Oskar Schindler, industriel autrichien rentré à Cracovie en 1939 avec les troupes allemandes. Il va, tout au long de la guerre, protéger des juifs en les faisant travailler dans sa fabrique.", "","Steven Spielberg", 12);
  film3 = new Film("La Ligne verte", 189, "Vo", "Dolby", "Policier, Fantastique", "Paul Edgecomb, Gardien-chef du pénitencier de Cold Mountain en 1935, était chargé de veiller au bon déroulement des exécutions capitales. Parmi les prisonniers se trouvait un colosse du nom de John Coffey", "", "Frank Darabont", 12);
  film4 = new Film("Le Seigneur des anneaux : le retour du roi", 201, "Vo", "Dolby", "Aventure, Fantastique", "Tandis que les ténèbres se répandent sur la Terre du Milieu, Aragorn se révèle être l'héritier caché des rois antiques. Quant à Frodon, toujours tenté par l'Anneau, il voyage à travers les contrées ennemies, se reposant sur Sam et Gollum", "", "Peter Jackson", 12);
  film5 = new Film("Le Roi Lion", 89, "VF", "Dolby", "Animation", "Le long combat de Simba le lionceau pour accéder à son rang de roi des animaux, après que le fourbe Scar, son oncle, a tué son père et pris sa place.", "", "Roger Allers", 6);
  film6 = new Film("Pulp Fiction", 149, "VF", "Dolby", "Policier, Thriller", "L'odyssée sanglante et burlesque de petits malfrats dans la jungle de Hollywood à travers trois histoires qui s'entremêlent.", "", "Quentin Tarantino", 12);

  ListFilmSample: Film[] = [this.film1, this.film2, this.film3, this.film4, this.film5, this.film6];


  //Alimentation réservation
  roomResa = new Room("Margou", 100, 50, "Dolby");
  accountResa = new Account("nezha_b@gmail.com", "biss");
  userResa = new Users("Bébert", "Fichtre", this.accountResa, this.date, "31 Rue du j'me foutre", 5524, "Paris");
  sessionResa = new Session(this.film1, this.roomResa, this.date);
  reservation = new Reservation("reservation", 15, this.sessionResa, this.userResa, 89);
  resa = new Reservation("", 0, this.sessionResa, this.userResa, 89);
  
  constructor(
     public dialog: MatDialog,
     private filmWebService: FilmWebService,
     private usersWebService: UsersWebService,
     private roomWebService: RoomWebService,
     private reservationWebService: ReservationWebService,
     private contactWebService : ContactWebService,
     private sessionWebService : SessionWebService,
     private router: Router,
     private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {

    //Films
    this.getAllFilms();
    this.getAllFilmsName();
    this.retrieveFilm(this.element);

    //Users
    this.getAllUsers();  
    
    //Rooms
    this.getAllRooms(); 
    this.retrieveRoom(this.elementR);

    //Contact
    this.getAllContacts();
    
    //Reservation
    this.getAllReservations();  
    this.retrieveReservation(this.elementResa);

    //Session
    this.getAllSessions();
    this.retrieveSession(this.elementS);
  }

  //Paginator appliqué sur la table film
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSourceFilm.paginator = this.paginator;
  }

  refreshComponent(){
    this.router.navigate([this.router.url])
 }

  //récupération de l'objet film d'une ligne d'une liste affichée sous forme de tableau
  retrieveFilm(element: Film) {

    this.element = element;
    console.log(this.element, element);
    
  }

  
  //récupération de l'objet room d'une ligne d'une liste affichée sous forme de tableau
  retrieveRoom(element: Room) {

    this.elementR = element;
    console.log(this.element, element);
    
  }

    //récupération de l'objet session d'une ligne d'une liste affichée sous forme de tableau
    retrieveSession(element: Session) {

      this.elementS = element;
      console.log(this.elementS, element);
      
    }
  
    //récupération de l'objet réservation d'une ligne d'une liste affichée sous forme de tableau
    retrieveReservation(element: Reservation) {

      this.elementResa = element;
      console.log(this.elementResa, element);
      
    }

  //getAll()
  getAllFilms() {

    this.filmWebService.getAllFilms().subscribe(
      (data) => {

        console.log('TestWebServiceComponent getAllFilms', data);
        this.filmList = data;
        this.dataSourceFilm = new MatTableDataSource<Film>(data);
        
      },
        (error) => {
          console.error(error);
        }
    );
      }

      //getAll()
  getAllFilmsName() {

    this.filmWebService.getAllFilmsName().subscribe(
      (data) => {

        console.log('TestWebServiceComponent getAllFilms', data);
        this.filmsNameList = data;
        
      },
        (error) => {
          console.error(error);
        }
    );
      }

  getAllUsers() {

    this.usersWebService.getAllUsers().subscribe(
      (data) => {

        console.log('TestWebServiceComponent getAllUsers', data);
        this.usersList = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getAllRooms() {

    this.roomWebService.getAllRooms().subscribe(
      (data) => {

        console.log('TestWebServiceComponent getAllRooms', data);
        this.roomList = data;
        this.dataSourceRoom = new MatTableDataSource<Room>(data);},
        (error) => {
          console.error(error);
        }
    );
      }

  getAllReservations() {

    this.reservationWebService.getAllReservations().subscribe(
      (data) => {

        console.log('TestWebServiceComponent getAllReservation', data);
        this.reservationList = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getAllContacts(){
    this.contactWebService.getAllContacts().subscribe(
      (data) => {

        console.log('TestWebServiceComponent getAllContacts', data);
        this.contactList = data;
        this.dataSourceContact = new MatTableDataSource<Contact>(data)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getAllSessions() {

    this.sessionWebService.getAllSessions().subscribe(
      (data) => {

        console.log('TestWebServiceComponent getAllSessions', data);
        this.sessionList = data;
        this.dataSourceSession = new MatTableDataSource<Session>(data);},
        (error) => {
          console.error(error);
        }
    );
      }

  //add()
  addFilm(formAddFilm : NgForm) {
    
    let film : Film = formAddFilm.value;
    console.log('Contenu du film à add : ' + film);
    formAddFilm.reset();
    this.filmWebService.addFilm(film)
    .subscribe(data => {
      this.getAllFilms();
      this.refreshComponent();
    },
    error => {
      console.log(error);
      alert('Erreur lors de lajout du film');
    });
      }

      //add()
  addSession(formAddSession : NgForm) {
    
    let session : Session = formAddSession.value;
    console.log('Contenu de la ngFormSession : ' + formAddSession.value);
    session.dateTime = this.date;
    console.log('Contenu de la session à add : ' + session.film.name + session.room.name);
    formAddSession.reset();
    this.sessionWebService.addSession(session)
    .subscribe(data => {
      this.getAllSessions();
      this.refreshComponent();
    },
    error => {
      console.log(error);
      alert('Erreur lors de lajout du film');
    });
      }

      //add()
      addSessionFormGroup() {

        
        this.element = <Film> this.sessionAddFormGroup.value;
        this.elementR = <Room> this.sessionAddFormGroup.value;
    
        let sessionFormGroup = new Session(this.element, this.elementR, this.date);
        sessionFormGroup.dateTime = this.date;
        console.log('Contenu de la session à add : ' + this.element.name + this.elementR.name);
        this.sessionWebService.addSession(sessionFormGroup)
        .subscribe(data => {
          this.getAllSessions();
          this.refreshComponent();
        },
        error => {
          console.log(error);
          alert('Erreur lors de lajout du film');
        });
          }



  //update()
  updateFilm(formUpdateFilm: NgForm) {

    let film: Film = formUpdateFilm.value;
    // formUpdateFilm.reset();
    console.log('Contenu du film à update : ' + film.display);
    this.filmWebService.updateFilm(film)
      .subscribe(data => {
        this.getAllFilms();
        this.refreshComponent();
      },
        error => {
          console.log(error);
          alert('Erreur lors de lajout du film');
        });
  }

  //update()
  updateRoom(formUpdateRoom: NgForm) {

    let room: Room = formUpdateRoom.value;
    // formUpdateFilm.reset();
    console.log('Contenu de la salle à update : ' + room.name);
    this.roomWebService.updateRoom(room)
      .subscribe(data => {
        this.getAllRooms();
        this.refreshComponent();
      },
        error => {
          console.log(error);
          alert('Erreur lors de lajout du film');
        });
  }

  //update()
  updateFilmById(formUpdateFilm: NgForm, id: number) {

    const idToSend = id;
    let film: Film = formUpdateFilm.value;
    // formUpdateFilm.reset();
    console.log('Contenu du film à update : ' + film.name + idToSend);
    this.filmWebService.updateFilmById(film, idToSend)
      .subscribe(data => {
        this.getAllFilms();
      this.refreshComponent();
      },
        error => {
          console.log(error);
          alert('Erreur lors de lajout du film');
        });
        this.getAllFilms();
  }
    
  //addList()
  addListFilms() {
  
    this.filmWebService.addListFilm(this.ListFilmSample)
    .subscribe((data: any) => {
    },
      (    error: any) => {
      console.log(error);
      alert('Erreur lors de lajout du film');
    });
      }


  addRoom(formAddRoom : NgForm) {
    let room : Room = formAddRoom.value;
    console.log('Contenu du room à add : ' + room);
    formAddRoom.reset();
    this.roomWebService.addRoom(room).subscribe(
      (data) => {
        this.getAllRooms();
      this.refreshComponent();

        console.log('TestWebServiceComponent addRoom', data);
      }, (error) => {
        console.error(error);
      }
    );
  }

  addReservation() {

    this.reservationWebService.addReservation(this.reservation).subscribe(
      (data) => {

        console.log('TestWebServiceComponent addReservation', data);
      }, (error) => {
        console.error(error);
      }
    );
  }

  //Delete()
  deleteFilmById(Number: number) {

    this.filmWebService.deleteFilmById(Number).subscribe(
      (data) => {
        this.getAllFilms();
        this.refreshComponent();

        console.log('TestWebServiceComponent deleteFilmById()', data);
      },
      (error) => {
        console.error(error);
      }
    );
    this.getAllFilms();
  }

  //Delete()
  deleteSessionById(Number: number) {

    this.sessionWebService.deleteSessionById(Number).subscribe(
      (data) => {
        this.getAllSessions();
        this.refreshComponent();

        console.log('TestWebServiceComponent deleteFilmById()', data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  //DeleteRoom()
  deleteRoomById(Number: number) {

    this.roomWebService.deleteRoomById(Number).subscribe(
      (data) => {
        this.getAllRooms();
      this.refreshComponent();

        console.log('TestWebServiceComponent deleteRoomById()', data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  //Delete()
  deleteContactById(Number: number) {

    this.contactWebService.deleteContactById(Number).subscribe(
      (data) => {

        this.getAllContacts();
        this.refreshComponent();

        console.log('TestWebServiceComponent deleteFilmById()', data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
