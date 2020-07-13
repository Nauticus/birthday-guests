import { guard, exact, object, array, string, number } from "decoders";

const Partner = exact({
    partner_id: number,
    name: string,
    longitude: string,
    latitude: string,
});

const Partners = object({ partners: array(Partner) });

const PartnersGuard = guard(Partners);

export { PartnersGuard as default };
