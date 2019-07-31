export interface IHouse {
  name: string;
  logoURL: string;
  father: string;
  house: string;
  color: string;
}

export interface IHouseDetail {
  allegiance: string[];
  region: string[];
  religion: string[];
  sigil: string;
  words: string;
  createdAt: Date;
  updatedAt: Date;
  seat: string;
  name: string;
  logoURL: string;
  father: string;
  house: string;
}
