import { Helmet } from "react-helmet";

const defaultTitle = "DockCV - Build Beautiful Resumes Instantly";
const defaultDescription = "Create professional resumes and CVs online with DockCV. Easy, fast, and free resume builder tool with modern templates.";
const defaultImage = "https://www.dockcv.com/public/assets/dockcvhighreso.png"; // Replace with your actual image URL
const defaultURL = "https://www.dockcv.com";

const SEO = ({
  title = defaultTitle,
  description = defaultDescription,
  image = defaultImage,
  url = defaultURL,
}) => (
  <Helmet>
    {/* Basic */}
    <title>{title}</title>
    <meta name="description" content={description} />

    {/* Open Graph for Facebook, LinkedIn, Instagram */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />

    {/* Canonical for SEO */}
    <link rel="canonical" href={url} />
  </Helmet>
);

export default SEO;
