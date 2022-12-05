'use strict'
const STORAGE_KEY = 'usersDB'

var gUsers
var gNumid
var gNextid=100

_createUsers()

function _createUsers(){
    gUsers=[
        _createUser('neal','1234',true),
        _createUser('naor','4321',true),
        _createUser('bigman','bigman'),
        _createUser('dan','dan1995'),
    ]
    saveToStorage(STORAGE_KEY,gUsers)
}

function _createUser(username,password,isAdmin=false){
    return{
        id: 'u'+gNextid++,
        username,
        password,
        lastLoginTime: 0,
        isAdmin
    }
}

function getUsers(){
    return gUsers
}

function addLoginTime(user){
    user.lastLoginTime=getDateNow()
    console.log('user:', user)
    saveToStorage(STORAGE_KEY,user)
    
}