import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TrackerDataModel} from "../models/tracker-data.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TrackerDataService {
  constructor(private http: HttpClient) {

  }

  getSimulatedTrackerData(): Observable<TrackerDataModel> {
    return this.http.get<TrackerDataModel>("http://localhost:8080/tracker-data");
  }
}
