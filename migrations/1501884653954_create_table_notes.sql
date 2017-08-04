-- up
CREATE TABLE notes (
  id        serial,
  user_id   integer,
  date      bigint,
  note      text
);

SELECT * FROM notes;

---

-- down
drop table notes;
