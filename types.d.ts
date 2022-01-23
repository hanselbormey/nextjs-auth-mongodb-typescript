import type { DefaultUser } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user?: DefaultUser & {
            role: string;
        };
    }
}

declare module 'next-auth/jwt/types' {
    interface JWT {
        role: string;
    }
}