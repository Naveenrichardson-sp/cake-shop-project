import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakingEnquiryComponent } from './baking-enquiry.component';

describe('BakingEnquiryComponent', () => {
  let component: BakingEnquiryComponent;
  let fixture: ComponentFixture<BakingEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakingEnquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BakingEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
