import {Component, OnInit}  from '@angular/core'
import{MeetingService} from './shared/meeting-service'
import {ToastrService} from '../common/toastr.service'
@Component({

    template:`
      <div>
    <h2> Upcomming Angular Events </h2>
    <hr/>   
    <div class="row">
    <div *ngFor="let meeting of meetings" class="col-md-5">
    <meeting-thumbnail (click)="handleThumbnailClick(meeting.name)" [events]="meeting" ></meeting-thumbnail> 
    </div>  
    </div>
    </div>
    `,
    styles:[`
    .well div {color: red;}
    `]
})

export class MeetingsListComponent implements OnInit {
  meetings: any[]
  constructor(private meetingService: MeetingService,private toastr:
  ToastrService){    
   
  }  

  ngOnInit()   {
     this.meetings = this.meetingService.getMeetings()
  }
  handleThumbnailClick(meetingName){
    this.toastr.success(meetingName)
  }
}