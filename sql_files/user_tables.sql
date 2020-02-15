
-- CREATE TABLE
CREATE TABLE kawaii_users (
  user_id                 serial PRIMARY KEY,
  username                varchar(70)  NOT NULL,
  discord_id              varchar(100) NOT NULL,
  discord_discriminator   varchar(50)  NOT NULL,
  created_date            date NOT NULL
);
