import "./globals.css";

export const metadata = {
  title: "Нічник Овечка — солодкі сни",
  description: "Дитячий силіконовий нічник з мʼяким світлом",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
