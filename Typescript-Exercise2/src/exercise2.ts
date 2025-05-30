
//INTERFACE STRUCTURE
interface CompanyI{
    name: string;
    bs: string;
}
interface User{
    id: number;
    name: string;
    username: string
    email: string;
    phone: string;
    company: CompanyI;
}

// Document load

document.addEventListener("DOMContentLoaded", ()=>{
// Exercise 2 Fetch data from API

try {
 const fetchData = async () => {
    // SELECT ul list 
      const list = document.getElementById("users");
     const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: User[] = await response.json();
    console.log(data)
    data.forEach((user) => {
      
        const element = document.createElement('div');
        element.classList.add("user")
        element.innerHTML = `
            <h1> ${user.name}</h1>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Company name: ${user.company.name}</p>
        `
        list?.appendChild(element)
    })

    // CREATING scale action on any user on events "mouseenter" & "mouseleave"
const userCards = document.querySelectorAll(".user");
userCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("user-hover");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("user-hover");
  });
});
};
fetchData()
} catch (e) {
  console.log("Error");
}

})

