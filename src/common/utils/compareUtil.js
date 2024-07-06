const compareArray = (array1, array2, inPosition) => {
    if(inPosition) {
        return array1 === array2;
    } else {
        const status = []
        array1.forEach(element => {
            status.push({ status:  array2.includes(element)});
        }); 
        return status.reduce((a, b) => a.status && b.status);
    }
}

module.exports = {
    compareArray,
}