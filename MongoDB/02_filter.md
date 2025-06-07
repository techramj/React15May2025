# filter
```
db.<collection_name>.find(); //fetch first 20 record

db.<collection_name>.find(<{filter}>, <{projection}>);
```
## operator
### 1. $eq (equals)
```
db.inventory.find({qty:{$eq:11}})
```

### 2. $ne (not equal)
```
db.inventory.find({qty:{$ne:11}})
```

### 3. $lt (less than) 
```
db.inventory.find({qty:{$lt:11}})
```

### 4. $gt (greter than)
```
db.inventory.find({qty:{$gt:11}})
```

### 5. $lte 
```
db.inventory.find({qty:{$lte:10}})
```

### 6. $in
```
db.inventory.find({$in:[8,9]})
```

### 6. $nin
```
db.inventory.find({$nin:[8,9]})
```


## execute script.
