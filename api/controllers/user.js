import User from "../models/User.js"
// import cloudinary from "cloudinary"

// const cloud = cloudinary.v2

// cloud.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_KEY,
//     api_secret: process.env.CLOUDINARY_SECRET
// })

// //update User

export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser)
    } catch (err) {
        next(err);
    }
}

//delete User

export const deleteUser = async (req, res, next) => {
    try {

        // const user = await User.findById(req.params.id)
        // const file = user.cloud_id.split("/")[1]

        // cloud.uploader.destroy(file, function (error) {
        //     console.log(error)
        // })
        // //update User
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
    } catch (err) {
        next(err);
    }
}

//get one User

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err);
    }
}

//get all Users

export const getAllUser = async (req, res, next) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        next(err);
    }
}