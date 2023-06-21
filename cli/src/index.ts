import figlet from "figlet";
import { Command } from "commander";
import SRGCommand from "./SRGAutomation/SRGCommand";
import { DTA_CLI_VERSION } from "./version";
import EventCommand from "./Events/EventCommand";

const program = new Command();
program
  .name("Dynatrace automation tools CLI")
  .version(DTA_CLI_VERSION)
  .description("Dynatrace automation tools CLI");
console.log(figlet.textSync("DT automation"));
//Register the commands here

new SRGCommand(program);
new EventCommand(program);
program.parseAsync(process.argv);
