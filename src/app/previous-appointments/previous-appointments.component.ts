import { Component, AfterViewInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-previous-appointments',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './previous-appointments.component.html',
  styleUrl: './previous-appointments.component.css'
})
export class PreviousAppointmentsComponent implements AfterViewInit {
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

  ngAfterViewInit(): void {
    const searchInput = document.getElementById('appointmentSearch') as HTMLInputElement;
    const appointments = document.querySelectorAll('.appointment-box');

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        const term = searchInput.value.toLowerCase();
        appointments.forEach(appt => {
          const text = appt.textContent?.toLowerCase() || '';
          (appt as HTMLElement).style.display = text.includes(term) ? '' : 'none';
        });
      });
    }
  }
}


