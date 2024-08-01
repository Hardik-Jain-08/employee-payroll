// Date picker validation - can't pick future dates
const today = new Date().toISOString().split('T')[0];
document.getElementById('start-date').setAttribute('max', today);
function createUser() {
    const getDepartments = () => {
        let departments = [];
        const dep = $('input[name="department"]');
        for(const element of dep){
            console.log(element);
            if(element.checked) {
                departments.push(element.value);
            } 
        }
        return departments;
    }
        
    const user = {
        name: $('#name').val(),
        profileImage: $('input[name="profile"]:checked').val(),
        gender: $('input[name="gender"]:checked').val(),
        department: getDepartments(),
        salary: $('#salary').val(),
        start_date: $('#start-date').val(),
        notes: $('#notes').val()
    };
    console.log(user);
    return user;
}



function addEmployee(){
    console.log("addEmployee called");
    $.ajax({
        type:"POST",
        contentType: "application/json",
        url:"http://localhost:3000/users",
        data: JSON.stringify(createUser()),
        success:function(res){
            console.log(res);
            window.location.reload();
        },
        error:function(err){
            console.log("error msg : ",err)
        }
    })
};

$(function() {
    $('form').submit((e)=>{
        e.preventDefault();
        addEmployee()}
    );
    $('#btn-cancel').click(()=>{
        window.location.href = "/index.html";
    });
    $('#btn-reset').click(()=>{
        window.location.reload();
    });
})
