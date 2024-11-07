function alert(item){
    console.log(item)
}

function myEach(collection, callback){
    const newCollection = Object.values(collection)
    for(const item of newCollection){
        callback(item)
    }
    return collection
}
//myEach([1, 2, 3], alert);
//myEach({one: 1, two: 2, three: 3}, alert);

function myMap(collection, callback){
    const newCollection = Object.values(collection)
    const newArray = []
    for(const item of newCollection){
        newArray.push(callback(item))
    }
    return newArray
}

function myReduce(collection, callback, acc){
    const newCollection = Object.values(collection)
    for(const val of newCollection){
        if(!acc){
            acc = val
        } else {
            acc = callback(acc, val, collection)
        }
    }
    return acc
}
myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; },10)

function myFind(collection, predicate){
    //predicate is callback function that returns true/false
    const newCollection = Object.values(collection)
    let i = 0
    let output
    do {
        if(predicate(newCollection[i])){
            output = newCollection[i]
            break;
        } else {
            i++
        }
    } while (i < newCollection.length);
    return output
}
//console.log(myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }))
//console.log(myFind([1, 3, 5], function(num){ return num % 2 == 0; }))
// => 2

// myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; });
// => 4

function myFilter(collection, predicate){
    //predicate is callback function that returns true/false
    const newCollection = Object.values(collection)
    const responseArray = []
    for(const item of newCollection){
        if(predicate(item)){
            responseArray.push(item)
        }
    }
    return responseArray
}

function mySize(collection){
    const newCollection = Object.values(collection)
    return newCollection.length
}

function myFirst(array, n){
    if(n){
        //optional integer set
        const returnArray = []
        for(let i = 0; i < n && array.length > i; i++){
            returnArray.push(array[i])
        }
        return returnArray
    } else {
        //optional integer not set, return first element
        return array[0]
    }
}

function myLast(array, n){
    if(n){
        //optional integer set
        const returnArray = []
        for(let i = 0; i < n && array.length > i; i++){
            returnArray.unshift(array[array.length-1-i])
        }
        return returnArray
    } else {
        //optional integer not set, return first element
        return array[array.length-1]
    }
}

/*
function mySortBy(array, callback){
    //new idea
    // add array into object with keys. 
  
    const sortObj = {...array}
    
    
    //return array.sort()
    const newArray = array.map(callback)
    console.log(newArray)
    debugger;
    //array.forEach((item) => console.log(callback(item)))

}
*/

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}