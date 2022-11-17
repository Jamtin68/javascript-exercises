const removeFromArray = function(array, remove1, remove2, remove3, remove4) {    
    for (i = 0; i < array.length; i++) {
        if ((array[i] === remove1) || (array[i] === remove2) || 
            (array[i] === remove3) || (array[i] === remove4)) {
            array.splice(i, 1, "");
        }
    }

    if (array[0] === "") {
        array.splice(0, 1)
    }
    if (array[0] === "") {
        array.splice(0, 1)
    }
    if (array[0] === "") {
        array.splice(0, 1)
    }
    if (array[0] === "") {
        array.splice(0, 1)
    }

    if (array[1] === "") {
        array.splice(1, 1)
    }
    if (array[1] === "") {
        array.splice(1, 1)
    }
    if (array[1] === "") {
        array.splice(1, 1)
    }
    if (array[1] === "") {
        array.splice(1, 1)
    }

    if (array[2] === "") {
        array.splice(2, 1)
    }
    if (array[2] === "") {
        array.splice(2, 1)
    }
    if (array[2] === "") {
        array.splice(2, 1)
    }
    if (array[2] === "") {
        array.splice(2, 1)
    }

    if (array[3] === "") {
        array.splice(3, 1)
    }
    if (array[3] === "") {
        array.splice(3, 1)
    }
    if (array[3] === "") {
        array.splice(3, 1)
    }
    if (array[3] === "") {
        array.splice(3, 1)
    }

    if (array[4] === "") {
        array.splice(4, 1)
    }
    if (array[4] === "") {
        array.splice(4, 1)
    }
    if (array[4] === "") {
        array.splice(4, 1)
    }
    if (array[4] === "") {
        array.splice(4, 1)
    }


    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
