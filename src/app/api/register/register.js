import prisma from '../../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, password } = req.body;

  // Here you should add validation and hashing for the password.

  try {
    const newUser = await prisma.user.create({
      data: { email, password },
    });

    return res.status(201).json(newUser);
  } catch (error) {
    // Handle error, such as a duplicate email address
    return res.status(400).json({ error: error.message });
  }
}
