export interface ICharacter {
  name: string;
  image: string;
  father: string;
  house: string;
  age?: {
    age: number;
    name: string;
  };
}

export interface ICharacterDetail {
  titles: string[];
  siblings: string[];
  religion: string[];
  allegiances: string[];
  appearances: string[];
  name: string;
  image: string;
  father: string;
  house: string;
}