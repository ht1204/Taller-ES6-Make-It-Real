const max = (arr) => {
    if(!arr.length) return 0;

    const sortedArr = arr.sort((a,b) => b - a);
    const maxItem = sortedArr[0];
    return maxItem;
}

module.exports = {
    max,
}
