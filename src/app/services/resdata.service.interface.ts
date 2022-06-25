import { Observable } from "rxjs";
import { Resdata } from "../interfaces/resdata.model";


export interface IResdataService {

    getResdatas(): Observable<Resdata[]>
    
}