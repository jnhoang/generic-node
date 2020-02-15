
-- hmm, that reminds me of the time that <@${process.env.ALEX_ID}>
-- CREATE TABLE
CREATE TABLE interaction_triggers (
  interaction_id    serial PRIMARY KEY,
  description       varchar(100) NOT NULL,
  trigger           varchar(50)  NOT NULL,
  response          varchar(300) NOT NULL,
  created_date      date NOT NULL
);


INSERT INTO interaction_triggers (description, trigger, response, created_date)
VALUES
  ('secret world of richard scary', 'time to love and play', 'https://www.youtube.com/watch?v=cgV3vdOT09I', '2020-02-13'),
  ('secret world of richard scary', 'lots of things to do and see', 'https://www.youtube.com/watch?v=cgV3vdOT09I', '2020-02-13'),
  ('sailor moon', 'never turn your back on your friends', 'https://www.youtube.com/watch?v=5txHGxJRwtQ', '2020-02-13'),
  ('darkwing duck', 'lets get dangerous', 'https://www.youtube.com/watch?v=375ENQbru8s', '2020-02-13'),
  ('2stupid dogs', 'stupid dog', 'https://www.youtube.com/watch?v=eCp-Duiu6EU', '2020-02-13'),
  ('sailor moon', 'never turn your back on your friends', 'https://www.youtube.com/watch?v=5txHGxJRwtQ', '2020-02-13');
