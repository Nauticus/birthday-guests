import { assert } from "chai";
import getGuests from "../src/guests";

describe("Guests", () => {
    const options = { range: 6, latitude: "42.6665921", longitude: "23.351723" };

    it("should filter", () => {
        const partners = [
            {
                latitude: "42.7047197",
                partner_id: 8,
                name: "Ffion Firth",
                longitude: "23.395183",
            },
            {
                latitude: "42.6048396",
                partner_id: 28,
                name: "Romy Harrison",
                longitude: "23.4793636",
            },
        ];

        const expectedPartners = [
            {
                partner_id: 8,
                name: "Ffion Firth",
            },
        ];

        assert.deepEqual(getGuests(partners, options), expectedPartners);
    });

    it("should order ascending by id", () => {
        const partners = [
            {
                latitude: "42.6545333",
                partner_id: 17,
                name: "Kodi Collier",
                longitude: "23.4078409",
            },
            {
                latitude: "42.6612057",
                partner_id: 11,
                name: "Una Beach",
                longitude: "23.4147793",
            },
        ];

        const expectedPartners = [
            {
                partner_id: 11,
                name: "Una Beach",
            },
            {
                partner_id: 17,
                name: "Kodi Collier",
            },
        ];

        assert.deepEqual(getGuests(partners, options), expectedPartners);
    });
});
