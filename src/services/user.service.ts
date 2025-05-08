import { prisma } from "config/clinet";
import getConnection from "../config/db"
import { PrismaClient, Prisma } from '@prisma/client'

const handleCreateUser = async (
    fullName: string,
    email: string,
    address: string) => {
        //insert into database
        await prisma.user.create({
            data: {
                name: fullName,
                email: email,
                address: address
            }
        });
}

const getAllUsers = async () => {
    const users = await prisma.user.findMany()
    return users;
}

const handleDeleteUser = async (id: string) => {
   const result = await prisma.user.delete({
        where: { id: +id }
    })
    return result;
}

const getUserById = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: { id: +id }
    })
    return user;
};

const upDateUserById = async (id: string, email: string, address: string, fullName: string) => {
    const upDatedUser = await prisma.user.update({
        where: { id: +id },
        data: {
            email: email,
            address: address,
            name: fullName
        }   
    })
    return upDatedUser;
};


export {handleCreateUser,getAllUsers, handleDeleteUser, getUserById, upDateUserById}