import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppointmentService} from '../appointment.service';
import { Appointment } from '../appointment.service';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common'; // Required for *ngFor
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-upcoming-appointments',
  standalone: true,
  imports: [RouterModule, CommonModule, NgFor,
    NgIf ],
  templateUrl: './upcoming-appointments.component.html',
  styleUrl: './upcoming-appointments.component.css'
})
export class UpcomingAppointmentsComponent implements OnInit{
 appointments: Appointment[] = [];
 appointmentsByDate: { [date: string]: any[] } = {};
 
  constructor(
    private router: Router,
    private appointmentService: AppointmentService //  Inject the shared service
  ) {}

  ngOnInit(): void {
    this.appointments = this.appointmentService.appointmentData(); //  Get saved appointments
    // console.log('Loaded appointments:', this.appointments); // optional debug
    this.appointmentsByDate = this.appointments.reduce((acc, appt) => {
    const dateStr = new Date(appt.date).toDateString();  // groups by date only
    if (!acc[dateStr]) {
      acc[dateStr] = [];
    }
    acc[dateStr].push(appt);
    return acc;
  }, {} as { [date: string]: any[] });
  }

  navigateToSchedule() {
    this.router.navigate(['/schedule']);
  }

  navigateToPreviousTab() {
    this.router.navigate(['/previous']);
  }

  navigateToAppointment(username: string) {
    this.router.navigate(['/appointment-details', username]);
  }
}
