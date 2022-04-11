import {TrackerTimestampModel} from "./tracker-timestamp.model";

export interface TrackerDataModel {
    date: Date;
    data: TrackerTimestampModel[];
}
