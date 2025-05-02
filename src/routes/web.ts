import express,{Express} from 'express'
import { getHomePage ,getCreateUserPage, postCreateUser} from '../controllers/user.controler'
const router = express.Router()

const webRouter = (app: Express) => {
    app.get("/",getHomePage)

    app.get("/create-user",getCreateUserPage)

    app.post("/handle-create-user", postCreateUser)

    app.use("/",router)
}

export default webRouter

