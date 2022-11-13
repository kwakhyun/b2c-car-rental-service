export type VehicleBasic = {
  id: number;
  startDate: Date;
  createdAt: Date;
  amount: number;
  attribute: VehicleAttribute;
  insurance: VehicleInsurance[];
  additionalProducts: VehicleAdditionalProducts[];
};

export type VehicleAttribute = {
  brand: string;
  name: string;
  segment: VehicleSegment;
  fuelType: VehicleFuelType;
  imageUrl: string;
};

export type VehicleInsurance = {
  name: string;
  description: string;
};

export type VehicleAdditionalProducts = {
  name: string;
  amount: number;
};

export type VehicleSegment = 'C' | 'D' | 'E' | 'SUV';

export type VehicleFuelType = 'gasoline' | 'hybrid' | 'ev';

export type VehicleCategory = {
  id: number;
  segment: string;
  content: string;
};

export type CategoryValues = {
  id: number;
  segment: VehicleSegment | '';
  content: string;
};

export type SectionsValues = {
  title: string;
  data: {
    item: string;
    key: string;
    content: string;
  }[];
};
