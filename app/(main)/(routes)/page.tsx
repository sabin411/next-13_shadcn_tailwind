"use client";

import React from "react";

// components
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/atoms/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <>
      <main className="flex w-full justify-between p-4 text-xs">
        <h4>This is a protected route here!!</h4>
        <div className="flex items-center">
          <UserButton afterSignOutUrl="/" />
          <ModeToggle className="ml-2" />
        </div>
        <Button
          variant={"accent"}
          className="bg-sky-900 px-4 py-2 text-white hover:bg-sky-800 dark:bg-sky-200 dark:text-sky-800 sm:px-8 sm:py-3"
          onClick={handleClick}
        >
          Click me !!
        </Button>
      </main>
    </>
  );
}
