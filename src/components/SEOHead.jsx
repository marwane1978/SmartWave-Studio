import { Helmet } from "react-helmet";

export default function SEOHead({
  title = "SmartWave Studio - Création Sites Web & Solutions Digitales",
  description = "SmartWave Studio propose la création de sites web modernes, ERP / POS, automatisation et solutions digitales pour petites entreprises.",
  keywords = "site web Maroc, création site web, ERP POS, automatisation, SmartWave, développement web Maroc",
  image = "/assets/og-image.png",
  url = "https://smart-wave-studio.com"
}) {
  return (
    <Helmet>
      {/* SEO BASIC */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* OPEN GRAPH */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
