## Exercício 1

a) Liga uma tabela com a outra, interligando através de referencia.

b)
```INSERT INTO Rating VALUES(```
 ```"001", "Muito Violento" ``` 
 ```10, "004");```

c) Não pode criar por causa do "FOREIGN KEY", não consegue conectar com aquele id
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails 


d)
```ALTER TABLE Movie ``` 
``` DROP COLUMN Rating;``` 

e) Nãp pode excluir por causa da ligação da "FOREIGN KEY".

## Exercício 2

a) essa tabela serve relaciona a tabela de filmes com a tabela de atores através dos respectivos ids.

b)
```INSERT INTO MovieCast VALUES(```
``` "001","002"```
```),("002","003"),("003","004");```

c) Dá erro pq aquele id é inexistente, não tem como fazer a ligação.

d) Não permite excluir por causa do "FOREIGN KEY".

## Exercício 3

a) "ON" refenciar uma condição.

b)
```SELECT Movie.id, name, rate FROM Movies ```
```JOIN Rating ON Movies.id = Rating.movie_id;```

## DESAFIO

## Exercício 4

a) 
```SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment```
```FROM Movie m```
```LEFT JOIN Rating r ON m.id = r.movie_id;```
b)
```SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m```
```RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;```
c)
```SELECT AVG(r.rate), m.id, m.title FROM Movie m```
```LEFT JOIN Rating r ON m.id = r.movie_id```
```GROUP BY (m.id);```

## Exercício 5

a)Primeiro, unimos uma das tabelas independentes (Movie e Actor) com a tabela de junção MovieCast

```SELECT * FROM Movie m```
```LEFT JOIN MovieCast mc ON m.id = mc.movie_id```
```JOIN Actor a ON a.id = mc.actor_id;```

b)
```SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movie m```
```LEFT JOIN MovieCast mc ON m.id = mc.movie_id```
```JOIN Actor a ON a.id = mc.actor_id;```


d)
```SELECT ```
```		m.id as movie_id, ```
```    m.title, ```
```    a.id as actor_id, ```
```     a.name, ```
```     r.rate , ```
```     r.comment ```
```FROM Movie m```
```LEFT JOIN Rating r on r.movie_id = m.id```
```LEFT JOIN MovieCast mc ON m.id = mc.movie_id```
```JOIN Actor a ON a.id = mc.actor_id;```