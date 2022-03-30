import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/user";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
const router = express.Router();
import dotenv from "dotenv";

dotenv.config();

router.post(
  "/signup",
  body("email").isEmail().withMessage("The email is invalid"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("The password is too short"),
  async (req: express.Request, res: express.Response) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      const error = validationErrors.array().map((error) => {
        return {
          msg: error.msg,
        };
      });
      return res.json({ error, data: null });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.json({
        errors: [
          {
            msg: "Email already in use",
          },
        ],
        data: null,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = await User.create({ email, password: hashedPassword });
    console.log(newUser);
    console.log(newUser.email);

    const token = await JWT.sign(
      { email: newUser.email },
      process.env.JWT_SECRET as string,
      {
        expiresIn: 360000,
      }
    );
    res.json({
      errors: [],
      data: {
        token,
        user: {
          id: newUser._id,
          email: newUser.email,
        },
      },
    });
  }
);

export default router;
