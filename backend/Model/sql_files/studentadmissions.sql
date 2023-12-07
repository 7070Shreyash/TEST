-- -------------------------------------------------------------
-- TablePlus 5.1.0(468)
--
-- https://tableplus.com/
--
-- Database: studentadmissions
-- Generation Time: 2022-12-22 14:48:56.3590
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."academicdetails" (
    "id" text NOT NULL,
    "board_10" text,
    "percentage_10" float4,
    "yop_10" int4,
    "rollno_10" int4,
    "board_12" text,
    "percentage_12" float4,
    "yop_12" int4,
    "rollno_12" int4,
    "application_no" int8,
    "mains_rank" int4,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

CREATE TYPE pref AS (dsp CHAR(3), waiting INT);
-- Table Definition
CREATE TABLE "public"."applicants" (
    "id" text NOT NULL,
    "percentile" float4,
    "prefs" _pref,
    "status" int4,
    "on_hold" bool,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."branches" (
    "id" bpchar(3) NOT NULL,
    "seats" int4,
    "status" int4,
    "wl_no" int4,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."personaldetails" (
    "id" text NOT NULL,
    "first_name" text,
    "middle_name" text,
    "last_name" text,
    "father_name" text,
    "address1" text,
    "address2" text,
    "zip" int4,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS signup_id_seq;

-- Table Definition
CREATE TABLE "public"."signup" (
    "id" int4 NOT NULL DEFAULT nextval('signup_id_seq'::regclass),
    "email_id" text,
    "phone_no" int8,
    "password" text,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."academicdetails" ("id", "board_10", "percentage_10", "yop_10", "rollno_10", "board_12", "percentage_12", "yop_12", "rollno_12", "application_no", "mains_rank") VALUES
('1', 'CBSE', 135351, 315531, 135531, 'ISC', 135531, 135531, 135351, 4343131, 10),
('10', 'CBSE', 13232, 321231, 12231, 'CBSE', 321123, 123312, 321321, 123231231, 100),
('2', 'CBSE', 135351, 351315, 315351, 'CBSE', 135, 364, 63634, 4374774, 20),
('3', 'ISC', 12344, 3456, 7344, 'ISC', 3457, 3474, 743473, 244563, 30),
('4', 'ISC', 13434, 341143, 14343, 'Maharashtra Board', 31143, 31431, 314341, 31431, 40),
('5', 'CBSE', 3.123321e+06, 412421, 4124214, 'ISC', 1.2424142e+07, 412241, 124142, 412142142, 50),
('6', 'CBSE', 34413, 34347, 43774, 'CBSE', 43773, 347437, 437473, 4473, 60),
('7', 'CBSE', 121233, 42624, 246246, 'CBSE', 4334, 4343, 6343645, 4334654, 70),
('8', 'CBSE', 4334, 437437, 473437, 'ISC', 473437, 437437, 347437, 43347, 80),
('9', 'CBSE', 314124, 341341, 314134, 'ISC', 314341, 134341, 413431, 314341, 90);

INSERT INTO "public"."applicants" ("id", "percentile", "prefs", "status", "on_hold") VALUES
('1', 10, '{"(CSE,10000)","(CCE,10000)","(ECE,10000)"}', -1, 'f'),
('10', 100, '{"(CSE,10000)","(MME,10000)","(ECE,10000)"}', -1, 'f'),
('2', 20, '{"(CSE,10000)","(ECE,10000)","(MME,10000)"}', -1, 'f'),
('3', 30, '{"(CCE,10000)","(CSE,10000)","(MME,10000)"}', -1, 'f'),
('4', 40, '{"(CCE,10000)","(MME,10000)","(CSE,10000)"}', -1, 'f'),
('5', 50, '{"(CSE,10000)","(CCE,10000)","(MME,10000)"}', -1, 'f'),
('6', 60, '{"(ECE,10000)","(CCE,10000)","(MME,10000)"}', -1, 'f'),
('7', 70, '{"(CSE,10000)","(MME,10000)","(ECE,10000)"}', -1, 'f'),
('8', 80, '{"(ECE,10000)","(CCE,10000)","(CSE,10000)"}', -1, 'f'),
('9', 90, '{"(CCE,10000)","(CSE,10000)","(ECE,10000)"}', -1, 'f');

INSERT INTO "public"."branches" ("id", "seats", "status", "wl_no") VALUES
('CCE', 1, 2, 1),
('CSE', 2, 1, 1),
('DCS', 3, 5, 1),
('DEC', 3, 6, 1),
('ECE', 1, 3, 1),
('MME', 3, 4, 1);

INSERT INTO "public"."personaldetails" ("id", "first_name", "middle_name", "last_name", "father_name", "address1", "address2", "zip") VALUES
('1', 'A', '', '', 'erwrq', 'eqreq', 'qeqr', 411027),
('10', 'J', '', '', 'Pranav', 'Pranav', 'Pranav', 411027),
('2', 'B', '', '', 'Pranav', 'Pranav', 'Pranav', 411027),
('3', 'C', '', '', 'Pranav', 'Pranav', 'Pranav', 411027),
('4', 'D', '', '', 'Pranav', 'Pranav', 'Pranav', 411027),
('5', 'E', '', '', 'Pranav', 'Pranav', 'Pranav', 411027),
('6', 'F', '', '', 'Pranav', 'Pranav', 'Pranav', 411027),
('7', 'G', '', '', 'Pranav', 'Pranav', 'Pranav', 411027),
('8', 'H', '', '', 'Pranav', 'Pranav', 'Pranav', 411027),
('9', 'I', '', '', 'Pranav', 'Pranav', 'Pranav', 411027);

INSERT INTO "public"."signup" ("id", "email_id", "phone_no", "password") VALUES
(1, 'a@b.com', 1234567890, '1'),
(2, 'a@c.com', 1234567890, '1'),
(3, 'a@d.com', 1234567890, '1'),
(4, 'a@e.com', 1234567890, '1'),
(5, 'a@f.com', 1234567890, '1'),
(6, 'a@g.com', 1234567890, '1'),
(7, 'a@h.com', 1234567890, '1'),
(8, 'a@i.com', 1234567890, '1'),
(9, 'a@j.com', 1234567890, '1'),
(10, 'a@k.com', 1234567890, '1');

