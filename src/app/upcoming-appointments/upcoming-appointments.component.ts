import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppointmentService} from '../appointment.service';
import { Appointment } from '../appointment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upcoming-appointments',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './upcoming-appointments.component.html',
  styleUrl: './upcoming-appointments.component.css'
})
export class UpcomingAppointmentsComponent implements OnInit{
 appointments: Appointment[] = [];
 
  constructor(
    private router: Router,
    private appointmentService: AppointmentService // ✅ Inject the shared service
  ) {}

  ngOnInit(): void {
    this.appointments = this.appointmentService.appointmentData(); // ✅ Get saved appointments
    // console.log('Loaded appointments:', this.appointments); // optional debug
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
