import { ReactNode } from "react";

export async function generateMetadata() {
  let app = process.env.NEXT_PUBLIC_APP;

  app = app ? app[0].toUpperCase() + app?.substring(1) : "";

  return {
    title: `Câmara de movimentação - ${app}`,
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
