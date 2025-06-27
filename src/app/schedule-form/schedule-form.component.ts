import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-schedule-form',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './schedule-form.component.html',
  styleUrl: './schedule-form.component.css'
})
export class ScheduleFormComponent {
  constructor(private router: Router) {}
  navigateToUpcomingTab() {
    this.router.navigate(['/']);
  }

}
