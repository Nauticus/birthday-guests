import path from "path";
import fs from "fs";
import PartnersGuard from "./guard";
import { Options } from "./types";
import { parseOptions, printOptions } from './options';
import getGuests from './guests';

export default (source: string, options: Options) => {
    try {
        const parsedOptions = parseOptions(options);
        const json = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), source), "utf8"));
        const { partners } = PartnersGuard(json);

        console.log(printOptions(parsedOptions));
        console.log(getGuests(partners, parsedOptions));
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
    }
};
