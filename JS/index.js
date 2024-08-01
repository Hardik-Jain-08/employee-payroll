$(document).ready(function () {
    getEmployeeList().then(users => {
        console.log(users);
        showUsers(users);
        const btn_delete = $('.fn-delete');
        btn_delete.click(function () {
            console.log($(this).attr('id'));
            deleteEmployee($(this).attr('id'));
            $(this).closest('tr').remove();
        });
    }).catch(err => {
        console.log("Error fetching users: ", err);
    });
});

function getAvatar(avatar) {
    switch (avatar) {
        case 'western-man':
            return 'Ellipse -3.png';
        case 'western-women':
            return 'Ellipse -1.png';
        case 'asian-man':
            return 'Ellipse -2.png';
        case 'asian-women':
            return 'Ellipse 1.png';
        default:
            return 'Ellipse -4.png';
    }
}

function getEmployeeList(){
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/users",
            success: function (res) {
                console.log(res);
                resolve(res);
            },
            error: function (err) {
                console.log("error msg : ", err);
                reject(err);
            }
        });
    });
}

function showUsers(users){
    users.forEach(user => {
        const {id, name, profileImage, gender, department, salary, start_date, notes} = user;
        console.log(id, name, salary, start_date, gender, department, notes, profileImage);

        const departments = department.map(dep => `<span class="departments" >${dep}</span>`).join('');
        const table = $('#tableData');
        table.append(`<tr><td scope="row"><img src="./Assets/${getAvatar(profileImage)}" style="width: 36px;" alt=""></td>
              <td>${name}</td>
              <td>${gender}</td>
              <td>${departments}</td>
              <td>₹ ${salary}</td>
              <td>${start_date}</td>
              <td style="display: flex; gap: 1rem; font-size: large;" >
                <div style="cursor: pointer" id="${id}" class="fn-delete"><img src="./Assets/delete-black-18dp.svg" style="width: 24px;" alt=""></div>
                <div style="cursor: pointer" id="${id}"><img src="./Assets/create-black-18dp.svg" style="width: 24px;" alt=""></div>
              </td>
            </tr>`);
        console.log('appended');
    });    
}


function deleteEmployee(user_id){
    console.log(user_id);
    $.ajax({
        type:"DELETE",
        url:`http://localhost:3000/users/${user_id}`,
        success:function(res){
            console.log(res);
        },
        error:function(err){
            console.log("error msg : ",err)
        }
    })
}

function updateEmployee(){
    $.ajax({
        type:"PUT",
        url:"http://localhost:3000/users",
        data: createUser(),
        success:function(res){
            console.log(res);
        },
        error:function(err){
            console.log("error msg : ",err)
        }
})};