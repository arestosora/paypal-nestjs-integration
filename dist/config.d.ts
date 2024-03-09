export declare class Config {
    static Discord: {
        DISCORD_CLIENT_ID: string;
        DISCORD_CLIENT_SECRET: string;
        DISCORD_REDIRECT_URI: string;
    };
    static Database: {
        HOST: string;
        PORT: number;
        USERNAME: string;
        PASSWORD: string;
        DATABASE: string;
    };
    static Session: {
        SECRET: string;
    };
    static Client: {
        ORIGIN: string;
    };
}
