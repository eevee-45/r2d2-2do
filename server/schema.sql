CREATE TABLE public."user" (
  id SERIAL PRIMARY KEY,
  feed_id INTEGER,
  CONSTRAINT user_feed_fk FOREIGN KEY (feed_id) REFERENCES public."Feed" (id)
);

CREATE TABLE public."Feed"(
  id VARCHAR(255),
  title VARCHAR(30),
  description VARCHAR(155),
  progress INT
)
