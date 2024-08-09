import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { User, ReceiptText, TicketCheck, FileText } from "lucide-react";
import Link from "@/components/layout/link";

export default function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full flex-1">
      <aside className="flex flex-col justify-between max-w-48 bg-white shadow-s p-5">
        <NavigationMenu
          orientation="vertical"
          className="items-start flex-none"
        >
          <NavigationMenuList className="flex-col space-x-0 items-start gap-2">
            <NavigationMenuItem>
              <Link href="/profile">
                <div className="flex items-center">
                  <User className="mr-3" size={16} strokeWidth={2} />
                  프로필
                </div>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/referral">
                <div className="flex items-center">
                  <TicketCheck className="mr-3" size={16} strokeWidth={2} />
                  레퍼럴 관리
                </div>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/subscription">
                <div className="flex items-center">
                  <ReceiptText className="mr-3" size={16} strokeWidth={2} />
                  구독 관리
                </div>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu
          orientation="vertical"
          className="items-start flex-none"
        >
          <NavigationMenuList className="flex-col space-x-0 items-start gap-2">
            <NavigationMenuItem>
              <Link href="/privacy">
                <div className="flex items-center">
                  <FileText className="mr-3" size={16} strokeWidth={2} />
                  개인정보처리방침
                </div>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/terms">
                <div className="flex items-center">
                  <FileText className="mr-3" size={16} strokeWidth={2} />
                  이용약관
                </div>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </aside>
      {children}
    </main>
  );
}
