import getConnection from "../db"

const handleCreateUser = async (
    fullName: string,
    email: string,
    address: string) => {
        //insert into database
        const connection = await getConnection();
        try {
        const sql = 'INSERT INTO `user`(`fullName`, `email`,`address`) VALUES (?, ?, ?)';
        const values = [fullName, email, address];

        const [result, fields] = await connection.execute(sql, values);
        return result; // rows returned by server
        } catch (err) {
            console.log(err);
        return [];
        }
        
        //return result
}

const getAllUsers = async () => {
    const connection = await getConnection();
       // A simple SELECT query
    try {
    const [results, fields] = await connection.query(
        'SELECT * FROM `user`'
    );
    return results; // rows returned by server
    } catch (err) {``
    return [];
    }
}

export {handleCreateUser,getAllUsers}