// Add your code here
const submitData = (userName, userEmail) => {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        }),
    })
    .then(resp => resp.json())
    .then(userInfo => {
        let user = userInfo.id 
        let div = document.createElement('div')
        div.textContent = user
        document.querySelector('body').appendChild(div)
    })
    .catch(error => document.body.innerHTML = error.message)
};


