var insert = function(array, rightIndex, value) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }   
    array[j + 1] = value; 
};

var insertionSort = function(array) {
    for (var x = 1; x < array.length; x++) {
        insert(array, x - 1, array[x]);
    }

};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array_1 = [2, 4, 65, 0, 3, -3, -1];
insertionSort(array_1);
Program.assertEqual(array_1, [-3, -1, 0, 2, 3, 4, 65]);