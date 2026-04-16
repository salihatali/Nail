export const metadata = {
  title: "Sudenaz Nail Studio",
  description: "Profesyonel Protez Tırnak",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}