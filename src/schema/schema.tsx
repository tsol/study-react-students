
export interface Address {
  houseNo: number;
  street: string;
  Town: string;
}

export enum Level {
  Undergraduate = "Undergraduate",
  Postgraduate = "Postgraduate"
}

export interface Student {
  id: number;
  name: string;
  surname: string;
  age?: number;
  address?: Address;
  level?: Level;
}

export interface Course {
  id: number;
  code: string;
  name: string;
  description: string;
}
