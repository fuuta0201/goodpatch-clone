import type { Metadata } from 'next';
import { Gabarito } from 'next/font/google';
import '@/sass/layout.scss';

const gabarito = Gabarito({
  variable: '--font-gabarito',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Goodpatch グッドパッチ｜デザインの力を証明する',
  description:
    '新規事業立ち上げやプロダクトのUI/UX改善など、戦略策定〜グロースフェーズまで一気通貫でパートナーとして並走します。さらに、ブランド・エクスペリエンスの構築、デザイン文化の浸透を支援。本質課題にコミットし、ビジネスに貢献するデザインを提案します。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gabarito.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
