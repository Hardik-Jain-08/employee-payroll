function createUser() {
    const user = {
        name: $('#name').val(),
        profileImage: $('#profile').val(),
        
    }
    console.log(user);
    return user;
}