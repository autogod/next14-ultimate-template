"use client";
import { Button } from "@/components/ui/button";
import { Provider } from "@supabase/supabase-js";
import { GoogleIcon } from "@/components/icon";
import { oAuthSignIn } from "../actions";

type OAuthProvider = {
  name: Provider;
  displayName: string;
  icon?: JSX.Element;
};

export function OAuthButtons() {
  const oAuthProviders: OAuthProvider[] = [
    {
      name: "google",
      displayName: "구글",
      icon: <GoogleIcon />,
    },
  ];

  return (
    <>
      {oAuthProviders.map((provider) => (
        <Button
          key={provider.name}
          className="w-full flex items-center justify-center gap-2"
          variant="outline"
          onClick={async () => {
            await oAuthSignIn(provider.name);
          }}
        >
          {provider.icon}
          {provider.displayName} 로그인하기
        </Button>
      ))}
    </>
  );
}
