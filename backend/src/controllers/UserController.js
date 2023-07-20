const { USER } = require("../database/Schema");
const jwt = require('jsonwebtoken');

const Singup = async (req, res) => {
  try {
    console.log(req.body, req.query, req.params);

    const checkUser = await USER.findOne({
      email: req.body.email,
      phone: req.body.phone,
    });
    if (checkUser) {
      return res.send({ msg: " A user with this record Already Exits" });
    }

    const userData = await USER.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      role: req.body.role || 'user'
    });
    return res.send(userData);
  } catch (error) {
    return res.send(error);
  }
};

const Login = async (req, res) => {
  try {
    console.log(req.body, req.params, req.query);
    const userData = await USER.findOne({ email: req.body.email });
    if (!userData) {
      return res.status(400).send({ msg: "No Such user" });
    } else {
      const token = jwt.sign({ email:req.body.email}, 'ABCDEF', { expiresIn : '2hour' })
      userData.token = token;
      userData.authTokenIssueAt = new Date();
      userData.save();
      return res.status(200).send(userData);
    }
  } catch (error) {
    return res.send(error);
  }
};



const BlogList = async (req, res) =>{
    console.log(req.body, req.query, req.params);
    
}

module.exports = { Singup, Login };
