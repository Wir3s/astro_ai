// app/api/astroAi/route.js (Next.js 13 App Router style)
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/authOptions"; // Adjust to where your auth config is
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: "Not authenticated" }), {
      status: 401,
    });
  }

  try {
    const availableCredit = await prisma.credit.findFirst({
      where: {
        userId: session.user.id,
        used: false,
      },
    });

    if (!availableCredit) {
      return new Response(JSON.stringify({ error: "No available credits" }), {
        status: 403,
      });
    }

    const { prompt } = await request.json();

    // If you're no longer using OpenAI, remove that code. Otherwise, call it here:
    // const completion = await openai.createCompletion({...});

    // Mark the credit as used
    await prisma.credit.update({
      where: { id: availableCredit.id },
      data: { used: true },
    });

    // Return a Response (instead of using res.status(...).json(...))
    return new Response(JSON.stringify({ response: "some response text" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error: "An error occurred while processing your request",
      }),
      { status: 500 }
    );
  }
}
