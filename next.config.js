/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['herokuapp.com','strapi-potfolio-backend.herokuapp.com','localhost']
  },
  env: {
    STRAPI_BACKEND_URL: process.env.STRAPI_BACKEND_URL
  }
}

module.exports = nextConfig
