export default {
    telegram: {
        token: process.env.TELEGRAM_TOKEN || '480888976:AAHM40jYGDHp3O30hyUtMed3NryEmMixh3o',
        externalUrl: process.env.CUSTOM_ENV_VARIABLE || 'https://yoursite.com',
        port: process.env.PORT || 443,
        host: '0.0.0.0'
    }
};