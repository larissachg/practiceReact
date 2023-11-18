export interface BoysResponse {
  count: number;
  pages: number;
  prev: null;
  next: string;
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  real_name: string;
  species: Species[];
  citizenship: Citizenship;
  gender: Gender;
  status: Status;
  affiliation: Affiliation[];
  families: Family[];
  portrayed: string[];
  first_seen: StSeen;
  last_seen: StSeen;
  season: number[];
  image: string;
  url: string;
}

export interface Affiliation {
  name: string;
  url: string;
  is_former: boolean;
}

export enum Citizenship {
  American = "American",
  British = "British",
  French = "French",
  Japanese = "Japanese",
}

export interface Family {
  name: string;
  url: string;
  relationship: string;
}

export interface StSeen {
  name: string;
  url: string;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
}

export enum Species {
  Human = "Human",
  Supe = "Supe",
  SupeFormerly = "Supe(formerly)",
  SupeTemporarily = "Supe(temporarily)",
}

export enum Status {
  Alive = "Alive",
  Deceased = "Deceased",
}
