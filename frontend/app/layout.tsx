export const metadata = {
  title: 'Garden',
  description: '百合/BLポータルサイト構築中',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
