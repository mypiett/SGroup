// Bai 1
function B1()
{
    let user= {};
    user.name= 'David';
    user.surname= 'Xuan';
    user.name= 'Cafedev';
    delete user.name;
    console.log(user);
}


// Bai 2 
function isEmpty(obj)
{
    let count=0;
    for (let i in obj) count++;
    if (count==0) return true;
    return false;
}

function B2()
{
    let schedule= {};

    alert(isEmpty(schedule));

    schedule["8:30"] ="get up";

    alert(isEmpty(schedule));
}


// Bai 3
function B3()
{
    let sum=0;
    let salaries={
        John: 100,
        Ann: 160,
        Pete: 130
    }
    for (let i in salaries){
        if (typeof salaries[i] === 'number') sum+= salaries[i];
    }
    console.log(sum)
}


// Bai 4
function multiplyNumeric(obj)
{
    for (let i in obj){
        if (typeof obj[i] === 'number') obj[i]=obj[i]*2;
    }
}

function B4()
{
    let menu={
        width: 200,
        height: 300,
        title: "My menu cafedev"
    }

    multiplyNumeric(menu);

    console.log(menu)
}


// Bai 5
function B5()
{
    let MayTinh={}
    MayTinh.read = (a,b) =>{
        MayTinh.TT1=a;
        MayTinh.TT2=b;
    }
    MayTinh.sum = () =>{
        let sum=0;
        for (let i in MayTinh) 
            if (typeof MayTinh[i] === 'number') sum+= MayTinh[i];
        return sum;
    }
    MayTinh.mul = () =>{
        let mul=1;
        for (let i in MayTinh) 
            if (typeof MayTinh[i] === 'number') mul*= MayTinh[i];
        return mul;
    }
    MayTinh.read(2, 3); 
    console.log("Tổng:", MayTinh.sum());
    console.log("Tích:", MayTinh.mul());
}


// main
B1()
B2()
B3()
B4()
B5()
