// Bai1
function B1(dd,mm,yyyy,h,m,s){
    let check=true;
    let count=0;
    let checkDate=true;
    let checkTime=true;
    let Day=''
    let Time=''
    if (mm<1 || mm>12) checkDate=false;
    else{
        if (mm==2){
            if (yyyy%4==0){
                if (yyyy%100==0){
                    if (yyyy%400==0){
                        check=true;
                    }else check=false;
                }else check=true;
            }else check=false;
        }else{
            if (mm==1 || mm==3 || mm==5 || mm==7 || mm==8 || mm==10 || mm==12){
                if (dd>31 || dd<1) checkDate=false;
                else checkDate=true;
            }
            else{
                if (dd>30 || dd<1) checkDate=false;
                else checkDate=true;
            }
        }
    }
    
    if (mm==2){
        if (check==true){
            if (dd>29) checkDate=false;
            else checkDate=true;
        }
        else{
            if (dd>28) checkDate=false;
            else checkDate=true;
        }
    }

    if (h>=0 && h<24) count++;
    if (m>=0 && m<60) count++;
    if (s>=0 && s<60) count++;
    if (count==3) checkTime=true;
    else checkTime=false;
    
    
    if (checkDate==true && checkTime==true){
        Day= dd + '/' + mm + '/' + yyyy
        Time= h + ':' + m + ':' + s
        console.log(Day)
        console.log(Time)
    }else console.log('Nhập không hợp lệ')

}

// Bai 2

function B2(dd,mm,yyyy){
    let check=true;
    let checkDate=true;
    if (mm<1 || mm>12) checkDate=false;
    else{
        if (mm==2){
            if (yyyy%4==0){
                if (yyyy%100==0){
                    if (yyyy%400==0){
                        check=true;
                    }else check=false;
                }else check=true;
            }else check=false;
        }else{
            if (mm==1 || mm==3 || mm==5 || mm==7 || mm==8 || mm==10 || mm==12){
                if (dd>31 || dd<1) checkDate=false;
                else checkDate=true;
            }
            else{
                if (dd>30 || dd<1) checkDate=false;
                else checkDate=true;
            }
        }
    }
    
    if (mm==2){
        if (check==true){
            if (dd>29) checkDate=false;
            else checkDate=true;
        }
        else{
            if (dd>28) checkDate=false;
            else checkDate=true;
        }
    }

    if (checkDate==true){
        const format1=mm + '-' + dd + '-' + yyyy
        const format2=mm + '/' + dd + '/' + yyyy
        const format3=dd + '-' + mm + '-' + yyyy
        const format4=dd + '/' + mm + '/' + yyyy
        console.log(format1)
        console.log(format2)
        console.log(format3)
        console.log(format4)
    }
    else console.log('Ngày nhập bị lỗi định dạng.')
}


// Bai 3
function B3(args){
    var check=true;
    for (i=0;i<args.length -1 ;i++){
        if (args[i]>=args[i+1]) {
            check=false
            break;
        }
    }
    if (check) console.log(true)
    else console.log(false)
}

// Bai 4
function B4(st){
    const low='abcdefghijklmnopqrstuvwxyz'
    const up='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result=''
    let i=0
    let j=0
    for (i=0;i<st.length;i++){
        let temp=st[i]
        if (temp===' ') result+=' '
        else if (temp==='z') result += 'a';
        else if (temp==='Z') result+= 'A';
        else {
            for (j=0;j<low.length-1;j++){
                if (temp===low[j]) result+=low[j+1]
            }
            for (j=0;j<up.length-1;j++){
                if (temp===up[j]) result+=up[j+1]
            }
        }
    }
    console.log(result)
}
// Bai 5

function B5(args){
    if (args.length % 2 ==0) console.log('Chuỗi có độ dài chẵn')
    else {
        var mid=(args.length - 1) /2
        console.log(args[mid-1],args[mid],args[mid+1])
    }
}

// Bai 6

function B6(arr){
    let result=0
    let temp=0
    let arrayT = []
    arrayT.push(arr[0])
    arrayT[arr[0]]=1;
    for (i=1;i<arr.length;i++){
        if (arrayT[arr[i]]>0) arrayT[arr[i]]++;
        else {
            arrayT.push(arr[i])
            arrayT[arr[i]]=1;
        }
    }
    for (i=1;i<arr.length;i++){
        if (arrayT[arr[i]]> temp) {
            temp=arrayT[arr[i]]
            result=arr[i]
        }
    }
    console.log(result)
}

// Bai 7
function B7(st){
    const temp='java'
    let check=false
    let count=0
    for (let i=0;i<st.length-temp.length;i++){
        count=0
        for (let j=0;j<temp.length;j++){
            if (st[i+j]==temp[j]) count++;
        }
        if (count==temp.length) {
            check=true;
            break
        }
    }
    if (check==true) console.log("Chuỗi có chứa 'java' ")
    else console.log("Chuỗi không chứa 'java'")
}


// Bai 8 

function B8(args){
    if (args<1 || args>12) console.log('Tháng nhập không hợp lệ')
    else if (args==1) console.log(args, 'Tháng một')
    else if (args==2) console.log(args,'Tháng hai')
    else if (args==3) console.log(args,'Tháng ba')    
    else if (args==4) console.log(args,'Tháng bốn')
    else if (args==5) console.log(args,'Tháng năm')
    else if (args==6) console.log(args,'Tháng sáu')
    else if (args==7) console.log(args,'Tháng bảy')
    else if (args==8) console.log(args,'Tháng tám')
    else if (args==9) console.log(args,'Tháng chín')
    else if (args==10) console.log(args,'Tháng mười')
    else if (args==11) console.log(args,'Tháng mười một')
    else console.log(args,'Tháng mười hai')
}

// Bai 9

function B9(args){
    const array = args.split(' ')
    let result= array[0]

    for (i=0;i< array.length;i++){
        if (result.length<array[i].length) result=array[i]
    }
    console.log(result)
}


// Bai 10
function B10(a,b){
    let count=-1
    let result=[]
    if (a>b) console.log("Nhập không hợp lệ");
    else{
        for (let i=a;i<=b;i++){
            let check=true
            if (i>=2){
                for (let j=2;j<i;j++){
                    if (i%j==0){
                        check=false;
                        break;
                    }
                }
            }
            if (check==true && i>=2){
                count++;
                result.push(count)
                result[count]=i;
            } 
        }
        console.log(result)
    }
}



// main

const arr=[5,6,7,8,5,6,8,5,5,4]
B1(31,12,2004,12,31,16)
B2(31,12,2024)
B3('12343')
B4('I like dog')
B5('abcde')
B6(arr)
B7('afdnjkfnkjavadafkjbak')
B8(12)
B9('abcde fghijk ankshdkdew')
B10(12,35)