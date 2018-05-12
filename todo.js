function addItem(){
    var input= document.getElementById('input');
    var item= input.value;
    ul= document.getElementById('list');
    var textnode= document.createTextNode(item)


    if(item==''){
    return false;
    }else{
        li=document.createElement('li');
        //create checkbox
        var checkbox= document.createElement('input');
        checkbox.type='checkbox';
        checkbox.setAttribute('id', 'check');
        //create lebel
        var lebel= document.createElement('lebel');
        lebel.setAttribute('for', 'item');

        //add these elements on webpage
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        li.className='visual';

        input.value='';
    }

}