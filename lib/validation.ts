import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(5),
  email: z.string().email().or(z.literal("")),
  vehicle: z.string(),
  registration: z.string(),
  location: z.string(),
  message: z.string().min(10),
});

export type Enquiry = z.infer<typeof enquirySchema>;