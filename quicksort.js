//"快速排序"的排序过程只需要三步：
//（1）在数据集之中，选择一个元素作为"基准"（pivot）。
//(2)所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
//（3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止
function sort(arr, left, right) {
    let index;
    if (arr.length>1) {

        index = partition(arr, left, right); //选取两边数组边界
        console.log('index:'+index);
        if(index-1>left) {
            sort(arr, left, index - 1);   //左边继续排列
        }
        if(index<right) {
            sort(arr, index, right);  //右边边继续排列
        }
    }
    return arr; //直到数组长度为一，无需排列，返回

}

function partition(arr,left,right){
    var pivot = Math.floor((right + left) / 2);  //每次从中间选参考值
    let i = left,
        j = right;
    while (j >= i) {

        while (arr[i] < arr[pivot]) {
            i++;  //左边比参考值小的，右移

        }
        while (arr[j] > arr[pivot]) {
            j--;  //右边比参考值小的，左移
        }
        if (j >= i) {
            swap(arr, i, j);  ////右边比参考值小的，左边比参考值大的，两数互换位置
            i++;           //继续移动
            j--;
        }
    }
    return i; //返回参考值排列后所在的位置索引
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSort(arr) {
    return sort(arr, 0, arr.length - 1);
}


