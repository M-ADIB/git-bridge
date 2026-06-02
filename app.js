/* ==========================================================================
   INTERACTIVE LOGIC (UPDATED) - GUEST APPLICATION PORTAL - THE NEXT CHAPTER
   ========================================================================== */

// --- Comprehensive Translation Dictionary (NO EMOJIS) ---
const translations = {
  en: {
    page_title: "Guest Application Form | The Next Chapter LLC",
    nav_about: "About Rania",
    nav_shows: "The Podcasts",
    nav_process: "Selection Process",
    nav_apply: "Apply Now",
    
    brand_logo_text: "Between The Lines",
    testimonials_title: "TESTIMONIALS",
    hero_badge: "Podcast Guest Application Portal",
    hero_title: "Where Stories Become Conversations",
    hero_title_2: "They deserve a conversation",
    hero_desc: "If you believe your story, expertise, or experience can add value to our audience, we would love to hear from you. Complete the guest application form below, and our editorial team will review your submission.",
    hero_cta: "Apply to Be a Guest",
    
    stat_media_num: "20+ Years",
    stat_media_label: "Media Influence",
    stat_views_num: "Millions",
    stat_views_label: "Total Podcast Views",
    stat_seats_num: "20 Seats",
    stat_seats_label: "Intimate Capacity",
    
    shows_subtitle: "The Podcasts",
    shows_title: "Where Stories Become Conversations That Matter",
    shows_desc: "Our podcasts are carefully curated to ensure that every conversation delivers value, insight, inspiration, and meaningful discussion for our audience across the Middle East and beyond.",
    
    show_nos_title: "No2ta 3al Sater (نقطة ع السطر)",
    show_nos_desc: "Hosted by veteran television presenter Rania Barghout, No2ta 3al Sater is one of the region's fastest-growing Arabic visual podcasts. More than an interview, each episode is an opportunity to uncover the experiences, lessons, challenges, and insights that shape who we become.",
    show_nos_topics_lbl: "Key Topics Explored:",
    show_nos_topic_1: "Personal Transformation & Reinvention After 40",
    show_nos_topic_2: "Women's Empowerment & Leadership",
    show_nos_topic_3: "Functional Medicine, Wellness & Mental Health",
    show_nos_topic_4: "Relationships, Media & Social Impact",
    
    show_btl_title: "Between The Lines",
    show_btl_desc: "Our English-language leadership visual podcast. Exploring leadership as a raw human experience, Rania sits down with prominent corporate founders, executives, and emerging female changemakers to co-author a 'Leadership Manifesto'.",
    show_btl_topics_lbl: "Key Topics Explored:",
    show_btl_topic_1: "Leadership & Entrepreneurship",
    show_btl_topic_2: "Personal Branding & Public Speaking",
    show_btl_topic_3: "Technology, Innovation & Artificial Intelligence",
    show_btl_topic_4: "Career Development & Strategic Growth",
    
    btn_watch_youtube: "Watch on YouTube",
    btn_follow_insta: "Follow on Instagram",
    
    who_subtitle: "Guest Profile",
    who_title: "Who Appears On Our Podcasts?",
    who_desc: "We welcome dynamic individuals whose journeys have the power to inspire, educate, and transform lives.",
    who_item_1: "A meaningful story to share with the audience",
    who_item_2: "Valuable expertise and professional credibility",
    who_item_3: "A unique perspective on modern challenges",
    who_item_4: "An inspiring journey with clear lessons",
    who_item_5: "Lessons that can directly benefit others",
    who_item_6: "Passion for driving positive social impact",
    who_review_note: "Applications are reviewed individually and selected based on relevance, audience value, and editorial fit. Please note that submission of an application does not guarantee acceptance.",
    
    process_subtitle: "The Pipeline",
    process_title: "Guest Selection Process",
    process_step_1: "Submit Application",
    process_step_2: "Editorial Review",
    process_step_3: "Approval Notification",
    process_step_4: "Participation Agreement",
    process_step_5: "Production Contribution",
    process_step_6: "Scheduling & Recording",
    
    standards_subtitle: "Quality Assurance",
    standards_title: "High Production Standards",
    standards_desc: "We ensure every conversation is captured and distributed with maximum professional quality:",
    standards_item_1: "Multi-camera high-definition studio recording",
    standards_item_2: "Professional audio capture and cinematic studio lighting",
    standards_item_3: "Pre-interview editorial preparation and scripting",
    standards_item_4: "Professional post-production video and audio editing",
    standards_item_5: "Social media promotional video clips and assets",
    standards_item_6: "Digital distribution across major global streaming platforms",
    
    about_subtitle: "About The Host",
    about_title: "Rania Barghout",
    about_bio_1: "Rania Barghout is a renowned media personality, television presenter, producer, executive communication coach, and founder of The Next Chapter LLC. With over three decades of experience in television, media production, public speaking, interviewing, and executive coaching, she has interviewed hundreds of public figures, celebrities, experts, and leaders throughout her career.",
    about_bio_2: "Her interviewing style combines warmth, curiosity, depth, and authenticity, creating a space where guests feel comfortable sharing both their achievements and the stories that shape who they are behind the public success.",
    about_btn: "Connect With Rania",
    eps_subtitle: "Episodes Gallery",
    eps_title: "Latest Podcast Episodes",
    eps_desc: "Browse through some of our most impactful and powerful conversations on No2ta 3al Sater.",
    
    form_badge: "Application Form",
    form_title: "Guest Application Form",
    form_desc: "Please complete the application details below. Every field helps our editorial team evaluate the fit and prepare for the pre-interview research.",
    
    sec_personal: "1. Personal Information",
    lbl_fullname: "Full Name",
    ph_fullname: "Enter your full name",
    err_fullname: "Full name is required.",
    lbl_pref_name: "Preferred Name (if different)",
    ph_pref_name: "How should your name display on screen?",
    lbl_profession: "Profession / Title",
    ph_profession: "e.g., Founder & CEO, Clinical Psychologist",
    err_profession: "Profession / Title is required.",
    lbl_company: "Company / Organisation",
    ph_company: "e.g., The Next Chapter LLC",
    err_company: "Company name is required.",
    lbl_country: "Country of Residence",
    ph_country: "e.g., UAE, Saudi Arabia, UK",
    err_country: "Country is required.",
    lbl_mobile: "Mobile Number",
    ph_mobile: "50 123 4567",
    err_mobile: "Please enter a valid mobile phone number.",
    lbl_email: "Email Address",
    ph_email: "e.g., name@domain.com",
    err_email: "Please enter a valid email address.",
    lbl_website: "Website URL (if applicable)",
    ph_website: "e.g., www.thenextchapter.vip",
    lbl_linkedin: "LinkedIn Profile URL",
    ph_linkedin: "e.g., linkedin.com/in/username",
    lbl_insta: "Instagram Handle",
    ph_insta: "e.g., @username",
    lbl_social_other: "Other Social Media Links",
    ph_social_other: "e.g., YouTube channel, X profile",
    
    sec_about_you: "2. About You",
    lbl_bio: "Short Professional Biography",
    hint_bio: "(150–300 words)",
    ph_bio: "Please provide a detailed biography describing your professional journey...",
    err_bio: "Biography must be between 150 and 300 words.",
    lbl_best_known: "What are you best known for professionally?",
    ph_best_known: "Describe your core area of expertise or public reputation...",
    err_best_known: "This field is required.",
    lbl_shaped_you: "What major life experiences, achievements, challenges, or lessons have shaped who you are today?",
    ph_shaped_you: "Share key moments that defined your path...",
    err_shaped_you: "This field is required.",
    
    sec_story: "3. Your Story",
    lbl_story_unique: "What makes your story unique?",
    ph_story_unique: "Explain why your journey stands out...",
    err_story_unique: "This field is required.",
    lbl_story_benefit: "Why do you believe our audience would benefit from hearing your perspective?",
    ph_story_benefit: "Describe the key lessons or value for listeners...",
    err_story_benefit: "This field is required.",
    lbl_qualified_topics: "What topics are you most qualified to discuss? (Select all that apply)",
    err_topics: "Please select at least one topic.",
    
    topic_leadership: "Leadership",
    topic_entrepreneurship: "Entrepreneurship",
    topic_empowerment: "Women's Empowerment",
    topic_wellness: "Health & Wellness",
    topic_medicine: "Functional Medicine",
    topic_mental: "Mental Health",
    topic_career: "Career Development",
    topic_media: "Media & Communication",
    topic_personal_dev: "Personal Development",
    topic_relationships: "Relationships",
    topic_parenting: "Parenting",
    topic_finance: "Finance",
    topic_tech: "Technology",
    topic_ai: "Artificial Intelligence",
    topic_education: "Education",
    topic_creativity: "Creativity",
    topic_social: "Social Impact",
    lbl_topic_other: "Other Topic:",
    ph_topic_other: "Specify other topic...",
    
    sec_proposal: "4. Conversation Proposal",
    lbl_proposal: "If invited, what would you like to discuss on the podcast?",
    lbl_talking_points: "Please provide 3–5 key talking points:",
    ph_tp_1: "Talking Point 1",
    ph_tp_2: "Talking Point 2",
    ph_tp_3: "Talking Point 3",
    ph_tp_4: "Talking Point 4 (Optional)",
    ph_tp_5: "Talking Point 5 (Optional)",
    err_tp: "Please provide at least 3 talking points.",
    
    sec_value: "5. Audience Value & Media Experience",
    lbl_takeaway: "What is the single most important message you would like listeners to take away from your episode?",
    ph_takeaway: "State your core message in one or two sentences...",
    err_takeaway: "Core message is required.",
    lbl_prev_media: "Have you previously appeared on podcasts, television, radio, or public platforms?",
    btn_yes: "Yes",
    btn_no: "No",
    lbl_media_links: "If yes, please provide links to previous appearances/interviews:",
    ph_media_links: "e.g., YouTube, website, or article links...",
    
    sec_assets: "6. Promotional Assets & Summary",
    lbl_attach_list: "Promotional Assets checklist (Please prepare to send these via email if selected):",
    asset_headshot: "Professional Headshot",
    asset_bio: "Short Biography document",
    asset_logo: "Company Logo (if applicable)",
    asset_website: "Relevant Website Links",
    asset_interviews: "Previous Interview Links (optional)",
    lbl_final_sentence: "In one sentence: Why should we choose you as a guest?",
    ph_final_sentence: "Summarize your unique contribution as a guest...",
    err_final_sentence: "One sentence summary is required.",
    
    sec_agreement: "7. Guest Release & Participation Agreement",
    agreement_scroll_hint: "Please scroll and read the complete agreement text below to accept.",
    lbl_agree_check: "I have read, understood, and agreed to the terms of the Guest Release & Participation Agreement.",
    err_agree_check: "You must agree to the terms to submit.",
    lbl_sig_name: "Full Name Signature",
    ph_sig_name: "Type your full name to sign",
    err_sig_name: "Signature is required and must match your full name.",
    lbl_sig_date: "Date",
    err_sig_date: "Date is required.",
    
    btn_submit: "Submit Guest Application",
    btn_submitting: "Submitting Application...",
    
    contribution_title: "Production Contribution",
    contribution_desc_1: "Following editorial approval, selected guests will receive a secure payment link to complete their Production Contribution.",
    contribution_desc_2: "Please note that payment is requested only after acceptance by our editorial team. This contribution supports studio operations, crew, post-production editing, and promotional assets.",
    payment_link_lbl: "Secure Payment Link:",
    payment_link_val: "Pending Editorial Approval",
    
    copyright: "© 2026 The Next Chapter LLC. All rights reserved.",
    links_privacy: "Privacy Policy",
    links_terms: "Terms of Service",
    
    modal_title: "Application Submitted Successfully!",
    modal_desc: "Thank you for your interest in appearing on one of our podcasts. Our editorial team will review your application details. If selected, we will contact you directly via phone or email to schedule your pre-interview call.",
    modal_summary_title: "Summary of Submitted Details:",
    modal_summary_name: "Guest Name",
    modal_summary_email: "Email Address",
    modal_summary_phone: "Mobile Number",
    modal_summary_profession: "Profession / Title",
    modal_btn_close: "Close Portal",
    
    quote_1_text: "\"Rania creates an environment where you feel safe to speak your truth, share your vulnerability, and inspire others.\"",
    quote_1_author: "— UAE Media Entrepreneur",
    quote_2_text: "\"Defining my leadership manifesto with Rania was a masterclass in self-reflection. More than an interview, it's a conversation that transforms.\"",
    quote_2_author: "— Corporate CEO & Tech Founder",
    quote_3_text: "\"A masterclass in storytelling. Rania has a unique gift of bringing out the raw human side of every leader.\"",
    quote_3_author: "— Middle East Startup Founder",
    testimonial_label_1: "Media Entrepreneur",
    testimonial_label_2: "Corporate CEO",
    testimonial_label_3: "Startup Founder",
    player_track_title: "No2ta 3al Sater - Season 1 Episode 1 (Teaser)",
    player_track_artist: "Hosted by Rania Barghout",
    player_listen_latest: "Listen to Latest Episode"
  },
  
  ar: {
    page_title: "استمارة طلب استضافة | شركة The Next Chapter",
    nav_about: "عن رانيا",
    nav_shows: "البودكاست",
    nav_process: "آلية التقديم",
    nav_apply: "قدّمي الآن",
    
    brand_logo_text: "نقطة ع السطر",
    testimonials_title: "آراء وشهادات",
    hero_badge: "بوابة تقديم طلبات الاستضافة في البودكاست",
    hero_title: "حيث تتحول القصص إلى حوارات",
    hero_title_2: "إنهم يستحقون حواراً",
    hero_desc: "إذا كنتِ ترين أن قصتك أو خبرتك أو تجربتك يمكن أن تضيف قيمة لجمهورنا، يسعدنا تواصلك معنا. يرجى تعبئة استمارة الطلب أدناه وسيقوم فريقنا بمراجعة طلبك.",
    hero_cta: "قدّمي طلب استضافة",
    
    stat_media_num: "أكثر من ٢٠ عاماً",
    stat_media_label: "تأثير إعلامي ريادي",
    stat_views_num: "الملايين",
    stat_views_label: "إجمالي المشاهدات",
    stat_seats_num: "٢٠ مقعداً",
    stat_seats_label: "مساحة حضور حصرية",
    
    shows_subtitle: "البودكاست",
    shows_title: "حيث تتحول القصص إلى حوارات تترك أثراً",
    shows_desc: "نحرص على استضافة شخصيات تمتلك قصصاً وتجارب وأفكاراً تضيف قيمة حقيقية للمشاهد وتخلق نقاشاً هادفاً في منطقة الشرق الأوسط وخارجها.",
    
    show_nos_title: "نقطة ع السطر (No2ta 3al Sater)",
    show_nos_desc: "تقدّم الإعلامية رانيا برغوت بودكاست \"نقطة ع السطر\"، أحد أسرع البودكاستات العربية المرئية نمواً في المنطقة. ليست الحلقة مجرد مقابلة، بل مساحة حقيقية للحديث عن التجارب والدروس التي شكّلت الإنسان خلف النجاح.",
    show_nos_topics_lbl: "المواضيع الأساسية التي يناقشها:",
    show_nos_topic_1: "التحولات الشخصية وإعادة اكتشاف الذات بعد الأربعين",
    show_nos_topic_2: "تمكين المرأة والقيادة وريادة الأعمال",
    show_nos_topic_3: "الطب الوظيفي، الصحة البدنية، والعافية النفسية",
    show_nos_topic_4: "العلاقات الأسرية والإعلام والأثر المجتمعي والانساني",
    
    show_btl_title: "Between The Lines",
    show_btl_desc: "بودكاست مرئي باللغة الإنجليزية يركز على القيادة كـ \"تجربة إنسانية\". تستضيف رانيا رواد أعمال، مدراء تنفيذيين، وصناع تغيير، وتتوج كل حلقة بصياغة مشتركة لـ \"وثيقة مبادئ القيادة\".",
    show_btl_topics_lbl: "المواضيع الأساسية التي يناقشها:",
    show_btl_topic_1: "القيادة وريادة الأعمال وتأسيس الشركات",
    show_btl_topic_2: "بناء العلامة الشخصية ومهارات التحدث أمام الجمهور",
    show_btl_topic_3: "التكنولوجيا والابتكار والذكاء الاصطناعي",
    show_btl_topic_4: "التطوير المهني والنمو الاستراتيجي للشركات",
    
    btn_watch_youtube: "شاهد على يوتيوب",
    btn_follow_insta: "تابعنا على إنستغرام",
    
    who_subtitle: "من هم ضيوفنا؟",
    who_title: "من هم الشخصيات الذين يظهرون في برامجنا؟",
    who_desc: "نرحب بالشخصيات المتميزة التي تمتلك قصصاً وتجارب قادرة على إلهام وتثقيف وتغيير حياة الآخرين.",
    who_item_1: "يمتلكون قصة ملهمة لمشاركتها مع الجمهور",
    who_item_2: "لديهم خبرة حقيقية ومصداقية مهنية في مجالهم",
    who_item_3: "يحملون منظوراً مختلفاً ورسالة ذات قيمة للمجتمع",
    who_item_4: "مرّوا بتجربة فريدة غنية بالدروس العملية",
    who_item_5: "لديهم معرفة يمكن أن تفيد المشاهد وتلهمه",
    who_item_6: "يطمحون لصناعة تأثير إيجابي إنساني واجتماعي",
    who_review_note: "تتم مراجعة جميع الطلبات بعناية من قبل فريق الإعداد وفقاً لمدى ملاءمتها للخط التحريري. يرجى العلم أن تقديم الطلب لا يضمن بالضرورة القبول أو الاستضافة.",
    
    process_subtitle: "آلية القبول",
    process_title: "مراحل اختيار وقبول الضيوف",
    process_step_1: "تعبئة استمارة الطلب",
    process_step_2: "المراجعة التحريرية",
    process_step_3: "إشعار القبول المبدئي",
    process_step_4: "توقيع إقرار المشاركة",
    process_step_5: "استكمال المساهمة الإنتاجية",
    process_step_6: "تحديد موعد التصوير",
    
    standards_subtitle: "جودة الإنتاج",
    standards_title: "معايير الإنتاج الاحترافية لدينا",
    standards_desc: "نضمن تقديم كل حلقة وتوزيعها بأعلى درجات الاحترافية والجودة البصرية والصوتية:",
    standards_item_1: "تصوير احترافي عالي الدقة متعدد الكاميرات في استوديو مجهز",
    standards_item_2: "تسجيل صوتي نقي وإضاءة سينمائية احترافية متكاملة",
    standards_item_3: "تحضير وبحث تحريري شامل وإعداد مسبق لمحاور اللقاء",
    standards_item_4: "مونتاج احترافي متكامل للصوت والفيديو بمقاييس عالمية",
    standards_item_5: "تصميم وتجهيز مقاطع فيديو ترويجية لمنصات التواصل الاجتماعي",
    standards_item_6: "نشر وتوزيع رقمي واسع على كبرى منصات الاستماع والبث العالمية",
    
    about_subtitle: "نبذة عن مقدمة البرامج",
    about_title: "رانيا برغوت",
    about_bio_1: "رانيا برغوت إعلامية قديرة ومقدمة برامج ومنتجة ومدربة متخصصة في مهارات التواصل، ومؤسسة شركة The Next Chapter LLC. تمتد خبرتها لأكثر من ثلاثين عاماً في مجال الإعلام والتلفزيون والإنتاج، أجرت خلالها مئات المقابلات مع شخصيات عامة وقادة وفنانين، وعُرفت بصفتها مقدمة البرنامج الشهير 'كلام نواعم' على شاشة MBC.",
    about_bio_2: "تعتمد رانيا أسلوباً حوارياً يجمع بين الدفء الإنساني والفضول المهني والعمق، ما يمنح الضيف مساحة آمنة ومريحة للتعبير عن نفسه ومشاركة تفاصيل رحلته والقصص الملهمة التي تقف وراء نجاحه.",
    about_btn: "تواصل مع رانيا",
    eps_subtitle: "معرض الحلقات",
    eps_title: "آخر حلقات البودكاست",
    eps_desc: "تصفحي بعضاً من أكثر حواراتنا تأثيراً وقوة في بودكاست نقطة ع السطر.",
    
    form_badge: "استمارة التقديم",
    form_title: "استمارة طلب المشاركة في البودكاست",
    form_desc: "يرجى تعبئة الحقول أدناه بدقة. تساعد هذه التفاصيل فريق الإعداد التحريري لدينا في تقييم مدى ملاءمة المشاركة والتحضير للبحث التحريري قبل التصوير.",
    
    sec_personal: "١. المعلومات الشخصية",
    lbl_fullname: "الاسم الكامل",
    ph_fullname: "أدخلي الاسم الكامل",
    err_fullname: "الاسم الكامل مطلوب.",
    lbl_pref_name: "الاسم المفضل لظهوره على الشاشة (إذا كان مختلفاً)",
    ph_pref_name: "الاسم الذي ترغبين بظهوره على الشاشة",
    lbl_profession: "المسمى الوظيفي / التخصص",
    ph_profession: "مثال: رائدة أعمال ومستشارة نفسية، طبيبة غدد",
    err_profession: "المسمى الوظيفي مطلوب.",
    lbl_company: "الشركة / المؤسسة",
    ph_company: "مثال: شركة ذا نيكست شابتر",
    err_company: "اسم الشركة مطلوب.",
    lbl_country: "دولة الإقامة",
    ph_country: "مثال: الإمارات العربية المتحدة، المملكة العربية السعودية",
    err_country: "الدولة مطلوبة.",
    lbl_mobile: "رقم الهاتف المحمول",
    ph_mobile: "50 123 4567",
    err_mobile: "يرجى إدخال رقم هاتف صحيح.",
    lbl_email: "البريد الإلكتروني",
    ph_email: "مثال: name@domain.com",
    err_email: "يرجى إدخال بريد إلكتروني صحيح.",
    lbl_website: "الموقع الإلكتروني (إن وجد)",
    ph_website: "مثال: www.thenextchapter.vip",
    lbl_linkedin: "رابط حساب لينكدإن",
    ph_linkedin: "مثال: linkedin.com/in/username",
    lbl_insta: "حساب الإنستغرام",
    ph_insta: "مثال: @username",
    lbl_social_other: "روابط حسابات التواصل الأخرى",
    ph_social_other: "مثال: رابط قناة يوتيوب أو منصة X",
    
    sec_about_you: "٢. نبذة عنك",
    lbl_bio: "نبذة تعريفية مختصرة عن مسيرتك",
    hint_bio: "(من ١٥٠ إلى ٣٠٠ كلمة)",
    ph_bio: "يرجى كتابة نبذة تعريفية مهنية وشخصية مفصلة تشرح مسيرتك ومجال عملك...",
    err_bio: "يجب أن تتراوح النبذة بين ١٥٠ و٣٠٠ كلمة.",
    lbl_best_known: "ما المجال أو التخصص الذي تُعرفين به أكثر من غيره؟",
    ph_best_known: "وضحي مجال تميزك المهني أو العام والسمعة التي تملكها...",
    err_best_known: "هذا الحقل مطلوب.",
    lbl_shaped_you: "ما أبرز التحديات أو التحولات أو الإنجازات التي شكّلت شخصيتك ومسيرتك؟",
    ph_shaped_you: "شاركينا اللحظات المفصلية التي حددت معالم طريقك الحالي...",
    err_shaped_you: "هذا الحقل مطلوب.",
    
    sec_story: "٣. قصتك",
    lbl_story_unique: "ما الذي يجعل قصتك أو تجربتك مختلفة؟",
    ph_story_unique: "وضحي الجانب المميز والاستثنائي في رحلتك...",
    err_story_unique: "هذا الحقل مطلوب.",
    lbl_story_benefit: "لماذا ترين أن الجمهور سيستفيد من سماع وجهة نظرك وتجربتك؟",
    ph_story_benefit: "ما هي القيمة والدروس التي سيخرج بها المستمع من حلقة الحوار...",
    err_story_benefit: "هذا الحقل مطلوب.",
    lbl_qualified_topics: "ما هي المواضيع التي يمكنك التحدث عنها ولديك الكفاءة فيها؟ (يرجى اختيار كل ما ينطبق)",
    err_topics: "يرجى اختيار موضوع واحد على الأقل.",
    
    topic_leadership: "القيادة",
    topic_entrepreneurship: "ريادة الأعمال",
    topic_empowerment: "تمكين المرأة",
    topic_wellness: "الصحة والعافية",
    topic_medicine: "الطب الوظيفي والبديل",
    topic_mental: "الصحة النفسية",
    topic_career: "التطوير المهني",
    topic_media: "الإعلام والتواصل",
    topic_personal_dev: "التطوير الشخصي",
    topic_relationships: "العلاقات الإنسانية",
    topic_parenting: "التربية والأسرة",
    topic_finance: "المال والاستثمار",
    topic_tech: "التكنولوجيا والعلوم",
    topic_ai: "الذكاء الاصطناعي",
    topic_education: "التعليم والتدريب",
    topic_creativity: "الإبداع والفنون",
    topic_social: "العمل الإنساني والتأثير المجتمعي",
    lbl_topic_other: "موضوع آخر:",
    ph_topic_other: "حددي موضوعاً آخر...",
    
    sec_proposal: "٤. مقترح الحلقة",
    lbl_proposal: "إذا تمت استضافتك في البودكاست، ما هي المحاور المقترحة للمناقشة؟",
    lbl_talking_points: "يرجى كتابة من ٣ إلى ٥ نقاط رئيسية مقترحة للحوار:",
    ph_tp_1: "المحور الأول المقترح",
    ph_tp_2: "المحور الثاني المقترح",
    ph_tp_3: "المحور الثالث المقترح",
    ph_tp_4: "المحور الرابع المقترح (اختياري)",
    ph_tp_5: "المحور الخامس المقترح (اختياري)",
    err_tp: "يرجى تعبئة ٣ محاور على الأقل للحوار.",
    
    sec_value: "٥. القيمة المضافة وتجربتك الإعلامية السابقة",
    lbl_takeaway: "ما الرسالة أو الفكرة الأهم التي ترغبين أن يتذكرها المشاهد بعد انتهاء الحلقة؟",
    ph_takeaway: "صيغي الرسالة الأساسية في سطر أو سطرين...",
    err_takeaway: "هذا الحقل مطلوب.",
    lbl_prev_media: "هل سبق لكِ الظهور في برامج تلفزيونية، إذاعية، بودكاست، أو مؤتمرات عامة؟",
    btn_yes: "نعم",
    btn_no: "لا",
    lbl_media_links: "إذا كانت الإجابة بنعم، يرجى إرفاق روابط المقابلات أو الظهور الإعلامي السابق:",
    ph_media_links: "أدخلي روابط يوتيوب، مواقع إلكترونية، أو مقابلات سابقة...",
    
    sec_assets: "٦. المواد الترويجية الإضافية والملخص",
    lbl_attach_list: "قائمة المواد الترويجية المطلوبة (يرجى تجهيزها لإرسالها بالبريد الإلكتروني في حال القبول):",
    asset_headshot: "صورة شخصية احترافية بجودة عالية",
    asset_bio: "نبذة تعريفية مهنية مكتوبة وجاهزة",
    asset_logo: "شعار الشركة أو المؤسسة الخاصة بكِ (إن وجد)",
    asset_website: "روابط المشاريع أو المواقع ذات الصلة",
    asset_interviews: "روابط لمقابلات سابقة بالفيديو أو الصوت (اختياري)",
    lbl_final_sentence: "في سطر واحد فقط: لماذا نختاركِ لتكوني ضيفة البودكاست؟",
    ph_final_sentence: "لخصي القيمة المضافة التي ستقدمينها للبرنامج في سطر واحد...",
    err_final_sentence: "هذا الحقل مطلوب ولا يجب تركه فارغاً.",
    
    sec_agreement: "٧. إقرار المشاركة والتنازل الإعلامي والتنازل عن الصور والتسجيلات",
    agreement_scroll_hint: "يرجى التمرير وقراءة كامل نص الإقرار أدناه للموافقة والاستكمال.",
    lbl_agree_check: "أوافق وأقر بالتزامي بجميع بنود إقرار المشاركة والتنازل الإعلامي المذكورة أعلاه.",
    err_agree_check: "يجب الموافقة على الشروط للمتابعة.",
    lbl_sig_name: "توقيع الاسم الكامل",
    ph_sig_name: "اكتبي اسمك الكامل للتوقيع الإلكتروني",
    err_sig_name: "التوقيع مطلوب ويجب أن يتطابق مع اسمك الكامل المدخل أعلاه.",
    lbl_sig_date: "التاريخ",
    err_sig_date: "التاريخ مطلوب لتوقيع الإقرار.",
    
    btn_submit: "إرسال طلب الاستضافة",
    btn_submitting: "جاري إرسال الطلب...",
    
    contribution_title: "المساهمة الإنتاجية والتغطية التشغيلية للبودكاست",
    contribution_desc_1: "بعد مراجعة الطلب والموافقة المبدئية عليه من قبل الفريق التحريري وتأكيد الاستضافة، سيتم إرسال رابط دفع آمن لإتمام إجراءات المساهمة الإنتاجية للضيف.",
    contribution_desc_2: "يرجى العلم أن الرسوم تطلب فقط بعد القبول الرسمي من قبل لجنة الإعداد والخط التحريري للبرنامج. تساهم هذه الرسوم في دعم تكاليف فريق الإعداد، طاقم التصوير، الاستوديو الفني، هندسة الصوت، عمليات المونتاج وتصميم المقتطفات الترويجية لشبكات التواصل الاجتماعي.",
    payment_link_lbl: "رابط الدفع الآمن:",
    payment_link_val: "بانتظار المراجعة والقبول التحريري للطلب",
    
    copyright: "© ٢٠٢٦ جميع الحقوق محفوظة لشركة The Next Chapter LLC.",
    links_privacy: "سياسة الخصوصية",
    links_terms: "شروط الاستخدام",
    
    modal_title: "تم إرسال طلبك بنجاح!",
    modal_desc: "شكراً لاهتمامك بالظهور في أحد برامجنا الحوارية وصناعة محتوى ملهم لجمهورنا. يراجع الفريق التحريري حالياً طلبك بعناية، وسيتواصل معك أحد أعضاء فريق الإعداد لتنسيق خطوة ما قبل المقابلة الحوارية في حال القبول والاعتماد.",
    modal_summary_title: "ملخص الطلب المقدم:",
    modal_summary_name: "اسم الضيف",
    modal_summary_email: "البريد الإلكتروني",
    modal_summary_phone: "رقم الهاتف",
    modal_summary_profession: "المسمى الوظيفي / التخصص",
    modal_btn_close: "إإغلاق البوابة",
    
    quote_1_text: "«تخلق رانيا بيئة تشعر فيها بالأمان للتعبير عن حقيقتك ومشاركة نقاط تحولك وإلهام الآخرين.»",
    quote_1_author: "— رائدة أعمال إعلامية، الإمارات",
    quote_2_text: "«كانت صياغة مبادئ القيادة الخاصة بي مع رانيا بمثابة درس ملهم في التفكير الذاتي. إنها أكثر من مجرد مقابلة، إنها محادثة تغير حياتك.»",
    quote_2_author: "— رئيس تنفيذي ومؤسس شركات تكنولوجية",
    quote_3_text: "«درس متكامل في فن سرد القصص. تمتلك رانيا موهبة فريدة في إبراز الجانب الإنساني الصادق لكل قائد.»",
    quote_3_author: "— مؤسس شركة ناشئة، الشرق الأوسط",
    testimonial_label_1: "رائدة أعمال إعلامية",
    testimonial_label_2: "رئيس تنفيذي",
    testimonial_label_3: "مؤسس شركة ناشئة",
    player_track_title: "نقطة ع السطر - الموسم الأول، الحلقة الأولى (مقتطف التقديم)",
    player_track_artist: "تقديم رانيا برغوت",
    player_listen_latest: "استمع للحلقة الأخيرة"
  }
};

// --- Language Controller State ---
let currentLang = 'en';

// --- Initialize App Controls ---
document.addEventListener('DOMContentLoaded', () => {
  // Lazy load hero background video
  const heroVideo = document.getElementById('hero-video');
  if (heroVideo) {
    const source = document.createElement('source');
    source.src = 'assets/hero_video.mp4';
    source.type = 'video/mp4';
    heroVideo.appendChild(source);
    heroVideo.load();
  }

  // Sync page default LTR
  setLanguage('en');
  
  // Scrolled Header Animation
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Hamburger drawer navigation open/close logic
  const hamburgerBtn = document.querySelector('#hamburger-btn');
  const mobileDrawer = document.querySelector('#mobile-drawer');
  const drawerOverlay = document.querySelector('#drawer-overlay');
  const drawerCloseLinks = document.querySelectorAll('.mobile-drawer .nav-link, #drawer-overlay');
  
  const toggleDrawer = () => {
    const isOpen = mobileDrawer.classList.contains('open');
    mobileDrawer.classList.toggle('open', !isOpen);
    drawerOverlay.classList.toggle('visible', !isOpen);
    hamburgerBtn.innerHTML = isOpen ? '☰' : '✕';
  };
  
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleDrawer);
  }
  drawerCloseLinks.forEach(link => link.addEventListener('click', () => {
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('visible');
    if (hamburgerBtn) hamburgerBtn.innerHTML = '☰';
  }));
  
  // Bind Language Switches
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.target.getAttribute('data-lang');
      langBtns.forEach(b => {
        if (b.getAttribute('data-lang') === selectedLang) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
      setLanguage(selectedLang);
    });
  });
  
  // Custom Phone Code Dropdown Selector
  const countrySelect = document.querySelector('#country-select');
  const phonePrefixInput = document.querySelector('#phone-prefix');
  
  if (countrySelect && phonePrefixInput) {
    countrySelect.addEventListener('change', (e) => {
      const selectedVal = e.target.value;
      let prefix = '+971';
      
      if (selectedVal === 'sa') {
        prefix = '+966';
      } else if (selectedVal === 'qa') {
        prefix = '+974';
      } else if (selectedVal === 'kw') {
        prefix = '+965';
      } else if (selectedVal === 'uk') {
        prefix = '+44';
      } else if (selectedVal === 'intl') {
        prefix = '+1';
      }
      phonePrefixInput.value = prefix;
    });
  }
  
  // Previous Media Appearances Links Toggle
  const radioYes = document.querySelector('#media-yes');
  const radioNo = document.querySelector('#media-no');
  const mediaLinksGroup = document.querySelector('#media-links-group');
  const mediaLinksInput = document.querySelector('#form-media-links');
  
  const toggleMediaLinks = () => {
    if (radioYes && radioYes.checked) {
      mediaLinksGroup.style.display = 'block';
      mediaLinksInput.required = true;
    } else if (mediaLinksGroup) {
      mediaLinksGroup.style.display = 'none';
      if (mediaLinksInput) {
        mediaLinksInput.required = false;
        mediaLinksInput.value = '';
      }
    }
  };
  
  if (radioYes && radioNo) {
    radioYes.addEventListener('change', toggleMediaLinks);
    radioNo.addEventListener('change', toggleMediaLinks);
  }
  
  // BIO Textarea word counter (150-300 words required)
  const bioTextarea = document.querySelector('#form-bio');
  const wordCounterSpan = document.querySelector('#bio-word-count');
  const wordCountError = document.querySelector('#bio-word-error');
  
  if (bioTextarea && wordCounterSpan) {
    bioTextarea.addEventListener('input', () => {
      const text = bioTextarea.value.trim();
      const words = text ? text.split(/\s+/).filter(w => w.length > 0).length : 0;
      wordCounterSpan.textContent = words;
      
      if (words < 150 || words > 300) {
        bioTextarea.setCustomValidity('Word count out of range');
        if (wordCountError) wordCountError.style.display = 'block';
      } else {
        bioTextarea.setCustomValidity('');
        if (wordCountError) wordCountError.style.display = 'none';
      }
    });
  }
  
  // Guest Release scroll box checker (forces guest to read/scroll to allow accept check)
  const agreementBox = document.querySelector('#agreement-text-box');
  const agreementCheck = document.querySelector('#form-agreement-check');
  const agreementCheckLabel = document.querySelector('#agreement-check-label');
  
  if (agreementBox && agreementCheck && agreementCheckLabel) {
    agreementBox.addEventListener('scroll', () => {
      const difference = agreementBox.scrollHeight - agreementBox.clientHeight;
      if (agreementBox.scrollTop >= difference - 30) {
        agreementCheck.disabled = false;
        agreementCheckLabel.style.opacity = '1';
        agreementCheckLabel.style.cursor = 'pointer';
      }
    });
  }
  
  // Validate that signature text matches full name
  const fullNameInput = document.querySelector('#form-fullname');
  const signatureInput = document.querySelector('#form-sig-name');
  const signatureError = document.querySelector('#sig-error-msg');
  
  const verifySignature = () => {
    if (!fullNameInput || !signatureInput) return true;
    const name = fullNameInput.value.trim();
    const signature = signatureInput.value.trim();
    
    if (name.length > 0 && signature.length > 0 && name.toLowerCase() !== signature.toLowerCase()) {
      signatureInput.setCustomValidity('Signature does not match full name');
      if (signatureError) signatureError.style.display = 'block';
      return false;
    } else {
      signatureInput.setCustomValidity('');
      if (signatureError) signatureError.style.display = 'none';
      return true;
    }
  };
  
  if (signatureInput && fullNameInput) {
    signatureInput.addEventListener('input', verifySignature);
    fullNameInput.addEventListener('input', verifySignature);
  }
  
  // Form submission validation interception
  const applyForm = document.querySelector('#apply-form');
  const submitBtn = document.querySelector('#submit-btn');
  const submitText = document.querySelector('#submit-btn-text');
  const submitSpinner = document.querySelector('#submit-spinner');
  
  // Verify that at least one topic checkbox is selected
  const verifyTopics = () => {
    const checkedTopics = document.querySelectorAll('.topic-checkbox:checked');
    const topicsError = document.querySelector('#topics-error-msg');
    
    if (!topicsError) return true;
    
    if (checkedTopics.length === 0) {
      topicsError.style.display = 'block';
      return false;
    } else {
      topicsError.style.display = 'none';
      return true;
    }
  };
  
  document.querySelectorAll('.topic-checkbox').forEach(box => {
    box.addEventListener('change', verifyTopics);
  });
  
  if (applyForm) {
    applyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const isTopicsValid = verifyTopics();
      const isSignatureValid = verifySignature();
      
      if (!isTopicsValid) {
        const anchor = document.querySelector('#topics-section-anchor');
        if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      
      if (!isSignatureValid) {
        signatureInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        signatureInput.focus();
        return;
      }
      
      if (applyForm.checkValidity()) {
        submitBtn.disabled = true;
        submitText.textContent = translations[currentLang].btn_submitting;
        submitSpinner.style.display = 'inline-block';
        
        const fullName = fullNameInput.value.trim();
        const email = document.querySelector('#form-email').value.trim();
        const phonePrefix = phonePrefixInput.value;
        const phoneNum = document.querySelector('#form-phone-number').value.trim();
        const title = document.querySelector('#form-profession').value.trim();
        
        setTimeout(() => {
          submitSpinner.style.display = 'none';
          submitBtn.disabled = false;
          submitText.textContent = translations[currentLang].btn_submit;
          
          showSuccessModal({
            name: fullName,
            email: email,
            phone: `${phonePrefix} ${phoneNum}`,
            profession: title
          });
          
          applyForm.reset();
          wordCounterSpan.textContent = '0';
          phonePrefixInput.value = '+971';
          countrySelect.value = 'ae';
          if (mediaLinksGroup) mediaLinksGroup.style.display = 'none';
          
          agreementCheck.disabled = true;
          agreementCheckLabel.style.opacity = '0.5';
          agreementCheckLabel.style.cursor = 'not-allowed';
        }, 2000);
      } else {
        applyForm.reportValidity();
      }
    });
  }
  
  // Sync aria-invalid attributes for accessibility
  const syncAria = (el) => {
    if (el.setAttribute) {
      el.setAttribute('aria-invalid', el.matches(':user-invalid') ? 'true' : 'false');
    }
  };
  
  const formInputs = document.querySelectorAll('.form-input, .form-textarea');
  formInputs.forEach(input => {
    input.addEventListener('blur', () => syncAria(input), true);
    input.addEventListener('input', () => {
      if (input.hasAttribute('aria-invalid')) syncAria(input);
    });
  });
  
  // FAQ Collapsible Accordions
  const faqQuestions = document.querySelectorAll('.faq-question-btn');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');
      
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
  
  // Success Modal Close button
  const modalOverlay = document.querySelector('#modal-overlay');
  const btnCloseModal = document.querySelector('#btn-close-modal');
  if (btnCloseModal && modalOverlay) {
    btnCloseModal.addEventListener('click', () => {
      modalOverlay.classList.remove('open');
    });
  }

  // --- Sticky Audio Player Logic ---
  const sonaarPlayer = document.querySelector('#sonaar-player');
  const playBtn = document.querySelector('#player-play-btn');
  const playIcon = document.querySelector('#player-play-icon');
  const timeDisplay = document.querySelector('#player-time-display');
  const progressBar = document.querySelector('#player-progress-bar');
  const progressContainer = document.querySelector('#player-progress-container');
  const volumeBtn = document.querySelector('#player-volume-btn');
  const volumeIcon = document.querySelector('#player-volume-icon');
  const collapseBtn = document.querySelector('#player-collapse-btn');
  const expandBtn = document.querySelector('#player-expand-btn');

  let isPlaying = false;
  let isMuted = false;
  let duration = 90; // mock duration in seconds (1:30)
  let currentTime = 0;
  let playbackInterval = null;

  // Format seconds into MM:SS
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const updateTimeAndProgress = () => {
    if (timeDisplay && progressBar) {
      timeDisplay.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
      const percentage = (currentTime / duration) * 100;
      progressBar.style.width = `${percentage}%`;
    }
  };

  const playPodcast = () => {
    isPlaying = true;
    if (playBtn) playBtn.classList.add('playing');
    if (sonaarPlayer) sonaarPlayer.classList.add('playing');
    
    playbackInterval = setInterval(() => {
      currentTime += 1;
      if (currentTime >= duration) {
        pausePodcast();
        currentTime = 0;
      }
      updateTimeAndProgress();
    }, 1000);
  };

  const pausePodcast = () => {
    isPlaying = false;
    if (playBtn) playBtn.classList.remove('playing');
    if (sonaarPlayer) sonaarPlayer.classList.remove('playing');
    clearInterval(playbackInterval);
  };

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (isPlaying) {
        pausePodcast();
      } else {
        playPodcast();
      }
    });
  }

  // Handle clicking on progress bar to seek
  if (progressContainer) {
    progressContainer.addEventListener('click', (e) => {
      const rect = progressContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const clickPercentage = clickX / width;
      currentTime = Math.floor(clickPercentage * duration);
      updateTimeAndProgress();
    });
  }

  // Toggle Mute
  if (volumeBtn) {
    volumeBtn.addEventListener('click', () => {
      isMuted = !isMuted;
      volumeBtn.classList.toggle('muted', isMuted);
    });
  }

  // Collapse player
  if (collapseBtn && sonaarPlayer && expandBtn) {
    collapseBtn.addEventListener('click', () => {
      sonaarPlayer.classList.add('collapsed');
      setTimeout(() => {
        expandBtn.style.display = 'flex';
      }, 300); // sync with slide-down transition
    });
  }

  // Expand player
  if (expandBtn && sonaarPlayer) {
    expandBtn.addEventListener('click', () => {
      expandBtn.style.display = 'none';
      sonaarPlayer.classList.remove('collapsed');
    });
  }

  // --- Premium Testimonials Switcher Logic ---
  const selectorBtns = document.querySelectorAll('.selector-btn');
  const activeQuote = document.getElementById('active-quote-text');
  const activeAuthor = document.getElementById('active-quote-author');
  const testimonialNumber = document.getElementById('testimonial-number');
  const testimonialProgressFill = document.getElementById('testimonial-progress-fill');

  if (selectorBtns.length > 0 && activeQuote && activeAuthor) {
    selectorBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'));
        
        // Remove active class from all buttons
        selectorBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Apply visual fade transition
        activeQuote.style.opacity = '0';
        activeQuote.style.transform = 'scale(0.98) translateY(10px)';
        activeAuthor.style.opacity = '0';
        if (testimonialNumber) {
          testimonialNumber.style.opacity = '0';
          testimonialNumber.style.transform = 'translateY(-10px) scale(0.95)';
        }

        setTimeout(() => {
          const lang = currentLang || 'en';
          
          // Dynamically set translation i18n keys for generic translator sync
          const textKey = `quote_${index + 1}_text`;
          const authorKey = `quote_${index + 1}_author`;
          
          activeQuote.setAttribute('data-i18n', textKey);
          activeAuthor.setAttribute('data-i18n', authorKey);

          // Inject content
          activeQuote.innerHTML = translations[lang][textKey];
          activeAuthor.innerHTML = translations[lang][authorKey];
          
          // Update background number and progress fill track
          if (testimonialNumber) {
            testimonialNumber.textContent = String(index + 1).padStart(2, '0');
          }
          if (testimonialProgressFill) {
            testimonialProgressFill.style.height = `${((index + 1) / selectorBtns.length) * 100}%`;
          }

          // Fade back in
          activeQuote.style.opacity = '1';
          activeQuote.style.transform = 'scale(1) translateY(0)';
          activeAuthor.style.opacity = '1';
          if (testimonialNumber) {
            testimonialNumber.style.opacity = '0.03';
            testimonialNumber.style.transform = 'translateY(0) scale(1)';
          }
        }, 220);
      });
    });
  }
  // --- Spotlight hover effect for Show Cards ---
  const showCards = document.querySelectorAll('.show-card');
  showCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});

// --- Dynamic Translator Function ---
function setLanguage(lang) {
  currentLang = lang;
  
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  if (lang === 'ar') {
    document.body.classList.add('rtl');
  } else {
    document.body.classList.remove('rtl');
  }
  
  document.title = translations[lang].page_title;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const pKey = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][pKey]) {
      el.placeholder = translations[lang][pKey];
    }
  });
  
  const emailInput = document.querySelector('#form-email');
  if (emailInput) {
    emailInput.setAttribute('aria-errormessage', 'email-err-msg');
  }
}

// --- Success Modal Controller ---
function showSuccessModal(data) {
  const modalOverlay = document.querySelector('#modal-overlay');
  
  if (modalOverlay) {
    document.querySelector('#modal-val-name').textContent = data.name;
    document.querySelector('#modal-val-email').textContent = data.email;
    document.querySelector('#modal-val-phone').textContent = data.phone;
    document.querySelector('#modal-val-profession').textContent = data.profession;
    
    modalOverlay.classList.add('open');
  }
}

// --- CSS supports fallback view() intersection details ---
if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        }
      }
    },
    {
      threshold: 0.1,
    }
  );

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      observer.observe(el);
    });
  });
}
