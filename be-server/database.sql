-- CREATE DATABASE legal_advisor; 
-- Not required as We hired heroku to provide the db

CREATE TABLE client(
    client_id SERIAL PRIMARY KEY

);

CREATE TABLE advisor(
    advisor_id SERIAL PRIMARY KEY
);

CREATE TABLE appointment(
    appointment_id SERIAL PRIMARY KEY,
    appdate DATE NOT NULL,
    app_stime TIME NOT NULL,
    app_Etime TIME NOT NULL
);


ALTER TABLE appointment ADD app_stime TIME NOT NULL;

ALTER TABLE appointment DROP COLUMN description CASCADE;
