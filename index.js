/*
 
This file is part of Streembit application. 
Streembit is an open source project to create a real time communication system for humans and machines. 

Streembit is a free software: you can redistribute it and/or modify it under the terms of the GNU General Public License 
as published by the Free Software Foundation, either version 3.0 of the License, or (at your option) any later version.

Streembit is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of 
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with Streembit software.  
If not, see http://www.gnu.org/licenses/.
 
-------------------------------------------------------------------------------------------------------------------------
Author: Streembit developers 
Copyright (C) 2017 The Streembit software development team
-------------------------------------------------------------------------------------------------------------------------

*/

/*

Error code prefix explanation

0x0 = system error codes used by the CLI application
0x1 = even related errors used by the utils application
0x2 = database related errors generated primarily by the streembit-db application
0x3 = HTTP transport related errors
0x4 = WebSocket transport errors
0x5 = Blockchain
0x6 = reserved
0x7 = reserved
0x8 = UI errors
0x81 = reserved
0x82 = UI WebRTC errors 

*/

var ErrorCodes = {
    "SUCCESS": 0x0000,

    "SYSTEM": 0x0001,
    "BADPARAM":0x0002,
    "INVALID_PAYLOAD": 0x0003,

    "EVENT": 0x1000,

    "DATABASE": 0x2000,

    "HTTP": 0x3000,
    "HTTP_HANDLEREQUEST": 0x3001,
    "HTTP_NOWSINFO": 0x3002,
    "HTTP_NOWSPEERS": 0x3003,

    "WS": 0x4000,
    "WS_ONSEND": 0x4001,
    "WS_PING": 0x4002,
    "WS_REGISTER": 0x4003,
    "WS_DHTPUT": 0x4004,
    "WS_DHTGET": 0x4005,
    "WS_PEERMSG": 0x4006,
    "WS_CONTACT_SESSION": 0x4007,
    "WS_PEERCOMM": 0x4008,

    "BC_ERROR": 0x5000,
    "BC_INVALID_INPUTS": 0x5010,
    "BC_INVALID_OUTPUTS": 0x500a,
    "BC_INVALID_INPUTDATA": 0x500b,
    "BC_INVALID_INPUTTYPE": 0x500c,
    "BC_INVALID_OUTPUTTYPE": 0x500d,
    "BC_INVALID_OUTPUTDATA": 0x500e,
    "BC_ADDOUTPUT_FAILED": 0x500f,
    "BC_INVALID_TXHASH": 0x5011,
    "BC_INVALID_TXRCPTKEY": 0x5012,
    "BC_INVALID_VOUT": 0x5013,
    "BC_INVALID_TXPARAM": 0x5050,
    "BC_INVALID_TXHEX": 0x5100,
    "BC_TOBUFFER_ERR": 0x5101,
    "BC_INVALIDTXFIELDS": 0x5102,
    "BC_INVALIDTXTYPE": 0x5103,
    "BC_ADDINPUT": 0x5104,
    "BC_INVALID_OUTPUTVALUE": 0x5130,
    "BC_INVALID_SCRIPTSIG_KEY": 0x5150,
    "BC_INVALID_SCRIPTSIG_PAYLOAD": 0x5151,    
    
    "BC_INVALID_FORGPARAM": 0x5500,
    "BC_INVALID_NODEINFO": 0x5501,
    "BC_INVALID_PREVBLOCK": 0x5502,
    "BC_INVALID_FORGAMOUNT": 0x5503,
    "BC_INVALID_FORGDATA": 0x5504,
    "BC_INVALID_NODEID": 0x5505,
    "BC_INVALID_PUBLICKEY": 0x5506,
    "BC_INVALID_STARTTIME": 0x5507,
    "BC_INVALID_DISTANCE": 0x5508,
    "BC_INVALID_PREVTXN": 0x5509,

    "BC_VALIDATETXN_PARAMS": 0x5520,
    "BC_VALIDATETXN_HASHPARAM": 0x5521,
    "BC_VALIDATEBLOCK_NOTXNS": 0x5522,
    "BC_TRANSACTION_VALIDATE": 0x5524,
    "BC_TXVALIDATE_EXCEPTION": 0x5525,
    "BC_TXVALIDATE_NOINPUT": 0x5526,
    "BC_TXVALIDATE_INPUTHEXPARSE": 0x5527,
    "BC_TXVALIDATE_INPUTVALIDATE": 0x5528,
    "BC_TXVALIDATE_INPUTOBJ": 0x5529,
    "BC_INPUTVALIDATE_EXCEPTION": 0x553A,
    "BC_INPUTVALIDATE_NOSIGN": 0x553B,
    "BC_INPUTSIG_VALIDATE_DATA": 0x553C,
    "BC_INPUTSIG_VALIDATE_DERSIG": 0x553D,
    "BC_INPUTSIG_VALIDATE_EXCEPTION": 0x553E,
    "BC_INPUTSIG_VALIDATE_FAILED": 0x553F,
    "BC_INPUTSIG_VALIDATE_NOSIGHASH": 0x5540,
    "BC_INPUTVALIDATE_PARAMS": 0x5541,
    "BC_INPUTVALIDATE_TXHASH": 0x5542,
    "BC_INPUTVALIDATE_DUPLICATE": 0x5543,
    "BC_GETINPUT_FROMHEX": 0x5544,
    "BC_INVALID_BLOCK": 0x554A,
    "BC_INVALID_MERKLEROOT": 0x5550,
    "BC_MERKLEROOT_NOMATCH": 0x5551,
    "BC_BLOCKVALIDATE_EXC": 0x555F,

    "UI_CONNECT_TONETWORK": 0x8001,
    "UI_ON_PEERMSG": 0x8002,
    "UI_FINDCONTACT": 0x8003,

    "UI_WEBRTC_FILE": 0x8200,
    "UI_WEBRTC_DATA": 0x8201,
    "UI_WEBRTC_SCREENSHARE": 0x8202,

    "PROCERROR": 0xFFFE,

    "MAX_ERROR_CODE": 0xFFFF
};

module.exports = ErrorCodes;