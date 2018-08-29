//插入排序
//依次选一个数与已排序列进行比较 有序序列比他大则交换
function insertionSort(arr){
    for(var i=1;i<=arr.length-1;i++){
        var temp = arr[i];
        for(var j=i;temp<arr[j-1]&&j>0;j--){
            if(arr[j-1]>temp){
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                }

            }

    }
    return arr;
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}