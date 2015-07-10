/*
input string
output html markup string
-----
1/ split string by \n
2/ traverse array and check first char
3/ if bullet point and no <ul>, insert <ul><li> at the beginning and </li> at end
4/ then if no bullet insert </ul>
5/ insert </p> at the very last element's end
*/
var spliceSlice = function(str, index, count, add) {
    return str.slice(0, index) + (add || "") + str.slice(index + count);
};

var strHTML = function(string) {
    var ul = false;
    var p = false;

    var strArr = string.split("\n");

    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i].charCodeAt(0) === 8226) {
            if (!ul) {
                strArr[i] = spliceSlice(strArr[i], 0, 0, '<ul><li>');
                ul = true;
            } else {
                strArr[i] = spliceSlice(strArr[i], 0, 0, '<li>');
            }
            strArr[i] = spliceSlice(strArr[i], strArr[i].length - 1, 0, '</li>');
        } else if (ul) {
            strArr[i] = spliceSlice(strArr[i], 0, 0, '</ul>');
            strArr[i] = spliceSlice(strArr[i], 5, 0, '<p>');
            strArr[i] = spliceSlice(strArr[i], strArr[i].length, 0, '</p>');
        } else {
            strArr[i] = spliceSlice(strArr[i], 0, 0, '<p>');
            strArr[i] = spliceSlice(strArr[i], strArr[i].length, 0, '</p>');
        }
    }
    return strArr;
};
