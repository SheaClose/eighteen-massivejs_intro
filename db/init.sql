drop table if exists bands;

create table bands
(
  id serial primary key,
  name VARCHAR(250) not null,
  year_formed int,
  genre VARCHAR(50)
);

insert into bands
  ( name, year_formed, genre)
VALUES
  ('Between the buried and me', 2000, 'Metal'),
  ('The Wombats', 2003, 'Indie'),
  ('Foster the people', 2009, 'Alternative'),
  ('Sum 41', 1996, 'Pop-punk'),
  ('Joywave', 2010, 'Alternative'),
  ('Rolling Stones', 1962, 'Rock'),
  ('Lagwagon', 1900, 'Punk'),
  ('The Decemberists', 2000, 'Indie');