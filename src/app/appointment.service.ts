import { Injectable, signal } from '@angular/core';

export interface Appointment {
  username: string;
  title: string;
  date: string;
  time: string;
  mode: 'online' | 'offline';
  locationOrLink: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {


  private _appointmentData = signal<Appointment[]>([]);

  appointmentData = this._appointmentData.asReadonly();  // read-only for other components

  updateFormData(data: Appointment) {
    console.log('new appt data', data);
    this._appointmentData.update(curr => [...curr, data]);
  console.log('updated appt data', this.appointmentData());
  }

  getAppointmentByUsername(username: string): Appointment | undefined {
    return this._appointmentData().find(appt => appt.username === username);
  }
}
