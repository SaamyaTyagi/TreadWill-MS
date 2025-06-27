import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-previous-appointments',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './previous-appointments.component.html',
  styleUrl: './previous-appointments.component.css'
})
export class PreviousAppointmentsComponent {
  constructor(private router: Router) {}
  navigateToSchedule() {
    this.router.navigate(['/schedule']);
  }
  navigateToAppointment(username: string) {
  this.router.navigate(['/appointment-details', username]);
 }
  navigateToUpcomingTab() {
    this.router.navigate(['/']);
  }



}

