import { Country } from "./country";
import { Region } from "./region.type";

export interface CacheStore {
  byCapital:TermCountries;
  byCountries:TermCountries;
  byRegion : RegionCountries;
}

export interface TermCountries{
  term:string;
  countries:Country[];
}

export interface RegionCountries{
  //term? :Region; este funciona si en el region type no tengo un '' en elarray
  region :Region;
  countries:Country[];
}
