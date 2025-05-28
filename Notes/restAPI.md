# Rest API

```
REpresentational State Transfer 



Amazon 
   service             bank              DTH/Fedex


   Java6               Java6             Java6



   RestAPI


   amazon             -bank            DTH/Fedex/

   {
    "username":"Bhusan",
    itemPurchased:'Laptop',
    itemId:1001,
    amount:120000,
    
   }

   <detail>
        <username>Bhushan</username>
        <itemPurchased>Laptop</itemPurchased>
        <itemId>1001
        <amount>12000</amount>
   </detail>
```

## status code
- 1XX information
```
100 continue
```

- 2XX Success
```
200 : OK
201 : Created
204 : No Content
```
- 3XX redirection
```
305: Using proxy
301: moved permanently
```
- 4XX client error
```
400 Bad request
401 unauthorized
403 forbidden
404 Not found

```

- 5XX server error
```
500: Internal server error
502: Bad Gateway
503: Service unavailable
504: Gateway timeout

501: Not implement


```


