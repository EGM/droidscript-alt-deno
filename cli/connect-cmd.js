const path = require("path");
const { prompt } = require('enquirer');
const ora = require('ora');
const ext = require("./extension");
const fs = require("fs");
const os = require('os');

let CONFIG = {
    serverIP: "",
    PORT: "8088",
    password: ""
}

async function connect() {

    // getting configurations
    CONFIG = ext.getLocalData();

    try {
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
    const spinner = ora(`Connecting to ${CONFIG.serverIP}`).start();
    try {
        serverInfo = await ext.getServerInfo();
        if(serverInfo.status == "ok") {
            spinner.succeed(`Connected to ${CONFIG.serverIP}.`);
            if(serverInfo.usepass == true) {
                if(CONFIG.password) await login();
                else await askForPassword();
            }
            CONFIG = {...CONFIG, ...serverInfo};
            ext.setCONFIG( CONFIG );
            await ext.saveLocaData();
        }
        else {
            spinner.fail(`Unable to connect to ${CONFIG.serverIP}. Make sure the IP Address is correct.`);
            await getIpAddress("Re-enter IP Address: ");
            return getServerInfo();
        }
        return serverInfo;
    } catch( error ) {
        spinner.fail(`Error connecting to ${CONFIG.serverIP}. Make sure the IP Address is correct.`);
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
        return;
    }
}

async function login() {
    const spinner = ora(`Logging in...`).start();
    try {
        var res = await ext.login( CONFIG.password );
        if(res.data.status == "ok") {
            spinner.succeed("Login successful.");
            ext.saveLocaData();
        }
        else {
            spinner.fail("Invalid password. Please try again.");
            if(serverInfo.usepass == true) return askForPassword("Re-enter password: ");
        }
    } catch( error ) {
        spinner.fail("Connection error!");
        return;
    }
}

module.exports = connect;