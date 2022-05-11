const { reverseArray } = require("./ArrayUtils");
var arrayUtils = require("./ArrayUtils");


function started (){
    console.log ("Started Download");
}

function update (percentage){
    console.log (percentage + "% of Download");
}

function completed (){
    console.log ("Download completed!")
}

function performDownload(started_fn,update_fn,completed_fn){
    started_fn();
    for (let percentage = 0; percentage <= 100; percentage++) {
        update_fn(percentage);
    }
    completed_fn();
}

//performDownload(started,update,completed)
var newArray = [5, 4, 8, 9]
var array = [2, 7, 5, 8, 1, 0 ];
//console.log(arrayUtils.isEmpty(array));
//console.log(arrayUtils.indexOf(array, value));
//console.log(arrayUtils.max(array));
//console.log(arrayUtils.avg(array));
//console.log(arrayUtils.reverseArray(array));
//console.log(arrayUtils.swap(array, 1, 2));
//console.log(arrayUtils.contains(array, 7));
//console.log(arrayUtils.concatenate(array, newArray))

