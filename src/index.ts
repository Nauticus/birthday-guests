import commander from "commander";
import mainAction from "./main";

commander
    .command("output-guests <source>")
    .description("Outputs guest list HOI KOR with partners within close proximity.")
    .requiredOption("--event-coordinates [coordinates]", "Event coordinates", "42.6665921,23.351723")
    .option("--range [value]", "Range in silometers", "100")
    .action(mainAction);

commander.parse(process.argv);
