"use client";
import { useRouter } from "nextjs-toploader/app";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import type { Session } from "next-auth";

type ExtendedSession = Session & {
  error?: string;
};

export function SessionWatcher({ children }: { children?: React.ReactNode }) {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session && (session as ExtendedSession).error === "RefreshTokenError") {
      signOut({ redirect: false });
      router.push("/login");
    }
  }, [session]);

  return <>{children}</>;
}
