const arrayOfEmployees = [{
    name:"Gary"
},
{
    name:"John"
},{
    name:"Kenny"
},{
    name:"Ted"
}]
// ["Gary",...]
const addRole = ()=>{
    const simplifiedArrayofEmployeeNames = arrayOfEmployees.map((employee)=> employee.name) //{name:"Gary", role:"Developer"}
    const ulTag = document.getElementById("list-of-employees");
    console.log(simplifiedArrayofEmployeeNames);
    simplifiedArrayofEmployeeNames.forEach((name)=>{
        const liName = document.createElement("li")
        liName.textContent = name;
        ulTag.append(liName);
    })

    console.log(simplifiedArrayofEmployeeNames);

}
    const vegetables = ["tomato", "tomato", "lettuce"];
const noTomato = ()=>{
    const anythingButTomato =  vegetables.filter((vegetable)=> vegetable !== "tomato");
    console.log(anythingButTomato);

}

const nums = [1, 2, 3,4,5];
const addNumber = ()=>{
    const total = nums.reduce((accumlator, number)=>{

        return accumlator + number;
        // 0 + 1 = 1 
        // 1 + 2 = 3
        // 3 + 3 = 6
        //6 + 4 = 10
        //10 + 5 = 15
    }, 0)
    console.log("The total of the sum is:", total);
}
const arrayOfFruits = ["strawberry","cherry","mango"]
const sortStrings = ()=>{
   const sortedFruites =  arrayOfFruits.sort((a,b)=>{
        if(a > b){
            return -1
        }else if(a < b){
            return 1
        }else{
            return 0 
        }
    })
    console.log("Sorted",sortedFruites);
}