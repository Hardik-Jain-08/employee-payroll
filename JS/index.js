$(document).ready(async function () {
    let users;
    await $.ajax({
        type: "GET",
        url: "http://localhost:3000/users",
        success: function (res) {
            console.log(res);
            users = res;
        },
        error: function (err) {
            console.log("error msg : ", err)
        }
    });
    // retrieve

    users.forEach(user => {
        const {name, profileImage, gender, department, salary, start_date, notes} = user;
        console.log(name, salary, start_date, gender, department, notes, profileImage);

        const departments = department.map(dep => `<span class="departments" >${dep}</span>`).join('');
        const table = $('#tableData');
        table.append(`<tr><td scope="row"><img src="./Assets/${getAvatar(profileImage)}" style="width: 36px;" alt=""></td>
              <td>${name}</td>
              <td>${gender}</td>
              <td>${departments}</td>
              <td>₹ ${salary}</td>
              <td>${start_date}</td>
              <td style="display: flex; gap: 1rem; font-size: large;">
                <div><img src="./Assets/delete-black-18dp.svg" style="width: 24px;" alt=""></div>
                <div><img src="./Assets/create-black-18dp.svg" style="width: 24px;" alt=""></div>
              </td>
            </tr>`);
            console.log('appended');
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