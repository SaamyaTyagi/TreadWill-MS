import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-detail.component.html',
  styleUrl: './appointment-detail.component.css'

})
export class AppointmentDetailComponent {
  isOnline: boolean = true; // Set this based on actual data logic

  meetingLink: string = 'https://meet.example.com/xyz';
  meetingLocation: string = 'Room 203, Wellness Block, Main Building';
  constructor(private router: Router) {}
  navigateToSchedule() {
    this.router.navigate(['/schedule']);
  }
 
}
