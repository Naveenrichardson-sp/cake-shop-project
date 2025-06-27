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
      phoneNumber: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$'), // Only numbers
        Validators.minLength(10),
        Validators.maxLength(10)        // Max 10 digits
      ]
      ],
      eventOccasion: ['', Validators.required],
      eventDate: ['', Validators.required],
      cakeType: ['', Validators.required],
      cakeWeight: ['', Validators.required],
      cakeCard: ['']
    });

  }

  onSubmit() {
    if (this.orderForm.valid) {
      console.log('Form Data:', this.orderForm.value);
      const order: Order = this.orderForm.value as Order;
      this.dataService.submitOrder(order).subscribe({
        next: (response) => {
          console.log('Order submitted successfully:', response);
        },
        error: (error) => {
          console.error('Error submitting order:', error);
        }
      });
      this.orderForm.reset({
        name: '',
        phoneNumber: '',
        eventOccasion: '', // This will select the placeholder
        eventDate: '',
        cakeType: '',
        cakeWeight: '',
        cakeCard: ''
      });
      this.submitted = true;
      setTimeout(() => {
        this.submitted = false;
      }, 2000); // Success message shows for 2 seconds
    } else {
      this.orderForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }
}
