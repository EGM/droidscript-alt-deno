#!/usr/bin/env node

const { program } = require('commander');
const ora = require('ora');
const ext = require("./extension");
const fs = require("fs");
const path = require("path");
var readline = require('readline');

// commands
const connectCmd = require("./connect-cmd");
const createCmd = require("./create-cmd");
const initCmd = require("./initialize-cmd");
const reloadCmd = require("./reload-cmd");
const chalk = require('chalk');

let CONFIG = {};
const FOLDERS = "APKs,AABs,SPKs,PPKs,.edit,.node,Plugins,Extensions";

program.version('0.2.5').description('Command-Line Interface for DroidScript');

program.command('connect')
    .description('Connect to DroidScript server.')
    .action( connectCmd );

program.command('init')
    .description('Initialize a folder as DroidScript project.')
    .action( initCmd );

program.command("create")
    .argument("<name>", "The name of the app or project.")
    .option("--native", "Native app.")
    .option("--html", "Html app.")
    .option("--hybrid", "Hybrid app.")
    .option("--mui", "MUI app.")
    .option("--node", "Node app.")
    .description("Create a DroidScript app. By default, this will create a native app. Run -help command to see the list of available app types.")
    .action( createCmd );

program.command('reload')
    .description('Reload the current folder if it is a DroidScript project. This will fetch all the files from its corresponding DroidScript app.')
    .action( reloadCmd );

program.command('run')
    .argument("<name>", "The name of the app or project.")
    .option("-d, --debug", "Enable debug. Press `escape` or `q` key to exit debug mode.")
    .description("Run the current app associated with the folder or specify a project name.")
    .action( runApp );

program.command("stop")
    .description("Stop the currently opened program.")
    .action( stopApp );

program.command("delete")
    .argument("<name>", "The name of the app or project.")
    .description("Delete a DroidScript project.")
    .action( deleteApp );

program.command("ls")
    .description("List all DroidScript projects.")
    .action( showAllDSProjects );

let webSocket = null;
async function runApp(appName, options) {
    try {
        // getting configurations
        ext.getLocalData();
        webSocket = await ext.play(appName, null, options.debug);
        if( options.debug ) {
            let rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.input.on('keypress', (key, data) => {
                if(key === 'q' || data.name == "escape") {
                    webSocket.terminate();
                    rl.close(); // Close the readline interface
                    rl = null;
                }
            });
        }
    }
    catch( error ) {
        console.log( error );
    }
}

function stopApp() {

    // getting configurations
    CONFIG = ext.getLocalData();

    ext.stop();
}

async function deleteApp( name ) {

    // getting configurations
    CONFIG = ext.getLocalData();

    let spinner = ora(`Deleting ${name} app...`).start();
    try {
        let res = await ext.deleteFile( name );
        if(res.status == "ok") {
            return spinner.succeed(`${name} app successfully deleted!`);
        }
        return spinner.fail(`An error occurred while deleting ${name} app!`);
    }
    catch( error ) {
        spinner.fail(`An error occurred while deleting ${name} app!`);
        console.log( error );
    }
}

async function showAllDSProjects() {
    
    // getting configurations
    CONFIG = ext.getLocalData();

    try {
        var res = await ext.listFolder("");
        if(res.status == "ok") {
            var apps = res.list.filter(m => (!m.includes(".") && !m.includes("~") && !FOLDERS.includes(m)));
            apps.map(m => console.log( chalk.cyan(" - "+m)));
        }
    } catch( error ) {
        console.log( error );
        return;
    }
}

program.parse(process.argv);
