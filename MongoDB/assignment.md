# Assignment 1
```
create db seed
create collection student
inert 5 row using insertOne(try to add different field)
insert 20 rows using insertMany
fetch the details
{_id:1}
```
solution
```
use seed;
db.createCollection('student');

db.student.insertOne({_id:1, name:'Jack'});
db.student.insertOne({_id:2, name:'Jackson'});
db.student.insertOne({_id:3, salary:3000});
db.student.insertOne({_id:4, name:'Sam'});
db.student1.insertOne({_id:5, salary:7000});

db.student.insertMany([

]);

```

