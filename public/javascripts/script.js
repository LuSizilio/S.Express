//adicionar evento de click
var body = document.body;
var tasks = body.querySelector('.tasks');
var done = body.querySelector('.done');
var btnAdicionar = body.querySelector('.btnAdicionar');

btnAdicionar.addEventListener('click', () => {
    var edit = document.createElement('div');
        edit.classList.add('edit');
        edit.textContent = '📘';
    var close = document.createElement('div');
        close.classList.add('close');
        close.textContent = '❌';
    var finish = document.createElement('div');
        finish.classList.add('finish');
        finish.textContent = '💚';
    var controls = document.createElement('div');
        controls.classList.add('controls');
        controls.appendChild(finish);
        controls.appendChild(edit);    
        controls.appendChild(close);
    var text = document.createElement('div');
        text.classList.add('text');
        text.textContent = document.querySelector('#nome').value;
        text.contentEditable = false;
    var el = document.createElement('div');  
        el.classList.add('toDo');
        el.appendChild(text);
        el.appendChild(controls);
    tasks.appendChild(el);
});

tasks.addEventListener('click', (e)=>{
    var parent = e.target.parentElement;
    var td = parent.parentElement.querySelector('.text');
    var tc = parent.querySelector('.edit');
    switch(e.target.className){
        case 'close':
            parent.parentElement.remove();
            break;
        case 'edit':
            if(tc.textContent === '📘'){
                td.contentEditable = true;
                td.focus();
                tc.textContent = '📖';
            } else{
                td.contentEditable = false;
                tc.textContent = '📘';
            }
            break;
        case 'finish':
            parent.parentElement.remove();
            parent.querySelector('.edit').remove();
            parent.querySelector('.finish').remove();
            parent.style.width = '20px';
            td.contentEditable = false;
            var s = document.createElement('s');
            s.textContent = td.textContent;
            td.textContent = '';
            td.appendChild(s);
            done.appendChild(parent.parentElement);
            break;
    }
});

done.addEventListener('click', (e)=>{
    var parent = e.target.parentElement;
    if(e.target.className === 'close'){
        parent.parentElement.remove();
    }
});

