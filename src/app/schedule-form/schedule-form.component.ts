import { Component, AfterViewInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../appointment.service';
import { FormsModule } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-schedule-form',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']  
})
export class ScheduleFormComponent implements AfterViewInit {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  @ViewChild('fileList') fileList!: ElementRef<HTMLElement>;
  @ViewChild('online') onlineRadio!: ElementRef<HTMLInputElement>;

  selectedFileNames: string[] = [];
  showConditionalInput = false;
  isOnlineMode = false;
  username = '';
  title = '';
  date = '';
  time = '';
  locationOrLink = '';

  constructor(
    private router: Router,
    private appointmentService: AppointmentService,
  ) {}


  scheduleAppointment() {
    this.appointmentService.updateFormData
    ({
      username: this.username,
      title: this.title,
      date: this.date,
      time: this.time,
      mode: this.isOnlineMode ? 'online' : 'offline',
      locationOrLink: this.locationOrLink
    });
 
    this.router.navigate(['/']);
    // this.router.navigate(['/upcoming-appointments']);
  }

  showFileNames(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFileNames = Array.from(input.files).map(file => file.name);
    }
  }

  navigateToUpcomingTab() {
    this.router.navigate(['/']);
  }

  ngAfterViewInit(): void {
    const input = this.fileInput.nativeElement;
    const list = this.fileList.nativeElement;

    input.addEventListener('change', () => {
      list.innerHTML = '';
      Array.from(input.files || []).forEach(file => {
        const div = document.createElement('div');
        div.textContent = '📄 ' + file.name;
        list.appendChild(div);
      });
    });
  }

  toggleMode(): void {
    this.isOnlineMode = this.onlineRadio.nativeElement.checked;
    this.showConditionalInput = true;
  }
}
