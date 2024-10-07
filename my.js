var input=document.getElementById("input")
var ol=document.getElementById("listitem")

function add()
{
   var listitem=document.createElement('li')
   listitem.innerHTML=input.value + "<button onclick='deleteitem(event)' class='material-symbols-outlined'>DELETE</button>"
   ol.append(listitem)
}

function deleteitem(event)
{
     event.target.parentElement.remove()
}
