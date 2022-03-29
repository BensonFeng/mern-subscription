import express from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

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
      return res.json({ error });
    }

    const { email, password } = req.body;

    console.log(email, password);

    res.json({
      email,
      password,
    });
  }
);

export default router;
