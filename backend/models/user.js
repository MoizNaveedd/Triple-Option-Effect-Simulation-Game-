

const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
//signup database model
const user = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: { type: String, required: true },
    password: { type: String, required: true }
    // tokens:[
    //     {
    //         token:{
    //             type:String,
    //             required:true
    //         }
    //     }
    // ]
});


// user.pre('save',async function(next){
//     if(this.isModified('password')){
//         this.password= await bcrypt.hash(this.password,8)
//     }
//     next();
// })
// user.methods.generateAuthToken = async function(){
//     try {
//         let token= jwt.sign({_id:this._id},'MYNAMEISKHANN')
//         this.tokens=this.tokens.concat({token:token})
//         await this.save()
//         return token;       
//     } catch (error) {
//         console.log(error);
//     }
// }

const User = mongoose.model('UserCollection', user)

module.exports=User;