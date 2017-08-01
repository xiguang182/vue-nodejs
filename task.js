/**
 * Created by Real on 2017-07-30.
 */

var db = require('./dbcon');
var nodemailer = require("nodemailer");
var Task = {
    getAllUsers: function(callback) {
        return db.query("select * from user", callback);
    },
    getUserById: function(id, callback) {
        return db.query("select * from user where Id=?", [id], callback);
    },
    // addTask: function(Task, callback) {
    //     return db.query("Insert into task values(?,?,?)", [Task.Id, Task.Title, Task.Status], callback);
    // },
    // deleteTask: function(id, callback) {
    //     return db.query("delete from task where Id=?", [id], callback);
    // },
    // updateTask: function(id, Task, callback) {
    //     return db.query("update task set Title=?,Status=? where Id=?", [Task.Title, Task.Status, id], callback);
    // }

    getEmailByParent: function(parent, callback){
        return db.query("select email from user where parent=?", [parent], callback);
    },


    sendEmail: function (parent) {



        return Task.getEmailByParent(parent, function (err, result) {
            if(err)
            {
                throw err;
            }else
            {
                var smtpTransport = nodemailer.createTransport({
                    service: "Gmail",
                    auth: {
                        user: "vuejsdemo182@gmail.com",
                        pass: "5A02hau243"
                    }
                },{
                    from: "Test<vuejsdemo182@gmail.com>"
                });
                var message = {
                    to: "Test<vuejsdemo182@gmail.com>",
                    subject: "Mail To " + result[0].email,
                    text: "Hello "+parent+"  - this mail is sent from nodemailer library"
                }
                smtpTransport.sendMail(message, (error, info)=>{
                    if(error){
                        console.log(error);
                    }else{
                        console.log("Mail sent: " + response.message);
                    }
                    smtpTransport.close();
                });
            }
            return "Email sent";

        });




    }
};
module.exports = Task;