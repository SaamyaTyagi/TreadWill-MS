import { Routes } from '@angular/router';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';   
import { UpcomingAppointmentsComponent } from './upcoming-appointments/upcoming-appointments.component'; 
import { PreviousAppointmentsComponent } from './previous-appointments/previous-appointments.component';

export const routes: Routes = [
  { path: '', component: UpcomingAppointmentsComponent },
  { path: 'schedule', component: ScheduleFormComponent },
  { path: 'previous', component: PreviousAppointmentsComponent }
];
