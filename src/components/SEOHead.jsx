import { Helmet } from "react-helmet";

export default function SEOHead({ title, description, keywords, url, image }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {keywords && <meta name="keywords" content={keywords} />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}
