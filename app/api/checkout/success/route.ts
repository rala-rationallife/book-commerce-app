import prisma from "@/_lib/prisma";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req: Request, res: Response) {
  const { sessionId } = await req.json();

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    console.log(session);

    const existingPurchase = await prisma.purchase.findFirst({
      where: {
        userId: session.client_reference_id!,
        bookId: session.metadata?.bookId,
      },
    });

    // const purchase = await prisma.purchase.create({
    //   data: {
    //     userId: session.client_reference_id!,
    //     bookId: session.metadata?.bookId!,
    //   },
    // });
    // return NextResponse.json({ purchase });

    if (!existingPurchase) {
      const purchase = await prisma.purchase.create({
        data: {
          userId: session.client_reference_id!,
          bookId: session.metadata?.bookId!,
        },
      });
      return NextResponse.json({ purchase });
    } else {
      return NextResponse.json({ message: "すでに購入済みです" });
    }
  } catch (err) {
    return NextResponse.json(err);
  }
}
