function getTempByPrevSeq(PrevTemp, currentValue) {
    //这里规定，0也可以进行子串拼接
    if (PrevTemp.sum >= 0) {
        return {
            num: PrevTemp.num + 1,
            sum: PrevTemp.sum + currentValue
        };
    } else {
        return {
            num: 1,
            sum: currentValue
        }
    }
}

function getMaxSumSeqArr(input) {
    if (input.length === 0) return;
    var temps = []; // 存储每一位与前面连续之后可得最大值的信息，以便后面的每一位进行迭代更新

    //第一位向前的最大子串就是它自己本身
    var temp = {
        num: 1,
        sum: input[0]
    };
    temps.push(temp);

    for (var i = 1, len = input.length; i < len; i++) {
        var ref = input[i];
        //从前向后迭代
        var temp = getTempByPrevSeq(temps[i-1], ref);
        temps.push(temp);
    }

    //存储了迭代过程中的信息, 可以在这里看看
    console.log(temps);

    var maxValue, //获取最大值
        indexArr = []; //获取多个结果的index

    maxValue = temps[0].sum;
    indexArr.push(0);

    for (var i = 1, len = temps.length; i < len; i++) {
        var ref = temps[i];
        if (ref.sum === maxValue) {
            indexArr.push(i);
        } else if (ref.sum > maxValue) {
            maxValue = ref.sum;
            indexArr.length = 0; //重置数组
            indexArr.push(i);
        }
    }

    //output
    console.log("MaxValue: " + maxValue);
    for (var i = 0, len = indexArr.length; i < len; i++) {
        var index     = indexArr[i],
            ref     = temps[index];
        console.log(input.slice(index-ref.num+1, index+1));
    }

}

var input = [-23, 17, -7, 11, -2, 1, -34];
getMaxSumSeqArr(input);
