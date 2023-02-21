
//ways to write function an anonymous function
// $("#btnadd").click(add_student);
// function add_student(){

// }
$(document).ready(function () {

    //Ajax request for retrieval of data
    function showData() {
        output = "";
        $.ajax({
            url: " retrive.php",
            method: "GET",
            // it will convet the json string to javascript object 
            dataType: "json",
            success: function (data) {
                //    console.log(data);

                for (let i = 0; i < data.length; i++) {
                    // console.log(data[i]);

                    output += "<tr> <td> " +
                        data[i].id + "</td><td>" +
                        data[i].name + "</td><td>" +
                        data[i].email + "</td><td>" +
                        data[i].password +
                        "</td><td> <button class = ' btn btn-warning btn-sm btn-edit' data-sid = " + data[i].id + ">Edit</button> <button class = 'btn btn-danger btn-sm btn-del' data-sid = " + data[i].id + "> Delete </button>" +"</td> </tr>"

                }

                $("#tbody").html(output);
            }
        })
    }

    // function call 
    showData();





    // Ajax request for insert data
    $("#btnadd").click(function (e) {
        // to prevent from reloading when we hit save
        e.preventDefault();

        console.log("Save button click");

        let stid = $("#stuid").val();
        let nm = $("#nameid").val();
        let em = $("#emailid").val();
        let pw = $("#passwordid").val();

        // console.log(nm);
        // console.log(em);
        // console.log(pw);

        // javascript object
        mydata = { id :stid ,name: nm, email: em, password: pw };
        // console.log(mydata);

        $.ajax({

            url: "insert.php",
            method: "POST",
            //used to convert object to json string and send to server 
            data: JSON.stringify(mydata),
            success: function (data) {
                // console.log(data);
                msg = "<div class = 'alert alert-dark mt-3'>" + data + "</div>";
                $("#msg").html(msg);
                // to reset the form after one record is being added
                $("#myform")[0].reset();
                showData();

            },
        })
    })


    // Ajax request for deleting data
    $("tbody").on("click", ".btn-del", function () {

        console.log("Delete btn Clicked");
        // for unique id
        let id = $(this).attr("data-sid");
        // console.log(id);
        // then we made it to javascript object
        mydata = { sid: id };
        mythis = this;
        $.ajax({
            url: "delete.php",
            method: "POST",
            data: JSON.stringify(mydata),
            success: function (data) {
                // console.log(data);

                if (data == 1) {
                    msg = "<div class = 'alert alert-dark mt-3'> Student Deleted Successfully</div>";

                    // another way to update and delete 
                    $(mythis).closest("tr").fadeOut();



                }
                else if (data == 0) {
                    msg = "<div class = 'alert alert-dark mt-3'> Unable to Delete</div>";

                }

                $("#msg").html(msg);

                // one way to delete and update but he whole showdata funcion run whenever we call 
                // the funcion this can give as performance issue 
                //showData();

            },
        })
    });



    // Ajax request for updating or edit data
    $("tbody").on("click", ".btn-edit", function () {

        console.log("edit btn Clicked");
        let id = $(this).attr("data-sid");
        // console.log(id);

        mydata = {sid : id};

        $.ajax({
            url: "edit.php",
            method:"POST",
            dataType : "json",
            data:JSON.stringify(mydata),
            success:function(data){
                // console.log(data);

                $("#stuid").val(data.id);
                $("#nameid").val(data.name);
                $("#emailid").val(data.email);
                $("#passwordid").val(data.password);
            }
        })
    });

})