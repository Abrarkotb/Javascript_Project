let Submit_btn=document.getElementById("submit_btn");
let all_items=document.querySelectorAll("input");
let user={}
let users=[]
onload=()=>{
  if(document.cookie.indexOf("email")===0)
  {
    window.stop();
    window.open("../Pages/Home.html","_self")
  }
}
Submit_btn.addEventListener("click",(e)=>
{
   save_user()
   return false; 
})
function save_user()
{
    let saved_email=window.localStorage.getItem(all_items[8].value);
    if(saved_email===null&&all_items[8].value!=="")
    {
          all_items.forEach(item=>{
                user[item.id]=item.value});
    
       if(all_items[7].checked)
    { 
      delete user["male"];  
    }
    else if(all_items[6].checked)
    {
         delete user["female"]
    }

delete user["submit_btn"];
delete user["reset_btn"];
window.localStorage.setItem(all_items[8].value,JSON.stringify(user));
window.open("../Pages/Home.html","_self")
}
else if(all_items[8].value==="")
{
    return;
}
}