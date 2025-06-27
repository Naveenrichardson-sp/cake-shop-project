import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../dataService/data.service';
import { BakingEnquiry } from '../model/bakingEnquiry';

@Component({
  selector: 'app-baking-enquiry',
  templateUrl: './baking-enquiry.component.html',
  styleUrls: ['./baking-enquiry.component.css']
})
export class BakingEnquiryComponent implements OnInit {

  bakingForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {

    this.bakingForm = this.fb.group({
          name: ['', Validators.required],
          contactNo: ['', [
            Validators.required,
            Validators.pattern('^[0-9]*$'), // Only numbers
            Validators.minLength(10),
            Validators.maxLength(10)        // Max 10 digits
          ]
          ],
          courseType: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          remarks: ['']
        });
        

  }

  onSubmit() {
     if (this.bakingForm.valid) {
          console.log('Form Data:', this.bakingForm.value);
          const enquiry: BakingEnquiry = this.bakingForm.value as BakingEnquiry;
          this.dataService.bakingEnquiry(enquiry).subscribe({
            next: (response) => {
              console.log('Enquiry submitted successfully:', response);
            },
            error: (error) => {
              console.error('Error submitting enquiry:', error);
            }
          });
          this.bakingForm.reset({
            name: '',
            contactNo: '',
            courseType: '', // This will select the placeholder
            email: '',
            remarks: '',
          });
          this.submitted = true;
          setTimeout(() => {
            this.submitted = false;
          }, 2000); // Success message shows for 2 seconds
        } else {
          this.bakingForm.markAllAsTouched();
          console.log('Form is invalid');
        }
      }
  }


