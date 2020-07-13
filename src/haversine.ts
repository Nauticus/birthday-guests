import { ParsedCoordinates } from './types';

const toRadians = (coordinate: number) => (coordinate * Math.PI) / 180;

export default (start: ParsedCoordinates, end: ParsedCoordinates): number => {
    const R = 6371;

    const latDifference = toRadians(end.latitude - start.latitude);
    const lonDifference = toRadians(end.longitude - start.longitude);
    const startLatitude = toRadians(start.latitude);
    const endLatitude = toRadians(end.latitude);

    const a =
        Math.sin(latDifference / 2) * Math.sin(latDifference / 2) +
        Math.sin(lonDifference / 2) * Math.sin(lonDifference / 2) * Math.cos(startLatitude) * Math.cos(endLatitude);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
};
