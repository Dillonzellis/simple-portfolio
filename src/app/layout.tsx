import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dillon | Personal Portfolio",
  description: "Dillon Ellis | Software Developer",
  icons: [
    {
      rel: "icon",
      media: "(prefers-color-scheme: light)",
      type: "image/png",
      url: "/favicon-light.png",
    },
    {
      rel: "icon",
      media: "(prefers-color-scheme: dark)",
      type: "image/png",
      url: "/favicon-dark.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="tracking-tight antialiased">
        <div className="flex min-h-screen flex-col justify-between bg-white p-8 pt-0 text-gray-900 md:pt-8 dark:bg-zinc-950 dark:text-zinc-200">
          <main className="mx-auto w-full max-w-[60ch] space-y-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

const Footer = () => {
  const links = [
    { name: "resume", url: "" },
    { name: "linkedin", url: "https://www.linkedin.com/in/dillon-ellis/" },
    { name: "github", url: "https://github.com/dillonzellis" },
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 transition-colors duration-200 hover:text-blue-500 dark:text-gray-500 hover:dark:text-gray-300"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
};
