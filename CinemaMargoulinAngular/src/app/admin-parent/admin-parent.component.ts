import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { FilmWebService } from '../shared/webservices/film.webservice';
import { AccountWebService } from '../shared/webservices/account.webservice';
import { UsersWebService } from '../shared/webservices/users.webservice';
import { RoomWebService } from '../shared/webservices/room.webservice';
import { ReservationWebService } from '../shared/webservices/reservation.webservice';
import { Film } from '../shared/models/film.model';
import { Account } from '../shared/models/account.model';
import { User } from '../shared/models/user.model';
import { Room } from '../shared/models/room.model';
import { Reservation } from '../shared/models/reservation.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-parent',
  templateUrl: './admin-parent.component.html',
  styleUrls: ['./admin-parent.component.scss']
})
export class AdminParentComponent implements OnInit {

  //initialisation liste de filmms
  filmList: any[] = [];
  roomList: any[] = [];
  reservationList: any[] = [];
  usersList: any[] = [];
  sessionList: any[] = [];

  //initialisation d'un film
  film = new Film("kill Loic",1,"Vo","dispaly", "typeFilm", "c'est bien", "Schwarzeneger", 18);

  //Autre
  Number1: number = 0;
  formAddFilm!: NgForm;

  //Angular material table
  displayedColumnsFilm: string[] = ['name', 'duration', 'filmVersion', 'display', 'typeFilm', 'comment', 'director', 'pegi', 'deleteAction', 'updateAction'];
  dataSourceFilm = new MatTableDataSource<Film>(this.filmList);

  displayedColumnsRoom: string[] = ['name', 'sitNumber', 'maxCapacity', 'audioSystem', 'deleteAction', 'updateAction'];
  dataSourceRoom = new MatTableDataSource<Room>(this.roomList);

  displayedColumnsReservation: string[] = ['name', 'price', 'idSession', 'idSession', 'idUser', 'idAccount', 'deleteAction', 'updateAction'];
  dataSourceReservation = new MatTableDataSource<Reservation>(this.reservationList);

  constructor(
     private filmWebService: FilmWebService,
     private usersWebService: UsersWebService,
     private roomWebService: RoomWebService,
     private reservationWebService: ReservationWebService
    ) { }

  ngOnInit(): void {

    //Films
    this.getAllFilms();
    this.addFilm(this.formAddFilm); 
    this.deleteFilmById(this.Number1);

    //Users
    this.getAllUsers();  
    
    //Rooms
    this.getAllRooms();
    this.addRoom(); 
    
    //Reservation
    this.getAllReservations(); 
    this.addReservation(); 
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
    formAddFilm.reset();
    this.filmWebService.addFilm(film)
    .subscribe(data => {
    },
    error => {
      console.log(error);
      alert('Erreur lors de lajout du film');
    });
      }


  addRoom() {
    const roomToAdd = new Room(1, "Margou", 100, 50, "Dolby");
    this.roomWebService.addRoom(roomToAdd).subscribe(
      (data) => {

        console.log('TestWebServiceComponent addRoom', data);
      }, (error) => {
        console.error(error);
      }
    );
  }

  addReservation() {
    const ReservationToAdd = new Reservation(1, "NezhaResa", 8, 2, 12, 13);
    this.reservationWebService.addReservation(ReservationToAdd).subscribe(
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
