const ul = document.createElement("ul")
const nestedList = document.createElement("ul")
const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")
const li4 = document.createElement("li")
const li5 = document.createElement("li")
const li6 = document.createElement("li")



const body = document.getElementsByClassName("list")

body[0].appendChild(ul)

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li6)
nestedList.appendChild(li4)
nestedList.appendChild(li5)

li1.innerText = "Orange"
li2.innerText = "Green"
li3.innerText = "Blue"
li3.appendChild(nestedList)
li4.innerText = "Yellow"
li5.innerText = "Red"
li6.innerText = "Pink"

