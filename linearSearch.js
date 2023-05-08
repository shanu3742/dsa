let array =[1,3,4,5,6,7,9,11,12,13,14]

const linearSearch = (array,searchItem,start,end ) => {
    if(start>end){
        return false
    }
    if(array[start] ===searchItem){
        return true;
    }else{
        start= start+1;
        return linearSearch(array,searchItem,start,array.length-1)
    }

}

console.log(linearSearch(array,15,0,array.length-1))