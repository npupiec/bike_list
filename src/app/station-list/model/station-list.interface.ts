export interface StationInterface {
  geometry: GeometryInterface;
  id: string;
  properties: PropertiesInterface;
  type: string;
}

export interface GeometryInterface {
  coordinates: Array<any>;
  type: string;
}

export interface PropertiesInterface {
  bike_racks: string;
  bikes: string;
  free_racks: string;
  label: string;
  updated: string;
}
