"use server";

import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { Provider } from "@supabase/supabase-js";
import { getURL } from "@/utils/helpers";

export async function signInWithEmail(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect(
      `/login?message=${encodeURIComponent(
        "이메일 또는 비밀번호를 다시 확인해주세요."
      )}`
    );
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signUp(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.error(error);
    redirect(
      `/login?message=${encodeURIComponent(
        "회원가입에 실패했습니니다. 다시 시도해주세요."
      )}`
    );
  }

  revalidatePath("/", "layout");
  redirect("/email-verification"); // email-verification 으로 이동
}

export async function signOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/", RedirectType.push);
}

export async function oAuthSignIn(provider: Provider) {
  if (!provider) {
    return redirect(
      `/login?message=${encodeURIComponent(
        "서버에 문제가 발생했습니다. 다시 시도해주세요."
      )}`
    );
  }

  const supabase = createClient();
  const redirectUrl = getURL("/auth/callback");
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: redirectUrl,
    },
  });

  if (error) {
    redirect(`/login?message=${encodeURIComponent("로그인에 실패했습니다.")}`);
  }

  return redirect(data.url);
}
