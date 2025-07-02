import { Injectable } from '@angular/core';
import { HealthData } from './health-data.interface';

@Injectable({
  providedIn: 'root'
})
export class HealthService {
  private healthData: HealthData[] = [];

  constructor() {
    // Dummy data
    this.healthData.push(
      { date: '2025-07-01', steps: 8000, waterIntake: 2.5, sleepHours: 7 },
      { date: '2025-07-02', steps: 9500, waterIntake: 3, sleepHours: 7.5 },
      { date: '2025-07-03', steps: 7000, waterIntake: 2, sleepHours: 6.5 }
    );
  }

  addHealthData(data: HealthData) {
    this.healthData.push(data);
  }

  getHealthData(): HealthData[] {
    return [...this.healthData];
  }
}
