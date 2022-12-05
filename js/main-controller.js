function onInit() {

}

function renderContent(username) {
    console.log(username)
    if (username.isAdmin) {
        var strHTML = `<h2>Hello ${username.username}</h2>
        <img src="img/hackerman.jpg" alt="">
        <a href="admin.html" class="admin-btn">Admin</a>
        <button class="logout-btn" onclick="onClickedLogout()">Logout</button>
        </div>
        `
    } else {
        var strHTML = `<h2>Hello ${username}</h2>
        <img src="img/hackerman.jpg" alt="">
        <button class="logout-btn" onclick="onClickedLogout()">Logout</button>
        </div>
        `
    }

    var elmainContainer = document.querySelector('.main-container')
    elmainContainer.innerHTML = strHTML
}

function onDoLogin(ev) {
    ev.preventDefault()
    const elUsename = document.querySelector('input[name="username"]')
    const elPassword = document.querySelector('input[name="password"]')
    const username = elUsename.value
    const password = elPassword.value
    doLogin(username, password)
}

function doLogin(username, password) {
    const users = getUsers()
    const user = users.find(user => user.username === username)
    if (user === undefined) return alert('Cannot find user')
    if (password === user.password) {
        addLoginTime(user)
        hideElement('.sign-in-container')
        renderContent(user)


    } else {
        return alert('Wrong Password')
    }

}

function onClickedLogout() {
    showElement('.sign-in-container')
    clearStorage()
}

function renderUserList(users) {
    var strHTML = users.map(user => `
        <tr>
            <td>${user.username}</td><td>${user.password}</td><td>${user.lastLoginTime}</td><td>${user.isAdmin}</td>
        </tr>`).join('')

    const elUserTable=document.querySelector('tbody')
    elUserTable.innerHTML+=strHTML
}

function getUsersToShow() {
    const users = getUsers()
    renderUserList(users)
}