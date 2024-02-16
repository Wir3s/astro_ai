import prisma from "../../../../lib/prisma";
import bcrypt from 'bcrypt';

export default async function register(req, res) {
  const { name, email, password } = req.body;

  try {
    const exists = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (exists) {
      return res.status(409).json({ error: "User already exists" }); // 409 Conflict
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword, // Store the hashed password
      },
    });

    res.status(201).json(user); // 201 Created
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

