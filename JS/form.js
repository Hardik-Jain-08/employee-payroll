// Date picker validation - can't pick future dates
const today = new Date().toISOString().split("T")[0];
document.getElementById("start-date").setAttribute("max", today);

$(document).ready(function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const user_id = urlParams.get('user_id');
    if (urlParams.has('user_id')) {
        $.ajax({
            type: "GET",
            url: `http://localhost:3000/users/${user_id}`,
            success: function (res) {
                const {name, profileImage, gender, department, salary, start_date, notes } = res;
                $("#name").val(name);
                $(`input[name="profile"][value="${profileImage}"]`).prop('checked', true);
                $(`input[name="gender"][value="${gender}"]`).prop('checked', true);
                department.forEach(dep => {
                    $(`input[name="department"][value="${dep}"]`).prop('checked', true);
                });
                $("#salary").val(salary);
                $("#start-date").val(start_date);
                $("#notes").val(notes);
                $(".btn-submit").text('Update');
                $(".btn-submit").attr('id', user_id);
            }
        });
        
        $("form").submit((e) => {
          e.preventDefault();
          if ($(".btn-submit").text() === "Update") {
            const user_id = $(".btn-submit").attr("id");
            const updatedData = createUser();
            console.log("updatedData", updatedData);
            updateEmployee(user_id, updatedData);
            window.location.href = "/index.html";
          } else {
              addEmployee();
          }
        });
        $("#btn-cancel").click(() => {
          window.location.href = "/index.html";
        });
        $("#btn-reset").click(() => {
          window.location.reload();
        });
    }
});

function createUser() {
  const getDepartments = () => {
    let departments = [];
    const dep = $('input[name="department"]');
    for (const element of dep) {
      if (element.checked) {
        departments.push(element.value);
      }
    }
    return departments;
  };

  const user = {
    name: $("#name").val(),
    profileImage: $('input[name="profile"]:checked').val(),
    gender: $('input[name="gender"]:checked').val(),
    department: getDepartments(),
    salary: $("#salary").val(),
    start_date: $("#start-date").val(),
    notes: $("#notes").val(),
  };
  return user;
}

function addEmployee() {
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:3000/users",
    data: JSON.stringify(createUser()),
    success: function () {
      window.location.reload();
    },
    error: function (err) {
      console.log("error msg : ", err);
    },
  });
}

function updateEmployee(user_id, updatedData) {
    $.ajax({
        type: "PATCH",
        contentType: "application/json",
        url: "http://localhost:3000/users/" + user_id,
        data: JSON.stringify(updatedData),
        success: function(response) {
            console.log("Employee updated successfully:", response);
        },
        error: function(error) {
            console.error("Error updating employee:", error);
        }
    });
}