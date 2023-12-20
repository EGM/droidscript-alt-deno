const path = require("path");
const ora = require('ora');
const ext = require("./extension");
const fs = require("fs");

let CONFIG = {};

let progress = null;

async function reload() {
    CONFIG = ext.getLocalData();
    const dir = path.resolve( process.cwd() );
    let ndx = null;
    if(CONFIG.localProjects && CONFIG.localProjects.length) {
        ndx = CONFIG.localProjects.findIndex(m => m.path == dir);
    }

    if(ndx >= 0) {
        CONFIG.PROJECT = CONFIG.localProjects[ndx].PROJECT;
    }
    else {
        DSCONFIG = getLocalData();
        CONFIG.PROJECT = DSCONFIG.PROJECT;
    }

    ext.setCONFIG( CONFIG );

    try {
        var serverInfo = await ext.getServerInfo();
        if(serverInfo.status != "ok") {
            return console.log( serverInfo );
        }
        if( serverInfo.usepass == true) {
            var res = await ext.login( CONFIG.password );
            if(res.data.status != "ok") {
                return console.log( res.data );
            }
        }
        progress = ora("Downloading files...").start();

        await getAllFiles();

        progress.succeed("All files are updated!");
    }
    catch( error ) {
        console.log( error ); 
    }
}

async function getAllFiles( folder ) {
    folder = folder || CONFIG.PROJECT;
    try {
        let data = await ext.listFolder( folder );
        if( data.status == "ok" && data.list.length ) {
            let fileName = "", response = {}, path = "", filePath = "";
            for(var i=0; i<data.list.length; i++) {
                fileName = data.list[i], path = folder+"/"+fileName;
                filePath = path.replace(CONFIG.PROJECT+"/", "");
                if(!fileName.startsWith("~") && fileName.includes(".")) {
                    try {

                        progress.color = getColor();
                        progress.text = `Downloading ${path}`;

                        response = await ext.loadFile(path);
                        if(response.status == "ok") {
                            writeFile(filePath, response.data);
                        }
                    } catch(err) {
                        console.log( err );
                    }
                }
                else if( !fileName.includes(".") ) {
                    createFolder( filePath );
                    await getAllFiles( path );
                }
            }
        }
    } catch( err ) {
        console.log( err );
    }
}

function getLocalData() {
    const dir = path.resolve( process.cwd() );
    const filePath = path.join(dir, ".droidscript", "dsconfig.json");
    if( fs.existsSync(filePath) ) {
        const fileData = fs.readFileSync(filePath, 'utf8');
        DSCONFIG = JSON.parse( fileData );
        return DSCONFIG;
    }
    return {};
}

function createFolder( folder ) {
    if( !fs.existsSync(folder) ) {
        fs.mkdirSync( folder );
    }
}

// Write the file to the workspace
function writeFile(fileName, content) {
    if(fileName.includes(".json") && typeof content == "object") {
        content = JSON.stringify(content, null, 4);
    }
    const dir = path.resolve( process.cwd() );
    const filePath = path.join(dir, fileName);
    fs.writeFileSync(filePath, content, { flag: 'w' });
}

// utilities
var __c = -1;
function getColor() {
    __c ++;
    const colors = ["red", "green", "yellow", "blue", "magenta", "cyan", "white"];
    if(__c == colors.length) __c = 0;
    return colors[__c];
}

module.exports = reload;