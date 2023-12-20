const path = require("path");
const { prompt } = require('enquirer');
const ora = require('ora');
const ext = require("./extension");
const fs = require("fs");
const templates = require("./templates")
const chalk = require("chalk");

let CONFIG = {
    serverIP: "",
    PORT: "8088",
    password: ""
}

let serverInfo = {};

let appName = "";
let appType = "";

async function create(name, options) {
    appName = name;
    
    if( options.html ) appType = "html";
    else if( options.mui ) appType = "mui";
    else if( options.hybrid ) appType = "hybrid";
    else if( options.node ) appType = "node";
    else appType = "native";

    try {
        CONFIG = ext.getLocalData();
        if( !CONFIG.serverIP ) await getIpAddress();
        await getServerInfo();
    }
    catch( error ) {
        console.log( error );
    }
}

async function getIpAddress( msg ) {
    try {
        const response = await prompt({
            type: 'input',
            name: 'ip',
            message: msg || `Enter IP Address: `,
            required: true
        });
        let ip = response.ip;
        if( !ip.includes(":8088") ) ip += ":8088";
        if( !ip.startsWith("http://") ) ip = "http://"+ip;
        CONFIG.serverIP = ip;
        ext.setCONFIG( CONFIG );
        return ip;
    } catch( err ) {
        return "";
    }
}

async function getServerInfo() {
    // const spinner = ora(`Connecting to ${CONFIG.serverIP}`).start();
    try {
        serverInfo = await ext.getServerInfo();
        if(serverInfo.status == "ok") {
            // spinner.succeed(`Connected to ${CONFIG.serverIP}.`);

            let data = await ext.listFolder("");

            if(data && data.status == "ok" && data.list.length) {
                if( data.list.includes(appName) ) {
                    return console.log( chalk.hex("#ff9800")(`${ chalk.bold(appName) } app already exist!`) );
                }
            }

            const dir = path.resolve(process.cwd());
            const appPath = path.join(dir, appName);

            if( !CONFIG.localProjects ) CONFIG.localProjects = [];

            CONFIG.localProjects.push({
                path: appPath,
                PROJECT: appName,
                reload: true,
                created: new Date().getTime()
            });

            createFolder(path.join(dir, appName ))

            if(serverInfo.usepass == true) {
                if(CONFIG.password) await login();
                else await askForPassword();
            }
            else createApp();
        }
        else {
            console.log(`Unable to connect to ${CONFIG.serverIP}. Make sure the IP Address is correct.`);
            await getIpAddress("Re-enter IP Address: ");
            return getServerInfo();
        }
        return serverInfo;
    } catch( error ) {
        console.log(`Error connecting to ${CONFIG.serverIP}. Make sure the IP Address is correct.`);
        await getIpAddress("Re-enter IP Address: ");
        return getServerInfo();
    }
}

async function askForPassword( msg ) {
    try {
        const response = await prompt({
            type: 'password',
            name: 'password',
            message: msg || `Enter Password: `,
            required: true
        });
        var password = response.password;
        CONFIG.password = password;
        ext.setCONFIG( CONFIG );
        await login();
    } catch( error ) {
        console.error( error );
    }
}

async function login() {
    // const spinner = ora(`Logging in...`).start();
    try {
        var res = await ext.login( CONFIG.password );
        if(res.data.status == "ok") {
            // spinner.succeed("Login successful.");
            // startWebSocket();
            try {
                await createApp();
            } catch(err) { console.log(err); }
        }
        else {
            // spinner.fail("Invalid password. Please try again.");
            if(serverInfo.usepass == true) {
                try {
                    await askForPassword("Re-enter password: ");
                } catch(err) { console.log(err); }
            }
        }
    } catch( error ) {
        console.log("Connection error!");
    }
}

function createApp() {
    // Just making this a bunch of if-else condition to have a correct type.
    if(appType == "mui") createDSApp("mui");
    else if(appType == "hybrid") createHybridApp();
    else if(appType == "html") createDSApp("html", "html");
    else if(appType == "node") createDSApp("node");
    else createDSApp( "native" );
    ext.setCONFIG( CONFIG );
    ext.saveLocaData();
}

async function createDSApp( type, fileExt="js" ) {
    let spinner = ora(`Creating ${appName} app.`).start();
    const dir = path.resolve(process.cwd());
    let destFolder = path.join(dir, appName);
    const filePath = path.join(destFolder, appName+"."+fileExt);
    try {
        fs.writeFileSync(filePath, templates[type]);
        let response = await ext.updateFile(templates[type], appName, appName+"."+fileExt);
        if(response.status == "ok") {
            return spinner.succeed(`${appName} app created successfully.`);
        }
        return spinner.fail(`Error creating ${appName} app!`);
    } catch (err) {
        console.error('Error:', err);
        spinner.fail(`Error creating ${appName} app!`);
    }
}

async function createHybridApp() {
    let spinner = ora(`Creating ${appName} app.`).start();
    const dir = path.resolve(process.cwd());
    let destFolder = path.join(dir, appName);
    try {
        let filePath = "";
        const files = templates.hybrid;
        for(let i=0; i<files.length; i++) {
            files[i].fileName = files[i].fileName.replace("<appname>", appName);
            files[i].code = files[i].code.replace("<appname>", appName);
            filePath = path.join(destFolder, files[i].fileName);
            if(files[i].fileName == appName+".js") fs.writeFileSync(filePath, files[i].code);
            await ext.updateFile(files[i].code, appName, files[i].fileName);
        }
        return spinner.succeed(`${appName} app created successfully.`);
    } catch ( err ) {
        console.error('Error:', err);
        spinner.fail(`Error creating ${appName} app!`);
    }
}

function createFolder( folder ) {
    if( !fs.existsSync(folder) ) {
        fs.mkdirSync( folder );
    }
}


module.exports = create;