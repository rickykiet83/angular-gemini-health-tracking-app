import { Component } from '@angular/core';
import { HealthService } from '../health.service';
import { HealthData } from '../health-data.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-track',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './track.component.html',
  styleUrl: './track.component.css'
})
export class TrackComponent {
  healthData: HealthData = {
    date: '',
    steps: 0,
    waterIntake: 0,
    sleepHours: 0
  };

  constructor(private healthService: HealthService) { }

  onSubmit() {
    this.healthService.addHealthData(this.healthData);
    this.healthData = {
      date: '',
      steps: 0,
      waterIntake: 0,
      sleepHours: 0
    };
    alert('Health data added!');
  }
}
