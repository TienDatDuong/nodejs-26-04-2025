import express,{Express} from 'express'
import { getHomePage ,getCreateUserPage, postCreateUser,postDeleteUser,getViewUser} from 'controllers/user.controler'
const router = express.Router()

const webRouter = (app: Express) => {
    app.get("/",getHomePage)

    app.get("/create-user",getCreateUserPage)
    app.post("/handle-create-user", postCreateUser)
    app.post("/handle-delete-user/:id", postDeleteUser)
    app.get("/handle-view-user/:id",getViewUser);

    app.use("/",router)
}

export default webRouter

