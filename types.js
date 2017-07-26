'use strict';

module.exports = {
    operatingModes: Object.freeze({
        '0': 'Automatik',
        '1': 'Zusatzheizung',
        '2': 'Party',
        '3': 'Ferien',
        '4': 'Aus'
    }),

    stateMessages: Object.freeze({
        '0': 'Waermepumpe laeuft',
        '1': 'Waermepumpe steht',
        '2': 'Waermepumpe kommt',
        '4': 'Fehler',
        '5': 'Abtauen',
        '7': 'Verdichter heizt auf',
        '8': 'Pumpenvorlauf'
    }),

    extendetStateMessages: Object.freeze({
        '0': 'Heizbetrieb',
        '1': 'Keine Anforderung',
        '2': 'Netz Einschaltverzoegerung',
        '3': 'Schaltspielzeit',
        '4': 'EVU Sperrzeit',
        '5': 'Brauchwasser',
        '6': 'Estrich Programm',
        '7': 'Abtauen',
        '8': 'Pumpenvorlauf',
        '9': 'Thermische Desinfektion',
        '10': 'Kuehlbetrieb',
        '12': 'Schwimmbad/Photovoltaik',
        '13': 'Heizen Ext.',
        '14': 'Brauchwasser Ext.',
        '16': 'Durchflussueberwachung',
        '17': 'Elektrische Zusatzheizung',
        '19': 'Warmw. Nachheizung'
    }),

    hpMode: Object.freeze({
        '0': 'Automatik',
        '1': 'Zusatzheizung',
        '2': 'Party',
        '3': 'Ferien',
        '4': 'Aus'
    }),

    heatingState: Object.freeze({
        '0': 'Abgesenkt',
        '1': 'Normal',
        '3': 'Aus'
    }),

    hpTypes: Object.freeze({
        '0': 'ERC',
        '1': 'SW1',
        '2': 'SW2',
        '3': 'WW1',
        '4': 'WW2',
        '5': 'L1I',
        '6': 'L2I',
        '7': 'L1A',
        '8': 'L2A',
        '9': 'KSW',
        '10': 'KLW',
        '11': 'SWC',
        '12': 'LWC',
        '13': 'L2G',
        '14': 'WZS',
        '15': 'L1I407',
        '16': 'L2I407',
        '17': 'L1A407',
        '18': 'L2A407',
        '19': 'L2G407',
        '20': 'LWC407',
        '21': 'L1AREV',
        '22': 'L2AREV',
        '23': 'WWC1',
        '24': 'WWC2',
        '25': 'L2G404',
        '26': 'WZW',
        '27': 'L1S',
        '28': 'L1H',
        '29': 'L2H',
        '30': 'WZWD',
        '31': 'ERC',
        '40': 'WWB_20',
        '41': 'LD5',
        '42': 'LD7',
        '43': 'SW 37_45',
        '44': 'SW 58_69',
        '45': 'SW 29_56',
        '46': 'LD5 (230V)',
        '47': 'LD7 (230 V)',
        '48': 'LD9',
        '49': 'LD5 REV',
        '50': 'LD7 REV',
        '51': 'LD5 REV 230V',
        '52': 'LD7 REV 230V',
        '53': 'LD9 REV 230V',
        '54': 'SW 291',
        '55': 'LW SEC',
        '56': 'HMD 2',
        '57': 'MSW 4',
        '58': 'MSW 6',
        '59': 'MSW 8',
        '60': 'MSW 10',
        '61': 'MSW 12',
        '62': 'MSW 14',
        '63': 'MSW 17',
        '64': 'MSW 19',
        '65': 'MSW 23',
        '66': 'MSW 26',
        '67': 'MSW 30',
        '68': 'MSW 4S',
        '69': 'MSW 6S',
        '70': 'MSW 8S',
        '71': 'MSW 10S',
        '72': 'MSW 13S',
        '73': 'MSW 16S',
        '74': 'MSW2-6S',
        '75': 'MSW4-16',
        '76': 'LD2AG',
        '77': 'LWD90V',
        '78': 'MSW3-12',
        '79': 'MSW3-12S',
        '-1': 'Unbekannter Typ'
    }),

    errorCodes: Object.freeze({
        '701': 'Niederdruckstoerung - Bitte Inst. rufen',
        '702': 'Niederdrucksperre - RESET automatisch',
        '703': 'Frostschutz - Bitte Inst. rufen',
        '704': 'Heissgasstoerung - Reset in hh:mm',
        '705': 'Motorschutz VEN - Bitte Inst. rufen',
        '706': 'Motorschutz BSUP - Bitte Inst. rufen',
        '707': 'Codierung WP - Bitte Inst. rufen',
        '708': 'Fuehler Ruecklauf - Bitte Inst. rufen',
        '709': 'Fuehler Vorlauf - Bitte Inst. rufen',
        '710': 'Fuehler Heissgas - Bitte Inst. rufen',
        '711': 'Fuehler Aussentemp. - Bitte Inst. rufen',
        '712': 'Fuehler Warmwasser - Bitte Inst. rufen',
        '713': 'Fuehler WQ-Ein - Bitte Inst. rufen',
        '714': 'Heissgas WW - Reset in hh:mm',
        '715': 'Hochdruck-Abschalt. - RESET automatisch',
        '716': 'Hochdruckstoerung - Bitte Inst rufen',
        '717': 'Durchfluss-WQ - Bitte Inst. rufen',
        '718': 'Max. Aussentemp. - RESET automatisch',
        '719': 'Min. Aussentemp. - RESET automatisch',
        '720': 'WQ-Temperatur - RESET automatisch in hh:mm',
        '721': 'Niederdruckabschaltung - RESET automatisch',
        '722': 'Tempdiff Heizwasser - Bitte Inst. rufen',
        '723': 'Tempdiff Warmwasser - Bitte Inst. rufen',
        '724': 'Tempdiff Abtauen - Bitte Inst. rufen',
        '725': 'Anlagefehler WW - Bitte Inst. rufen',
        '726': 'Fuehler Mischkreis 1 - Bitte Inst. rufen',
        '727': 'Soledruck - Bitte Inst. rufen',
        '728': 'Fuehler WQ-Aus - Bitte Inst. rufen',
        '729': 'Drehfeldfehler - Bitte Inst. rufen',
        '730': 'Leistung Ausheizen - Bitte Inst. rufen',
        '732': 'Stoerung Kuehlung - Bitte Inst. rufen',
        '733': 'Stoerung Anode - Bitte Inst. rufen',
        '734': 'Stoerung Anode - Bitte Inst. rufen',
        '735': 'Fuehler Ext. Energiequelle - Bitte Inst. rufen',
        '736': 'Fuehler Solarkollektor - Bitte Inst. rufen',
        '737': 'Fuehler Solarspeicher - Bitte Inst. rufen',
        '738': 'Fuehler Mischkreis2 - Bitte Inst. rufen',
        '750': 'Fuehler Ruecklauf extern - Bitte Inst. rufen',
        '751': 'Phasenueberwachungsfehler',
        '752': 'Phasenueberwachungs / Durchflussfehler',
        '755': 'Verbindung zu Slave verloren - Bitte Inst. rufen',
        '756': 'Verbindung zu Master verloren - Bitte Inst. rufen',
        '757': 'ND-Stoerung bei WW-Geraet',
        '758': 'Stoerung Abtauung',
        '759': 'Meldung TDI',
        '760': 'Stoerung Abtauung',
        '761': 'LIN-Verbindung unterbrochen',
        '762': 'Fuehler Ansaug-Verdichter',
        '763': 'Fuehler Ansaug-Verdampfer',
        '764': 'Fuehler Verdichterheizung',
        '765': 'Ueberhitzung',
        '766': 'Einsatzgrenzen-VD',
        '767': 'STB E-Stab',
        '770': 'Niedrige Ueberhitzung',
        '771': 'Hohe Ueberhitzung',
        '776': 'Einsatzgrenzen-VD',
        '777': 'Expansionsventil',
        '778': 'Fuehler Niederdruck',
        '779': 'Fuehler Hochdruck',
        '780': 'Fuehler EVI',
        '781': 'Fuehler Fluessig, vor Ex-Ventil',
        '782': 'Fuehler EVI Sauggas',
        '783': 'Kommunikation SEC-Inverter',
        '784': 'VSS gesperrt',
        '785': 'SEC-Board defekt',
        '786': 'Kommunikation SEC-Inverter',
        '787': 'VD Alarm',
        '788': 'Schwerw. Inverter Fehler',
        '789': 'LIN/Kodierung nicht vorhanden',
        '790': 'Schwerw. Inverter Fehler',
        '791': 'ModBus Verbindung verloren',
        '792': 'LIN-Verbindung unterbrochen',
        '793': 'Schwerw. Inverter Fehler',
        '-1': 'Unbekannter Fehler'
    }),

    outageCodes: Object.freeze({
        '0': 'Waermepumpe Stoerung',
        '1': 'Anlagen Stoerung',
        '2': 'Betriebsart Zweiter Waermeerzeuger',
        '3': 'EVU-Sperre',
        '4': '',
        '5': 'Lauftabtau (nur LW-Geraete)',
        '6': 'Temperatur Einsatzgrenze maximal',
        '7': 'Temperatur Einsatzgrenze minimal',
        '8': 'Untere Einsatzgrenze',
        '9': 'Keine Anforderung',
        '-1': 'Unbekannte Abschaltung'
    })
};
