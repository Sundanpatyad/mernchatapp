import User from "../model/user.js";

export const addUser = async (req, res) => {
  try {
    let exist = await User.findOne({ sub: req.body.sub });
    if (exist) {
      return res.status(200).json({ msg: 'User already exists' });
    }
    const newUser = new User(req.body);
    await newUser.save();
    return res.status(200).json(newUser);
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

export const getUsers = async(req,res)=>{
    try{
     const user = await  User.find({});
     return res.status(200).json(user);
    }
    catch(e){
        return res.status(500).json(e.message);
    }
};
