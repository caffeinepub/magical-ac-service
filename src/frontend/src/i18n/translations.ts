export type Language = 'en' | 'hi' | 'gu';

export interface Translations {
  // Navigation
  nav: {
    brandName: string;
    bookNow: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    tagline: string;
    supportingText: string;
    primaryCta: string;
    callButton: string;
    whatsappMessage: string;
    imageAlt: string;
  };
  
  // Services Section
  services: {
    heading: string;
    waterJet: {
      title: string;
      description: string;
    };
    waterJetFoam: {
      title: string;
      description: string;
    };
    repairing: {
      title: string;
      description: string;
    };
    installation: {
      title: string;
      description: string;
    };
  };

  // Water Jet Foam Section
  waterJetFoam: {
    heading: string;
    description: string;
    benefits: {
      deepCleaning: {
        title: string;
        description: string;
      };
      protection: {
        title: string;
        description: string;
      };
      ecoFriendly: {
        title: string;
        description: string;
      };
      efficiency: {
        title: string;
        description: string;
      };
    };
    ctaButton: string;
    imageAlt: string;
  };
  
  // Coverage Section
  coverage: {
    heading: string;
    description: string;
    seoText: string;
  };
  
  // Service Areas Section
  serviceAreas: {
    heading: string;
    eastCentral: string;
    west: string;
    gandhinagar: string;
    footerText: string;
    footerEnglish: string;
  };
  
  // Local SEO Section
  localSeo: {
    heading: string;
    description: string;
    service1: string;
    service2: string;
    service3: string;
    service4: string;
    footerText: string;
  };
  
  // Our Work Section
  ourWork: {
    heading: string;
    description: string;
    footerText: string;
    imageAlts: {
      waterJet1: string;
      waterJet2: string;
      beforeAfter: string;
      serviceHome: string;
      serviceTeam: string;
      serviceVan: string;
    };
  };
  
  // Sofa Cleaning Section
  sofaCleaning: {
    heading: string;
    subheading: string;
    services: {
      fabric: string;
      leather: string;
      carpet: string;
      mattress: string;
      office: string;
    };
    priceText: string;
    features: {
      steamCleaning: string;
      stainRemoval: string;
      fastDrying: string;
      fabricProtection: string;
    };
    footerText: string;
    footerDiscount: string;
    callButton: string;
  };
  
  // Booking Section
  booking: {
    heading: string;
    nameLabel: string;
    namePlaceholder: string;
    serviceLabel: string;
    areaLabel: string;
    areaPlaceholder: string;
    submitButton: string;
    errorMessage: string;
    serviceOptions: {
      waterJet: string;
      waterJetFoam: string;
      repairing: string;
      installation: string;
    };
    whatsappTemplate: {
      header: string;
      customerName: string;
      service: string;
      area: string;
      footer: string;
    };
  };
  
  // Footer
  footer: {
    tagline: string;
    callUs: string;
    whatsapp: string;
    copyright: string;
    builtWith: string;
    serviceVanAlt: string;
  };
  
  // Floating WhatsApp Button
  floatingWhatsapp: {
    label: string;
    ariaLabel: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      brandName: 'Magical AC Service',
      bookNow: 'Book Now',
    },
    hero: {
      title: 'Magical Water Jet Service',
      tagline: 'Professional Water Jet & Foam Cleaning in Ahmedabad',
      supportingText: 'Expert water jet service • Advanced foam cleaning • Same-day service in Nikol, Naroda, Hanspura, Bapunagar & all Ahmedabad',
      primaryCta: 'Get a Free Quote',
      callButton: 'Call: 80002 62644',
      whatsappMessage: 'Hi, I want to book Water Jet Service',
      imageAlt: 'Professional water jet service in Ahmedabad',
    },
    services: {
      heading: 'Our Services',
      waterJet: {
        title: 'Water Jet Service',
        description: 'High-pressure water jet cleaning for deep AC cleaning and washing.',
      },
      waterJetFoam: {
        title: 'Water Jet Foam Service',
        description: 'Premium foam-based cleaning for superior results and protection.',
      },
      repairing: {
        title: 'Expert Repairing',
        description: 'Precise PCB and compressor work.',
      },
      installation: {
        title: 'Installation',
        description: 'Safe fitting of new and old ACs.',
      },
    },
    waterJetFoam: {
      heading: 'Premium Water Jet Foam Service',
      description: 'Experience the next level of AC cleaning with our advanced water jet foam service. Our specialized foam formula penetrates deep into your AC unit, removing stubborn dirt, bacteria, and allergens while protecting internal components.',
      benefits: {
        deepCleaning: {
          title: 'Deep Cleaning',
          description: 'Foam penetrates every corner for thorough cleaning',
        },
        protection: {
          title: 'Component Protection',
          description: 'Gentle on delicate AC parts while being tough on dirt',
        },
        ecoFriendly: {
          title: 'Eco-Friendly',
          description: 'Biodegradable foam safe for your family and environment',
        },
        efficiency: {
          title: 'Better Efficiency',
          description: 'Improves cooling performance and reduces energy consumption',
        },
      },
      ctaButton: 'Book Foam Service Now',
      imageAlt: 'Water jet foam service cleaning demonstration',
    },
    coverage: {
      heading: 'Water Jet Service Across Ahmedabad',
      description: 'Professional water jet and foam cleaning services available in Nikol, Naroda, Hanspura, Nana Chiloda, Bapunagar, Vastral, Kathvada, Kubernagar, Odhav, Maninagar, Krishnanagar, and all major areas of Ahmedabad.',
      seoText: 'Looking for professional water jet service in Nikol, Naroda, Hanspura, Bapunagar, Vastral, Kathvada, Kubernagar, Odhav, Maninagar, or Krishnanagar? We provide expert water jet cleaning and water jet foam service with advanced high-pressure cleaning technology. Our specialized water jet service ensures deep cleaning of AC units, improving cooling efficiency. Available across Nikol, Naroda, Hanspura, Nana Chiloda, Bapunagar, Vastral, Kathvada, Kubernagar, Odhav, Maninagar, Krishnanagar, and all surrounding areas in Ahmedabad.',
    },
    serviceAreas: {
      heading: 'Water Jet Services Across Ahmedabad',
      eastCentral: 'East and Central Ahmedabad',
      west: 'West Ahmedabad',
      gandhinagar: 'Gandhinagar and Others',
      footerText: 'Contact us now for the best water jet service, water jet foam service, and AC cleaning in your area. We provide 24/7 home service in Nikol, Naroda, Hanspura, Bapunagar, Vastral, Kathvada, Kubernagar, Odhav, Maninagar, and Krishnanagar.',
      footerEnglish: 'Professional water jet service and foam cleaning available in all listed areas.',
    },
    localSeo: {
      heading: 'Top Water Jet Service in Ahmedabad',
      description: 'Serving all major areas with professional water jet service, foam cleaning, and AC washing solutions',
      service1: 'Water Jet Service Nikol, Naroda',
      service2: 'Water Jet Foam Service Hanspura, Bapunagar',
      service3: 'Water Jet Cleaning Vastral, Odhav, Kathvada',
      service4: 'Best Water Jet Maninagar, Krishnanagar, Kubernagar',
      footerText: 'We are proud to offer the best water jet service in Nikol, Naroda, Hanspura, Nana Chiloda, Bapunagar, Vastral, Kathvada, Kubernagar, Odhav, Maninagar, and Krishnanagar. Our team provides professional water jet foam service and AC cleaning across all neighborhoods in Ahmedabad. Contact us today for reliable service at your doorstep.',
    },
    ourWork: {
      heading: 'Live Photos - Our Work',
      description: 'Real photos from our water jet service, foam cleaning, and AC washing services across Ahmedabad',
      footerText: 'These are real photos from our water jet service and foam cleaning in areas like Nikol, Naroda, Hanspura, Bapunagar, Vastral, Kathvada, Kubernagar, Odhav, Maninagar, and Krishnanagar. We take pride in delivering professional, high-quality water jet service to every customer across Ahmedabad.',
      imageAlts: {
        waterJet1: 'Water jet service in Nikol - high-pressure AC cleaning',
        waterJet2: 'Professional water jet foam service in Naroda',
        beforeAfter: 'Before and after water jet service in Hanspura - visible cleaning results',
        serviceHome: 'Water jet service at customer home in Bapunagar',
        serviceTeam: 'Our expert water jet service team in Ahmedabad',
        serviceVan: 'Magical water jet service van - equipped for on-site cleaning',
      },
    },
    sofaCleaning: {
      heading: 'Magical Sofa Cleaning Services',
      subheading: 'Our Sofa Cleaning Services',
      services: {
        fabric: '✨ Fabric Sofa Cleaning',
        leather: '✨ Leather Sofa Polishing',
        carpet: '✨ Carpet & Chair Cleaning',
        mattress: '✨ Mattress Sanitization',
        office: '✨ Office & Hotel Cleaning Specialists',
      },
      priceText: 'Starting from just ₹90/Running Feet!',
      features: {
        steamCleaning: 'Steam Cleaning',
        stainRemoval: 'Stain Removal',
        fastDrying: 'Fast Drying',
        fabricProtection: 'Fabric Protection',
      },
      footerText: 'We provide home service for sofa cleaning in Nikol, Naroda, Hanspura, and all over Ahmedabad.',
      footerDiscount: 'Special discounts available for offices and hotels.',
      callButton: 'Call for Booking: 80002 62644',
    },
    booking: {
      heading: 'Book Your Service',
      nameLabel: 'Your Name',
      namePlaceholder: 'Enter your name',
      serviceLabel: 'Service Type',
      areaLabel: 'Your Area',
      areaPlaceholder: 'Enter your area (e.g., Nikol, Naroda)',
      submitButton: 'Confirm Online Booking',
      errorMessage: 'Please enter your name and area.',
      serviceOptions: {
        waterJet: 'Water Jet Service',
        waterJetFoam: 'Water Jet Foam Service',
        repairing: 'AC Repairing',
        installation: 'Installation / Uninstallation',
      },
      whatsappTemplate: {
        header: '*New Water Jet Service Booking*',
        customerName: '*Customer Name:*',
        service: '*Service:*',
        area: '*Area:*',
        footer: '*Awaiting your response.*',
      },
    },
    footer: {
      tagline: 'Professional Water Jet & Foam Cleaning Services',
      callUs: 'Call: 80002 62644',
      whatsapp: 'WhatsApp Us',
      copyright: 'Magical AC Service. All rights reserved.',
      builtWith: 'Built with',
      serviceVanAlt: 'Magical water jet service van',
    },
    floatingWhatsapp: {
      label: 'WhatsApp',
      ariaLabel: 'Contact us on WhatsApp for water jet service',
    },
  },
  hi: {
    nav: {
      brandName: 'मैजिकल एसी सर्विस',
      bookNow: 'बुक करें',
    },
    hero: {
      title: 'मैजिकल वाटर जेट सर्विस',
      tagline: 'अहमदाबाद में प्रोफेशनल वाटर जेट और फोम क्लीनिंग',
      supportingText: 'एक्सपर्ट वाटर जेट सर्विस • एडवांस्ड फोम क्लीनिंग • निकोल, नरोडा, हंसपुरा, बापूनगर और पूरे अहमदाबाद में सेम-डे सर्विस',
      primaryCta: 'फ्री कोट पाएं',
      callButton: 'कॉल करें: 80002 62644',
      whatsappMessage: 'नमस्ते, मुझे वाटर जेट सर्विस बुक करनी है',
      imageAlt: 'अहमदाबाद में प्रोफेशनल वाटर जेट सर्विस',
    },
    services: {
      heading: 'हमारी सेवाएं',
      waterJet: {
        title: 'वाटर जेट सर्विस',
        description: 'डीप एसी क्लीनिंग और वॉशिंग के लिए हाई-प्रेशर वाटर जेट क्लीनिंग।',
      },
      waterJetFoam: {
        title: 'वाटर जेट फोम सर्विस',
        description: 'बेहतर परिणाम और सुरक्षा के लिए प्रीमियम फोम-बेस्ड क्लीनिंग।',
      },
      repairing: {
        title: 'एक्सपर्ट रिपेयरिंग',
        description: 'सटीक PCB और कंप्रेसर का काम।',
      },
      installation: {
        title: 'इंस्टॉलेशन',
        description: 'नए और पुराने AC की सुरक्षित फिटिंग।',
      },
    },
    waterJetFoam: {
      heading: 'प्रीमियम वाटर जेट फोम सर्विस',
      description: 'हमारी एडवांस्ड वाटर जेट फोम सर्विस के साथ एसी क्लीनिंग का अगला स्तर अनुभव करें। हमारा विशेष फोम फॉर्मूला आपकी एसी यूनिट में गहराई से प्रवेश करता है, जिद्दी गंदगी, बैक्टीरिया और एलर्जी को हटाता है जबकि आंतरिक घटकों की रक्षा करता है।',
      benefits: {
        deepCleaning: {
          title: 'डीप क्लीनिंग',
          description: 'फोम हर कोने में प्रवेश करता है पूरी तरह से सफाई के लिए',
        },
        protection: {
          title: 'कंपोनेंट प्रोटेक्शन',
          description: 'नाजुक एसी पार्ट्स पर कोमल लेकिन गंदगी पर सख्त',
        },
        ecoFriendly: {
          title: 'इको-फ्रेंडली',
          description: 'बायोडिग्रेडेबल फोम आपके परिवार और पर्यावरण के लिए सुरक्षित',
        },
        efficiency: {
          title: 'बेहतर दक्षता',
          description: 'कूलिंग प्रदर्शन में सुधार और ऊर्जा खपत कम करता है',
        },
      },
      ctaButton: 'फोम सर्विस अभी बुक करें',
      imageAlt: 'वाटर जेट फोम सर्विस क्लीनिंग प्रदर्शन',
    },
    coverage: {
      heading: 'अहमदाबाद में वाटर जेट सर्विस',
      description: 'निकोल, नरोडा, हंसपुरा, नाना चिलोडा, बापूनगर, वस्त्राल, काठवाड़ा, कुबेरनगर, ओढव, मणिनगर, कृष्णनगर और अहमदाबाद के सभी प्रमुख क्षेत्रों में प्रोफेशनल वाटर जेट और फोम क्लीनिंग सेवाएं उपलब्ध हैं।',
      seoText: 'निकोल, नरोडा, हंसपुरा, बापूनगर, वस्त्राल, काठवाड़ा, कुबेरनगर, ओढव, मणिनगर या कृष्णनगर में प्रोफेशनल वाटर जेट सर्विस की तलाश है? हम एडवांस्ड हाई-प्रेशर क्लीनिंग टेक्नोलॉजी के साथ एक्सपर्ट वाटर जेट क्लीनिंग और वाटर जेट फोम सर्विस प्रदान करते हैं। हमारी विशेष वाटर जेट सर्विस एसी यूनिट की गहरी सफाई सुनिश्चित करती है, कूलिंग दक्षता में सुधार करती है। निकोल, नरोडा, हंसपुरा, नाना चिलोडा, बापूनगर, वस्त्राल, काठवाड़ा, कुबेरनगर, ओढव, मणिनगर, कृष्णनगर और अहमदाबाद के सभी आसपास के क्षेत्रों में उपलब्ध।',
    },
    serviceAreas: {
      heading: 'अहमदाबाद में वाटर जेट सेवाएं',
      eastCentral: 'पूर्व और मध्य अहमदाबाद',
      west: 'पश्चिम अहमदाबाद',
      gandhinagar: 'गांधीनगर और अन्य',
      footerText: 'अपने क्षेत्र में सर्वश्रेष्ठ वाटर जेट सर्विस, वाटर जेट फोम सर्विस और एसी क्लीनिंग के लिए अभी संपर्क करें। हम निकोल, नरोडा, हंसपुरा, बापूनगर, वस्त्राल, काठवाड़ा, कुबेरनगर, ओढव, मणिनगर और कृष्णनगर में 24/7 होम सर्विस प्रदान करते हैं।',
      footerEnglish: 'सभी सूचीबद्ध क्षेत्रों में प्रोफेशनल वाटर जेट सर्विस और फोम क्लीनिंग उपलब्ध है।',
    },
    localSeo: {
      heading: 'अहमदाबाद में टॉप वाटर जेट सर्विस',
      description: 'प्रोफेशनल वाटर जेट सर्विस, फोम क्लीनिंग और एसी वॉशिंग सॉल्यूशन के साथ सभी प्रमुख क्षेत्रों में सेवा',
      service1: 'वाटर जेट सर्विस निकोल, नरोडा',
      service2: 'वाटर जेट फोम सर्विस हंसपुरा, बापूनगर',
      service3: 'वाटर जेट क्लीनिंग वस्त्राल, ओढव, काठवाड़ा',
      service4: 'बेस्ट वाटर जेट मणिनगर, कृष्णनगर, कुबेरनगर',
      footerText: 'हमें निकोल, नरोडा, हंसपुरा, नाना चिलोडा, बापूनगर, वस्त्राल, काठवाड़ा, कुबेरनगर, ओढव, मणिनगर और कृष्णनगर में सर्वश्रेष्ठ वाटर जेट सर्विस प्रदान करने पर गर्व है। हमारी टीम अहमदाबाद के सभी पड़ोस में प्रोफेशनल वाटर जेट फोम सर्विस और एसी क्लीनिंग प्रदान करती है। आज ही अपने दरवाजे पर विश्वसनीय सेवा के लिए हमसे संपर्क करें।',
    },
    ourWork: {
      heading: 'लाइव फोटो - हमारा काम',
      description: 'अहमदाबाद में हमारी वाटर जेट सर्विस, फोम क्लीनिंग और एसी वॉशिंग सेवाओं की असली तस्वीरें',
      footerText: 'ये निकोल, नरोडा, हंसपुरा, बापूनगर, वस्त्राल, काठवाड़ा, कुबेरनगर, ओढव, मणिनगर और कृष्णनगर जैसे क्षेत्रों में हमारी वाटर जेट सर्विस और फोम क्लीनिंग की असली तस्वीरें हैं। हम अहमदाबाद में हर ग्राहक को प्रोफेशनल, उच्च गुणवत्ता वाली वाटर जेट सर्विस प्रदान करने पर गर्व करते हैं।',
      imageAlts: {
        waterJet1: 'निकोल में वाटर जेट सर्विस - हाई-प्रेशर एसी क्लीनिंग',
        waterJet2: 'नरोडा में प्रोफेशनल वाटर जेट फोम सर्विस',
        beforeAfter: 'हंसपुरा में वाटर जेट सर्विस से पहले और बाद - दिखाई देने वाले क्लीनिंग परिणाम',
        serviceHome: 'बापूनगर में ग्राहक के घर पर वाटर जेट सर्विस',
        serviceTeam: 'अहमदाबाद में हमारी एक्सपर्ट वाटर जेट सर्विस टीम',
        serviceVan: 'मैजिकल वाटर जेट सर्विस वैन - ऑन-साइट क्लीनिंग के लिए सुसज्जित',
      },
    },
    sofaCleaning: {
      heading: 'मैजिकल सोफा क्लीनिंग सर्विसेज',
      subheading: 'हमारी सोफा क्लीनिंग सेवाएं',
      services: {
        fabric: '✨ फैब्रिक सोफा क्लीनिंग',
        leather: '✨ लेदर सोफा पॉलिशिंग',
        carpet: '✨ कार्पेट और चेयर क्लीनिंग',
        mattress: '✨ मैट्रेस सैनिटाइजेशन',
        office: '✨ ऑफिस और होटल क्लीनिंग स्पेशलिस्ट',
      },
      priceText: 'सिर्फ ₹90/रनिंग फीट से शुरू!',
      features: {
        steamCleaning: 'स्टीम क्लीनिंग',
        stainRemoval: 'दाग हटाना',
        fastDrying: 'तेज सुखाना',
        fabricProtection: 'फैब्रिक प्रोटेक्शन',
      },
      footerText: 'हम निकोल, नरोडा, हंसपुरा और पूरे अहमदाबाद में सोफा क्लीनिंग के लिए होम सर्विस प्रदान करते हैं।',
      footerDiscount: 'ऑफिस और होटल के लिए विशेष छूट उपलब्ध।',
      callButton: 'बुकिंग के लिए कॉल करें: 80002 62644',
    },
    booking: {
      heading: 'अपनी सेवा बुक करें',
      nameLabel: 'आपका नाम',
      namePlaceholder: 'अपना नाम दर्ज करें',
      serviceLabel: 'सेवा का प्रकार',
      areaLabel: 'आपका क्षेत्र',
      areaPlaceholder: 'अपना क्षेत्र दर्ज करें (जैसे, निकोल, नरोडा)',
      submitButton: 'ऑनलाइन बुकिंग कन्फर्म करें',
      errorMessage: 'कृपया अपना नाम और क्षेत्र दर्ज करें।',
      serviceOptions: {
        waterJet: 'वाटर जेट सर्विस',
        waterJetFoam: 'वाटर जेट फोम सर्विस',
        repairing: 'एसी रिपेयरिंग',
        installation: 'इंस्टॉलेशन / अनइंस्टॉलेशन',
      },
      whatsappTemplate: {
        header: '*नई वाटर जेट सर्विस बुकिंग*',
        customerName: '*ग्राहक का नाम:*',
        service: '*सेवा:*',
        area: '*क्षेत्र:*',
        footer: '*आपकी प्रतिक्रिया की प्रतीक्षा में।*',
      },
    },
    footer: {
      tagline: 'प्रोफेशनल वाटर जेट और फोम क्लीनिंग सेवाएं',
      callUs: 'कॉल करें: 80002 62644',
      whatsapp: 'व्हाट्सएप करें',
      copyright: 'मैजिकल एसी सर्विस। सर्वाधिकार सुरक्षित।',
      builtWith: 'बनाया गया',
      serviceVanAlt: 'मैजिकल वाटर जेट सर्विस वैन',
    },
    floatingWhatsapp: {
      label: 'व्हाट्सएप',
      ariaLabel: 'वाटर जेट सर्विस के लिए व्हाट्सएप पर संपर्क करें',
    },
  },
  gu: {
    nav: {
      brandName: 'મેજિકલ એસી સર્વિસ',
      bookNow: 'બુક કરો',
    },
    hero: {
      title: 'મેજિકલ વોટર જેટ સર્વિસ',
      tagline: 'અમદાવાદમાં પ્રોફેશનલ વોટર જેટ અને ફોમ ક્લીનિંગ',
      supportingText: 'એક્સપર્ટ વોટર જેટ સર્વિસ • એડવાન્સ્ડ ફોમ ક્લીનિંગ • નિકોલ, નરોડા, હંસપુરા, બાપુનગર અને સમગ્ર અમદાવાદમાં સેમ-ડે સર્વિસ',
      primaryCta: 'ફ્રી કોટ મેળવો',
      callButton: 'કૉલ કરો: 80002 62644',
      whatsappMessage: 'નમસ્તે, મારે વોટર જેટ સર્વિસ બુક કરવી છે',
      imageAlt: 'અમદાવાદમાં પ્રોફેશનલ વોટર જેટ સર્વિસ',
    },
    services: {
      heading: 'અમારી સેવાઓ',
      waterJet: {
        title: 'વોટર જેટ સર્વિસ',
        description: 'ડીપ એસી ક્લીનિંગ અને વોશિંગ માટે હાઈ-પ્રેશર વોટર જેટ ક્લીનિંગ.',
      },
      waterJetFoam: {
        title: 'વોટર જેટ ફોમ સર્વિસ',
        description: 'શ્રેષ્ઠ પરિણામો અને સુરક્ષા માટે પ્રીમિયમ ફોમ-આધારિત ક્લીનિંગ.',
      },
      repairing: {
        title: 'એક્સપર્ટ રિપેરિંગ',
        description: 'ચોક્કસ PCB અને કોમ્પ્રેસરનું કામ.',
      },
      installation: {
        title: 'ઇન્સ્ટોલેશન',
        description: 'નવા અને જૂના એસીની સુરક્ષિત ફિટિંગ.',
      },
    },
    waterJetFoam: {
      heading: 'પ્રીમિયમ વોટર જેટ ફોમ સર્વિસ',
      description: 'અમારી એડવાન્સ્ડ વોટર જેટ ફોમ સર્વિસ સાથે એસી ક્લીનિંગનું આગલું સ્તર અનુભવો. અમારું વિશેષ ફોમ ફોર્મ્યુલા તમારી એસી યુનિટમાં ઊંડાણથી પ્રવેશ કરે છે, હઠીલી ગંદકી, બેક્ટેરિયા અને એલર્જી દૂર કરે છે જ્યારે આંતરિક ઘટકોનું રક્ષણ કરે છે.',
      benefits: {
        deepCleaning: {
          title: 'ડીપ ક્લીનિંગ',
          description: 'ફોમ સંપૂર્ણ સફાઈ માટે દરેક ખૂણામાં પ્રવેશ કરે છે',
        },
        protection: {
          title: 'કોમ્પોનન્ટ પ્રોટેક્શન',
          description: 'નાજુક એસી ભાગો પર નરમ પરંતુ ગંદકી પર કઠોર',
        },
        ecoFriendly: {
          title: 'ઇકો-ફ્રેન્ડલી',
          description: 'બાયોડિગ્રેડેબલ ફોમ તમારા પરિવાર અને પર્યાવરણ માટે સુરક્ષિત',
        },
        efficiency: {
          title: 'વધુ સારી કાર્યક્ષમતા',
          description: 'કૂલિંગ પ્રદર્શનમાં સુધારો અને ઊર્જા વપરાશ ઘટાડે છે',
        },
      },
      ctaButton: 'ફોમ સર્વિસ હમણાં બુક કરો',
      imageAlt: 'વોટર જેટ ફોમ સર્વિસ ક્લીનિંગ પ્રદર્શન',
    },
    coverage: {
      heading: 'અમદાવાદમાં વોટર જેટ સર્વિસ',
      description: 'નિકોલ, નરોડા, હંસપુરા, નાના ચિલોડા, બાપુનગર, વસ્ત્રાલ, કાઠવાડા, કુબેરનગર, ઓઢવ, મણિનગર, કૃષ્ણનગર અને અમદાવાદના તમામ મુખ્ય વિસ્તારોમાં પ્રોફેશનલ વોટર જેટ અને ફોમ ક્લીનિંગ સેવાઓ ઉપલબ્ધ છે.',
      seoText: 'નિકોલ, નરોડા, હંસપુરા, બાપુનગર, વસ્ત્રાલ, કાઠવાડા, કુબેરનગર, ઓઢવ, મણિનગર અથવા કૃષ્ણનગરમાં પ્રોફેશનલ વોટર જેટ સર્વિસ શોધી રહ્યા છો? અમે એડવાન્સ્ડ હાઈ-પ્રેશર ક્લીનિંગ ટેકનોલોજી સાથે એક્સપર્ટ વોટર જેટ ક્લીનિંગ અને વોટર જેટ ફોમ સર્વિસ પ્રદાન કરીએ છીએ. અમારી વિશેષ વોટર જેટ સર્વિસ એસી યુનિટની ઊંડી સફાઈ સુનિશ્ચિત કરે છે, કૂલિંગ કાર્યક્ષમતામાં સુધારો કરે છે. નિકોલ, નરોડા, હંસપુરા, નાના ચિલોડા, બાપુનગર, વસ્ત્રાલ, કાઠવાડા, કુબેરનગર, ઓઢવ, મણિનગર, કૃષ્ણનગર અને અમદાવાદના તમામ આસપાસના વિસ્તારોમાં ઉપલબ્ધ.',
    },
    serviceAreas: {
      heading: 'અમદાવાદમાં વોટર જેટ સેવાઓ',
      eastCentral: 'પૂર્વ અને મધ્ય અમદાવાદ',
      west: 'પશ્ચિમ અમદાવાદ',
      gandhinagar: 'ગાંધીનગર અને અન્ય',
      footerText: 'તમારા વિસ્તારમાં શ્રેષ્ઠ વોટર જેટ સર્વિસ, વોટર જેટ ફોમ સર્વિસ અને એસી ક્લીનિંગ માટે હમણાં સંપર્ક કરો. અમે નિકોલ, નરોડા, હંસપુરા, બાપુનગર, વસ્ત્રાલ, કાઠવાડા, કુબેરનગર, ઓઢવ, મણિનગર અને કૃષ્ણનગરમાં 24/7 હોમ સર્વિસ પ્રદાન કરીએ છીએ.',
      footerEnglish: 'તમામ સૂચિબદ્ધ વિસ્તારોમાં પ્રોફેશનલ વોટર જેટ સર્વિસ અને ફોમ ક્લીનિંગ ઉપલબ્ધ છે.',
    },
    localSeo: {
      heading: 'અમદાવાદમાં ટોપ વોટર જેટ સર્વિસ',
      description: 'પ્રોફેશનલ વોટર જેટ સર્વિસ, ફોમ ક્લીનિંગ અને એસી વોશિંગ સોલ્યુશન સાથે તમામ મુખ્ય વિસ્તારોમાં સેવા',
      service1: 'વોટર જેટ સર્વિસ નિકોલ, નરોડા',
      service2: 'વોટર જેટ ફોમ સર્વિસ હંસપુરા, બાપુનગર',
      service3: 'વોટર જેટ ક્લીનિંગ વસ્ત્રાલ, ઓઢવ, કાઠવાડા',
      service4: 'બેસ્ટ વોટર જેટ મણિનગર, કૃષ્ણનગર, કુબેરનગર',
      footerText: 'અમને નિકોલ, નરોડા, હંસપુરા, નાના ચિલોડા, બાપુનગર, વસ્ત્રાલ, કાઠવાડા, કુબેરનગર, ઓઢવ, મણિનગર અને કૃષ્ણનગરમાં શ્રેષ્ઠ વોટર જેટ સર્વિસ પ્રદાન કરવા પર ગર્વ છે. અમારી ટીમ અમદાવાદના તમામ વિસ્તારોમાં પ્રોફેશનલ વોટર જેટ ફોમ સર્વિસ અને એસી ક્લીનિંગ પ્રદાન કરે છે. તમારા દરવાજે વિશ્વસનીય સેવા માટે આજે જ અમારો સંપર્ક કરો.',
    },
    ourWork: {
      heading: 'લાઇવ ફોટા - અમારું કામ',
      description: 'અમદાવાદમાં અમારી વોટર જેટ સર્વિસ, ફોમ ક્લીનિંગ અને એસી વોશિંગ સેવાઓના વાસ્તવિક ફોટા',
      footerText: 'આ નિકોલ, નરોડા, હંસપુરા, બાપુનગર, વસ્ત્રાલ, કાઠવાડા, કુબેરનગર, ઓઢવ, મણિનગર અને કૃષ્ણનગર જેવા વિસ્તારોમાં અમારી વોટર જેટ સર્વિસ અને ફોમ ક્લીનિંગના વાસ્તવિક ફોટા છે. અમને અમદાવાદમાં દરેક ગ્રાહકને પ્રોફેશનલ, ઉચ્ચ ગુણવત્તાની વોટર જેટ સર્વિસ પ્રદાન કરવા પર ગર્વ છે.',
      imageAlts: {
        waterJet1: 'નિકોલમાં વોટર જેટ સર્વિસ - હાઈ-પ્રેશર એસી ક્લીનિંગ',
        waterJet2: 'નરોડામાં પ્રોફેશનલ વોટર જેટ ફોમ સર્વિસ',
        beforeAfter: 'હંસપુરામાં વોટર જેટ સર્વિસ પહેલાં અને પછી - દેખાતા ક્લીનિંગ પરિણામો',
        serviceHome: 'બાપુનગરમાં ગ્રાહકના ઘરે વોટર જેટ સર્વિસ',
        serviceTeam: 'અમદાવાદમાં અમારી એક્સપર્ટ વોટર જેટ સર્વિસ ટીમ',
        serviceVan: 'મેજિકલ વોટર જેટ સર્વિસ વાન - ઓન-સાઇટ ક્લીનિંગ માટે સજ્જ',
      },
    },
    sofaCleaning: {
      heading: 'મેજિકલ સોફા ક્લીનિંગ સર્વિસિસ',
      subheading: 'અમારી સોફા ક્લીનિંગ સેવાઓ',
      services: {
        fabric: '✨ ફેબ્રિક સોફા ક્લીનિંગ',
        leather: '✨ લેધર સોફા પોલિશિંગ',
        carpet: '✨ કાર્પેટ અને ચેર ક્લીનિંગ',
        mattress: '✨ મેટ્રેસ સેનિટાઇઝેશન',
        office: '✨ ઓફિસ અને હોટેલ ક્લીનિંગ સ્પેશિયાલિસ્ટ',
      },
      priceText: 'માત્ર ₹90/રનિંગ ફીટથી શરૂ!',
      features: {
        steamCleaning: 'સ્ટીમ ક્લીનિંગ',
        stainRemoval: 'ડાઘ દૂર કરવા',
        fastDrying: 'ઝડપી સૂકવણી',
        fabricProtection: 'ફેબ્રિક પ્રોટેક્શન',
      },
      footerText: 'અમે નિકોલ, નરોડા, હંસપુરા અને સમગ્ર અમદાવાદમાં સોફા ક્લીનિંગ માટે હોમ સર્વિસ પ્રદાન કરીએ છીએ.',
      footerDiscount: 'ઓફિસ અને હોટેલ માટે વિશેષ ડિસ્કાઉન્ટ ઉપલબ્ધ.',
      callButton: 'બુકિંગ માટે કૉલ કરો: 80002 62644',
    },
    booking: {
      heading: 'તમારી સેવા બુક કરો',
      nameLabel: 'તમારું નામ',
      namePlaceholder: 'તમારું નામ દાખલ કરો',
      serviceLabel: 'સેવાનો પ્રકાર',
      areaLabel: 'તમારો વિસ્તાર',
      areaPlaceholder: 'તમારો વિસ્તાર દાખલ કરો (દા.ત., નિકોલ, નરોડા)',
      submitButton: 'ઓનલાઇન બુકિંગ કન્ફર્મ કરો',
      errorMessage: 'કૃપા કરીને તમારું નામ અને વિસ્તાર દાખલ કરો.',
      serviceOptions: {
        waterJet: 'વોટર જેટ સર્વિસ',
        waterJetFoam: 'વોટર જેટ ફોમ સર્વિસ',
        repairing: 'એસી રિપેરિંગ',
        installation: 'ઇન્સ્ટોલેશન / અનઇન્સ્ટોલેશન',
      },
      whatsappTemplate: {
        header: '*નવી વોટર જેટ સર્વિસ બુકિંગ*',
        customerName: '*ગ્રાહકનું નામ:*',
        service: '*સેવા:*',
        area: '*વિસ્તાર:*',
        footer: '*તમારા પ્રતિસાદની રાહ જોઈ રહ્યા છીએ.*',
      },
    },
    footer: {
      tagline: 'પ્રોફેશનલ વોટર જેટ અને ફોમ ક્લીનિંગ સેવાઓ',
      callUs: 'કૉલ કરો: 80002 62644',
      whatsapp: 'વોટ્સએપ કરો',
      copyright: 'મેજિકલ એસી સર્વિસ. બધા અધિકારો અનામત.',
      builtWith: 'બનાવ્યું',
      serviceVanAlt: 'મેજિકલ વોટર જેટ સર્વિસ વાન',
    },
    floatingWhatsapp: {
      label: 'વોટ્સએપ',
      ariaLabel: 'વોટર જેટ સર્વિસ માટે વોટ્સએપ પર સંપર્ક કરો',
    },
  },
};
