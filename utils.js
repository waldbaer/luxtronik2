"use strict";

const humanizeduration = require("humanize-duration");
const huminizeoptions = {
    language: "de",
    conjunction: " und ",
    serialComma: false
};

const types = require("./types");


function createFirmwareString(buf) {
    var firmware = "";
    for (var key in buf) {
        if ({}.hasOwnProperty.call(buf, key)) {
            firmware += (buf[key] === 0) ? "" : String.fromCharCode(buf[key]);
        }
    }
    return firmware;
}

function int2ipAddress(value) {
    var part1 = value & 255;
    var part2 = ((value >> 8) & 255);
    var part3 = ((value >> 16) & 255);
    var part4 = ((value >> 24) & 255);
    return part4 + "." + part3 + "." + part2 + "." + part1;
}

function createStateString(values) {
    var stateStr = "";
    const state1 = values[117];
    const state2 = values[118];
    const duration = values[120];

    // Text aus Define
    if (types.stateMessages.hasOwnProperty(state1)) {
        stateStr = types.stateMessages[state1];
        if (state2 === 0 || state2 === 2) {
            stateStr += " seit ";
        } else if (state2 === 1) {
            stateStr += " in ";
        }

        // Sonderbehandlung bei WP-Fehlern - Zeitstempel des zuletzt aufgetretenen Fehlers nehmen
        if (state2 === 2) {
            stateStr += new Date(values[95] * 1000).toString();
        } else {
            stateStr += humanizeduration(duration * 1000, huminizeoptions);
        }
    } else {
        stateStr = "Unknown [" + state1 + "]";
    }
    return stateStr;
}


function createExtendedStateString(values) {
    var stateStr = "";
    const defrostValve = values[37];
    const heatSourceMotor = values[43];
    const compressor1 = values[44];
    const state3 = values[119];
    const ahpStufe = values[121];
    const ahpTemp = values[122] / 10;

    if (types.extendetStateMessages.hasOwnProperty(state3)) {
        stateStr = types.extendetStateMessages[state3];
        if (state3 === 6) {
            // Estrich Programm
            stateStr += " Stufe " + ahpStufe + " - " + ahpTemp + " °C";
        } else if (state3 === 7) {
            // Abtauen
            if (defrostValve === 1) {
                stateStr += "Abtauen (Kreisumkehr)";
            } else if (compressor1 === 0 && heatSourceMotor === 1) {
                stateStr += "Luftabtauen";
            } else {
                stateStr += "Abtauen";
            }
        }
    } else {
        stateStr = "Unknown [" + state3 + "]";
    }
    return stateStr;
}


function createOperationStateString(state) {
    var stateStr = "";
    if (types.hpMode.hasOwnProperty(state)) {
        stateStr = types.hpMode[state];
    } else {
        stateStr = "Unknown [" + state + "]";
    }
    return stateStr;
}


function createHotWaterStateString(values) {
    var stateStr = "";
    const hotWaterBoilerValve = values[38];
    const opStateHotWater = values[124];
    if (opStateHotWater === 0) {
        stateStr = "Sperrzeit";
    } else if (opStateHotWater === 1 && hotWaterBoilerValve === 1) {
        stateStr = "Aufheizen";
    } else if (opStateHotWater === 1 && hotWaterBoilerValve === 0) {
        stateStr = "Temp. OK";
    } else if (opStateHotWater === 3) {
        stateStr = "Aus";
    } else {
        stateStr = "Unknown [" + opStateHotWater + "/" + hotWaterBoilerValve + "]";
    }
    return stateStr;
}


function createCode(time, code, codeTypes) {
    return {
        code: code,
        date: new Date(time * 1000),
        message: codeTypes.hasOwnProperty(code) ? codeTypes[code] : codeTypes[-1]
    };
}


function createCodeList(timeArray, codeArray, codeTypes) {
    var logArray = [];
    for (var i = 0; i < timeArray.length; i++) {
        logArray.push(createCode(timeArray[i], codeArray[i], codeTypes));
    }
    return logArray;
}


function createOutageCodeList(timeArray, codeArray) {
    return createCodeList(timeArray, codeArray, types.outageCodes);
}


function createErrorCodeList(timeArray, codeArray) {
    return createCodeList(timeArray, codeArray, types.errorCodes);
}


function toInt32ArrayReadBE(buffer) {
    var i32a = new Int32Array(buffer.length / 4);
    for (var i = 0; i < i32a.length; i++) {
        i32a[i] = buffer.readInt32BE(i * 4);
    }
    return i32a;
}


function createHeatPumptTypeString(value) {
    return types.hpTypes.hasOwnProperty(value) ? types.hpTypes[value] : types.hpTypes[-1];
}


module.exports = {
    createFirmwareString,
    int2ipAddress,
    createStateString,
    createExtendedStateString,
    createOperationStateString,
    createHotWaterStateString,
    createOutageCodeList,
    createErrorCodeList,
    toInt32ArrayReadBE,
    createHeatPumptTypeString
};