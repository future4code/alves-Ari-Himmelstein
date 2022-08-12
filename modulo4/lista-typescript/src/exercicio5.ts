type users = {
    name: string,
    email: string,
    role: string
}

const userList: users[] =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function adminUserSearch (list: users[]):string[]{
    const user: string[] = []
    userList.map((item) => {
        if (item.role === "admin"){
            user.push(item.email)
    }
    })
 return user
}

console.log(adminUserSearch(userList))
