import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  User,
  ReceiptText,
  TicketCheck,
  FileText,
  LogIn,
  LogOut,
  ExternalLink,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { prisma } from "@/utils/prisma";
import { signOut } from "@/app/(auth)/actions";

export async function Navbar() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile, error: profileError } = user
    ? await supabase.from("profile").select("*").eq("user_id", user.id)
    : { data: null, error: null };

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="w-11/12 h-[70px] flex justify-between items-center m-auto">
        <Link href="/">
          <Image src="/images/logo.png" width={108} height={40} alt="logo" />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              {user && profile && profile.length > 0 ? (
                <AvatarImage
                  src={profile[0].profile_image_url as string}
                  alt={user.email}
                />
              ) : null}
              <AvatarFallback>AP</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          {user ? <LoggedInDrowdownContent /> : <LoggedOutDrowdownContent />}
        </DropdownMenu>
      </div>
    </nav>
  );
}

function LoggedInDrowdownContent() {
  return (
    <DropdownMenuContent
      sideOffset={10}
      align="end"
      alignOffset={-20}
      // className="flex flex-col gap-1"
    >
      <DropdownMenuItem asChild>
        <Link href="/profile">
          <User className="mr-3" size={16} strokeWidth={2} />
          프로필
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/subscription">
          <ReceiptText className="mr-3" size={16} strokeWidth={2} />
          구독
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/referral">
          <TicketCheck className="mr-3" size={16} strokeWidth={2} />
          레퍼럴
        </Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuLabel>설정 더보기</DropdownMenuLabel>
      <DropdownMenuItem asChild className="justify-between">
        <Link href="/policy" target="_blank">
          <div className="flex">
            <FileText className="mr-3" size={16} strokeWidth={2} />
            서비스 약관
          </div>
          <ExternalLink size={16} strokeWidth={2} />
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild className="justify-between">
        <Link href="/privacy" target="_blank">
          <div className="flex">
            <FileText className="mr-3" size={16} strokeWidth={2} />
            개인정보처리방침
          </div>
          <ExternalLink size={16} strokeWidth={2} />
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild className="p-0">
        <form action={signOut} className="flex items-center">
          <Button className="bg-transparent w-full h-full  justify-start px-2 py-1.5 text-primary hover:text-white hover:bg-red-400">
            <LogOut className="mr-3" size={16} strokeWidth={2} />
            로그아웃
          </Button>
        </form>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}
function LoggedOutDrowdownContent() {
  return (
    <DropdownMenuContent sideOffset={10} align="end" alignOffset={-20}>
      <DropdownMenuItem asChild>
        <Link href="/login">
          <LogIn className="mr-3" size={16} strokeWidth={2} />
          로그인
        </Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}
