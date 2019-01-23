import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.less']
})
export class NotificationsComponent implements OnInit {

  notifications : Array<String>

  constructor(private notificationsService: NotificationService ) { }

  ngOnInit() {
    this.notifications = this.notificationsService.GetNotifications()
  }

  removeAllNotification(){
    this.notificationsService.Clear();
  }

}
