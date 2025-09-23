CREATE TABLE user(
    name VARCHAR(100),
    email VARCHAR(100),
    age INT
);

INSERT INTO user(name, age, email) VALUES(
    "Antonia",
    42,
    "antoniafrutuoso0@gmail.com"
);

SELECT * FROM user WHERE age > 18;
SELECT * FROM user WHERE name = "antonia";

DELETE FROM tabela WHERE age > 18;

UPDATE user SET name = "Debora" WHERE name = "Débora";