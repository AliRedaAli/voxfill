export const translations = {
  en: {
    nav: {
      demo: 'Demo',
      how: 'How it works',
      features: 'Features',
      integrate: 'Integrate',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Get started',
      langToggle: 'عربي',
    },
    hero: {
      line1: 'Your users speak.',
      line2: 'The form fills itself.',
      lead: 'An embeddable widget that fills long web forms from speech. One script tag: voxFill scans your fields, transcribes, maps values onto your actual inputs, and flags anything missing.',
      tryDemo: 'Try the demo',
      guide: 'Integration guide →',
    },
    what: {
      kicker: 'What it does',
      steps: [
        {
          num: '01',
          title: 'Scan the form',
          body: (code) => [
            "The SDK walks your page's fields and resolves each one's label — ",
            code('label[for]'),
            ', wrapping label, aria attributes, placeholder or nearby text — and builds a schema of ids, types and constraints. Only that schema ever leaves the page.',
          ],
        },
        {
          num: '02',
          title: 'Listen and extract',
          body: () => [
            'The user speaks their answers in one go. The backend transcribes first, then maps the transcript onto your exact field ids with a structured extraction constrained to the schema — the model cannot invent fields that don’t exist.',
          ],
        },
        {
          num: '03',
          title: 'Fill and flag',
          body: () => [
            "Every value is re-validated against the field's constraints before it comes back — the model's own sense of validity is never trusted. What passes lands in the DOM via native setters, so React- and Vue-controlled inputs update correctly; anything missing or invalid is highlighted for the user.",
          ],
        },
      ],
    },
    demo: {
      kicker: 'Live demo',
      title: 'Hear it fill a form',
      lead: 'Play the sample recording and watch voxFill map one spoken sentence onto a real form — including the field the speaker never mentioned.',
      formKicker: 'Sample form — request access',
      fullName: 'Full name',
      workEmail: 'Work email',
      company: 'Company',
      teamSize: 'Team size',
      phone: 'Phone',
      select: 'Select…',
      submit: 'Request access',
      phoneNote: "Phone wasn't mentioned in the recording — highlighted for the user to type or re-record.",
      play: 'Play sample recording',
      playing: 'Playing…',
      playAgain: 'Play it again',
      reset: 'Reset',
      transcriptLabel: 'Transcript',
      listening: 'Listening…',
      processing: 'Transcribing and extracting…',
      filling: (i, n) => `Filling ${i} of ${n}…`,
      done: "Filled 4 of 5 fields — phone wasn't mentioned, so it's flagged, not guessed.",
      disclaimer: 'Simulated — the real widget records your microphone and drives the live backend.',
      transcript:
        "Hi, I'm Ada Osei — work email is ada at fielday dot io. I'm at Fielday, we're about forty people. Skip the phone number, just email me.",
      fills: [
        { key: 'fullName', value: 'Ada Osei' },
        { key: 'workEmail', value: 'ada@fielday.io' },
        { key: 'company', value: 'Fielday' },
        { key: 'teamSize', value: '11–50' },
      ],
    },
    features: {
      kicker: 'Features',
      title: 'Built for production forms',
      cards: [
        {
          kicker: 'Frameworks',
          title: 'Framework-safe filling',
          body: 'Values land via native setters plus dispatched events, so React- and Vue-controlled inputs update their own state — not just the pixels.',
        },
        {
          kicker: 'Trust',
          title: 'Validation you can trust',
          body: "The server re-checks every extracted value against required, pattern, options and length constraints. The LLM's opinion of validity is never trusted.",
        },
        {
          kicker: 'Privacy',
          title: 'Schema out, values in',
          body: 'Only the audio clip and a schema of field ids, labels and constraints leave the browser. No DOM elements, no page content, nothing else.',
        },
        {
          kicker: 'Deployment',
          title: 'Self-hostable backend',
          body: 'The whole backend ships as one Docker image, entirely env-var configured. Run it on your own infrastructure with your own model credentials.',
        },
        {
          kicker: 'Architecture',
          title: 'Provider-agnostic pipeline',
          body: 'Speech-to-text and extraction sit behind interfaces. Swapping providers is an adapter and a config change — it has already survived one swap.',
        },
        {
          kicker: 'Security',
          title: 'Origin-scoped API keys',
          body: 'Keys are stored as salted hashes with a per-key origin allowlist and rate limit — a leaked key is useless from anywhere else.',
        },
      ],
    },
    integrate: {
      kicker: 'Integrate',
      title: 'Live in an afternoon',
      steps: [
        (code) => ["Get an API key issued for your site's origin — hosted, or from your own instance."],
        (code) => [
          'Add the script tag and call ',
          code('init()'),
          ' with your backend URL and key. Or install ',
          code('@voxfill/sdk'),
          ' from npm.',
        ],
        (code) => [
          'Wire any button to two calls — ',
          code('startRecording()'),
          ' and ',
          code('stopRecordingAndFill()'),
          '. Your markup, your styles.',
        ],
      ],
    },
    pricing: {
      kicker: 'Pricing',
      title: 'Start free, scale when it works',
      popular: 'Most popular',
      tiers: [
        {
          kicker: 'Free',
          price: '$0',
          per: '',
          blurb: 'For trying it on a real form.',
          features: ['500 voice fills / month', '1 origin', 'Hosted backend', 'Community support'],
          cta: 'Start free',
        },
        {
          kicker: 'Pro',
          price: 'Contact sales',
          per: '',
          blurb: 'For forms in production.',
          features: [
            '10,000 voice fills / month',
            '5 origins, per-key rate limits',
            'Transcript logs & analytics',
            'Priority support',
          ],
          cta: 'Talk to us',
        },
        {
          kicker: 'Enterprise',
          price: 'Self-hosted',
          per: '',
          blurb: 'For teams that keep audio in-house.',
          features: [
            'Unlimited fills on your infra',
            'One Docker image, your credentials',
            'Bring your own STT / LLM provider',
            'SLA & onboarding',
          ],
          cta: 'Talk to us',
        },
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Questions, answered',
      items: [
        {
          q: 'Do my users need to install anything?',
          a: 'No. voxFill is a script tag on your site, not a browser extension. Users just tap the mic button you give them and grant microphone permission once.',
        },
        {
          q: "What leaves the user's browser?",
          a: 'Two things: the audio clip and a schema describing your fields (ids, labels, types, constraints). No DOM elements, no page content, no existing field values.',
        },
        {
          q: 'What happens when the model mishears?',
          a: "Every value is re-validated server-side against your field's required, pattern and option constraints before it's returned. Anything that fails — or was never mentioned — is highlighted in the form for the user to fix, never silently filled.",
        },
        {
          q: 'Does it work with React and Vue forms?',
          a: 'Yes. Values are written with the native setter and the right events dispatched, so controlled components update their own state. Fields are re-scanned right before each recording, so late-mounted fields are picked up too.',
        },
        {
          q: 'Can we self-host the backend?',
          a: 'Yes — self-hosting is a design goal, not an afterthought. The backend is a single env-configured Docker image; the SDK takes any backend URL. STT and extraction providers are swappable adapters, so you can bring your own.',
        },
        {
          q: 'How are API keys protected?',
          a: "Keys are issued per site, stored as salted hashes, and bound to an origin allowlist with a per-key rate limit. A key lifted from your page source doesn't work from any other origin.",
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Put a voice on your forms',
      lead: 'Questions, keys, or a self-hosting conversation — we answer fast.',
      email: 'Email',
      source: 'Source & issues',
      book: 'Book a demo',
      newsletterPlaceholder: 'you@example.com',
      newsletterCta: 'Get updates',
      newsletterAria: 'Email address',
    },
    footer: '© 2026 voxFill — fill forms by speaking. Placeholder links until launch.',
    legal: {
      back: '← Back to voxFill',
      termsLink: 'Terms',
      privacyLink: 'Privacy',
      updated: 'Last updated: July 14, 2026',
      terms: {
        title: 'Terms & Conditions',
        sections: [
          {
            h: 'Acceptance of terms',
            p: 'By accessing the voxFill website or using the voxFill widget, SDK or hosted backend (the “Service”), you agree to these terms. If you use the Service on behalf of a company, you represent that you are authorized to bind that company. If you do not agree, do not use the Service.',
          },
          {
            h: 'The service',
            p: 'voxFill provides an embeddable widget and backend that fill web forms from speech: the SDK builds a schema of your form’s fields, records an audio clip, and the backend transcribes it and returns extracted values. The Service is under active development; features may change, be suspended or be discontinued at any time.',
          },
          {
            h: 'Accounts and API keys',
            p: 'API keys are issued per site and bound to an origin allowlist. You are responsible for keeping keys and account credentials secure, and for all activity under them. We may revoke keys that are abused, exceed their plan, or present a security risk.',
          },
          {
            h: 'Acceptable use',
            p: 'You may not use the Service to break the law, to process the speech of a person who has not consented to being recorded, to build a competing service from our output, or to attempt to bypass rate limits, origin restrictions or other security controls.',
          },
          {
            h: 'Plans and billing',
            p: 'Free and paid plans are described on the pricing page. Paid plans renew monthly until cancelled; fills beyond a plan’s quota may be throttled. We may change prices with at least 30 days’ notice, effective at your next renewal.',
          },
          {
            h: 'Intellectual property',
            p: 'The Service — including the SDK, the backend and this site — remains our property. Your forms, your users’ audio and the extracted values remain yours; you grant us only the rights needed to operate the Service.',
          },
          {
            h: 'Disclaimer and liability',
            p: 'The Service is provided “as is”, without warranty of any kind. Speech recognition and extraction can make mistakes — you are responsible for validating filled values before relying on them. To the maximum extent permitted by law, our total liability is limited to the amounts you paid us in the twelve months before the claim.',
          },
          {
            h: 'Changes and contact',
            p: 'We may update these terms; material changes will be announced on this site or by email. Continued use after a change means acceptance. Questions: hello@voxfill.dev.',
          },
        ],
      },
      privacy: {
        title: 'Privacy Policy',
        sections: [
          {
            h: 'What this policy covers',
            p: 'This policy describes what the hosted voxFill service and this website collect and how it is handled. If your voxFill backend is self-hosted, audio and schemas go to your own servers and never reach us — only this website’s basic analytics apply.',
          },
          {
            h: 'Website analytics',
            p: 'This website uses Umami, a cookie-free analytics service, to measure visits. It records anonymized data such as pages viewed, country, browser, device and the site language you choose. No cookies are set and no personal information is stored, so your visit cannot be tied to you.',
          },
          {
            h: 'What leaves the user’s browser',
            p: 'When a voice fill runs, exactly two things are sent to the backend: the audio clip and a schema of the form’s fields (ids, labels, types, constraints). No DOM elements, no page content and no existing field values are collected.',
          },
          {
            h: 'How audio is processed',
            p: 'Audio is transcribed, the transcript is mapped onto the field schema, and the extracted values are returned to the page. Audio clips are processed in memory and deleted after the request completes; they are not used to train models. Transcript logs are kept only on plans with logging enabled, and can be disabled or purged at any time.',
          },
          {
            h: 'Account data',
            p: 'For account holders we store an email address, salted hashes of API keys (never plaintext keys), per-key origin allowlists, and aggregate usage counts for billing and rate limiting.',
          },
          {
            h: 'Third-party processors',
            p: 'The hosted backend calls speech-to-text and language-model providers to process audio and transcripts. These providers are contractually bound to process the data only to provide the service. Self-hosted deployments choose their own providers.',
          },
          {
            h: 'Your rights',
            p: 'You can request a copy or the deletion of your account data at any time by emailing hello@voxfill.dev. Deleting your account removes keys, logs and usage records within 30 days.',
          },
          {
            h: 'Changes',
            p: 'We will post any changes to this policy on this page and, for material changes, notify account holders by email.',
          },
        ],
      },
    },
  },

ar: {
    nav: {
      demo: 'العرض التوضيحي',
      how: 'كيف يعمل',
      features: 'المميزات',
      integrate: 'الربط',
      pricing: 'الباقات',
      faq: 'الأسئلة الشائعة',
      contact: 'تواصل معنا',
      cta: 'ابدأ الآن',
      langToggle: 'EN',
    },
    hero: {
      line1: 'مستخدموك يتكلمون.',
      line2: 'والنموذج يتعبأ تلقائياً.',
      lead: 'أداة جاهزة للتضمين تعبّئ نماذج الويب الطويلة من الكلام مباشرة. سطر كود واحد: يفحص voxFill حقول نموذجك، ويحوّل الصوت إلى نص، ويوزّع القيم على حقولك الفعلية، ويميّز أي حقل ناقص.',
      tryDemo: 'جرّب الآن',
      guide: 'دليل الربط ←',
    },
    what: {
      kicker: 'آلية العمل',
      steps: [
        {
          num: '01',
          title: 'قراءة النموذج',
          body: (code) => [
            'تمرّ حزمة SDK على حقول صفحتك وتتعرف على عنوان كل حقل — ',
            code('label[for]'),
            ' أو الـ label المحيط أو سمات aria أو النص التوضيحي أو النص المجاور — ثم تبني مخططاً بالمعرّفات والأنواع والشروط. هذا المخطط وحده هو ما يغادر الصفحة.',
          ],
        },
        {
          num: '02',
          title: 'الاستماع والاستخراج',
          body: () => [
            'يتكلم المستخدم بإجاباته دفعة واحدة. يحوّل الخادم الصوت إلى نص أولاً، ثم يوزّع النص على معرّفات حقولك بالضبط عبر استخراج منظّم مقيّد بالمخطط — فلا يمكن للنموذج اختلاق حقول غير موجودة.',
          ],
        },
        {
          num: '03',
          title: 'التعبئة والتنبيه',
          body: () => [
            'يتم التحقق من كل قيمة مقابل شروط الحقل قبل إرجاعها — ولا نعتمد أبداً على رأي النموذج في صحتها. ما يجتاز التحقق يُكتب في الصفحة عبر الدوال الأصلية، فتتحدّث حقول React وVue بشكل صحيح؛ وأي قيمة ناقصة أو غير صحيحة تظهر مميزة للمستخدم.',
          ],
        },
      ],
    },
    demo: {
      kicker: 'تجربة حية',
      title: 'شاهده يعبّئ النموذج',
      lead: 'شغّل التسجيل التجريبي وشاهد voxFill يعبّئ نموذجاً حقيقياً من جملة منطوقة واحدة — بما فيها الحقل الذي لم يذكره المتحدث.',
      formKicker: 'نموذج تجريبي — طلب انضمام',
      fullName: 'الاسم الكامل',
      workEmail: 'بريد العمل',
      company: 'اسم الشركة',
      teamSize: 'حجم الفريق',
      phone: 'رقم الجوال',
      select: 'اختر…',
      submit: 'أرسل الطلب',
      phoneNote: 'رقم الجوال لم يُذكر في التسجيل — تم تمييز الحقل ليعبّئه المستخدم بنفسه أو يعيد التسجيل.',
      play: 'شغّل التسجيل التجريبي',
      playing: 'جارٍ التشغيل…',
      playAgain: 'أعد التشغيل',
      reset: 'إعادة تعيين',
      transcriptLabel: 'التفريغ النصي',
      listening: 'جارٍ الاستماع…',
      processing: 'جارٍ التفريغ والاستخراج…',
      filling: (i, n) => `جارٍ تعبئة ${i} من ${n}…`,
      done: 'تمت تعبئة 4 من 5 حقول — رقم الجوال لم يُذكر، فتم تمييزه بدل تخمينه.',
      disclaimer: 'هذه محاكاة فقط — الأداة الفعلية تسجّل من الميكروفون وتتصل بالخادم مباشرة.',
      transcript:
        'هلا، أنا آدا أوسي — إيميل العمل ada على fielday نقطة io. أشتغل في Fielday، فريقنا تقريباً أربعين شخص. تجاوزوا رقم الجوال، تواصلوا معي على الإيميل بس.',
      fills: [
        { key: 'fullName', value: 'آدا أوسي' },
        { key: 'workEmail', value: 'ada@fielday.io' },
        { key: 'company', value: 'Fielday' },
        { key: 'teamSize', value: '11–50' },
      ],
    },
    features: {
      kicker: 'المميزات',
      title: 'جاهز لبيئة الإنتاج',
      cards: [
        {
          kicker: 'أطر العمل',
          title: 'تعبئة متوافقة مع أطر العمل',
          body: 'تُكتب القيم عبر الدوال الأصلية مع إطلاق الأحداث المناسبة، فتحدّث حقول React وVue حالتها الداخلية فعلياً — لا مجرد الشكل الظاهري.',
        },
        {
          kicker: 'الموثوقية',
          title: 'تحقق يمكنك الاعتماد عليه',
          body: 'يعيد الخادم فحص كل قيمة مستخرجة مقابل شروط الإلزام والنمط والخيارات والطول. رأي النموذج اللغوي في صحة القيمة لا يُعتمد عليه أبداً.',
        },
        {
          kicker: 'الخصوصية',
          title: 'المخطط يخرج، والقيم تعود',
          body: 'لا يغادر المتصفح إلا المقطع الصوتي ومخطط بمعرّفات الحقول وعناوينها وشروطها. لا عناصر صفحة، ولا محتوى، ولا أي شيء آخر.',
        },
        {
          kicker: 'النشر',
          title: 'استضافة ذاتية للخادم',
          body: 'الخادم بالكامل عبارة عن صورة Docker واحدة تُضبط عبر متغيرات البيئة. شغّلها على بنيتك التحتية وبمفاتيح النموذج الخاصة بك.',
        },
        {
          kicker: 'البنية التقنية',
          title: 'معالجة مستقلة عن المزوّد',
          body: 'تحويل الصوت إلى نص والاستخراج خلف واجهات مستقلة. تغيير المزوّد مجرد محوّل وتعديل في الإعدادات — وقد جرى تبديل مزوّد فعلاً دون مشاكل.',
        },
        {
          kicker: 'الأمان',
          title: 'مفاتيح API مقيدة بالنطاق',
          body: 'تُخزّن المفاتيح كتجزئات مملّحة، مع قائمة نطاقات مسموح بها وحد استخدام لكل مفتاح — المفتاح المسرّب لا يعمل من أي نطاق آخر.',
        },
      ],
    },
    integrate: {
      kicker: 'الربط',
      title: 'جاهز في نفس اليوم',
      steps: [
        () => ['احصل على مفتاح API صادر لنطاق موقعك — من الخدمة المستضافة، أو من نسختك الخاصة.'],
        (code) => [
          'أضف سطر الكود واستدعِ ',
          code('init()'),
          ' بعنوان خادمك ومفتاحك. أو ثبّت ',
          code('@voxfill/sdk'),
          ' من npm.',
        ],
        (code) => [
          'اربط أي زر باستدعاءين — ',
          code('startRecording()'),
          ' و',
          code('stopRecordingAndFill()'),
          '. التصميم والتنسيق يبقى لك بالكامل.',
        ],
      ],
    },
    pricing: {
      kicker: 'الباقات والأسعار',
      title: 'ابدأ مجاناً، ووسّع متى ما احتجت',
      popular: 'الأكثر طلباً',
      tiers: [
        {
          kicker: 'الباقة المجانية',
          price: '$0',
          per: '',
          blurb: 'لتجربتها على نموذج حقيقي.',
          features: ['500 تعبئة صوتية شهرياً', 'نطاق واحد', 'خادم مستضاف لدينا', 'دعم عبر المجتمع'],
          cta: 'ابدأ مجاناً',
        },
        {
          kicker: 'باقة Pro',
          price: 'تواصل مع المبيعات',
          per: '',
          blurb: 'للنماذج في بيئة الإنتاج.',
          features: [
            '10,000 تعبئة صوتية شهرياً',
            '5 نطاقات مع حد استخدام لكل مفتاح',
            'سجلات التفريغ النصي وتقارير الاستخدام',
            'أولوية في الدعم الفني',
          ],
          cta: 'تواصل معنا',
        },
        {
          kicker: 'باقة المؤسسات',
          price: 'استضافة ذاتية',
          per: '',
          blurb: 'للفرق التي تحتفظ بالصوت داخل بنيتها.',
          features: [
            'تعبئات غير محدودة على بنيتك التحتية',
            'صورة Docker واحدة بمفاتيحك أنت',
            'اختر مزوّد STT / LLM الذي يناسبك',
            'اتفاقية مستوى خدمة (SLA) وتهيئة كاملة',
          ],
          cta: 'تواصل معنا',
        },
      ],
    },
    faq: {
      kicker: 'الأسئلة الشائعة',
      title: 'كل ما تحتاج معرفته',
      items: [
        {
          q: 'هل يحتاج زوّار موقعي إلى تثبيت أي شيء؟',
          a: 'لا. voxFill سطر كود يُضاف إلى موقعك، وليس إضافة متصفح. المستخدم يضغط زر الميكروفون الذي توفره له ويمنح إذن الميكروفون مرة واحدة فقط.',
        },
        {
          q: 'ما الذي يغادر متصفح المستخدم؟',
          a: 'شيئان فقط: المقطع الصوتي ومخطط يصف حقولك (المعرّفات والعناوين والأنواع والشروط). لا عناصر صفحة، ولا محتوى، ولا قيم حقول موجودة.',
        },
        {
          q: 'ماذا يحدث إذا أخطأ النموذج في فهم الكلام؟',
          a: 'يُعاد التحقق من كل قيمة على الخادم مقابل شروط الحقل (الإلزام والنمط والخيارات) قبل إرجاعها. أي قيمة لا تجتاز التحقق — أو لم تُذكر أصلاً — تظهر مميزة في النموذج ليصححها المستخدم، ولا تُعبّأ بصمت أبداً.',
        },
        {
          q: 'هل يعمل مع نماذج React وVue؟',
          a: 'نعم. تُكتب القيم عبر الدالة الأصلية مع إطلاق الأحداث الصحيحة، فتحدّث المكونات حالتها الداخلية. كما يُعاد فحص الحقول قبل كل تسجيل مباشرة، فتُلتقط حتى الحقول التي تظهر متأخراً.',
        },
        {
          q: 'هل يمكننا استضافة الخادم ذاتياً؟',
          a: 'نعم — الاستضافة الذاتية هدف من أهداف التصميم، وليست فكرة لاحقة. الخادم صورة Docker واحدة تُضبط بمتغيرات البيئة، وحزمة SDK تقبل أي عنوان خادم. مزوّدا تحويل الصوت والاستخراج قابلان للتبديل، فيمكنك استخدام مزوّدك الخاص.',
        },
        {
          q: 'كيف تُحمى مفاتيح API؟',
          a: 'تُصدر المفاتيح لكل موقع على حدة، وتُخزّن كتجزئات مملّحة، وتُربط بقائمة نطاقات مسموح بها مع حد استخدام لكل مفتاح. المفتاح المنسوخ من كود صفحتك لا يعمل من أي نطاق آخر.',
        },
      ],
    },
    contact: {
      kicker: 'تواصل معنا',
      title: 'أضف الصوت إلى نماذجك',
      lead: 'استفسارات، مفاتيح، أو نقاش حول الاستضافة الذاتية — نرد عليك بسرعة.',
      email: 'البريد الإلكتروني',
      source: 'الكود المصدري والمشاكل التقنية',
      book: 'احجز عرضاً توضيحياً',
      newsletterPlaceholder: 'you@example.com',
      newsletterCta: 'اشترك في التحديثات',
      newsletterAria: 'البريد الإلكتروني',
    },
    footer: '© 2026 voxFill — عبّئ نماذجك بالصوت. الروابط مؤقتة حتى الإطلاق.',
    legal: {
      back: '→ العودة إلى voxFill',
      termsLink: 'الشروط والأحكام',
      privacyLink: 'سياسة الخصوصية',
      updated: 'آخر تحديث: 14 يوليو 2026',
      terms: {
        title: 'الشروط والأحكام',
        sections: [
          {
            h: 'قبول الشروط',
            p: 'بدخولك موقع voxFill أو استخدامك الأداة أو حزمة SDK أو الخادم المستضاف («الخدمة»)، فإنك توافق على هذه الشروط. وإذا كنت تستخدم الخدمة نيابة عن شركة، فإنك تقر بأنك مخوّل بإلزامها. إذا لم توافق، فلا تستخدم الخدمة.',
          },
          {
            h: 'الخدمة',
            p: 'توفر voxFill أداة قابلة للتضمين وخادماً يعبّئان نماذج الويب من الكلام: تبني حزمة SDK مخططاً لحقول نموذجك، وتسجل مقطعاً صوتياً، ويحوّله الخادم إلى نص ويعيد القيم المستخرجة. الخدمة قيد التطوير النشط، وقد تتغير ميزاتها أو تُعلَّق أو تُوقَف في أي وقت.',
          },
          {
            h: 'الحسابات ومفاتيح API',
            p: 'تُصدر مفاتيح API لكل موقع وتُربط بقائمة نطاقات مسموح بها. أنت مسؤول عن الحفاظ على أمان المفاتيح وبيانات الدخول لحسابك، وعن كل نشاط يجري بها. ويجوز لنا إيقاف المفاتيح التي يُساء استخدامها أو تتجاوز باقتها أو تشكّل خطراً أمنياً.',
          },
          {
            h: 'الاستخدام المقبول',
            p: 'لا يجوز استخدام الخدمة لمخالفة الأنظمة، أو لمعالجة كلام شخص لم يوافق على تسجيله، أو لبناء خدمة منافسة من مخرجاتنا، أو لمحاولة تجاوز حدود الاستخدام أو قيود النطاق أو غيرها من الضوابط الأمنية.',
          },
          {
            h: 'الباقات والفوترة',
            p: 'الباقات المجانية والمدفوعة موضحة في صفحة الباقات والأسعار. تتجدد الباقات المدفوعة شهرياً حتى الإلغاء؛ وقد تُبطَّأ عمليات التعبئة التي تتجاوز حد الباقة. ويجوز لنا تغيير الأسعار بإشعار لا يقل عن 30 يوماً، يسري عند تجديدك التالي.',
          },
          {
            h: 'الملكية الفكرية',
            p: 'تبقى الخدمة — بما فيها حزمة SDK والخادم وهذا الموقع — ملكاً لنا. وتبقى نماذجك وصوت مستخدميك والقيم المستخرجة ملكاً لك؛ ولا تمنحنا سوى الحقوق اللازمة لتشغيل الخدمة.',
          },
          {
            h: 'إخلاء المسؤولية وحدودها',
            p: 'تُقدَّم الخدمة «كما هي» دون أي ضمان من أي نوع. قد يخطئ التعرف على الكلام والاستخراج — وأنت مسؤول عن التحقق من القيم المعبّأة قبل الاعتماد عليها. وإلى الحد الأقصى الذي تسمح به الأنظمة، تقتصر مسؤوليتنا الإجمالية على المبالغ التي دفعتها لنا خلال الاثني عشر شهراً السابقة للمطالبة.',
          },
          {
            h: 'التغييرات والتواصل',
            p: 'قد نحدّث هذه الشروط؛ وسيُعلَن عن التغييرات الجوهرية على هذا الموقع أو بالبريد الإلكتروني. واستمرارك في الاستخدام بعد التغيير يعني القبول. للاستفسارات: hello@voxfill.dev.',
          },
        ],
      },
      privacy: {
        title: 'سياسة الخصوصية',
        sections: [
          {
            h: 'ما تغطيه هذه السياسة',
            p: 'تصف هذه السياسة ما تجمعه خدمة voxFill المستضافة وهذا الموقع وكيفية التعامل معه. إذا كان خادم voxFill لديك مستضافاً ذاتياً، فإن الصوت والمخططات تذهب إلى خوادمك أنت ولا تصلنا أبداً — ولا ينطبق سوى التحليلات الأساسية لهذا الموقع.',
          },
          {
            h: 'تحليلات الموقع',
            p: 'يستخدم هذا الموقع خدمة Umami للتحليلات — وهي خدمة لا تعتمد على ملفات تعريف الارتباط (الكوكيز) — لقياس الزيارات. تُسجَّل بيانات مجهولة الهوية مثل الصفحات المعروضة والدولة والمتصفح ونوع الجهاز ولغة الموقع التي تختارها. لا تُستخدم أي كوكيز ولا تُخزَّن معلومات شخصية، فلا يمكن ربط زيارتك بك.',
          },
          {
            h: 'ما الذي يغادر متصفح المستخدم',
            p: 'عند تنفيذ تعبئة صوتية، يُرسَل إلى الخادم شيئان فقط: المقطع الصوتي ومخطط بحقول النموذج (المعرّفات والعناوين والأنواع والشروط). لا تُجمع عناصر الصفحة ولا محتواها ولا قيم الحقول الموجودة.',
          },
          {
            h: 'كيف يُعالَج الصوت',
            p: 'يُحوَّل الصوت إلى نص، ويُوزَّع النص على مخطط الحقول، وتُعاد القيم المستخرجة إلى الصفحة. تُعالَج المقاطع الصوتية في الذاكرة وتُحذف بعد اكتمال الطلب، ولا تُستخدم لتدريب النماذج. ولا تُحفظ سجلات التفريغ النصي إلا في الباقات التي فُعِّل فيها التسجيل، ويمكن تعطيلها أو مسحها في أي وقت.',
          },
          {
            h: 'بيانات الحساب',
            p: 'نخزّن لأصحاب الحسابات عنوان بريد إلكتروني، وتجزئات مملّحة لمفاتيح API (لا مفاتيح نصية أبداً)، وقوائم النطاقات المسموح بها لكل مفتاح، وإحصاءات استخدام مجمّعة للفوترة وتحديد الاستخدام.',
          },
          {
            h: 'المعالجون الخارجيون',
            p: 'يستدعي الخادم المستضاف مزوّدي تحويل الصوت إلى نص والنماذج اللغوية لمعالجة الصوت والنصوص. وهؤلاء المزوّدون ملزمون تعاقدياً بمعالجة البيانات لتقديم الخدمة فقط. أما النسخ المستضافة ذاتياً فتختار مزوّديها بنفسها.',
          },
          {
            h: 'حقوقك',
            p: 'يمكنك طلب نسخة من بيانات حسابك أو حذفها في أي وقت عبر مراسلة hello@voxfill.dev. ويؤدي حذف حسابك إلى إزالة المفاتيح والسجلات وبيانات الاستخدام خلال 30 يوماً.',
          },
          {
            h: 'التغييرات',
            p: 'سننشر أي تغييرات على هذه السياسة في هذه الصفحة، وسنُخطر أصحاب الحسابات بالبريد الإلكتروني عند التغييرات الجوهرية.',
          },
        ],
      },
    },
  },
}
