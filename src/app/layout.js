import "./globals.css";

export const metadata = {
  title: "Đức Mạnh & Hà My - 02.05.2026 | Lễ Thành Hôn",
  description: "Trân trọng kính mời Quý khách tới dự bữa tiệc chung vui cùng gia đình chúng tôi!",
  icons: {
    icon: "/templates/wedding/002/images/decor-flower1.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-neutral-900 text-neutral-800">
        {children}
      </body>
    </html>
  );
}
