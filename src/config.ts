import { Time } from "@sapphire/cron";

export default {
    app: {
        globalPrefix: 'api/v1',
        cookieMaxAge: Time.Day * 2
    },
}

