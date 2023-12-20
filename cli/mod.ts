import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";

function initCmd() {
  console.log("initCmd");
}
function connectCmd() {
  console.log("connectCmd");
}
function createCmd() {
  console.log("createCmd");
}
function reloadCmd() {
  console.log("reloadCmd");
}
function runApp() {
  console.log("runApp");
}
function stopApp() {
  console.log("stopApp");
}
function deleteApp() {
  console.log("deleteApp");
}
function showAllDSProjects() {
  console.log("showAllDSProjects");
}

await new Command()
  .name("cli-droidscript-deno")
  .version("0.1.0")
  .description("Command-Line Interface for DroidScript")
  .command("connect")
  .description("Connect to DroidScript server.")
  .action(connectCmd)
  .command("init")
  .description("Initialize a folder as DroidScript project.")
  .action(initCmd)
  .command("create")
  .arguments("<name>") //, "The name of the app or project.")
  .option("--native", "Native app.")
  .option("--html", "Html app.")
  .option("--hybrid", "Hybrid app.")
  .option("--mui", "MUI app.")
  .option("--node", "Node app.")
  .description(
    "Create a DroidScript app. By default, this will create a native app. Run -help command to see the list of available app types.",
  )
  .action(createCmd)
  .command('reload')
    .description('Reload the current folder if it is a DroidScript project. This will fetch all the files from its corresponding DroidScript app.')
    .action( reloadCmd )

.command('run')
    .arguments("<name>")//, "The name of the app or project.")
    .option("-d, --debug", "Enable debug. Press `escape` or `q` key to exit debug mode.")
    .description("Run the current app associated with the folder or specify a project name.")
    .action( runApp )

.command("stop")
    .description("Stop the currently opened program.")
    .action( stopApp )

.command("delete")
    .arguments("<name>") //, "The name of the app or project.")
    .description("Delete a DroidScript project.")
    .action( deleteApp )

.command("ls")
    .description("List all DroidScript projects.")
    .action( showAllDSProjects )

  .parse(Deno.args);
