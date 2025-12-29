import "./globals.css";

export const metadata = {
  title: "Fermeture de l'espace aérien - Analyse",
  description:
    "Analyse géopolitique sur la fermeture de l'espace aérien par le Venezuela, Cuba et l'Iran aux appareils américains."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
