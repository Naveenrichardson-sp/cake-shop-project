import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, AfterViewInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Initialize the testimonial carousel
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      margin: 45,
      dots: true,
      loop: true,
      center: true,
      responsive: {
        0:{
          items:1
        },
        576:{
          items:1
        },
        768:{
          items:2
        },
        992:{
          items:3
        }
      }
    });
  }

}
