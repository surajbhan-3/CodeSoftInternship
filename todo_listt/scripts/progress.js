// Write code for the Progress page here 
let tbody=document.querySelector("tbody");

let pData=JSON.parse(localStorage.getItem("priority-list"));

let done=JSON.parse(localStorage.getItem("done-list"))||[];

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
        let AddtoDone=document.createElement("td");
        AddtoDone.textContent= "Add";
        AddtoDone.addEventListener("click",function(){
                
          done.push(el);
          localStorage.setItem("done-list",JSON.stringify(done))
          deleteData(index);
             
        })

        tr.append(name, Descr, sdate,edate,priority,AddtoDone);
        tbody.append(tr)
   
    })
   
}
displayTable(pData);

function deleteData(index){

    pData=pData.filter(function(el,i){
        return i!==index;
    })
    localStorage.setItem("priority-list", JSON.stringify(pData));
    displayTable(pData)
}