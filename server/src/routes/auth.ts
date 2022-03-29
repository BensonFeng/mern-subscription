import express from "express";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.json({
    email,
    password,
  });
});

export default router;
