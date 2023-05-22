//Simulating getting from DB
async function getAllUsers() {
    let users;
    await fetch('https://dummyjson.com/users').then(response => response.json()).then(r => users = r)
    return users
}

//Simulating finding match user from DB
export default async function findUser (user, password) {
    let response
    await getAllUsers().then(users => {
        users.users.map (userFromDB => userFromDB.username === user && userFromDB.password === password ? response = userFromDB : null)
    })
    //Get token from actual finding
    if(response) {
        await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: response.username,
            password: response.password
        })
        })
        .then(res => res.json())
        .then(res2 => response = res2);
    }
    return response
}