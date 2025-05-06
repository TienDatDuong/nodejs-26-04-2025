import {Request,Response} from 'express'
import { getAllUsers, handleCreateUser } from 'services/user.service';

const getHomePage = async (req: Request,res: Response) => {
    const users = await getAllUsers()
    res.render('home.ejs',{
        name: users
    });
}

const getCreateUserPage = (req: Request,res: Response) => {
    res.render('create-user');
}

const postCreateUser = 
 async (req: Request,res: Response) => {   
    const {fullName,email,address} = req.body
    await handleCreateUser(fullName,email,address)
    return res.redirect("/")
}


export {getHomePage,getCreateUserPage, postCreateUser}