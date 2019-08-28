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
