import { Component, OnInit } from '@angular/core';
import { PlansService } from '../../service/plans.service';

@Component({
  selector: 'app-active-plan',
  templateUrl: './active-plan.component.html',
  styleUrls: ['./active-plan.component.css'] // Fixed 'styleUrl' to 'styleUrls'
})
export class ActivePlanComponent implements OnInit {
  user: any; // Make sure to use 'user' to match the HTML

  constructor(private service: PlansService) { }

  ngOnInit(): void {
    this.service.getCurrentPlan().subscribe({
      next: (data) => {
       
        this.user = data; // Adjust to match your data structure
      },
      error: (err) => {
        console.error('Error fetching plan:', err);
      }
    });
  }

  calculateExpiration(timestamp: string): Date {
    const now = new Date();
    const planDate = new Date(timestamp);
    const expirationDate = new Date(planDate.getTime() + (this.getDurationInMillis() * 1000));
    return expirationDate;
  }

  private getDurationInMillis(): number {
    // Assuming duration is in days
    const durationDays = this.user?.plans[0]?.duration || 0;
    return durationDays * 24 * 60 * 60; // Duration in seconds
  }
}
