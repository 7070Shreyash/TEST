//const details = require('./sql_files/Souravdb')
//const Pool = require("pg").Pool;
import pkg from 'pg'
const {Pool} = pkg
import dotenv from 'dotenv'
dotenv.config()

const proConfig = {
    connectionString: process.env.DATABASE_URL, //heroku addons
}

const devConfig = {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database : process.env.PG_DATABASE
}

export const pool = new Pool(process.env.NODE_ENV === 'production'? proConfig : devConfig)
/* 
export const pool = new Pool(
    {
        user: details.user,
        password: details.password,
        host: details.host,
        port: details.port,
        database : details.database
    }
)
 */

//module.exports = pool

/*
INSERT INTO "public"."applicants" ("id", "percentile", "prefs", "status", "on_hold") VALUES
(1, 100, '{"(CSE,100)","(CCE,100)","(ECE,100)"}', -1, 'f'),
(2, 90, '{"(CSE,100)","(ECE,100)","(MME,100)"}', -1, 'f'),
(3, 80, '{"(CCE,100)","(CSE,100)","(MME,100)"}', -1, 'f'),
(4, 70, '{"(CCE,100)","(MME,100)","(CSE,100)"}', -1, 'f'),
(5, 60, '{"(CSE,100)","(CCE,100)","(MME,100)"}', -1, 'f'),
(6, 50, '{"(ECE,100)","(CSE,100)","(MME,100)"}', -1, 'f'),
(7, 40, '{"(CSE,100)","(MME,100)","(ECE,100)"}', -1, 'f'),
(8, 30, '{"(ECE,100)","(CCE,100)","(CSE,100)"}', -1, 'f'),
(9, 20, '{"(CCE,100)","(CSE,100)","(ECE,100)"}', -1, 'f'),
(10, 10, '{"(CSE,100)","(MME,100)","(ECE,100)"}', -1, 'f');

INSERT INTO applicants(id, percentile, prefs, status, on_hold) VALUES ( 1, 100, ARRAY [('CSE', 100), ('CCE', 100), ('ECE', 100)]:: pref[], -1, false) 

INSERT INTO "public"."branches" ("id", "seats", "status", "wl_no") VALUES
('CCE', 1, 2, 1),
('CSE', 2, 1, 1),
('DCS', 3, 5, 1),
('DEC', 3, 6, 1),
('ECE', 1, 3, 1),
('MME', 3, 4, 1);
*/