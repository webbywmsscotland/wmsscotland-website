import {
  Car,
  Cpu,
  Wrench,
  Truck,
  Tractor,
  Ship,
} from "lucide-react";

const services = [
  {
    title: "Vehicle Servicing",
    slug: "vehicle-servicing",
    icon: Car,
    description:
      "Interim, full and manufacturer servicing carried out at your home or workplace.",
  },
  {
    title: "Diagnostics",
    slug: "diagnostics",
    icon: Cpu,
    description:
      "Professional fault finding, warning lights, ABS, airbag and engine management diagnostics.",
  },
  {
    title: "Brakes & Suspension",
    slug: "brakes-suspension",
    icon: Wrench,
    description:
      "Brake pads, discs, calipers, springs, shocks and suspension repairs.",
  },
  {
    title: "Cars, Vans & 4x4s",
    slug: "cars-vans-4x4",
    icon: Truck,
    description:
      "Repairs and servicing for private and commercial vehicles.",
  },
  {
    title: "Agricultural Machinery",
    slug: "agricultural",
    icon: Tractor,
    description:
      "On-site repairs and servicing to keep farms and businesses moving.",
  },
  {
    title: "Marine Engines",
    slug: "marine",
    icon: Ship,
    description:
      "Servicing and repairs for boat engines and marine equipment.",
  },
];

export default services;