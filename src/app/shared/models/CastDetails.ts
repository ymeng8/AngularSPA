import { Movie } from "./Movie";

export interface CastDetails {
    id:number;
    name:string;
    gender:string;
    tmdbUrl:string;
    profilePath:string;
    movies:Movie[];
}