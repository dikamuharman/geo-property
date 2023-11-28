interface Property {
  id: number;
  uuid: string;
  user_id: number;
  images: Images[];
  title_ads: string;
  condition: string;
  description: string;
  price: number;
  rent_type: string;
  building_type: string;
  surface_area: number;
  building_area: number;
  bath_rooms: number;
  bed_rooms: number;
  floors: number;
  park_area: number;
  furniture: string;
  electrical_power: number;
  oriented: string;
  certificate: string;
  facility_in_door: string[];
  facility_out_door: string[];
  full_name: string;
  phone_number: string;
  email: string;
  kelurahan: string;
  kecamatan: string;
  city: string;
  center_point: number[];
  geometry: number[][][];
}

interface Images {
  name: string;
}

interface IBaseResponse {
  status: number;
  message: string;
}

interface IPropertyResponse extends IBaseResponse {
  data?: Property;
}

interface IPropertyListResponse extends IBaseResponse {
  data?: Property[];
}

interface IPropertyUpdateResponse extends IBaseResponse {
  data?: Property;
}

interface GeoJSON {
  type: string;
  features: Feature[];
}

interface Feature {
  type: string;
  properties: Property;
  geometry: number[][][];
}

export type {
  IPropertyResponse,
  IPropertyListResponse,
  IPropertyUpdateResponse,
  Property,
  Images,
  GeoJSON,
};
