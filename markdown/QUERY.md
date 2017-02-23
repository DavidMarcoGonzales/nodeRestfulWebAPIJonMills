Generic Query

http://localhost:3000/api/books?genre=Science Fiction

?genre=Science Fiction


express reads that as the following
```
req.query = {
  genre= 'Science Fiction';
}
```
Same with the following

   author=Sylvester Stalone



