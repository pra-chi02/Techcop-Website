import { Injectable } from '@angular/core';

type Lang = 'en' | 'hi';

// Scoped dictionary — covers navigation, hero, common buttons and key
// section labels that appear on every page. Full paragraph content
// (product specs, descriptions) stays in English.
const DICTIONARY: Record<string, string> = {
  Home: 'होम',
  'About Us': 'हमारे बारे में',
  Products: 'प्रोडक्ट्स',
  'Projects & Clients': 'प्रोजेक्ट्स और क्लाइंट्स',
  Contact: 'संपर्क करें',
  Admin: 'एडमिन',
  'Get a Quote': 'कोट लें',
  'Explore Our Products': 'हमारे प्रोडक्ट्स देखें',
  'Request a Quote': 'कोट के लिए पूछें',
  'View All Products & Solutions': 'सभी प्रोडक्ट्स देखें',
  'View All Products': 'सभी प्रोडक्ट्स देखें',
  'Solar Powered': 'सोलर पावर्ड',
  'Energy Efficient': 'ऊर्जा दक्ष',
  'Reliable & Durable': 'भरोसेमंद और टिकाऊ',
  'Eco Friendly': 'पर्यावरण के अनुकूल',
  'Quick Links': 'क्विक लिंक्स',
  'Our Products': 'हमारे प्रोडक्ट्स',
  'Get In Touch': 'संपर्क करें',
  'Get in Touch': 'संपर्क करें',
  'Submit Enquiry': 'पूछताछ भेजें',
  'Download Brochure': 'ब्रोशर डाउनलोड करें',
  'Call Now': 'कॉल करें',
  WhatsApp: 'व्हाट्सएप',
  'Full Name': 'पूरा नाम',
  'Phone Number': 'फ़ोन नंबर',
  Email: 'ईमेल',
  Message: 'संदेश',
  'Product of Interest': 'किस प्रोडक्ट में रुचि है',
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  lang: Lang = 'en';

  toggle(): void {
    this.lang = this.lang === 'en' ? 'hi' : 'en';
  }

  t(text: string): string {
    if (this.lang === 'en') return text;
    return DICTIONARY[text] ?? text;
  }
}