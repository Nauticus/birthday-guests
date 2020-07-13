export interface Coordinates {
    latitude?: string;
    longitude?: string;
}

export type ParsedCoordinates = {
    latitude: number;
    longitude: number;
};

export type Options = {
    range: string;
    eventCoordinates: string;
};

export type ParsedOptions = Coordinates & {
    range: number;
};

export type Partner = Coordinates & {
    partner_id?: number;
    name?: string;
};

