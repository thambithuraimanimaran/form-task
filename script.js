
var button = document.querySelector('.click-me');
button.addEventListener('click', buttonclick);
function buttonclick(ele){
     ele.preventDefault();
     var tableparent = document.querySelector('.table');
     var tr = document.createElement('tr');

    var data = ["first name","last name","address","pincode","gender","state","country"]
    for (var i of data){
        var fstn = document.querySelector(`[placeholder="${i}"]` );
        var td = document.createElement('td');
        td.innerText = fstn.value;
        tr.append(td);  
        fstn.value='';
    }
    var food = document.querySelectorAll('[type="checkbox"]');
    var td = document.createElement("td")
    for(var i of food){
        if(i.checked){
            td.append(i.value +" ");
        }
    }
    tr.append(td);
    tableparent.append(tr);
    

    // var fstn = document.querySelector('.form [placeholder="first name"]');
    // var td = document.createElement('td');
    // td.innerText = fstn.value;
    // tr.append(td);  
    // fstn.value='';

    // var lstn =document.querySelector('[placeholder="last name"]');
    // var td1 = document.createElement('td');
    // td1.innerText = lstn.value;
    // tr.append(td1);
    // lstn.value='';
    
    // var address = document.querySelector('[placeholder="address"]');
    // var td2 =document.createElement('td');
    // td2.innerText = address.value;
    // tr.append(td2);
    // address.value='';

    // var pin = document.querySelector('[placeholder="pincode"]');
    // var td3 = document.createElement('td');
    // td3.innerText = pin.value;
    // tr.append(td3);
    // pin.value='';

    // var gen = document.querySelector('[placeholder="gender"]');
    // var td4 = document.createElement('td');
    // td4.innerText = gen.value;
    // tr.append(td4);
    // gen.value='';

    // var food = document.querySelector('.idly');
    // var td5 = document.createElement('td');
    // td5.innerText = food.value;
    // tr.append(td5);
    // food.value='';

    // var state = document.querySelector('[placeholder="state"]');
    // var td6 = document.createElement('td');
    // td6.innerText = state.value;
    // tr.append(td6);
    // state.value='';

    // var country = document.querySelector('[placeholder="country"]');
    // var td7 = document.createElement('td');
    // td7.innerText = country.value;
    // tr.append(td7);
    // country.value='';




    
}







