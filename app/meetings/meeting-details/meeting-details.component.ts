import {Component, OnInit} from '@angular/core'
import {MeetingService} from '../shared/meeting-service'
@Component({
    templateUrl:'/app/meetings/meeting-details/meeting-details.component.html',
    styles:[`
    .container {padding-left:20px; padding-right:20px;} 
    .meeting-image {height:100px}`]
})
export class MeetingDetailsComponent implements OnInit{
    event:any
    constructor(private meetingService: MeetingService){

    }
  ngOnInit(){
    this.meetingService.getMeeting(1)
  }
}