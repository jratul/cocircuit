import { getServerSession } from "next-auth";
import { ApplicationLayout } from "./application-layout";
import { authOptions } from "@/lib/authOptions";
import { SessionData } from "./types/types";

export default async function WrapperLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  const sessionData: SessionData = {
    userName: session?.user?.name || "",
    image: session?.user?.image || "",
    email: session?.user?.email || "",
  };
  return <ApplicationLayout sessionData={sessionData}>{children}</ApplicationLayout>;
}
