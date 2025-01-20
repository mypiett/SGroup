// Bai 1
function B1(a,b){
    let temp=[]
    for (let i=0;i<b.length;i++){
        temp.push(b[i]);
    }
    for (let i=0;i<a.length;i++){
        temp.push(a[i]);
    }
    console.log(temp);
}


// Bai 2
// every => tất cả các phần tử thỏa điều kiện => true, else false

function B2(a){
    let result= a.every(function(num){
        return (num%2==0)
    })
    if (result==true) console.log("Yes")
    else console.log("No"); 
}


// Bai 3
// some => tồn tại ít nhất 1 phần tử thỏa điều kiện => true, else false 
function B3(a){
    let result= a.some(function(num){
        return (num%2==0)
    })
    if (result==true) console.log("Yes")
    else console.log("No"); 
}


// Bai 4
function B4(a){
    let result = a.filter(function (num){
        return num>0
    })
    console.log(result)
}


// Bai 5
function B5(a){
    let found=a.find(function(num){
        return num>0
    })
    let foundIndex=a.findIndex(function(num){
        return num>0
    })
    if (foundIndex!=-1) console.log(foundIndex + " " + found)
    else console.log("No result")
}


// Bai 6
function B6(a){
    let result=a.forEach(function(num){
        if (num%5==0)
            console.log(num)
    })
}


// Bai 7
function B7(a){
    let foundFirstIndex=a.findIndex(function(num){
        return num==2;
    })
    let foundLastIndex=a.lastIndexOf(2)
    if (foundFirstIndex!=-1 && foundLastIndex!=-1) console.log(foundFirstIndex + " " + foundLastIndex);
    else console.log("No result")
}


// Bai 8 
function B8(a){
    let result=a.join(", ");
    console.log(result);
}


// Bai 9
function B9(a){
    let result=a.map(function(num){
        return Math.abs(num)
    })
    console.log(result);
}


// main
const a = ['a', 'b', 'c']
const b = [1, 2, 3]
const data1=[1,2,3,4,5,6]
const data2=[2,4,6]
const data3=[1,3,5]
const data4=[1,-2,3,4,-5]
const data51=[-1,-2,3,4,-5]
const data5=[-1,-2]
const data6=[1,5,30,26]
const data71= [-1,2,-3,4,2,6]
const data72= [0,6]
B1(a,b);
B2(data1);
B2(data2);
B3(data1);
B3(data3);
B4(data4);
B5(data51);
B5(data5);
B6(data6);
B7(data71);
B7(data72);
B8(a);
B8(data72);
B9(data71);