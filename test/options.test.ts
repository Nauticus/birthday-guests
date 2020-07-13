import { assert } from "chai";
import { parseOptions } from "../src/options";

describe("Options", () => {
    it("should parse options", () => {
        const range = "234";
        const eventCoordinates = "42.6665921,23.351723";

        assert.deepEqual(parseOptions({ range, eventCoordinates }), {
            range: 234,
            latitude: "42.6665921",
            longitude: "23.351723",
        });
    });
    it("should throw if invalid range", () => {
        const range = "dasd";
        const eventCoordinates = "42.6665921,23.351723";

        assert.throw(() => parseOptions({ range, eventCoordinates }), Error);
    });
    it("should throw if invalid coordinates", () => {
        const range = "234";

        assert.throw(() => parseOptions({ range, eventCoordinates: "91,181" }), Error);
    });
    it("should trim coordinates", () => {
        const range = "234";
        const eventCoordinates = "42.6665921, 23.351723";

        assert.deepEqual(parseOptions({ range, eventCoordinates }), {
            range: 234,
            latitude: "42.6665921",
            longitude: "23.351723",
        });
    });
});
