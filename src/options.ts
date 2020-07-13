import validator from "validator";
import { Options, ParsedOptions } from "./types";

const parseOptions = ({ range, eventCoordinates }: Options) => {
    const parsedRange = parseInt(range);
    const areValidCoordinates = validator.isLatLong(eventCoordinates);

    if (isNaN(parsedRange) || !areValidCoordinates) {
        throw new Error("Invalid options. Run 'help' for more information.");
    }

    const parsedCoordinates = eventCoordinates.split(",");

    return {
        range: parsedRange,
        latitude: parsedCoordinates[0].trim(),
        longitude: parsedCoordinates[1].trim(),
    };
};

const printOptions = ({ range, latitude, longitude }: ParsedOptions) => `OPTIONS:
    range: ${range}km,
    latitude: ${latitude},
    longitude: ${longitude}
===================================
`;

export { parseOptions, printOptions };
