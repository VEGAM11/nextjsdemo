CREATE DATABASE 'nextjsdemo_db';
DROP DATABASE 'nextjsdemo_db';

CREATE TABLE "user" (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL
);
SELECT * FROM "user";
DROP TABLE "user";
