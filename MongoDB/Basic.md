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
```


# Collection (Table)
## crate collectdion
```
db.createCollection('<collection_name>')
```

## display list of collection
```
show collections
```

## drop collection
```
db.<collection_name>.drop();
```

# Insert
## insert a row
```
db.<collection_name>.insert({data});

# what do we mean by data.
data means key:value pairs
eg:
db.emp.insert({id:1, name:'Jack', salary:4000}); //deprecated
db.emp.insertOne({_id:1, name:'Jack', salary:4000}); 
```

## display data in collection
```
db.<collection_name>.find();

```

## insert more than one row
```
db.emp.insertMany([
    {id:1, name:'Sam'},
    {id:2, name:'John'}
]);
```




