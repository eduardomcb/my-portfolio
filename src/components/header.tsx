"use client";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname.endsWith("/");
  return (
    <header className="pt-6">
      <div
        className={`flex items-center ${
          isHomePage ? "justify-end" : "justify-between"
        }`}
      >
        {!isHomePage && (
          <Button variant="outline" size="icon" asChild>
            <Link href="/" passHref>
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </Button>
        )}
        <ModeToggle />
      </div>
    </header>
  );
}
