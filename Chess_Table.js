
// function fun(){
//     var tag=document.getElementsByTagName('input')[0].value;
//     var data=document.getElementsByTagName("input")[1].value;
//     var newElement=document.createElement(tag);
//     newElement.innerText=data
//     var parent=document.getElementsByTagName("body")[0]
//     parent.appendChild(newElement);
//     document.getElementsByTagName("tag")[0]
// }
function fun(){
    var row=document.getElementsByTagName("input")[0].value;
    var column=document.getElementsByTagName("input")[1].value;
    var parent=document.getElementsByTagName("body")[0];
    var parent1=document.createElement("table");
     for(var i=0;i<row;i++)
    {
        var parent2=document.createElement("tr");
        parent2.style.display="flex";
        for(var j=0;j<column;j++)
        {
            var cell=document.createElement("div");
            cell.style.width="100px"
            cell.style.height="100px"
            cell.style.border="1px solid black"

            parent2.appendChild(cell);
        }
        parent1.appendChild(parent2);
    }
    parent.appendChild(parent1);
}