import express,{Express} from 'express'
import { getHomePage ,getCreateUserPage} from '../controllers/user.controler'
const router = express.Router()

const webRouter = (app: Express) => {
    app.get("/",getHomePage)

    app.get("/create-user",getCreateUserPage)

    app.use("/",router)
}

export default webRouter

