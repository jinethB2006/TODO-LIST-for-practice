
//btn.addEventListener('click',(event)=>{});    
const list =new Array();    
function addtask(){
    const addtext=document.getElementById("addtask");
    const todolist=document.getElementById('todolist');
    const diverror=document.getElementById('errormsg');
    if(addtext.value.trim()===""){
        diverror.innerText="Please enter the task before adding!";
        return;
    }
    diverror.innerText="";
    console.log(addtext.value);
        list.push(addtext.value);
        todolist.innerHTML+=`<li id="listed"><button onclick="complete(this)">${addtext.value}</button></li>`;
        addtext.value='';
    }        
function complete(id){
    const donelist=document.getElementById('Donelist');
    donelist.innerHTML+=`<li>${id.textContent}</li>`;
    id.parentElement.remove();
    }
     

