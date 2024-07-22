import { PurchasedDetailBook } from "@/_components/purchased-detail-book";
import { getDetailBook } from "@/_lib/microcms/client";
import { nextAuthOptions } from "@/_lib/next-auth/options";
import type { BookType, Purchase, User } from "@/types/types";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function ProfilePage() {
  const session = await getServerSession(nextAuthOptions);
  const user = session?.user as User;

  let purchasedDetailBooks: BookType[] = [];

  if (user) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/purchases/${user.id}`,
      { cache: "no-store" }
    );
    const purchasesData = await res.json();

    purchasedDetailBooks = await Promise.all(
      purchasesData.map(async (purchase: Purchase) => {
        return await getDetailBook(purchase.bookId);
      })
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">プロフィール</h1>

      <div className="bg-white shadow-md rounded p-4">
        <div className="flex items-center">
          <Image
            priority
            src={user.image || "/default_icon.png"}
            alt="user profile_icon"
            width={60}
            height={60}
            className="rounded-t-md"
          />
          <h2 className="text-lg ml-4 font-semibold">{user.name}</h2>
        </div>
      </div>

      <span className="font-medium text-lg mb-4 mt-4 block">購入した記事</span>
      <div className="flex items-center gap-6">
        {purchasedDetailBooks.map((purchasedDetailBook: BookType) => (
          <PurchasedDetailBook
            key={purchasedDetailBook.id}
            purchasedDetailBook={purchasedDetailBook}
          />
        ))}
      </div>
    </div>
  );
}
