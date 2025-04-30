import { log } from 'console';
import {Request,Response} from 'express'

const getHomePage = (req: Request,res: Response) => {
    res.render('home.ejs');
}

const getCreateUserPage = (req: Request,res: Response) => {
    res.render('create-user');
}

const postCreayteUser = (req: Request,res: Response) => {
    console.log(req)
    // const {firstName,lastName} = req.body
    // console.log(firstName,lastName)
    // res.send("User created successfully")
}


export {getHomePage,getCreateUserPage, postCreayteUser}