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
import { NgForm } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-admin-parent',
  templateUrl: './admin-parent.component.html',
  styleUrls: ['./admin-parent.component.scss']
})
export class AdminParentComponent implements OnInit, AfterViewInit {

  //initialisation liste de filmms
  filmList: any[] = [];
  roomList: any[] = [];
  reservationList: any[] = [];
  contactList: any[]=[];
  usersList: any[] = [];
  sessionList: any[] = [];
  date = new Date();

  //récupération de l'objet film d'une ligne
  element = new Film("", 0, "", "", "", "", "", "", 0);

  //Autre
  Number1: number = 0;
  formAddFilm!: NgForm;
  formUpdateFilm!: NgForm;

  //Tableau Stats
  surveyData = [
    { name: 'Janvier', value: 105 },
    { name: 'Fevrier', value: 10 },
    { name: 'mars', value: 15 },
    { name: 'avril', value: 2 },
    { name: 'mai', value: 20 }
  ];

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  //Angular material table
  displayedColumnsFilm: string[] = ['id', 'name', 'duration', 'filmVersion', 'display', 'typeFilm', 'synopsis', 'userComment', 'director', 'pegi', 'deleteAction', 'updateAction'];
  dataSourceFilm = new MatTableDataSource<Film>(this.filmList);

  displayedColumnsRoom: string[] = ['name', 'sitNumber', 'maxCapacity', 'audioSystem', 'deleteAction', 'updateAction'];
  dataSourceRoom = new MatTableDataSource<Room>(this.roomList);

  displayedColumnsReservation: string[] = ['name', 'price', 'idSession', 'idSession', 'idUser', 'idAccount', 'deleteAction', 'updateAction'];
  dataSourceReservation = new MatTableDataSource<Reservation>(this.reservationList);

  displayedColumnsContact: string[] = ['firstName', 'lastName', 'email', 'message'];
  dataSourceContact = new MatTableDataSource<Contact>(this.contactList);

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
  reservation = new Reservation("reservationTest", 15, this.sessionResa, this.userResa, 89);
  
  constructor(
     public dialog: MatDialog,
     private filmWebService: FilmWebService,
     private usersWebService: UsersWebService,
     private roomWebService: RoomWebService,
     private reservationWebService: ReservationWebService,
     private ContactWebService : ContactWebService
    ) { }

  ngOnInit(): void {

    //Films
    this.getAllFilms();
    this.deleteFilmById(this.Number1);
    this.retrieveFilm(this.element);

    //Users
    this.getAllUsers();  
    
    //Rooms
    this.getAllRooms();
    this.addRoom(); 
    
    //Reservation
    this.getAllReservations(); 
    this.addReservation(); 

    //Contact 
    this.getAllContacts();
    
  }

  //Paginator appliqué sur la table film
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSourceFilm.paginator = this.paginator;
  }

  //récupération de l'objet film d'une ligne d'une liste affichée sous forme de tableau
  openDialogUpdateFilm() {
    const dialogRef = this.dialog.open(UpdateDialogAdminComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //récupération de l'objet film d'une ligne d'une liste affichée sous forme de tableau
  retrieveFilm(element: Film) {

    this.element = element;
    console.log(this.element, element);
    
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
    this.ContactWebService.getAllContacts().subscribe(
      (data) => {

        console.log('TestWebServiceComponent getAllContacts', data);
        this.contactList = data;
      },
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
    console.log('Contenu du film à update : ' + film + idToSend);
    this.filmWebService.updateFilmById(film, idToSend)
      .subscribe(data => {
      },
        error => {
          console.log(error);
          alert('Erreur lors de lajout du film');
        });
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


  addRoom() {
    const roomToAdd = new Room("Margou", 100, 50, "Dolby");
    this.roomWebService.addRoom(roomToAdd).subscribe(
      (data) => {

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

        console.log('TestWebServiceComponent deleteFilmById()', data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}





















@Component({
  selector: 'app-update-dialog-admin',
  templateUrl: './dialog-content-example-dialog.html',
})
export class UpdateDialogAdminComponent {

  surveyData = [
    { name: 'Janvier', value: 105 },
    { name: 'Fevrier', value: 10 },
    { name: 'mars', value: 15 },
    { name: 'avril', value: 2 },
    { name: 'mai', value: 20 }
  ];

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  //initialisation liste de filmms
  filmList: any[] = [];
  roomList: any[] = [];
  reservationList: any[] = [];
  usersList: any[] = [];
  sessionList: any[] = [];

  //récupération de l'objet film d'une ligne
  element = new Film("", 0, "", "", "", "", "", "", 0);

  //Autre
  Number1: number = 0;
  formAddFilm!: NgForm;
  formUpdateFilm!: NgForm;

  //Angular material table
  displayedColumnsFilm: string[] = ['id', 'name', 'duration', 'filmVersion', 'display', 'typeFilm', 'synopsis', 'userComment', 'director', 'pegi', 'deleteAction', 'updateAction'];
  dataSourceFilm = new MatTableDataSource<Film>(this.filmList);

  displayedColumnsRoom: string[] = ['name', 'sitNumber', 'maxCapacity', 'audioSystem', 'deleteAction', 'updateAction'];
  dataSourceRoom = new MatTableDataSource<Room>(this.roomList);

  displayedColumnsReservation: string[] = ['name', 'price', 'idSession', 'idSession', 'idUser', 'idAccount', 'deleteAction', 'updateAction'];
  dataSourceReservation = new MatTableDataSource<Reservation>(this.reservationList);

  //Liste de films pour échantillon

  film1 = new Film("Forrest Gump", 140, "Vo", "Dolby", "Comédie", "Quelques décennies d'histoire américaine, des années 1940 à la fin du XXème siècle, à travers le regard et l'étrange odyssée d'un homme simple et pur, Forrest Gump.", "", "Robert Zemeckis", 10);
  film2 = new Film("La Liste de Schindler", 195, "Vo", "Dolby", "Historique, Guerre", "Evocation des années de guerre d'Oskar Schindler, industriel autrichien rentré à Cracovie en 1939 avec les troupes allemandes. Il va, tout au long de la guerre, protéger des juifs en les faisant travailler dans sa fabrique.", "","Steven Spielberg", 12);
  film3 = new Film("La Ligne verte", 189, "Vo", "Dolby", "Policier, Fantastique", "Paul Edgecomb, Gardien-chef du pénitencier de Cold Mountain en 1935, était chargé de veiller au bon déroulement des exécutions capitales. Parmi les prisonniers se trouvait un colosse du nom de John Coffey", "", "Frank Darabont", 12);
  film4 = new Film("Le Seigneur des anneaux : le retour du roi", 201, "Vo", "Dolby", "Aventure, Fantastique", "Tandis que les ténèbres se répandent sur la Terre du Milieu, Aragorn se révèle être l'héritier caché des rois antiques. Quant à Frodon, toujours tenté par l'Anneau, il voyage à travers les contrées ennemies, se reposant sur Sam et Gollum", "", "Peter Jackson", 12);
  film5 = new Film("Le Roi Lion", 89, "VF", "Dolby", "Animation", "Le long combat de Simba le lionceau pour accéder à son rang de roi des animaux, après que le fourbe Scar, son oncle, a tué son père et pris sa place.", "", "Roger Allers", 6);
  film6 = new Film("Pulp Fiction", 149, "VF", "Dolby", "Policier, Thriller", "L'odyssée sanglante et burlesque de petits malfrats dans la jungle de Hollywood à travers trois histoires qui s'entremêlent.", "", "Quentin Tarantino", 12);

  ListFilmSample: Film[] = [this.film1, this.film2, this.film3, this.film4, this.film5, this.film6];

  
  
  constructor(
     public dialog: MatDialog,
     private filmWebService: FilmWebService,
     private usersWebService: UsersWebService,
     private roomWebService: RoomWebService,
     private reservationWebService: ReservationWebService
    ) { }

  ngOnInit(): void {

    //Films
    this.getAllFilms();
    this.addFilm(this.formAddFilm);
    this.updateFilm(this.formUpdateFilm);
    this.deleteFilmById(this.Number1);
    this.retrieveFilm(this.element);
    this.addListFilms();

    //Users
    this.getAllUsers();  
    
    //Rooms
    this.getAllRooms();
    this.addRoom(); 
    
    //Reservation
    this.getAllReservations(); 
  }

  openDialog() {
    const dialogRef = this.dialog.open(UpdateDialogAdminComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //récupération de l'objet film d'une ligne d'une liste affichée sous forme de tableau
  retrieveFilm(element: Film) {

    this.element = element;
    console.log(this.element, element);
    
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

  //add()
  addFilm(formAddFilm : NgForm) {
    
    let film : Film = formAddFilm.value;
    console.log('Contenu du film à add : ' + film);
    formAddFilm.reset();
    this.filmWebService.addFilm(film)
    .subscribe(data => {
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
      },
        error => {
          console.log(error);
          alert('Erreur lors de lajout du film');
        });
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


  addRoom() {
    const roomToAdd = new Room("Margou", 100, 50, "Dolby");
    this.roomWebService.addRoom(roomToAdd).subscribe(
      (data) => {

        console.log('TestWebServiceComponent addRoom', data);
      }, (error) => {
        console.error(error);
      }
    );
  }

  //Delete()
  deleteFilmById(Number: number) {

    this.filmWebService.deleteFilmById(Number).subscribe(
      (data) => {

        console.log('TestWebServiceComponent deleteFilmById()', data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}