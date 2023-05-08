let array =[1,3,4,5,6,7,9,11,12,13,14]


const findItem = (array,searchItem,start,end) => {
    if (start > end) return false;
    let midPoint = Math.floor((start+end)/2)
    if(array[midPoint]===searchItem) {
        return true;
    }
    if(array[midPoint]>searchItem){
       return  findItem(array,searchItem,0,midPoint-1)
    }else if(array[midPoint]<searchItem){
     return   findItem(array,searchItem,midPoint+1,array.length-1)
    }

}

console.log(findItem(array, 12,0,array.length-1))