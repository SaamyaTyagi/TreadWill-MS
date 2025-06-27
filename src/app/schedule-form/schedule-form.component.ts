import { Component, AfterViewInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-schedule-form',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']  // ✅ Corrected from styleUrl → styleUrls
})
export class ScheduleFormComponent implements AfterViewInit {
  constructor(private router: Router) {}

  navigateToUpcomingTab() {
    this.router.navigate(['/']);
  }

  ngAfterViewInit(): void {
    // File upload handler
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    const fileList = document.getElementById('fileList') as HTMLElement;

    fileInput?.addEventListener('change', () => {
      fileList.innerHTML = '';
      Array.from(fileInput.files || []).forEach(file => {
        const div = document.createElement('div');
        div.textContent = '📄 ' + file.name;
        fileList.appendChild(div);
      });
    });

    // Mode toggle handler
    const onlineRadio = document.getElementById('online') as HTMLInputElement;
    const offlineRadio = document.getElementById('offline') as HTMLInputElement;

    [onlineRadio, offlineRadio].forEach(radio => {
      radio?.addEventListener('change', () => this.toggleMode());
    });
  }

  toggleMode(): void {
    const isOnline = (document.getElementById('online') as HTMLInputElement)?.checked;
    const container = document.getElementById('conditionalInput') as HTMLElement;

    container.innerHTML = '';
    container.style.display = 'block';

    if (isOnline) {
      container.innerHTML = `
        <label class="form-label">Meeting Link:</label>
        <input type="url" class="form-control rounded-pill" placeholder="Enter the meeting link" />
      `;
    } else {
      container.innerHTML = `
        <label class="form-label">Location:</label>
        <input type="text" class="form-control rounded-pill" placeholder="Enter location or select on Google Maps" />
      `;
    }
  }
}
