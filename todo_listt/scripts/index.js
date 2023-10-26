
let allData= JSON.parse(localStorage.getItem("task-list"))||[];
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();

    let dataobj={
        taskName:form.name.value,
        descp:form.desc.value,
        start:form.start.value,
        end:form.end.value,
        priority:form.priority.value
    }
    allData.push(dataobj);
    localStorage.setItem("task-list",JSON.stringify(allData))
    alert("data has been added successfully")
})