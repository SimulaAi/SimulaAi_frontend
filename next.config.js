/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    API: process.env.API ? process.env.API : 'http://localhost:3000/api'
  }
}
