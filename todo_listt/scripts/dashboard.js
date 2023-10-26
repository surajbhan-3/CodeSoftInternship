// Write code related to dashboard page here

let tbody=document.querySelector("tbody");
let allData=JSON.parse(localStorage.getItem("task-list"));
let addData=JSON.parse(localStorage.getItem("priority-list"))||[];
function displayTable(data){
   tbody.innerHTML=null;
    data.forEach(function(el,index){

        let tr=document.createElement("tr");
        let name=document.createElement("td");
        name.textContent=el.taskName;
        let Descr=document.createElement("td");
        Descr.textContent=el.descp
        let  sdate=document.createElement("td");
        sdate.textContent=el.start
        let edate=document.createElement("td");
        edate.textContent=el.end
        let priority=document.createElement("td");
        priority.textContent=el.priority;
        let AddtoProgress=document.createElement("td");
        AddtoProgress.textContent= "Add";
        AddtoProgress.addEventListener("click",function(){
                
          
             addData.push(el);
            localStorage.setItem("priority-list",JSON.stringify(addData));
              deleteData(index);
              
             // data.splice(index,1);
            
             
        })

        tr.append(name, Descr, sdate,edate,priority,AddtoProgress);
        tbody.append(tr)
   
    })
   
}
displayTable(allData);

function deleteData(index){

 allData=allData.filter(function(el,i){
     
      return i!=index
    
 })
 localStorage.setItem("task-list",JSON.stringify(allData))
displayTable(allData);
}

document.querySelector("#task-count").textContent=allData.length;

let selected=document.querySelector("#filter");
selected.addEventListener("change",function(event){

    if(event.target.value==""){
        displayTable(allData);
    }else{
    let selectedP=event.target.value
    let filterdata=JSON.parse(localStorage.getItem("slecet-p"))||[];
     let rData=JSON.parse(localStorage.getItem("task-list"));
    
        filterdata=rData.filter(function(el){
            return selectedP==el.priority
    
    });
     displayTable(filterdata)
    }

})
