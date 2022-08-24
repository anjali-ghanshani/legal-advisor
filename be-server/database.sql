
CREATE TABLE appointment(
    appointment_id SERIAL PRIMARY KEY,
    appdate DATE NOT NULL,
    app_stime TIME NOT NULL,
    app_Etime TIME NOT NULL
);


ALTER TABLE appointment ADD app_stime TIME NOT NULL;

ALTER TABLE appointment DROP COLUMN description CASCADE;


-- set extension

create extension if not exists "uuid-ossp";


CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
)

-- insert a fake user

INSERT INTO users (user_name,user_email,user_password) VALUES ('John Doe','john.doe@gmail.com','kht234');


-- 

CREATE TABLE booking(
    booking_id SERIAL PRIMARY KEY,
    bkdate DATE NOT NULL,
    stime TIME NOT NULL,
    etime TIME NOT NULL
);

-- insert sample record
INSERT INTO booking (bkdate, stime, etime) VALUES('2022-08-12','08:45:00','09:15:00');
