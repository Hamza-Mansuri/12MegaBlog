//authentiation ke liye saari id's lagegi

import conf from "../conf/conf.js";

//using authnetication getstarted from documentation of appwrite

 import { Client, Account, ID } from "appwrite";

// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>');                 // Your project ID

// const account = new Account(client);

// const user = await account.create(
//     ID.unique(), 
//     'email@example.com', 
//     'password'
// );

//Sign-Up

// import { Client, Account, ID } from "appwrite";

// const client = new Client()
//     .setProject('<PROJECT_ID>'); // Your project ID

// const account = new Account(client);

// const promise = account.create('[USER_ID]', 'email@example.com', '');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });

//Log-In

// import { Client, Account } from "appwrite";

// const client = new Client()
//     .setProject('<PROJECT_ID>'); // Your project ID

// const account = new Account(client);

// const promise = account.createEmailPasswordSession('email@example.com', 'password');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });



//More Quality based Code

export class AuthService {

    client = new Client();
    account;

    //account kb banna chahiye? jb hamara constructor call ho.
    constructor() {

        this.client
            .setEndpoint(conf.appwriteUrl)
            .setEndpoint(conf.appwriteProjectId);

        this.account = new Account(this.client);

    }

    //from asyn we will create account
    async createAccount({email, password, name}) {

        try
        {
            //1st para is id
            const useraccount = await this.account.create(ID.unique(), email, password, name);

            if (useraccount) //agar user account create kr raha he to, login pe kr do
            {
                //if user ka successfull account bnn gaya he to sidha login hi kara dete he
                
                //Call another method
                return this.login( {email, password} );
            }
            else
            {
                return useraccount;
            }

        }
        catch(error)
        {
            throw error;
        }

    }

    //async method ke saath await aata he.
    async login({email,password}) {

        try
        {
            
            return await this.account.createEmailPasswordSession(email,password);

        }
        catch(error)
        {
            throw error;
        }

    }

    //suppose user direct home page pe land hua he, usko pata to lagna chahiye na ki wo login he ke nahi.
    async getCurrentUser () {

        try
        {
            //docs account api
            await this.account.get(); //agar user ke paas account he to get karao //warna return null
        }
        catch(error)
        {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            
        }

        return null;

    }

    //Log-Out is Delete Session(docs/account-api/delete session)

    //appwrite se interact karege ye functions
    async logout() {

        try
        {
            await this.account.deleteSessions();
        }
        catch(error)
        {
            console.log("Appwrite service :: logout :: error", error);
            
        }
    }


}





//kyu na andr ek object banalo taaki uska access hum kahi pe bhi use kr sakte he import krke.
//import karega aur authService. krke jo method banaege uska access le lege.
const authService = new AuthService();

export default authService


//advantage of making this file.

//if kl application change hoti he to sirf ye file me changes hoge
//under the hood sirf ye file ko pata he kya ho raha he.

//jb bhi infure Authentication krna he appwrite se to ye file as it is use kr sakte he hum.