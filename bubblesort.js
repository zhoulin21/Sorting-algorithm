//冒泡排序
//从首至尾比较相邻的个数，较大的数被交换至后一位

function bubbleSort(arr) {
    for (var i = 0; i < arr.length-1; i++) {
        for (var j = 0; j < arr.length - 1-i; j++) {
            if (arr[j] > arr[j+1])
                swap(arr, j, j+1);

        }
    }
    return arr;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
