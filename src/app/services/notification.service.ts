import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications : Array<String> = [];

  constructor() { }

  Add(message){
    this.notifications.push(message);
  }

  GetNotifications(){
    return this.notifications;
  }

  Clear(){
    this.notifications.length = 0
  }
}
