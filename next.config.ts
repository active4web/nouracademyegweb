import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
    },

    output: "standalone" as const,

    experimental: {
        serverActions: {
            allowedOrigins: [
                'localhost:3000',
                '192.168.1.*',
            ],
        },
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);