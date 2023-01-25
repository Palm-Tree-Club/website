/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
});
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_API_KEY: "AIzaSyAk4-yfa5ll0v0PncfiV1ETbiXOKB7I3II",
    REACT_APP_AUTH_DOMAIN: "palm-tree-club.firebaseapp.com",
    REACT_APP_PROJECT_ID: "palm-tree-club",
    REACT_APP_STORAGE_BUCKET: "palm-tree-club.appspot.com",
    REACT_APP_MESSAGING_SENDER_ID: "1025156690287",
    REACT_APP_APP_ID: "1:1025156690287:web:76a7aa741d546a0afc789a",
    REACT_APP_MEASUREMENT_ID: "G-4QMLY5KNST",
  },
  images: {
    domains: ["firebasestorage.googleapis.com", "img.icons8.com"],
    unoptimized: true,
    loader: "akamai",
    path: "",
  },
  basePath: "",
  assetPrefix: "",
};

module.exports = withPWA({ nextConfig });
