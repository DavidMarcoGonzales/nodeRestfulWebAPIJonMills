Sanatized Query for only genre

Have express look inside req.query to see of ?genere was in url
if so set local query.genere to query.genere in req object
otherwise it query remains an empty object

```javascript 1.8
var query = {};

if (req.query.genere){
    query.genre = req.query.genre;
}
```

