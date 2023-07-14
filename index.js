let myLeads = []
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabsBtn = document.getElementById("tabs-btn")
let leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadFromLocalStorage){
    myLeads = leadFromLocalStorage
    render(myLeads)
}


saveBtn.addEventListener("click" , function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    
})

tabsBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads =[]
    render(myLeads)
})


function render(lead){
let valuee = ""
for( let i = 0; i < lead.length; i++){
    valuee += `<li> <a target="_blank" href="${lead[i]}">${lead[i]}</a></li>`
}
ulEl.innerHTML = valuee
}