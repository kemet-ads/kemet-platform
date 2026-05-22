export type Language = 'en' | 'ar';

export const translations = {
  en: {
    // Navbar
    'nav.how-it-works': 'How It Works',
    'nav.results': 'Results',
    'nav.services': 'Services',
    'nav.case-studies': 'Case Studies',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.book-call': 'Book a Call',
    'nav.book-strategy-call': 'Book a Strategy Call',
    'nav.our-services': 'Our Services',

    // Hero
    'hero.badge': 'UAE Lead Generation Agency',
    'hero.heading1': 'We Generate',
    'hero.heading2': 'Qualified Leads',
    'hero.heading3': 'For UAE Businesses',
    'hero.subtext': 'Meta, Google & TikTok campaigns designed to generate real leads — not just clicks. We help businesses across the UAE reduce wasted ad spend, improve lead quality, and build conversion funnels that drive actual growth.',
    'hero.cta-primary': 'Book a Free Strategy Call',
    'hero.cta-secondary': 'Get Free Ad Audit',
    'hero.stat1-value': '4,200+',
    'hero.stat1-label': 'Qualified Leads Generated',
    'hero.stat2-value': '50+',
    'hero.stat2-label': 'Campaigns Across UAE',
    'hero.stat3-value': '3.2x',
    'hero.stat3-label': 'Average Lead Growth',
    'hero.results-label': 'Recent Campaign Results',
    'hero.results-updated': 'Real client results. Updated weekly.',
    'hero.industry-beauty': 'Beauty',
    'hero.industry-clinics': 'Clinics',
    'hero.industry-realestate': 'Real Estate',
    'hero.industry-gyms': 'Gyms',
    'hero.industry-restaurants': 'Restaurants',

    // Problem
    'problem.badge': 'The Problem',
    'problem.title': "Your Ad Budget Is Leaking. Here's Where.",
    'problem.subtitle': "Most UAE businesses are losing money on ads — not because the ads don't work, but because the system around them is broken.",
    'problem.card1-title': 'Ad Spend Wasted on Wrong Audiences',
    'problem.card1-desc': "Your campaigns are running, but they're reaching people who will never convert. Poor targeting burns budget on clicks that don't lead to pipeline.",
    'problem.card1-stat': '73%',
    'problem.card1-statlabel': 'of ad spend is wasted on wrong audiences',
    'problem.card2-title': "Slow Response Kills Conversions",
    'problem.card2-desc': 'When a lead fills out your form, every minute counts. Most businesses take hours or days to respond, losing up to 80% of potential clients.',
    'problem.card2-stat': '80%',
    'problem.card2-statlabel': 'of leads go cold within 5 minutes',
    'problem.card3-title': "Low-Quality Leads That Don't Convert",
    'problem.card3-desc': "You're getting inquiries, but most aren't serious buyers. Without proper lead qualification, your team spends hours chasing leads that go nowhere.",
    'problem.card3-stat': '47%',
    'problem.card3-statlabel': 'higher cost for worse lead quality',
    'problem.card4-title': 'No Optimization After Launch',
    'problem.card4-desc': "Most campaigns are set up once and left to run. Without daily monitoring and testing, performance plateaus or declines over time.",
    'problem.card4-stat': '90%',
    'problem.card4-statlabel': 'of campaigns never receive ongoing optimization',

    // Services
    'services.badge': 'Our Services',
    'services.title': 'Full-Funnel Lead Generation',
    'services.subtitle': 'From ad creative to WhatsApp conversion — we manage the entire lead generation process for UAE businesses.',
    'services.cta': 'Book a Free Strategy Call',

    // How It Works
    'howitworks.badge': 'How It Works',
    'howitworks.title': 'From Strategy to Scalable Results',
    'howitworks.subtitle': 'A proven three-phase process designed to generate qualified leads and reduce your cost per acquisition.',
    'howitworks.cta': 'Start Your Growth Plan',
    'howitworks.step1-title': 'Strategy & Setup',
    'howitworks.step1-desc': "We audit your current campaigns, identify what's working and what isn't, then build a custom strategy around your goals, budget, and target audience.",
    'howitworks.step1-detail': 'Including: audience research, creative strategy, tracking setup, landing page optimization.',
    'howitworks.step2-title': 'Campaign Launch & Testing',
    'howitworks.step2-desc': 'We launch campaigns across the right platforms and aggressively test audiences, creatives, and offers to find the highest-converting combinations.',
    'howitworks.step2-detail': 'Including: A/B testing, audience segmentation, creative iteration, bid strategy optimization.',
    'howitworks.step3-title': 'Optimization & Scaling',
    'howitworks.step3-desc': 'Bad leads get filtered out. Winning campaigns receive more budget. We optimize daily to improve lead quality while maintaining cost efficiency.',
    'howitworks.step3-detail': 'Including: daily monitoring, lead quality scoring, budget reallocation, WhatsApp flow refinement.',

    // Case Studies
    'casestudies.badge': 'Case Studies',
    'casestudies.title': 'Real Campaigns. Real Performance.',
    'casestudies.subtitle': 'See how optimized campaigns helped businesses generate more leads while lowering acquisition costs.',
    'casestudies.cta': 'See More Case Studies',

    // Industries
    'industries.badge': 'Industries',
    'industries.title': 'We Generate Leads For',
    'industries.subtitle': 'Performance-driven campaigns tailored to your industry — backed by real data and proven results.',
    'industries.cta': 'Book a Free Strategy Call',

    // Testimonials
    'testimonials.badge': 'Testimonials',
    'testimonials.title': 'Trusted by Business Leaders',
    'testimonials.subtitle': 'Real results from real clients across the UAE.',

    // FAQ
    'faq.badge': 'FAQ',
    'faq.title': 'Common Questions',
    'faq.subtitle': 'Everything you need to know about working with KEMET.',

    // FAQ Questions & Answers
    'faq.q1': 'How much should I spend on ads to see results?',
    'faq.a1': "Most of our clients start with a minimum of 5,000–10,000 AED per month per platform. The exact amount depends on your industry, target audience size, and goals. We'll recommend a budget during your free strategy call based on what we've seen work for similar businesses in the UAE.",
    'faq.q2': 'How long does it take to start generating leads?',
    'faq.a2': "Most campaigns start generating leads within the first week after launch. However, we typically need 2–3 weeks of optimization to stabilize cost per lead and improve lead quality. The first 30 days are focused on testing audiences, creatives, and offers to determine what works best.",
    'faq.q3': 'What platforms do you advertise on?',
    'faq.a3': "We manage campaigns across Meta (Facebook & Instagram), Google (Search, Display, YouTube), TikTok, Snapchat, and LinkedIn. Most UAE businesses see the strongest results from Meta and TikTok for B2C, and Google + LinkedIn for B2B. We'll recommend the right mix for your business.",
    'faq.q4': 'How is lead quality measured and improved?',
    'faq.a4': "We track lead quality through multiple signals: form completion time, phone number validation, WhatsApp response rate, and booking conversion. Our optimization process focuses on filtering out low-intent leads early and adjusting targeting to attract serious buyers. Most clients see measurable improvement in lead quality within 30 days.",
    'faq.q5': 'Which industries do you work with?',
    'faq.a5': "We work with a wide range of businesses across the UAE, including beauty & salons, healthcare clinics, real estate agencies, fitness centers, restaurants, and professional services. Our approach is tailored to each industry's specific customer journey and conversion patterns.",
    'faq.q6': 'What makes KEMET different from other agencies?',
    'faq.a6': "We focus on lead quality, not just lead volume. While many agencies optimize for clicks or cheap leads, we optimize for conversion-ready pipeline. Our campaigns are built around WhatsApp-first lead delivery, AI-powered follow-up automation, and daily optimization — not weekly check-ins. We also provide transparent reporting so you always know exactly what's working.",
    'faq.q7': 'Do you offer guaranteed results?',
    'faq.a7': "We don't make unrealistic guarantees, but we do commit to continuous optimization and transparent reporting. Our track record shows consistent improvement in both lead volume and lead quality for clients who follow our recommended approach. The free strategy call will give you a clear picture of what we expect to achieve for your specific business.",
    'faq.q8': 'How do I know if my campaigns are working?',
    'faq.a8': "We provide weekly performance reports and have a shared dashboard where you can track key metrics in real time: cost per lead, lead volume, lead quality score, and conversion rate. You'll always know exactly where your ad spend is going and what results it's generating.",

    // Final CTA
    'finalcta.title': 'Ready to Stop Wasting',
    'finalcta.title-accent': 'Ad Budget',
    'finalcta.subtitle': "Book a free strategy call. We'll review your current campaigns, identify what's wasting budget, and build a plan to generate more qualified leads at a lower cost.",
    'finalcta.cta': 'Book a Free Strategy Call',
    'finalcta.whatsapp': 'Talk on WhatsApp',
    'finalcta.trust1': 'No commitment required',
    'finalcta.trust2': 'Free strategy review',
    'finalcta.trust3': 'Results-driven approach',

    // Footer
    'footer.description': 'Performance-focused ad campaigns that generate better leads and lower acquisition costs for businesses across the GCC.',
    'footer.copyright': 'KEMET Ads Services. All rights reserved.',
    'footer.license': 'We are a licensed company in Abu Dhabi, UAE',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.industries': 'Industries',
  },

  ar: {
    // Navbar
    'nav.how-it-works': 'كيف نعمل',
    'nav.results': 'النتائج',
    'nav.services': 'الخدمات',
    'nav.case-studies': 'دراسات الحالة',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',
    'nav.book-call': 'احجز مكالمة',
    'nav.book-strategy-call': 'احجز استشارة استراتيجية',
    'nav.our-services': 'خدماتنا',

    // Hero
    'hero.badge': 'وكالة توليد عملاء في الإمارات',
    'hero.heading1': 'نولّد',
    'hero.heading2': 'عملاء مؤهلين',
    'hero.heading3': 'للشركات في الإمارات',
    'hero.subtext': 'حملات ميتا وغوغل وتيك توك مصممة لتوليد عملاء حقيقيين — وليس مجرد نقرات. نساعد الشركات في جميع أنحاء الإمارات على تقليل الإنفاق المهدر على الإعلانات وتحسين جودة العملاء المحتملين.',
    'hero.cta-primary': 'احجز استشارة استراتيجية مجانية',
    'hero.cta-secondary': 'احصل على تدقيق إعلاني مجاني',
    'hero.stat1-value': '٤٢٠٠+',
    'hero.stat1-label': 'عميل محتمل مؤهل',
    'hero.stat2-value': '٥٠+',
    'hero.stat2-label': 'حملة في الإمارات',
    'hero.stat3-value': '٣.٢x',
    'hero.stat3-label': 'متوسط نمو العملاء',
    'hero.results-label': 'نتائج الحملات الأخيرة',
    'hero.results-updated': 'نتائج حقيقية لعملاء حقيقيين. تُحدّث أسبوعياً.',
    'hero.industry-beauty': 'التجميل',
    'hero.industry-clinics': 'العيادات',
    'hero.industry-realestate': 'العقارات',
    'hero.industry-gyms': 'النوادي الرياضية',
    'hero.industry-restaurants': 'المطاعم',

    // Problem
    'problem.badge': 'المشكلة',
    'problem.title': 'ميزانية إعلاناتك تهدر. إليك أين.',
    'problem.subtitle': 'معظم الشركات في الإمارات تخسر أموالاً على الإعلانات — ليس لأن الإعلانات لا تعمل، بل لأن النظام المحيط بها معطل.',
    'problem.card1-title': 'إنفاق إعلاني على الجمهور الخطأ',
    'problem.card1-desc': 'حملاتك تعمل، لكنها تصل إلى أشخاص لن يتحولوا أبداً إلى عملاء. الاستهداف الضعيف يحرق الميزانية على نقرات لا تؤدي إلى نتائج.',
    'problem.card1-stat': '٧٣٪',
    'problem.card1-statlabel': 'من الإنفاق الإعلاني يهدر على الجمهور الخطأ',
    'problem.card2-title': 'الاستجابة البطيئة تقتل التحويلات',
    'problem.card2-desc': 'عندما يملأ عميل محتمل نموذجك، كل دقيقة مهمة. معظم الشركات تستغرق ساعات أو أياماً للرد، مما يفقدها ٨٠٪ من العملاء المحتملين.',
    'problem.card2-stat': '٨٠٪',
    'problem.card2-statlabel': 'من العملاء المحتملين يبردون خلال ٥ دقائق',
    'problem.card3-title': 'عملاء محتملون منخفضو الجودة لا يتحولون',
    'problem.card3-desc': 'تتلقى استفسارات، لكن معظمها ليس من مشترين جادين. بدون تأهيل مناسب، يضيع فريقك ساعات في ملاحقة عملاء لا يذهبون إلى أي مكان.',
    'problem.card3-stat': '٤٧٪',
    'problem.card3-statlabel': 'تكلفة أعلى لجودة عملاء أسوأ',
    'problem.card4-title': 'لا تحسين بعد الإطلاق',
    'problem.card4-desc': 'معظم الحملات تُقام مرة واحدة وتُترك دون متابعة. بدون مراقبة يومية واختبار، يتوقف الأداء أو ينخفض مع الوقت.',
    'problem.card4-stat': '٩٠٪',
    'problem.card4-statlabel': 'من الحملات لا تتلقى تحسيناً مستمراً',

    // Services
    'services.badge': 'خدماتنا',
    'services.title': 'توليد عملاء متكامل',
    'services.subtitle': 'من الإعلان إلى تحويل واتساب — ندير عملية توليد العملاء بالكامل للشركات في الإمارات.',
    'services.cta': 'احجز استشارة استراتيجية مجانية',

    // How It Works
    'howitworks.badge': 'كيف نعمل',
    'howitworks.title': 'من الاستراتيجية إلى نتائج قابلة للتوسع',
    'howitworks.subtitle': 'عملية مثبتة من ثلاث مراحل مصممة لتوليد عملاء مؤهلين وتقليل تكلفة الاكتساب.',
    'howitworks.cta': 'ابدأ خطة النمو الخاصة بك',
    'howitworks.step1-title': 'الاستراتيجية والإعداد',
    'howitworks.step1-desc': 'ندقق حملاتك الحالية، ونحدد ما يعمل وما لا يعمل، ثم نبني استراتيجية مخصصة حول أهدافك وميزانيتك وجمهورك المستهدف.',
    'howitworks.step1-detail': 'يشمل: أبحاث الجمهور، استراتيجية المحتوى الإبداعي، إعداد التتبع، تحسين الصفحة المقصودة.',
    'howitworks.step2-title': 'إطلاق الحملة والاختبار',
    'howitworks.step2-desc': 'نطلق الحملات على المنصات المناسبة ونختبر الجماهير والإعلانات والعروض بقوة لإيجاد أفضل التركيبات المحققة للتحويل.',
    'howitworks.step2-detail': 'يشمل: اختبار A/B، تقسيم الجمهور، تطوير الإعلانات، تحسين إستراتيجية العروض.',
    'howitworks.step3-title': 'التحسين والتوسع',
    'howitworks.step3-desc': 'يتم تصفية العملاء ذوي الجودة المنخفضة. الحملات الناجحة تحصل على ميزانية إضافية. نحسّن يومياً لرفع جودة العملاء مع الحفاظ على كفاءة التكلفة.',
    'howitworks.step3-detail': 'يشمل: مراقبة يومية، تسجيل جودة العملاء، إعادة توزيع الميزانية، تحسين تدفق واتساب.',

    // Case Studies
    'casestudies.badge': 'دراسات الحالة',
    'casestudies.title': 'حملات حقيقية. نتائج حقيقية.',
    'casestudies.subtitle': 'شاهد كيف ساعدت الحملات المحسّنة الشركات في توليد المزيد من العملاء مع خفض تكاليف الاكتساب.',
    'casestudies.cta': 'شاهد المزيد من دراسات الحالة',

    // Industries
    'industries.badge': 'القطاعات',
    'industries.title': 'نولّد عملاء لـ',
    'industries.subtitle': 'حملات موجهة حسب قطاعك — مدعومة ببيانات حقيقية ونتائج مثبتة.',
    'industries.cta': 'احجز استشارة استراتيجية مجانية',

    // Testimonials
    'testimonials.badge': 'شهادات العملاء',
    'testimonials.title': 'موثوق من قبل قادة الأعمال',
    'testimonials.subtitle': 'نتائج حقيقية من عملاء حقيقيين في جميع أنحاء الإمارات.',

    // FAQ
    'faq.badge': 'الأسئلة الشائعة',
    'faq.title': 'أسئلة شائعة',
    'faq.subtitle': 'كل ما تحتاج لمعرفته عن العمل مع KEMET.',

    // FAQ Questions & Answers - Arabic
    'faq.q1': 'كم يجب أن أنفق على الإعلانات لرؤية النتائج؟',
    'faq.a1': 'معظم عملائنا يبدأون بمبلغ لا يقل عن ٥,٠٠٠–١٠,٠٠٠ درهم إماراتي شهرياً لكل منصة. المبلغ الدقيق يعتمد على مجال عملك وحجم الجمهور المستهدف وأهدافك. سنوصي بميزانية مناسبة خلال الاستشارة الاستراتيجية المجانية.',
    'faq.q2': 'كم من الوقت يستغرق بدء توليد العملاء المحتملين؟',
    'faq.a2': 'معظم الحملات تبدأ في توليد العملاء المحتملين خلال الأسبوع الأول بعد الإطلاق. لكننا نحتاج عادةً إلى ٢–٣ أسابيع من التحسين لتثبيت تكلفة العميل المحتمل وتحسين جودته.',
    'faq.q3': 'ما هي المنصات التي تعلن عليها؟',
    'faq.a3': 'ندير حملات على ميتا (فيسبوك وإنستغرام)، وغوغل (بحث، عرض، يوتيوب)، وتيك توك، وسناب شات، ولينكد إن. معظم الشركات في الإمارات تحصل على أفضل النتائج من ميتا وتيك توك للأعمال التجارية للمستهلك.',
    'faq.q4': 'كيف يتم قياس جودة العملاء المحتملين وتحسينها؟',
    'faq.a4': 'نتتبع جودة العملاء المحتملين من خلال إشارات متعددة: وقت إكمال النموذج، التحقق من رقم الهاتف، معدل الاستجابة على واتساب، وتحويل الحجوزات.',
    'faq.q5': 'ما هي القطاعات التي تعملون معها؟',
    'faq.a5': 'نعمل مع مجموعة واسعة من الشركات في جميع أنحاء الإمارات، بما في ذلك التجميل والصالونات، والعيادات الصحية، ووكالات العقارات، ومراكز اللياقة البدنية، والمطاعم، والخدمات المهنية.',
    'faq.q6': 'ما الذي يميز KEMET عن غيرها من الوكالات؟',
    'faq.a6': 'نركز على جودة العملاء المحتملين، وليس فقط حجمهم. حملاتنا مبنية على تسليم العملاء عبر واتساب أولاً، وأتمتة المتابعة، والتحسين اليومي — وليس المراجعات الأسبوعية.',
    'faq.q7': 'هل تقدمون نتائج مضمونة؟',
    'faq.a7': 'نحن لا نقدم ضمانات غير واقعية، لكننا نلتزم بالتحسين المستمر والتقارير الشفافة. سجلنا يظهر تحسناً مستمراً في كل من حجم وجودة العملاء المحتملين للعملاء الذين يتبعون نهجنا.',
    'faq.q8': 'كيف أعرف أن حملاتي تعمل؟',
    'faq.a8': 'نقدم تقارير أداء أسبوعية ولدينا لوحة تحكم مشتركة حيث يمكنك تتبع المقاييس الرئيسية في الوقت الفعلي: تكلفة العميل المحتمل، حجم العملاء المحتملين، جودة العملاء المحتملين، ومعدل التحويل.',

    // Final CTA
    'finalcta.title': 'هل أنت مستعد للتوقف عن إهدار',
    'finalcta.title-accent': 'ميزانية الإعلانات',
    'finalcta.subtitle': 'احجز استشارة استراتيجية مجانية. سنراجع حملاتك الحالية، ونحدد ما يهدر ميزانيتك، ونبني خطة لتوليد عملاء مؤهلين بتكلفة أقل.',
    'finalcta.cta': 'احجز استشارة استراتيجية مجانية',
    'finalcta.whatsapp': 'تحدث عبر واتساب',
    'finalcta.trust1': 'لا يوجد التزام',
    'finalcta.trust2': 'مراجعة استراتيجية مجانية',
    'finalcta.trust3': 'نهج يعتمد على النتائج',

    // Footer
    'footer.description': 'حملات إعلانية مدفوعة تركز على الأداء لتوليد عملاء أفضل وخفض تكاليف الاكتساب للشركات في جميع أنحاء الخليج.',
    'footer.copyright': 'خدمات KEMET للإعلانات. جميع الحقوق محفوظة.',
    'footer.license': 'نحن شركة مرخصة في أبوظبي، الإمارات العربية المتحدة',
    'footer.services': 'الخدمات',
    'footer.company': 'الشركة',
    'footer.industries': 'القطاعات',
  },
};

export function t(key: string, lang: Language): string {
  return translations[lang][key as keyof typeof translations['en']] || key;
}