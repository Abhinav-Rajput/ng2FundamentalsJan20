import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { EventsAppComponent }  from './events-app.component'
import {MeetingsListComponent }  from './meetings/meetings-list.component'
import {MeetingThumbnailComponet} from './meetings/meeting-thumbnail.component'
import {NavBarComponent} from './nav/navbar.component'
@NgModule({
    imports:[BrowserModule],
    declarations:[EventsAppComponent,MeetingsListComponent,MeetingThumbnailComponet,NavBarComponent],
    bootstrap: [EventsAppComponent]
})

export class AppModule {}