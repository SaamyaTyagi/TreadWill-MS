import { Component, AfterViewInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-previous-appointments',
  standalone: true,
  imports: [RouterModule,FormsModule, CommonModule],
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
  searchTerm: string = '';

  appointments = [
    {
      date: '1st June, 2025',
      username: 'username',
      initials: 'US',
      title: 'Title of the appointment',
      status: 'online'
    },
    {
      date: '1st June, 2025',
      username: 'username1',
      initials: 'US',
      title: 'Title of the appointment',
      status: 'offline'
    },
    {
      date: '31st May, 2025',
      username: 'username2',
      initials: 'US',
      title: 'Title of the appointment',
      status: 'offline'
    }
  ];

  // Group appointments by date and filter by search term
  filteredAppointmentsGrouped() {
    const grouped: { [date: string]: any[] } = {};

    this.appointments.forEach(appt => {
      const matchesSearch = appt.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            appt.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            appt.date.toLowerCase().includes(this.searchTerm.toLowerCase());

      if (matchesSearch) {
        if (!grouped[appt.date]) {
          grouped[appt.date] = [];
        }
        grouped[appt.date].push(appt);
      }
    });

    return Object.entries(grouped); // [ [date, appointments[]], ... ]
  }

}


