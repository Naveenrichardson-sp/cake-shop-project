export interface BakingEnquiry {
  id?: string
  name: string;
  phoneNumber: string;
  email?: string;
  course: string;
  message: string;
}

export interface BakingEnquiryResponse {
  success: boolean;
  message: string;
  enquiry?: BakingEnquiry;
}