const scores = [
    60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];
const costs = [
    .25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .26, .29];
let height = 0;
let heightList = [];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > height) {
        height = scores[i];
    }
    if (i === scores.length - 1) {
        console.log('最大配方比例是：' + height);
        for (let j = 0; j < scores.length; j++) {
            if (scores[j] === height) {
                heightList.push(j);
            }
            if (j === scores.length - 1) {
                let max = costs[heightList[0]] < costs[heightList[1]] ? heightList[0] : heightList[1];
                console.log(heightList)
                console.log('最大数字的下标为：' + heightList);
                console.log('最低成本：' + max);
            }
        }
    }

}
