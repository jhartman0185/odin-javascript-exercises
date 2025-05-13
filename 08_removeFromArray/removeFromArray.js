const removeFromArray = function() {
    const nameArray = ["Jason", "Vinca", "Chris", "Iris", "Melody"]

    function changeArray(array, name) {
    let newArray = array.filter(element => element != name);
    return newArray;
    
    }
    
    console.log(changeArray(nameArray, "Chris"));

};

// Do not edit below this line
module.exports = removeFromArray;
