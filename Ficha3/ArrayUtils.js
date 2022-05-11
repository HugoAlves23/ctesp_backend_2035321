var utils = {
    isEmpty: function (array) {
        return array.length == 0;
    },

    max: function (array) {
        var maxNumber = [0];
        for (var i = 0; i < array.length; i++) {
            if (maxNumber < array[i]){
            maxNumber = array[i]; 
            }   
        }
        return maxNumber;
    },

    min: function (array) {
        var minNumber = [0];   
        for ( var i = 0; i < array.lenght; i++){
            if (minNumber > array[i]){
            minNumber = array[i];
            }
        }
        return minNumber;
    },

    avg: function (array) {
        var array = [];
        sum = 0;
        for ( i = 0; i < array.length; index++){
            sum = sum + array [i];
        }
        var avg = sum /array.lenght;
        return avg
    },

    indexOf: function (array, value){
        for (i = 0; i < array.length; i++) {
            if (array[i]==value) {
                return i;
            }
        }
        return -1;
    },

    subArray: function (array, startIndex, endIndex){
        var newArray = []
        for (var i = startIndex; i <= endIndex; i++) {
            newArray = newArray.push(array[i]);
        }
        return newArray
    },

    isSameLenght: function (a1, a2){
        return a1.length == a2.length;
    },

    reverseArray: function (array){
        var m = [];
        for (i = array.length -1; i >= 0; i--){
            m.push(array[i]);
        }
        return m;
    },

    swap: function (array, index1, index2){
        positionTemp = array[index1];
        array[index1] = array[index2];
        array[index2] = positionTemp;
        return array;
    },

    contains: function (array, value) {
        return this.indexOf(array, value) != -1;     
    },

    concatenate: function (a1, a2) {
        for (let i = 0; i < a2.length; i++) {
            a1.push(a2[i]);
        }
        return a1;
        
    }

}



module.exports = utils;

