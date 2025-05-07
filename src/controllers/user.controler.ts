import {Request,Response} from 'express'
import { getAllUsers, getUserById, handleCreateUser, handleDeleteUser } from 'services/user.service';

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

const postDeleteUser = async (req: Request,res: Response) => {
    const {id} = req.params;
    handleDeleteUser(id)
    return res.redirect("/")
}

const getViewUser =  async (req: Request,res: Response) => {
    const {id} = req.params;
    //get user by id
    const user = await getUserById(id)

    res.render("view-user",{
        id: user.id,
        user: user
        });
    }


export {getHomePage,getCreateUserPage, postCreateUser,postDeleteUser,getViewUser}