let array_sum =function(my_array){
 if(my_array ===1){
    return my_array[0]
 }else{
    return  my_array.pop() + array_sum(my_array)
    // can't understand this line 
 }
}

 console.log(array_sum([1,2,3,4,5]))