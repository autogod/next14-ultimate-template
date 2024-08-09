"use client";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { signOut } from "@/app/(auth)/actions";

export function LogoutButton() {
  return (
    <Button
      onClick={signOut}
      className="bg-transparent w-full h-full  justify-start px-2 py-1.5 text-primary hover:text-white hover:bg-red-400"
    >
      <LogOut className="mr-3" size={16} strokeWidth={2} />
      로그아웃
    </Button>
  );
}
