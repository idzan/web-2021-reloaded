var klaroConfig = {
    // With the 0.7.0 release we introduce a 'version' paramter that will make
    // if easier for us to keep configuration files backwards-compatible in the future.
    version: 1,

    // You can customize the ID of the DIV element that Klaro will create
    // when starting up. If undefined, Klaro will use 'klaro'.
    elementID: 'klaro',

    // You can override CSS style variables here. For IE11, Klaro will
    // dynamically inject the variables into the CSS. If you still consider
    // supporting IE9-10 (which you probably shouldn't) you need to use Klaro
    // with an external stylesheet as the dynamic replacement won't work there.
    styling: {
        theme: ['dark', 'bottom', 'short'],
    },

    noAutoLoad: false,

    // Setting this to true will render the descriptions of the consent
    // modal and consent notice are HTML. Use with care.
    htmlTexts: true,

    // Setting 'embedded' to true will render the Klaro modal and notice without
    // the modal background, allowing you to e.g. embed them into a specific element
    // of your website, such as your privacy notice.
    embedded: false,
    
    groupByPurpose: true,

    storageMethod: 'localStorage',
    cookieName: 'idzan_consent',

    cookieExpiresAfterDays: 120,

    default: false,

    mustConsent: false,

    acceptAll: false,

    hideDeclineAll: false,
    hideLearnMore: false,
    noticeAsModal: false,

    disablePoweredBy: true,

    lang: 'en',

    translations: {

        zz: {
            privacyPolicyUrl: '/privacy',
        },
        en: {
            consentModal: {
                title: 'Do you agree about our cookies and settings?',
                description:
                    'Here you can see and customize and find what the information we collect about you.',
            },
            cloudflare: {
                description: 'Protection against DDoS attacks, Pages (hosting) and basic Analytics',
            },
            
            essentials: {
                description: 'Protection against DDoS attacks, Pages (hosting) and basic Analytics with all importnant settings about your site configuration',
            },
            purposes: {
                analytics: 'Analytics',
                essentials: 'Essentials',
                hosting: 'Hosting and Content Delivery Network',
                security: 'Security',
            },
        },
    },

    services: [
        {
            name: 'cloudflare',
            title: 'Cloudflare',
            purposes: ['essentials'],
            required: true,
            cookies: ['__cf_bm', '__cfduid']
        }
    ]
};
