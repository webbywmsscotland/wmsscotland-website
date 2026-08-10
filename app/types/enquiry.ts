export type EnquiryStatus =
  | "new"
  | "contacted"
  | "quoted"
  | "accepted"
  | "completed"
  | "cancelled";

export interface Enquiry {
  id: string;

  createdAt: string;

  status: EnquiryStatus;

  customer: {
    name: string;
    phone: string;
    email: string;
  };

  vehicle: {
    registration: string;
    make: string;
    model: string;
    year?: string;
    mileage?: string;
  };

  workType: string[];

  description: string;

  vehicleLocation:
    | "Home"
    | "Work"
    | "Roadside"
    | "Other";

  drivable:
    | "Yes"
    | "No"
    | "Not Sure";

  preferredTime:
    | "ASAP"
    | "Morning"
    | "Afternoon"
    | "Evening"
    | "Any";

  photos: string[];
}