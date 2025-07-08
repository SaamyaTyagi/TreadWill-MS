import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentService, Appointment } from '../appointment.service';

@Component({
  selector: 'app-appointment-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css']

})
export class AppointmentDetailComponent implements OnInit{
  isOnline: boolean = true; // Set this based on actual data logic

  appointment?: Appointment;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('username');
    if (username) {
      this.appointment = this.appointmentService.getAppointmentByUsername(username);
      console.log('Loaded appointment:', this.appointment);
    }
  }

  navigateToSchedule() {
    this.router.navigate(['/schedule']);
  }
  attachedFiles: { name: string, file: File }[] = [];

  @ViewChild('fileInput') fileInput!: ElementRef;

  addFile(): void {
    (this.fileInput.nativeElement as HTMLInputElement).click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.attachedFiles.push({ name: file.name, file });
    }
    input.value = '';
  }

  removeFile(index: number): void {
    this.attachedFiles.splice(index, 1);
  }
activities: { name: string, description: string }[] = [];
removeActivity(index: number): void {
  this.activities.splice(index, 1);
}

 
}
