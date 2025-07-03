import { Component, ViewChild, ElementRef } from '@angular/core';
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
  activities: string[] = [
  'Schema Therapy 1.1',
  'Introduction to safety practices'
];

removeActivity(index: number): void {
  this.activities.splice(index, 1);
}

 
}
