import type { Metadata } from "next";
import { headers } from "next/headers";
import "./web/styles/globals.css";
import { Header } from "./web/components/header";
import { OnboardingProvider } from "./web/context/onboarding-context";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);

  return {
    metadataBase: baseUrl,
    title: "WEALTH GROWTH | Your Money. Your Future. Your Choice.",
    description:
      "Start your journey with a personalised wealth plan and a clear financial health score.",
    openGraph: {
      title: "WEALTH GROWTH",
      description: "Your Money. Your Future. Your Choice.",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "WEALTH GROWTH financial planning dashboard" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "WEALTH GROWTH",
      description: "Your Money. Your Future. Your Choice.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark h-full scroll-smooth antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('wealth-growth-theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);document.documentElement.classList.toggle('light',!d);document.documentElement.style.colorScheme=d?'dark':'light'}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-[#0c0e1a] text-white transition-colors duration-300">
        <OnboardingProvider>
          <Header />
          {children}
        </OnboardingProvider>
      </body>
    </html>
  );
}
