const Admin = 1
const Moderator = 2
const User=3


// we can define the above together like:
enum UserRole{
    Admin = 1,
    Moderator = 2,
    User=3, 
}


// Usage
let currentUserRole: UserRole = UserRole.User


// valid
enum UserRole1{
    Admin, //defaul 0
    Moderator, //default 1
    User, //so on
}

// valid
enum UserRole2{
    Admin=6,
    Moderator, //now 7
    User, //now 8
}

// Can be strings also
// But here they all must be assigned
enum UserRole3{
    Admin='Six',
    Moderator='four',
    User='xyz', 
}