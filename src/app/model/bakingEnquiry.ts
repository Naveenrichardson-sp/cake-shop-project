export interface BakingEnquiry {
  id: string;
  name: string;
  fatherName?: string;
  motherName?: string;
  contactNo: string;
  email: string;
  presentAddress?: string;
  dateOfBirth?: string; // ISO date string
  nationalId?: string;
  studentType?: string;
  recentQualifiedInstitution?: string;
  recentQualificationYear?: number;
  highestQualification?: string;
  courseBatchPreference?: string;
  status?: string;
  courseType: string;
  courseCategory?: string;
  consentProvided?: boolean;
  paymentCompleted?: boolean;
  createdDate?: string; // ISO date string
  updatedDate?: string; // ISO date string
  courseId?: string;
  remarks: string;
}

export interface BakingEnquiryResponse {
  success: boolean;
  message: string;
  enquiry?: BakingEnquiry;
}