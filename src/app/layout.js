import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ducmanh-hamy-wedding.vercel.app'),
  title: "Đức Mạnh & Hà My - 20.09.2026 | Lễ Thành Hôn",
  description: "Trân trọng kính mời Quý khách tới dự bữa tiệc chung vui cùng gia đình chúng tôi!",
  icons: {
    icon: "/templates/wedding/002/images/decor-flower1.png",
  },
  openGraph: {
    title: "Đức Mạnh & Hà My - 20.09.2026 | Lễ Thành Hôn",
    description: "Trân trọng kính mời Quý khách tới dự bữa tiệc chung vui cùng gia đình chúng tôi!",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 1500,
        alt: "Đức Mạnh & Hà My - Wedding Invitation",
      },
    ],
    locale: "vi_VN",
    type: "website",
    siteName: "Đức Mạnh & Hà My Wedding",
  },
  twitter: {
    card: "summary_large_image",
    title: "Đức Mạnh & Hà My - 20.09.2026 | Lễ Thành Hôn",
    description: "Trân trọng kính mời Quý khách tới dự bữa tiệc chung vui cùng gia đình chúng tôi!",
    images: ["/assets/images/og-image.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  // Vẫn cho phép người dùng tự pinch-zoom (chuẩn a11y),
  // việc chặn zoom khi focus input được xử lý bằng font-size >= 16px
  maximumScale: 5,
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
