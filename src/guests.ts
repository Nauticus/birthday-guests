import _ from "lodash/fp";
import haversine from "./haversine";
import { ParsedOptions, Coordinates, Partner } from "./types";

const coordinatesToNumbers = ({ latitude, longitude }: Coordinates) => ({
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
});

const filterGuests = (options: ParsedOptions) =>
    _.filter((partner: Partner) => {
        const distanceInKm = haversine(coordinatesToNumbers(options), coordinatesToNumbers(partner));

        return distanceInKm < options.range;
    });

const orderGuests = _.orderBy("partner_id", "asc");

const omitCoordinates = _.map(_.omit(["latitude", "longitude"]));

const getGuests = (partners: Partner[], options: ParsedOptions) =>
    _.pipe([filterGuests(options), orderGuests, omitCoordinates])(partners);

export  { getGuests as default, filterGuests };
