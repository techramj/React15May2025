# mapping

## one to one mapping

- relational
```
employee -> passport

id      name        salary
1       Sam         1000


Passport
pass_id  passport_num  emp_id
1001     AOBcD00123     1

```

- mongo
```
db.emp.insertOne({_id:1, name:'sam', salary:1000});
db.passport.insertOne({pass_id:1001, passport_num:'AOBcD00123', emp_id:1});

or
db.emp.insertOne({_id:1, name:'sam', salary:1000});


```

## one to many /many to one mapping



## many to many mapping




