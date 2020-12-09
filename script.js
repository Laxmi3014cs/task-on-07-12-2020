//1.chunk function

function chunk(arr,n){
    var arr1 = [];
    for(var i=0;i<arr.length;i=i+n){
        j = arr.slice(i,i+n);
        arr1.push(j);
    }
    return arr1;
}
var arr = [1,2,3,4,5,6];
var n =2;
var result = chunk(arr,n);
console.log(result); //output : [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

//2. reverse function

function reverse(arr){
    var arr1 =[];
    for(var i=arr.length-1;i>=0;i--){
        arr1.push(arr[i]);
    }
    return arr1;
}
var arr = [1,2,3,4,5,6];

var result = reverse(arr);
console.log(result);  //output : [ 6, 5, 4, 3, 2, 1 ]

//3.Intersection function


function intersection(arr1,arr2){
    var arr3 =[];
    for(var i=0;i<arr1.length;i++){
        for(var j=0;j<arr2.length;j++){
        if(arr1[i]===arr2[j]){
            arr3.push(arr1[i]);
            break;
        }
        
        }
    }
    return arr3;
}
var arr1 = [1,2,3,4,5,6];
var arr2 = [2,4,7,9];

var result = intersection(arr1,arr2);
console.log(result);   //output : [2,4]

//4._.join function .
//Converts all elements in array into a string separated by separator.

function seperator(arr1,s){
    var t = arr1[0];
    for(var i=1;i<arr1.length;i++){
        t= t+s+arr1[i];
    }
    return t;
}
var arr1 = [1,2,3,4,5,6];
var s ='~';
var result = seperator(arr1,s);
console.log(result); //output : '1~2~3~4~5~6'


//5._.last(array) function
//get the last element of array

function lastele(arr1){
    return arr1[arr1.length-1];
}
var arr1 = [1,2,3,4,5,6];

var result = lastele(arr1);
console.log(result); //output : 6

//6._.pull function
// it removes given values from array

function remove(arr1,arr2){
    var arr3 =[];
    
    for(var i=0;i<arr1.length;i++){
        var t = true;
        for(var j=0;j<arr2.length;j++ ){
            if(arr1[i]!==arr2[j]){
            t= true;
            }
            else{
                t=false;
                break;
            }
        }
        if(t===true){
            arr3.push(arr1[i]);
        }
    }
    return arr3;
}
var arr1 = [1,2,3,4,5,6];
var arr2 = [2,4,5];

var result = remove(arr1,arr2);
console.log(result); //output : [1,3,6]

//7._.indexOf(array, value, [fromIndex=0])
//return the index of that element 

function indexofele(arr,n){
    var k =-1;
    for(var i=0;i<arr.length;i++){
        if(n===arr[i]){
            k=i;
        }
    }
    return k;
    
}
var arr = [1,2,3,4,5,6];
var n =5;
var result = indexofele(arr,n);
console.log(result); //output : 4


//8._.lastIndexOf(array, value, [fromIndex=array.length-1])
//Returns the index of the matched value, else -1.

function indexofmatchlastele(arr,n){
    var k =-1;
    for(var i=0;i<arr.length;i++){
        if(n===arr[i]){
            k=i;
        }
    }
    return k;
    
}
var arr = [1,2,3,3,2,5];
var n =2;
var result = indexofmatchlastele(arr,n);
console.log(result);//output : 4

//9._.difference(array, [values])
//Returns the new array of filtered values

function difference(arr1,arr2){
    var arr3 =[];
    
    
    for(var i=0;i<arr1.length;i++){
        var t = true;
        for(var j=0;j<arr2.length;j++){
            if(arr1[i] === arr2[j]){
                t = false;
               break;
            }
        }
        if(t=== true){
        arr3.push(arr1[i]);
        }
    }
    return arr3;
     
 }
 var arr1 = [1,3,2,5,6,7];
 var arr2 =[2,3]
 var result = difference(arr1,arr2);
 console.log(result);//output : [ 1, 5, 6, 7 ]


 //10._.fill(array, value, [start=0], [end=array.length])
 //Fills elements of array with value from start up to, but not including, end.
 function fillele(arr,n,a,b){
    var arr1 = [];
    for(var i=0;i<arr.length;i++){
        if(a<=i && i<b){
            arr1.push(n);
            
        }
        else{
            arr1.push(arr[i]);
        }
    }
    return arr1;
    
}
var arr = [1,2,3,4,5,6];
var n = 'a';
var result = fillele(arr,n,3,5);
console.log(result); //output : [ 1, 2, 3, 'a', 'a', 6 ]






