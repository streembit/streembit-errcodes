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

var ErrorCodes = {
    "SYSTEM": 0x0001,
    "BADPARAM":0x0002,
    "INVALID_PAYLOAD": 0x0003,

    "EVENT_ERROR": 0x1000,

    "HTTP_ERROR": 0x3000,
    "HTTP_HANDLEREQUEST": 0x3001,
    "HTTP_NOWSINFO": 0x3002,
    "HTTP_NOWSPEERS": 0x3003,

    "WS_ERROR": 0x4000,
    "WS_ONSEND": 0x4001,
    "WS_PING": 0x4002,
    "WS_REGISTER": 0x4003,
    "WS_DHTPUT": 0x4004,
    "WS_DHTGET": 0x4005,
    "WS_PEERMSG": 0x4006,
    "WS_PEERMSG": 0x4007,
    "WS_CONTACT_SESSION": 0x4008,

    "UI_CONNECT_TONETWORK": 0x8001,
    "UI_ON_PEERMSG": 0x8002,

    "MAX_ERROR_CODE": 0xFFFF
};

module.exports = ErrorCodes;