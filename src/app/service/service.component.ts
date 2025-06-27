import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  modalTitle = '';
  modalContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  openModal(type: string) {
    if (type === 'Birthday Cake') {
      this.modalTitle = 'Birthday Cake';
      this.modalContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
    } else if (type === 'Wedding Cake') {
      this.modalTitle = 'Wedding Cake';
      this.modalContent = 'Detailed info about Wedding Cakes...';
    } else if (type === 'Custom Cake') {
      this.modalTitle = 'Custom Cake';
      this.modalContent = 'Detailed info about Custom Cakes...';
    }
  }

}
