import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-upcoming-appointments',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './upcoming-appointments.component.html',
  styleUrl: './upcoming-appointments.component.css'
})
export class UpcomingAppointmentsComponent {
  constructor(private router: Router) {}

  navigateToSchedule() {
    this.router.navigate(['/schedule']);
  }
  navigateToPreviousTab() {
    this.router.navigate(['/previous']);
  }
}
