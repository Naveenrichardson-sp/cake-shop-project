import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataService/data.service';
import { Order } from '../model/order';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  orders: Order[] = [];
  filterOccasion: string = '';
  startDate: Date | null = null;
  endDate: Date | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getOrders().subscribe({
      next: (data) => this.orders = data,
      error: (err) => { /* handle error here */ }
    });
  }

get filteredOrders(): Order[] {
  return this.orders.filter(order => {
    // Occasion filter (case-insensitive)
    const matchesOccasion = this.filterOccasion
      ? order.eventOccasion?.toLowerCase() === this.filterOccasion.toLowerCase()
      : true;

    // Date filter
    const orderDate = new Date(order.eventDate);
    const start = this.startDate ? new Date(this.startDate) : null;
    const end = this.endDate ? new Date(this.endDate) : null;
    const afterStart = start ? orderDate >= start : true;
    const beforeEnd = end ? orderDate <= end : true;

    return matchesOccasion && afterStart && beforeEnd;
  });
}

clearFilters() {
  // this.startDate = '';
  // this.endDate = '';
  this.filterOccasion = '';
}

}