/** @type {import('next').NextConfig} */
const nextConfig = {
  
  reactStrictMode: true,
  images:{
    domains:['samuel-colles-strapi-image-bucket.s3.ca-central-1.amazonaws.com','strapi-potfolio-backend.herokuapp.com','localhost']
  },
  env: {
    STRAPI_BACKEND_URL: process.env.STRAPI_BACKEND_URL
  }
}

module.exports = nextConfig
