import React from "react";

import { Noto_Sans_JP } from "next/font/google";
import { Metadata } from "next/types";

const font = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Authenticate",
  description: "Next.js + Tailwind CSS + TypeScript Starter",
  keywords: ["next", "tailwindcss", "typescript"],
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center h-full items-center flex-col">
      <h4>You are currently not logged in!!</h4>
      {children}
    </div>
  );
};

export default AuthLayout;
