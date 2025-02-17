import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Superblock Game App",
  description: "Pop Balloons in the correct order.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
