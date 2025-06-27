import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 ngAfterViewInit(): void {
  // Initialize the product gallery carousel
  $(".product-gallery-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 45,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  });

  // Next/Prev button handlers
  $('#gallery-next').click(function() {
    $('.product-gallery-carousel').trigger('next.owl.carousel');
  });
  $('#gallery-prev').click(function() {
    $('.product-gallery-carousel').trigger('prev.owl.carousel');
  });
}

}
