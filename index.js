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
0x5 = reserved
0x6 = reserved
0x7 = reserved
0x8 = UI errors
0x81 = reserved
0x82 = UI WebRTC errors 

*/

var ErrorCodes = {
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