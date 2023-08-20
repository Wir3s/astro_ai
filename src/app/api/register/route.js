import prisma from "../../../../lib/prisma";
// import { NextApiRequest, NextApiResponse } from "next";
// import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { name, email } = await req.json();
  const exists = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (exists) {
    return NextResponse.json({ error: "User already exists" });
  } else {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return NextResponse.json(user);
  }
}
