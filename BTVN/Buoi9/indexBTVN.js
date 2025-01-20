const arr = [1, 3, 5, 7, 9]

// map
function Mapp(array, callback){
    const result=[]
    for(let i = 0; i < array.length; i++){
        result.push(callback(array[i], i, array))
    }
    return result;
}

const arrT=Mapp(arr, function (value, index, array) {
    return value*2;
})

console.log(arrT);



// forEach
function forEach(array, callback) {
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array)
    }
}

forEach(arr, function (value, index, array) {
    console.log(value, index, array)
})



// find
function Find(array,callback){
    for(let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)) return array[i];
    }
    return undefined;
}

const Found=Find(arr,function(value,index,array){
    return value>4;
})
console.log(Found);



// findIndex
function FindIndex(array,callback){
    for(let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)) return i;
    }
    return -1;
}

const FoundIndex=FindIndex(arr,function(value,index,array){
    return value>4;
})
console.log(FoundIndex);



// reduce
function Reduce(array,callback,Valuee){
    let result=Valuee;
    for(let i = 0; i < array.length; i++){
        if (callback(result,array[i], i, array)) result+=array[i];
    }
    return result;
}

const reduce=Reduce(arr,function(previousValue,currentValue, currentIndex, array){
            return (previousValue + currentValue)
        },0)
console.log(reduce);



// filter
function Filter(array,callback){
    const result=[]
    for(let i = 0; i < array.length; i++){
        if (callback(array[i], i, array)) result.push(array[i])
    }
    return result;
}

const ArrFilter=Filter(arr,function(value,index,array){
    return value>4;
})
console.log(ArrFilter);
