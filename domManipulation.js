const array = [1,2,3,4]

// array.map((items, array, index)=> console.log(items, array, index))

// const arr = array.filter((items) => items >=3 )
// console.log(arr);

const arr= array.reduce( (accum, currval)=> {

    console.log(`acc: ${accum} and the current value is: ${currval}`);
    return (accum + currval)
}, 0)

// console.log( accum);
// console.log(currval);
console.log(arr);