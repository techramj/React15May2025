#
1. download the monog
2. download mongosh
3. set the path in environment variable
4. open the mongosh in cmd

## display the dbs
```
show dbs
```

## create db
```
use <db_name>
eg: use seed
>test
>seed
```

## see the current db name
```
db
```

## stat of db
```
db.stats()
```

## create the collection(Table)
- db.createCollection('<colection_name>');

```
db.createCollection('emp');
```

## drop database
```
db.dropDatabse()
``