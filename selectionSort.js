//选择排序
//选择未排序的序列最小值放到前面
function selectionSort(arr){
    var min;
    for(var i =0;i<arr.length-1;i++){
        min = i;
        for(var j=i;j<arr.length-1;j++){
            if(arr[min]>arr[j]){
                swap(arr,min,j)
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