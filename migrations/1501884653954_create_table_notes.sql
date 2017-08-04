-- up
CREATE TABLE notes (
  id        serial,
  user_id   integer,
  date      bigint,
  note      text
);

---

-- down
DROP TABLE notes;
