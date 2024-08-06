/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //para adicionar fotos externas
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sujeitoprogramador.com",
      },
    ],
  },
};

export default nextConfig;
