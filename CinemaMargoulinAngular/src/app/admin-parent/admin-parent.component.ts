import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-admin-parent',
  templateUrl: './admin-parent.component.html',
  styleUrls: ['./admin-parent.component.scss']
})
export class AdminParentComponent implements OnInit {

  filmList: any[] = [];
  usersList: any[] = [];
  reservationList: any[] = [];
  roomList: any[] = [];
  sessionList: any[] = [];

  constructor(
     private filmWebService: FilmWebService,
     private usersWebService: UsersWebService,
     private roomWebService: RoomWebService,
     private reservationWebService: ReservationWebService,

    
    ) { }

  ngOnInit(): void {

    //Films
    this.getAllFilms();
    this.addFilm(); 

    //Users
    this.getAllUsers();  
    
    //Rooms
    this.getAllRooms();
    this.addRoom(); 
    
    //Reservation
    this.getAllReservations(); 
    this.addReservation(); 
  }

  getAllFilms() {

    this.filmWebService.getAllFilms().subscribe(
      (data) => {

        console.log('TestWebServiceComponent getAllFilms', data);
        this.filmList = data;},
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
        this.roomList = data;},
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

  addFilm() {
    const filmToAdd = new Film(1, "kill Loic",1,"Vo","dispaly");
    this.filmWebService.addFilm(filmToAdd).subscribe(
      (data) => {

         console.log('TestWebServiceComponent addFilm', data);
          }, (error) => {
            console.error(error);
          }
        );
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

}


