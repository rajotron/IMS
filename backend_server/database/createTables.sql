
/*Create database named as 'ims'*/

CREATE DATABASE ims;


/*Create shopping centre table*/

CREATE TABLE shoppingcentre(
    id SERIAL PRIMARY KEY,
    name VARCHAR(250),
    address VARCHAR(250),
    created_at timestamp,
    created_by VARCHAR(250),
    updated_at timestamp,
    updated_by VARCHAR(250)
);

/*Create assets table*/

CREATE TABLE assets(
    asset_id SERIAL PRIMARY KEY,
    shoppingcentre_id integer,
    name VARCHAR(250),
    dimension VARCHAR(250),
    address VARCHAR(250),
    status VARCHAR(250) default 'OFFLINE',
    created_at timestamp,
    created_by VARCHAR(250),
    updated_at timestamp,
    updated_by VARCHAR(250)
);

/*Create users table*/
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    token VARCHAR(250),
    username VARCHAR(250) UNIQUE,
    password VARCHAR(250)
);


/* Examples to insert into each of the above mentioned table*/

insert into users(token, username, password) values(MD5(random()::text), 'user1', 'user1');

insert into shoppingcentre(name, address, created_at, created_by) values('Shipra Mall', 'Ghaziabad', current_timestamp, 'user1');

insert into assets(shoppingcentre_id, name, dimension, address, created_at, created_by) values(1, 'Big Bazaar', '23x45x34', 'Plot-9, LTF-3', current_timestamp, 'user1');