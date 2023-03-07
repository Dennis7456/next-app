/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@novu/node']);
const envConfig = require('./env-config');

const nextConfig = {
  reactStrictMode: true,
  env: envConfig
}

module.exports = nextConfig
