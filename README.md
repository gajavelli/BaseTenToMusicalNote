# BaseTenToMusicalNote
Convert a number (positive integer) to a musical note

### Function
This function written in javascript would accept a postive integerand convert it into Musical note.

**Musical (base 12)**
```
A, A#, B, C, C#, D, D#, E, F, F#, G, G#
```

### Test the function and you should get following results

```javascript
> baseTenToMusical(11)
"G#"

> baseTenToMusical(20)
"A#F"

> baseTenToMusical(256120)
"A#AC#BEC#"

> baseTenToMusical('12AG21')
""
```

### Code
```javascript
function baseTenToMusical (input) {
    var output = "";
    var musical = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    if(isNaN(parseInt(input)))
    {
        return output;
    }
     var i = input; var temp = "";	
     while(i  > 0){

       	if(i < 12 ){
            output =  (i < 12?musical[i]:musical[Math.floor(i / 12)] + musical[(i) %12]) + output;
        }
        else{ 
	    output =  i < 12?musical[i]:musical[(i) %12] + output;
        } 
	i = Math.floor(i / 12);
     }

     return output;
}

```
