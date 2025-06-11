#
1. download the monog
2. download mongosh
3. set the path in environment variable
4. open the mongosh in cmd



# execute script
## sql
- create file emp.sql
```
insert into emp(id,name,salary) valeus (1,'Jack',1000);
insert into emp(id,name,salary) valeus (1,'Jack',1000);
insert into emp(id,name,salary) valeus (1,'Jack',1000);
.
.
.
commit;
```

- open the sqlplus
- execute below command
```
@absolute_path_of_sql_file_with_file_name
eg:
@c:\ramj\sql\emp.sql
```

## mongo db
- open the command propmp
- execute below command
```
mongosh <database_name> absolute_path_of_sql_file_with_file_name
eg:
mongosh seed /Users/../../15May2025/MongoDB/script.js
```


## import json
- step 1: download json-tool
- step 2: unzip the zip file and copy the jar or executable file in  program-files/mongodb/../../../bin folder
- cd path_of json_file
- execute the below command
```
mongoimport json-file_name -d <database_name> -c <collection-name> --jsonArray
eg:
mongoimport movie.json -d seed -c movie --jsonArray
```

