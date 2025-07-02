import { Component, OnInit } from '@angular/core';
import { HealthService } from '../health.service';
import { HealthData } from '../health-data.interface';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent implements OnInit {
  healthData: HealthData[] = [];

  constructor(private healthService: HealthService) { }

  ngOnInit(): void {
    this.healthData = this.healthService.getHealthData();
  }
}
