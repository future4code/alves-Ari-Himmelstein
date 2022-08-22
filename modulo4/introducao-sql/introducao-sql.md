
### Exercício 1
 A) O VARCHAR(n) recebe uma string de maxino "n" caracteres, ARMAZENA UM TEXTO DE COMPRIMENTO VARIAVEL, DATE armazena data no formato YYYY-MM-DD.
 PRIMARY KEY restinge a identificação como um identificador único e NOT NULL não podendo ser vazio.

 B) "SHOW DATABASE" entrega uma tabela que tem meu registro no SQL e o "SHOW TABLES" entrega uma tabela de tabelas criadas.

 C) Entrega os detalhes da tabela.


```
CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
SHOW TABLES;


DESCRIBE Actor;
```

## Exercício 2
 B) Duplicado entrada '002' para chave 'PRIMARY', que não pode ter o mesmo string. 
 C) A contagem de colunas não contagem de valor de correspondência na linha
 D) O campo 'name' não possui um valor padrão
 E) Valor de data incorreto : '1950' para a coluna 'birth_date', o valor da birth_date não está em aspa.

```
INSERT INTO Actor (id,name,salary, birth_date, gender)
VALUES("001","Tony Ramos", 400000, "1948-08-25", "male");

INSERT INTO Actor (id,name,salary, birth_date, gender)
VALUES("002","Glória Pires", 1200000, "1963-08-23", "female");
```

b)Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near ')' at line 7
Faltou a informação de genero "female"

c)

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

Error Code: 1136. Column count doesn't match value count at row 1
Numero de colunas não batem com o numero de paranetros.
d)
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
Error Code: 1364. Field 'name' doesn't have a default value
Falta o campo de nome
e)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
Campo de data incorreto, deveria ser uma string
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

F)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

##Exercício 3
A)
```
SELECT * from Actor WHERE gender = "female";
```
B)
```
SELECT id, name, salary from Actor WHERE name = "Tony Ramos";
```
C)
```
SELECT * from Actor WHERE gender = "invalid";
```
Retorno foi NULL para todas as colunas, por que  não tem nenhum gender = "invalid"

D) 
```
SELECT id, name, salary from Actor WHERE salary < 500000;
```
E) 
```
SELECT id, nome from Actor WHERE id = "002";
```
Error Code: 1054. Unknown column 'nome' in 'field list'
não existe a coluna nome na lista de campos.



```
SELECT id, name from Actor WHERE id = "002";
```

## Exercício 4

A)
```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```

selecionar os atores com nome que comece com A ou J e salario maior que 300000

B)
```
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
```
C)
```
SELECT * FROM Actor
WHERE name LIKE "%G%" OR "%g%";

D)

SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
```
##EXERCICIO 5

A) O datatype TEXT serve para armazenar uma string de até 2GB de tamanho. 
Essa query cria uma tabela que armazena informações de filmes, como nome, a sinopse, data de lançamento e a pontuação.

```
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Movie ( id, title, synopsis, release_date, rating)
VALUE ("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-06-01", 7);

INSERT INTO Movie ( id, title, synopsis, release_date, rating)
VALUE ("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10);

INSERT INTO Movie ( id, title, synopsis, release_date, rating)
VALUE ("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8);

INSERT INTO Movie ( id, title, synopsis, release_date, rating)
VALUE ("004", "Tropa de Elite", "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano.Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar.", "2007-10-05", 9);
```

##Exercício 6

A)
```
SELECT id, title, rating FROM Movie WHERE id = "002";
```

B) 
```
SELECT id, title FROM Movie WHERE title = "se eu fosse você";
```

C)
```
SELECT id, title, synopsis FROM Movies WHERE rating >= 7;
```

##EXERCÍCIO 7

A)
```
SELECT * FROM Movie
WHERE title LIKE "%VIDA%";
```

B)
```
SELECT * FROM Movie
WHERE title LIKE "%VOCÊ%" OR synopsis LIKE "%ANOS%";
```

C)
```
SELECT * FROM Movie
WHERE release_date < "2022-08-22";

```
## D)
```
SELECT * FROM Movie
WHERE release_date < CURDATE() AND 
      (title LIKE "%você%" OR
      synopsis LIKE "%você%") AND rating > 7;
```