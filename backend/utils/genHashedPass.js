import bcrypt from "bcryptjs"

export const genHashedPass = async(password) =>{
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}

