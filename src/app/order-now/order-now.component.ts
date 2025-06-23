import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../dataService/data.service';
import { Order } from '../model/order';
@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.css']
})
export class OrderNowComponent implements OnInit {

  orderForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {

   this.orderForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      eventOccasion: ['', Validators.required],
      eventDate: ['', Validators.required],
      cakeType: ['', Validators.required],
      cakeWeight: ['', Validators.required],
      cakeCard: ['']
    });

  }

onSubmit() {
  if (this.orderForm.valid) {
    alert('Order submitted successfully!');
    this.submitted = true;
    const order: Order = this.orderForm.value;
    this.dataService.submitOrder(order).subscribe({
      next: (response) => {
        this.submitted = true;
        console.log('Order submitted successfully:', response);
        this.orderForm.reset();
      },
      error: (err) => {
        // Handle error
      }
    });
  } else {
    this.orderForm.markAllAsTouched();
  }
}

}
