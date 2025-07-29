(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/context/LanguageContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageProvider": (()=>LanguageProvider),
    "useLanguage": (()=>useLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
// Translation dictionary
const translations = {
    english: {
        'app.name': 'TamizhTravels',
        'app.tagline': 'Your trusted travel companion across Tamil Nadu',
        'common.loading': 'Loading...',
        'common.error': 'Something went wrong',
        'common.success': 'Success',
        'common.cancel': 'Cancel',
        'common.confirm': 'Confirm',
        'common.submit': 'Submit',
        'auth.login': 'Login',
        'auth.register': 'Register',
        'auth.email': 'Email',
        'auth.password': 'Password',
        'auth.phone': 'Phone Number',
        'auth.name': 'Full Name',
        'booking.title': 'Book Your Ride',
        'booking.pickup': 'Pickup Location',
        'booking.drop': 'Drop Location',
        'booking.ride_type': 'Select Ride Type',
        'booking.bike': 'Bike',
        'booking.auto': 'Auto',
        'booking.cab': 'Cab',
        'booking.book_now': 'Book Now',
        'otp.title': 'Enter OTP',
        'otp.verify': 'Verify OTP',
        'admin.dashboard': 'Admin Dashboard',
        'admin.rides': 'All Rides',
        'dashboard.welcome': 'Welcome back'
    },
    tamil: {
        'app.name': 'தமிழ் பயணம்',
        'app.tagline': 'தமிழ்நாடு முழுவதும் உங்கள் நம்பகமான பயண துணை',
        'common.loading': 'ஏற்றுகிறது...',
        'common.error': 'ஏதோ தவறு நடந்தது',
        'common.success': 'வெற்றி',
        'common.cancel': 'ரத்து செய்',
        'common.confirm': 'உறுதிப்படுத்து',
        'common.submit': 'சமர்பிக்க',
        'auth.login': 'உள்நுழை',
        'auth.register': 'பதிவு செய்',
        'auth.email': 'மின்னஞ்சல்',
        'auth.password': 'கடவுச்சொல்',
        'auth.phone': 'தொலைபேசி எண்',
        'auth.name': 'முழு பெயர்',
        'booking.title': 'உங்கள் பயணத்தை முன்பதிவு செய்யுங்கள்',
        'booking.pickup': 'ஏறும் இடம்',
        'booking.drop': 'இறங்கும் இடம்',
        'booking.ride_type': 'வாகன வகையை தேர்ந்தெடுக்கவும்',
        'booking.bike': 'பைக்',
        'booking.auto': 'ஆட்டோ',
        'booking.cab': 'கார்',
        'booking.book_now': 'இப்போது முன்பதிவு செய்',
        'otp.title': 'ஓடிபி உள்ளிடவும்',
        'otp.verify': 'ஓடிபி சரிபார்',
        'admin.dashboard': 'நிர்வாக பலகை',
        'admin.rides': 'அனைத்து பயணங்கள்',
        'dashboard.welcome': 'மீண்டும் வரவேற்கிறோம்'
    }
};
function LanguageProvider({ children }) {
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('english');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            const savedLanguage = localStorage.getItem('tamizhravels-language');
            if (savedLanguage && (savedLanguage === 'english' || savedLanguage === 'tamil')) {
                setLanguage(savedLanguage);
            }
        }
    }["LanguageProvider.useEffect"], []);
    const toggleLanguage = ()=>{
        const newLanguage = language === 'english' ? 'tamil' : 'english';
        setLanguage(newLanguage);
        localStorage.setItem('tamizhravels-language', newLanguage);
    };
    const t = (key)=>{
        return translations[language][key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            toggleLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/LanguageContext.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(LanguageProvider, "vwd3dmhxXoJC5tCVXRll1nNant0=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_context_LanguageContext_tsx_e8cf2ef5._.js.map