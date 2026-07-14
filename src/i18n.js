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
    stats: [
      { value: '1', label: 'Script tag to embed' },
      { value: '2-step', label: 'Pipeline — transcript, then extraction' },
      { value: '0', label: 'DOM elements leave the browser' },
      { value: '100%', label: 'Values re-validated server-side' },
    ],
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
    cases: {
      kicker: 'Case studies',
      title: 'In the field',
      soon: 'Coming soon',
      placeholder: 'Case study placeholder',
      logo: 'Logo',
      cards: [
        {
          kicker: 'Healthcare intake',
          body: 'Drop the customer story here — who they are, the form they voice-enabled, and the completion-rate change.',
        },
        {
          kicker: 'Field service',
          body: 'Drop the customer story here — technicians filling inspection reports hands-free, straight from the site.',
        },
        {
          kicker: 'Government forms',
          body: 'Drop the customer story here — accessibility-driven adoption and the audit that followed.',
        },
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
          price: '$49',
          per: ' /mo',
          blurb: 'For forms in production.',
          features: [
            '10,000 voice fills / month',
            '5 origins, per-key rate limits',
            'Transcript logs & analytics',
            'Priority support',
          ],
          cta: 'Start Pro',
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
      demo: 'العرض التجريبي',
      how: 'كيف يعمل',
      features: 'المميزات',
      integrate: 'الدمج',
      pricing: 'الأسعار',
      faq: 'الأسئلة الشائعة',
      contact: 'تواصل معنا',
      cta: 'ابدأ الآن',
      langToggle: 'EN',
    },
    hero: {
      line1: 'مستخدموك يتحدثون.',
      line2: 'والنموذج يملأ نفسه.',
      lead: 'أداة قابلة للتضمين تملأ نماذج الويب الطويلة من الكلام. وسم سكريبت واحد: يفحص voxFill حقولك، ويفرّغ الكلام نصًا، ويُسقط القيم على مدخلاتك الفعلية، ويُبرز أي شيء ناقص.',
      tryDemo: 'جرّب العرض التجريبي',
      guide: 'دليل الدمج ←',
    },
    stats: [
      { value: '1', label: 'وسم سكريبت للتضمين' },
      { value: 'خطوتان', label: 'في المسار — التفريغ النصي ثم الاستخراج' },
      { value: '0', label: 'من عناصر DOM يغادر المتصفح' },
      { value: '100%', label: 'من القيم يُعاد التحقق منها على الخادم' },
    ],
    what: {
      kicker: 'ماذا يفعل',
      steps: [
        {
          num: '01',
          title: 'فحص النموذج',
          body: (code) => [
            'تمرّ حزمة SDK على حقول صفحتك وتستنتج تسمية كل حقل — ',
            code('label[for]'),
            ' أو الـ label المحيط أو سمات aria أو النص النائب أو النص المجاور — وتبني مخططًا بالمعرّفات والأنواع والقيود. هذا المخطط وحده هو ما يغادر الصفحة.',
          ],
        },
        {
          num: '02',
          title: 'الاستماع والاستخراج',
          body: () => [
            'ينطق المستخدم إجاباته دفعة واحدة. يفرّغ الخادم الصوت نصًا أولًا، ثم يُسقط النص على معرّفات حقولك بالضبط عبر استخراج منظّم مقيّد بالمخطط — فلا يستطيع النموذج اختلاق حقول غير موجودة.',
          ],
        },
        {
          num: '03',
          title: 'الملء والتنبيه',
          body: () => [
            'يُعاد التحقق من كل قيمة مقابل قيود الحقل قبل إرجاعها — ولا يُوثَق برأي النموذج في الصحة أبدًا. ما يجتاز التحقق يوضع في DOM عبر الدوال الأصلية، فتتحدّث مدخلات React وVue المُدارة بشكل صحيح؛ وأي شيء ناقص أو غير صالح يُبرز للمستخدم.',
          ],
        },
      ],
    },
    demo: {
      kicker: 'عرض حي',
      title: 'اسمعه يملأ نموذجًا',
      lead: 'شغّل التسجيل التجريبي وشاهد voxFill يُسقط جملة منطوقة واحدة على نموذج حقيقي — بما في ذلك الحقل الذي لم يذكره المتحدث.',
      formKicker: 'نموذج تجريبي — طلب وصول',
      fullName: 'الاسم الكامل',
      workEmail: 'البريد الإلكتروني للعمل',
      company: 'الشركة',
      teamSize: 'حجم الفريق',
      phone: 'الهاتف',
      select: 'اختر…',
      submit: 'طلب وصول',
      phoneNote: 'لم يُذكر الهاتف في التسجيل — أُبرز الحقل ليكتبه المستخدم أو يعيد التسجيل.',
      play: 'شغّل التسجيل التجريبي',
      playing: 'جارٍ التشغيل…',
      playAgain: 'شغّله مجددًا',
      reset: 'إعادة ضبط',
      transcriptLabel: 'النص المفرّغ',
      listening: 'جارٍ الاستماع…',
      processing: 'جارٍ التفريغ والاستخراج…',
      filling: (i, n) => `جارٍ ملء ${i} من ${n}…`,
      done: 'مُلئت 4 من 5 حقول — لم يُذكر الهاتف، لذا أُبرز ولم يُخمَّن.',
      disclaimer: 'محاكاة — الأداة الحقيقية تسجّل من الميكروفون وتتصل بالخادم الفعلي.',
      transcript:
        'مرحبًا، أنا آدا أوسي — بريد العمل ada على fielday نقطة io. أعمل في Fielday، نحن نحو أربعين شخصًا. تجاوزوا رقم الهاتف، راسلوني بالبريد فقط.',
      fills: [
        { key: 'fullName', value: 'آدا أوسي' },
        { key: 'workEmail', value: 'ada@fielday.io' },
        { key: 'company', value: 'Fielday' },
        { key: 'teamSize', value: '11–50' },
      ],
    },
    features: {
      kicker: 'المميزات',
      title: 'مصمَّم لنماذج الإنتاج',
      cards: [
        {
          kicker: 'أطر العمل',
          title: 'ملء آمن مع الأطر',
          body: 'تُكتب القيم عبر الدوال الأصلية مع إطلاق الأحداث المناسبة، فتحدّث مدخلات React وVue المُدارة حالتها الداخلية — لا البكسلات فقط.',
        },
        {
          kicker: 'الموثوقية',
          title: 'تحقق يمكنك الوثوق به',
          body: 'يعيد الخادم فحص كل قيمة مستخرجة مقابل قيود الإلزام والنمط والخيارات والطول. رأي النموذج اللغوي في الصحة لا يُعتمد أبدًا.',
        },
        {
          kicker: 'الخصوصية',
          title: 'المخطط يخرج، والقيم تدخل',
          body: 'لا يغادر المتصفح سوى المقطع الصوتي ومخطط بمعرّفات الحقول وتسمياتها وقيودها. لا عناصر DOM، ولا محتوى صفحة، ولا أي شيء آخر.',
        },
        {
          kicker: 'النشر',
          title: 'خادم قابل للاستضافة الذاتية',
          body: 'الخادم بأكمله يُشحن كصورة Docker واحدة تُضبط كليًا بمتغيرات البيئة. شغّله على بنيتك التحتية وباعتمادات نموذجك الخاصة.',
        },
        {
          kicker: 'البنية',
          title: 'مسار مستقل عن المزوّد',
          body: 'تحويل الكلام إلى نص والاستخراج يقعان خلف واجهات. تبديل المزوّد مجرد محوّل وتغيير في الإعدادات — وقد نجا فعلًا من تبديل واحد.',
        },
        {
          kicker: 'الأمان',
          title: 'مفاتيح API مقيدة بالنطاق',
          body: 'تُخزَّن المفاتيح كتجزئات مملّحة مع قائمة نطاقات مسموح بها وحد معدل لكل مفتاح — المفتاح المسرّب عديم الفائدة من أي مكان آخر.',
        },
      ],
    },
    integrate: {
      kicker: 'الدمج',
      title: 'جاهز في ظهيرة واحدة',
      steps: [
        () => ['احصل على مفتاح API صادر لنطاق موقعك — مستضاف، أو من نسختك الخاصة.'],
        (code) => [
          'أضف وسم السكريبت واستدعِ ',
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
          '. ترميزك أنت، وأنماطك أنت.',
        ],
      ],
    },
    cases: {
      kicker: 'دراسات حالة',
      title: 'في الميدان',
      soon: 'قريبًا',
      placeholder: 'دراسة حالة قريبًا',
      logo: 'الشعار',
      cards: [
        {
          kicker: 'استقبال المرضى',
          body: 'ضع قصة العميل هنا — من هم، والنموذج الذي فعّلوا الصوت فيه، والتغير في معدل الإكمال.',
        },
        {
          kicker: 'الخدمة الميدانية',
          body: 'ضع قصة العميل هنا — فنيون يملؤون تقارير الفحص دون استخدام اليدين، من الموقع مباشرة.',
        },
        {
          kicker: 'النماذج الحكومية',
          body: 'ضع قصة العميل هنا — تبنٍّ بدافع إتاحة الوصول، والتدقيق الذي تلاه.',
        },
      ],
    },
    pricing: {
      kicker: 'الأسعار',
      title: 'ابدأ مجانًا، ووسّع عندما ينجح',
      popular: 'الأكثر شيوعًا',
      tiers: [
        {
          kicker: 'مجاني',
          price: '$0',
          per: '',
          blurb: 'لتجربته على نموذج حقيقي.',
          features: ['500 ملء صوتي شهريًا', 'نطاق واحد', 'خادم مستضاف', 'دعم مجتمعي'],
          cta: 'ابدأ مجانًا',
        },
        {
          kicker: 'Pro',
          price: '$49',
          per: ' / شهريًا',
          blurb: 'للنماذج في الإنتاج.',
          features: [
            '10,000 ملء صوتي شهريًا',
            '5 نطاقات وحدود معدل لكل مفتاح',
            'سجلات النصوص والتحليلات',
            'دعم ذو أولوية',
          ],
          cta: 'ابدأ Pro',
        },
        {
          kicker: 'الشركات',
          price: 'استضافة ذاتية',
          per: '',
          blurb: 'للفرق التي تُبقي الصوت داخليًا.',
          features: [
            'ملء غير محدود على بنيتك التحتية',
            'صورة Docker واحدة باعتماداتك',
            'أحضر مزوّد STT / LLM الخاص بك',
            'اتفاقية مستوى خدمة وتهيئة',
          ],
          cta: 'تحدث إلينا',
        },
      ],
    },
    faq: {
      kicker: 'الأسئلة الشائعة',
      title: 'أسئلة، وإجابات',
      items: [
        {
          q: 'هل يحتاج مستخدمو موقعي إلى تثبيت أي شيء؟',
          a: 'لا. voxFill وسم سكريبت على موقعك، وليس إضافة متصفح. يضغط المستخدم زر الميكروفون الذي توفره ويمنح إذن الميكروفون مرة واحدة فقط.',
        },
        {
          q: 'ما الذي يغادر متصفح المستخدم؟',
          a: 'شيئان: المقطع الصوتي ومخطط يصف حقولك (المعرّفات والتسميات والأنواع والقيود). لا عناصر DOM، ولا محتوى صفحة، ولا قيم حقول موجودة.',
        },
        {
          q: 'ماذا يحدث عندما يخطئ النموذج في السمع؟',
          a: 'يُعاد التحقق من كل قيمة على الخادم مقابل قيود الإلزام والنمط والخيارات لحقلك قبل إرجاعها. أي شيء يفشل — أو لم يُذكر أصلًا — يُبرز في النموذج ليصححه المستخدم، ولا يُملأ بصمت أبدًا.',
        },
        {
          q: 'هل يعمل مع نماذج React وVue؟',
          a: 'نعم. تُكتب القيم عبر الدالة الأصلية مع إطلاق الأحداث الصحيحة، فتحدّث المكونات المُدارة حالتها الداخلية. ويُعاد فحص الحقول قبل كل تسجيل مباشرة، فتُلتقط الحقول التي ظهرت متأخرًا أيضًا.',
        },
        {
          q: 'هل يمكننا استضافة الخادم ذاتيًا؟',
          a: 'نعم — الاستضافة الذاتية هدف تصميمي، لا فكرة لاحقة. الخادم صورة Docker واحدة تُضبط بمتغيرات البيئة؛ وتقبل حزمة SDK أي عنوان خادم. مزوّدا تحويل الكلام والاستخراج محوّلان قابلان للتبديل، فيمكنك إحضار مزوّدك الخاص.',
        },
        {
          q: 'كيف تُحمى مفاتيح API؟',
          a: 'تُصدر المفاتيح لكل موقع، وتُخزَّن كتجزئات مملّحة، وتُربط بقائمة نطاقات مسموح بها مع حد معدل لكل مفتاح. المفتاح المأخوذ من مصدر صفحتك لا يعمل من أي نطاق آخر.',
        },
      ],
    },
    contact: {
      kicker: 'تواصل',
      title: 'أضف صوتًا إلى نماذجك',
      lead: 'أسئلة أو مفاتيح أو حديث عن الاستضافة الذاتية — نجيب بسرعة.',
      email: 'البريد الإلكتروني',
      source: 'المصدر والمشكلات',
      book: 'احجز عرضًا',
      newsletterPlaceholder: 'you@example.com',
      newsletterCta: 'احصل على التحديثات',
      newsletterAria: 'عنوان البريد الإلكتروني',
    },
    footer: '© 2026 voxFill — املأ النماذج بالتحدث. روابط مؤقتة حتى الإطلاق.',
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
            p: 'توفر voxFill أداة قابلة للتضمين وخادمًا يملآن نماذج الويب من الكلام: تبني حزمة SDK مخططًا لحقول نموذجك، وتسجل مقطعًا صوتيًا، ويفرّغه الخادم نصًا ويعيد القيم المستخرجة. الخدمة قيد التطوير النشط، وقد تتغير ميزاتها أو تُعلَّق أو تُوقَف في أي وقت.',
          },
          {
            h: 'الحسابات ومفاتيح API',
            p: 'تُصدر مفاتيح API لكل موقع وتُربط بقائمة نطاقات مسموح بها. أنت مسؤول عن الحفاظ على أمان المفاتيح وبيانات اعتماد الحساب، وعن كل نشاط يجري بها. ويجوز لنا إبطال المفاتيح التي يُساء استخدامها أو تتجاوز خطتها أو تشكّل خطرًا أمنيًا.',
          },
          {
            h: 'الاستخدام المقبول',
            p: 'لا يجوز استخدام الخدمة لمخالفة القانون، أو لمعالجة كلام شخص لم يوافق على تسجيله، أو لبناء خدمة منافسة من مخرجاتنا، أو لمحاولة تجاوز حدود المعدل أو قيود النطاق أو غيرها من الضوابط الأمنية.',
          },
          {
            h: 'الخطط والفوترة',
            p: 'الخطط المجانية والمدفوعة موضحة في صفحة الأسعار. تتجدد الخطط المدفوعة شهريًا حتى الإلغاء؛ وقد تُبطَّأ عمليات الملء التي تتجاوز حصة الخطة. ويجوز لنا تغيير الأسعار بإشعار لا يقل عن 30 يومًا، يسري عند تجديدك التالي.',
          },
          {
            h: 'الملكية الفكرية',
            p: 'تبقى الخدمة — بما فيها حزمة SDK والخادم وهذا الموقع — ملكًا لنا. وتبقى نماذجك وصوت مستخدميك والقيم المستخرجة ملكًا لك؛ ولا تمنحنا سوى الحقوق اللازمة لتشغيل الخدمة.',
          },
          {
            h: 'إخلاء المسؤولية وحدودها',
            p: 'تُقدَّم الخدمة «كما هي» دون أي ضمان من أي نوع. قد يخطئ التعرف على الكلام والاستخراج — وأنت مسؤول عن التحقق من القيم المملوءة قبل الاعتماد عليها. وإلى الحد الأقصى الذي يسمح به القانون، تقتصر مسؤوليتنا الإجمالية على المبالغ التي دفعتها لنا خلال الاثني عشر شهرًا السابقة للمطالبة.',
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
            p: 'تصف هذه السياسة ما تجمعه خدمة voxFill المستضافة وهذا الموقع وكيفية التعامل معه. إذا كان خادم voxFill لديك مستضافًا ذاتيًا، فإن الصوت والمخططات تذهب إلى خوادمك أنت ولا تصلنا أبدًا — ولا ينطبق سوى التحليلات الأساسية لهذا الموقع.',
          },
          {
            h: 'ما الذي يغادر متصفح المستخدم',
            p: 'عند تشغيل ملء صوتي، يُرسَل إلى الخادم شيئان فقط: المقطع الصوتي ومخطط بحقول النموذج (المعرّفات والتسميات والأنواع والقيود). لا تُجمع عناصر DOM ولا محتوى الصفحة ولا قيم الحقول الموجودة.',
          },
          {
            h: 'كيف يُعالَج الصوت',
            p: 'يُفرَّغ الصوت نصًا، ويُسقَط النص على مخطط الحقول، وتُعاد القيم المستخرجة إلى الصفحة. تُعالَج المقاطع الصوتية في الذاكرة وتُحذف بعد اكتمال الطلب، ولا تُستخدم لتدريب النماذج. ولا تُحفظ سجلات النصوص إلا في الخطط التي فُعِّل فيها التسجيل، ويمكن تعطيلها أو مسحها في أي وقت.',
          },
          {
            h: 'بيانات الحساب',
            p: 'نخزّن لأصحاب الحسابات عنوان بريد إلكتروني، وتجزئات مملّحة لمفاتيح API (لا مفاتيح نصية أبدًا)، وقوائم النطاقات المسموح بها لكل مفتاح، وإحصاءات استخدام مجمّعة للفوترة وتحديد المعدل.',
          },
          {
            h: 'المعالجون الخارجيون',
            p: 'يستدعي الخادم المستضاف مزوّدي تحويل الكلام إلى نص والنماذج اللغوية لمعالجة الصوت والنصوص. وهؤلاء المزوّدون ملزمون تعاقديًا بمعالجة البيانات لتقديم الخدمة فقط. أما عمليات النشر المستضافة ذاتيًا فتختار مزوّديها بنفسها.',
          },
          {
            h: 'حقوقك',
            p: 'يمكنك طلب نسخة من بيانات حسابك أو حذفها في أي وقت عبر مراسلة hello@voxfill.dev. ويؤدي حذف حسابك إلى إزالة المفاتيح والسجلات وبيانات الاستخدام خلال 30 يومًا.',
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
