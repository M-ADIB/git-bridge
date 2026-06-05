/* ==========================================================================
   INTERACTIVE LOGIC (UPDATED) - GUEST APPLICATION PORTAL - THE NEXT CHAPTER
   ========================================================================== */

// --- Comprehensive Translation Dictionary (NO EMOJIS) ---
const translations = {
  en: {
    landing_page_title: "The Next Chapter | Podcasts by Rania Barghout",
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
    
    stat_media_num: "10M+",
    stat_media_label: "Video Views",
    stat_views_num: "15M+",
    stat_views_label: "Impressions Reached",
    stat_seats_num: "5M+",
    stat_seats_label: "Audience Reach",
    
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
    process_detail_title_1: "Submit Application",
    process_detail_desc_1: "Complete the online application form with your biography, professional milestones, and proposed conversation topics.",
    process_detail_title_2: "Editorial Review",
    process_detail_desc_2: "Our editorial team evaluates your profile, story uniqueness, and audience alignment.",
    process_detail_title_3: "Approval Notification",
    process_detail_desc_3: "Receive notification of selection and prepare for pre-interview coordination.",
    process_detail_title_4: "Participation Agreement",
    process_detail_desc_4: "Sign the guest agreement and release forms to finalize participation.",
    process_detail_title_5: "Production Contribution",
    process_detail_desc_5: "Complete the production contribution to support studio and editing operations.",
    process_detail_title_6: "Scheduling & Recording",
    process_detail_desc_6: "Schedule your recording slot and join us in the studio for your conversation.",
    
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
    player_listen_latest: "Listen to Latest Episode",
    latest_ep_subtitle: "Featured Episode",
    latest_ep_title: "Latest Episode Spotlight",
    latest_ep_loading_title: "Loading Featured Episode...",
    latest_ep_loading_desc: "Connecting to the database to fetch the latest episode.",
    btn_play_audio: "Play Audio Episode",
    btn_pause_audio: "Pause Audio",
    
    // Sponsorship Form
    tab_become_sponsor: "Become a Sponsor",
    form_badge_sponsor: "Sponsorship Inquiry",
    form_title_sponsor: "Sponsor Inquiry Form",
    form_desc_sponsor: "Please complete the inquiry details below. Our sponsorship team will review your proposal and get in touch within 2 business days.",
    sec_sponsor_info: "1. Company & Contact Information",
    sec_sponsorship_details: "2. Sponsorship Details",
    lbl_sponsor_tier: "Sponsorship Tier of Interest",
    ph_sponsor_tier: "Select a sponsorship tier",
    opt_tier_title: "Title Sponsor (Exclusive)",
    opt_tier_episode: "Episode Sponsor",
    opt_tier_segment: "Segment Sponsor",
    opt_tier_general: "General Partner",
    err_sponsor_tier: "Sponsorship tier is required.",
    lbl_sponsor_goals: "Partnership & Marketing Goals",
    ph_sponsor_goals: "Describe your primary objectives and what you hope to achieve through this partnership...",
    err_sponsor_goals: "Please describe your partnership goals.",
    sec_sponsor_agreement: "3. Partnership Agreement & Consent",
    sponsor_agreement_text: "I confirm that I am authorized to submit this sponsorship inquiry on behalf of the company listed above. I understand that submitting this inquiry does not constitute a binding sponsorship agreement, and that partnership terms are subject to mutual contract execution.",
    lbl_sponsor_agree_check: "I have read, understood, and agreed to the sponsorship terms.",
    btn_submit_sponsor: "Submit Sponsor Inquiry",
    btn_submitting_sponsor: "Submitting Inquiry...",
    cta_become_sponsor: "Become a Sponsor",
    tab_apply_guest: "Apply as Guest",
    lbl_target_podcast: "Target Podcast",
    opt_target_both: "Both Podcasts (Arabic & English)",
    opt_target_nos: "No2ta 3al Sater (Arabic)",
    opt_target_btl: "Between The Lines (English)",
    lbl_budget_range: "Estimated Budget Range",
    opt_budget_under_5k: "Under $5,000",
    opt_budget_5k_10k: "$5,000 - $10,000",
    opt_budget_10k_25k: "$10,000 - $25,000",
    opt_budget_over_25k: "Above $25,000",
    lbl_company_name: "Company Name",
    ph_company_name: "Enter company or brand name",
    err_company_name: "Company name is required.",
    lbl_contact_name: "Contact Person",
    ph_contact_name: "Enter your full name",
    err_contact_name: "Contact person name is required.",
    lbl_contact_title: "Position / Title",
    ph_contact_title: "e.g., Marketing Director, CEO",
    err_contact_title: "Position/Title is required."
  },
  
  ar: {
    landing_page_title: "المنعطف التالي | بودكاست رانيا برغوت",
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
    
    stat_media_num: "١٠ ملايين+",
    stat_media_label: "مشاهدات الفيديو",
    stat_views_num: "١٥ مليوناً+",
    stat_views_label: "ظهور وانطباع",
    stat_seats_num: "٥ ملايين+",
    stat_seats_label: "وصول الجمهور",
    
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
    process_detail_title_1: "تعبئة استمارة الطلب",
    process_detail_desc_1: "أدخلي بياناتك وسيرتك المهنية واقترحي محاور ومواضيع الحلقة الحوارية.",
    process_detail_title_2: "المراجعة التحريرية",
    process_detail_desc_2: "يقوم فريقنا بمراجعة طلبك بدقة وتقييم القيمة المضافة لجمهور البودكاست.",
    process_detail_title_3: "إشعار القبول المبدئي",
    process_detail_desc_3: "استلام إشعار بالقبول والتأكيد من لجنة الإعداد لبدء التنسيق للمقابلة.",
    process_detail_title_4: "توقيع إقرار المشاركة",
    process_detail_desc_4: "توقيع إقرارات المشاركة والتنازل الإعلامي وتصاريح النشر والتوزيع.",
    process_detail_title_5: "استكمال المساهمة الإنتاجية",
    process_detail_desc_5: "استكمال إجراءات المساهمة الإنتاجية لدعم تشغيل الاستوديو وعمليات المونتاج الفني.",
    process_detail_title_6: "تحديد موعد التصوير",
    process_detail_desc_6: "تنسيق موعد تسجيل الحلقة في الاستوديو وبدء التصوير والحوار.",
    
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
    player_listen_latest: "استمع للحلقة الأخيرة",
    latest_ep_subtitle: "الحلقة المميزة",
    latest_ep_title: "آخر حلقة تسليط الضوء",
    latest_ep_loading_title: "جاري تحميل الحلقة المميزة...",
    latest_ep_loading_desc: "جاري الاتصال بقاعدة البيانات لجلب الحلقة الأخيرة.",
    btn_play_audio: "تشغيل الحلقة الصوتية",
    btn_pause_audio: "إيقاف مؤقت",
    
    // Sponsorship Form Arabic
    tab_become_sponsor: "رعاية البودكاست",
    form_badge_sponsor: "طلب رعاية",
    form_title_sponsor: "استمارة طلب رعاية البودكاست",
    form_desc_sponsor: "يرجى تعبئة تفاصيل طلب الرعاية أدناه. سيقوم فريق الرعاية والدعم بمراجعة طلبك والتواصل معك خلال يومي عمل.",
    sec_sponsor_info: "١. معلومات الشركة والتواصل",
    sec_sponsorship_details: "٢. تفاصيل الرعاية المطلوبة",
    lbl_sponsor_tier: "فئة الرعاية المهتم بها",
    ph_sponsor_tier: "اختر فئة الرعاية",
    opt_tier_title: "راعي رئيسي (حصري)",
    opt_tier_episode: "راعي حلقة",
    opt_tier_segment: "راعي فقرة",
    opt_tier_general: "شريك عام",
    err_sponsor_tier: "فئة الرعاية مطلوبة.",
    lbl_sponsor_goals: "أهداف الشراكة والتسويق",
    ph_sponsor_goals: "صِف أهدافكم الرئيسية وما تأملون في تحقيقه من خلال هذه الشراكة...",
    err_sponsor_goals: "يرجى كتابة أهداف الشراكة.",
    sec_sponsor_agreement: "٣. اتفاقية الشراكة والموافقة",
    sponsor_agreement_text: "أؤكد أنني مفوض لتقديم هذا الطلب بالنيابة عن الشركة المذكورة أعلاه. وأتفهم أن تقديم هذا الطلب لا يمثل اتفاقية رعاية ملزمة، وأن شروط الشراكة تخضع لتوقيع عقد متبادل.",
    lbl_sponsor_agree_check: "لقد قرأت الشروط وأوافق على شروط تقديم طلب الرعاية.",
    btn_submit_sponsor: "تقديم طلب الرعاية",
    btn_submitting_sponsor: "جاري إرسال الطلب...",
    cta_become_sponsor: "رعاية البودكاست",
    tab_apply_guest: "تقديم كضيف",
    lbl_target_podcast: "البودكاست المستهدف",
    opt_target_both: "كلا البرنامجين (بالعربية والانجليزية)",
    opt_target_nos: "نقطة ع السطر (بالعربية)",
    opt_target_btl: "Between The Lines (بالانجليزية)",
    lbl_budget_range: "الميزانية التقديرية",
    opt_budget_under_5k: "أقل من ٥,٠٠٠ دولار",
    opt_budget_5k_10k: "٥,٠٠٠ - ١٠,٠٠٠ دولار",
    opt_budget_10k_25k: "١٠,٠٠٠ - ٢٥,٠٠٠ دولار",
    opt_budget_over_25k: "أكثر من ٢٥,٠٠٠ دولار",
    lbl_company_name: "اسم الشركة / العلامة التجارية",
    ph_company_name: "أدخل اسم الشركة أو العلامة التجارية",
    err_company_name: "اسم الشركة مطلوب.",
    lbl_contact_name: "اسم الشخص المسؤول",
    ph_contact_name: "أدخل اسمك الكامل",
    err_contact_name: "اسم المسؤول مطلوب.",
    lbl_contact_title: "المسمى الوظيفي",
    ph_contact_title: "مثال: مدير التسويق، الرئيس التنفيذي",
    err_contact_title: "المسمى الوظيفي مطلوب."
  }
};

// --- Language Controller State ---
let currentLang = 'en';

// --- Supabase Config ---
const SUPABASE_URL = 'https://uaqdwpsammcqrlyzstlj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhcWR3cHNhbW1jcXJseXpzdGxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0OTM5NjYsImV4cCI6MjA5NjA2OTk2Nn0.eVqT47zk1J8LRtK_y0kveMW6eCOn5zZZSiQklWouC68';
const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

// --- Global Audio/Video State ---
let realAudioInstance = null;
let latestEpisodeData = null;
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
  const timeDisplay = document.querySelector('#player-time-display');
  const progressBar = document.querySelector('#player-progress-bar');
  if (timeDisplay && progressBar) {
    timeDisplay.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
    const percentage = (currentTime / duration) * 100;
    progressBar.style.width = `${percentage}%`;
  }
};

const updateSpotlightPlayState = (playing) => {
  const spotlightBtn = document.getElementById('spotlight-audio-play-btn');
  if (spotlightBtn) {
    spotlightBtn.classList.toggle('playing', playing);
    const playIconSvg = spotlightBtn.querySelector('.play-icon');
    const pauseIconSvg = spotlightBtn.querySelector('.pause-icon');
    if (playIconSvg && pauseIconSvg) {
      playIconSvg.style.display = playing ? 'none' : 'block';
      pauseIconSvg.style.display = playing ? 'block' : 'none';
    }
  }
};

const playPodcast = () => {
  isPlaying = true;
  const playBtn = document.querySelector('#player-play-btn');
  const sonaarPlayer = document.querySelector('#sonaar-player');
  if (playBtn) playBtn.classList.add('playing');
  if (sonaarPlayer) sonaarPlayer.classList.add('playing');
  updateSpotlightPlayState(true);
  
  if (realAudioInstance) {
    realAudioInstance.play();
  } else {
    if (playbackInterval) clearInterval(playbackInterval);
    playbackInterval = setInterval(() => {
      currentTime += 1;
      if (currentTime >= duration) {
        pausePodcast();
        currentTime = 0;
      }
      updateTimeAndProgress();
    }, 1000);
  }
};

const pausePodcast = () => {
  isPlaying = false;
  const playBtn = document.querySelector('#player-play-btn');
  const sonaarPlayer = document.querySelector('#sonaar-player');
  if (playBtn) playBtn.classList.remove('playing');
  if (sonaarPlayer) sonaarPlayer.classList.remove('playing');
  updateSpotlightPlayState(false);
  
  if (realAudioInstance) {
    realAudioInstance.pause();
  } else {
    clearInterval(playbackInterval);
  }
};

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

  // Detect language from URL search parameters or fallback to 'en'
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  const defaultLang = (urlLang === 'ar' || urlLang === 'en') ? urlLang : 'en';
  
  setLanguage(defaultLang);
  
  // Sync the language toggle buttons in the drawer
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    if (btn.getAttribute('data-lang') === defaultLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Load dynamic content from Supabase
  loadLatestEpisode();
  loadTickerEpisodes();
  
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
    if (hamburgerBtn) {
      hamburgerBtn.classList.toggle('active', !isOpen);
      hamburgerBtn.innerHTML = isOpen ? '☰' : '✕';
    }
  };
  
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleDrawer);
  }
  drawerCloseLinks.forEach(link => link.addEventListener('click', () => {
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('visible');
    if (hamburgerBtn) {
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.innerHTML = '☰';
    }
  }));
  
  // Bind Language Switches (Updated with premium Transition Delay)
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.target.getAttribute('data-lang');
      if (selectedLang === currentLang) return; // avoid redundant switches

      // Start transition blur fade-out
      document.body.classList.add('lang-transitioning');

      setTimeout(() => {
        langBtns.forEach(b => {
          if (b.getAttribute('data-lang') === selectedLang) {
            b.classList.add('active');
          } else {
            b.classList.remove('active');
          }
        });
        setLanguage(selectedLang);

        // Fade back in smoothly
        document.body.classList.remove('lang-transitioning');
      }, 350);
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
        const company = document.querySelector('#form-company') ? document.querySelector('#form-company').value.trim() : null;
        const bio = bioTextarea.value.trim();
        const bestKnown = document.querySelector('#form-best-known') ? document.querySelector('#form-best-known').value.trim() : '';
        const shapedYou = document.querySelector('#form-shaped-you') ? document.querySelector('#form-shaped-you').value.trim() : '';
        const storyUnique = document.querySelector('#form-story-unique') ? document.querySelector('#form-story-unique').value.trim() : '';
        const storyBenefit = document.querySelector('#form-story-benefit') ? document.querySelector('#form-story-benefit').value.trim() : '';
        const topicOther = document.querySelector('#form-topic-other') ? document.querySelector('#form-topic-other').value.trim() : '';
        const finalSentence = document.querySelector('#form-final-sentence') ? document.querySelector('#form-final-sentence').value.trim() : '';
        const signature = signatureInput.value.trim();
        
        // Collect checked topics
        const topicsList = Array.from(document.querySelectorAll('.topic-checkbox:checked')).map(cb => cb.value);
        if (topicOther) topicsList.push(`Other: ${topicOther}`);
        
        // Collect talking points
        const talkingPoints = [];
        for (let i = 1; i <= 5; i++) {
          const tp = document.querySelector(`#form-tp-${i}`);
          if (tp && tp.value.trim()) {
            talkingPoints.push(`${i}. ${tp.value.trim()}`);
          }
        }

        const payload = {
          type: 'guest',
          name: fullName,
          email: email,
          phone: `${phonePrefix} ${phoneNum}`,
          company: company || null,
          profession: title,
          show_choice: translations[currentLang].brand_logo_text || "The Next Chapter",
          topics: topicsList.join(', '),
          bio_story: `Biography:\n${bio}\n\nBest Known For:\n${bestKnown}\n\nShaped By:\n${shapedYou}`,
          message: `Unique Story:\n${storyUnique}\n\nAudience Benefit:\n${storyBenefit}\n\nTalking Points:\n${talkingPoints.join('\n')}\n\nWhy choose me:\n${finalSentence}`,
          media_links: mediaLinksInput ? mediaLinksInput.value.trim() : null,
          signature: signature,
          status: 'Pending'
        };

        const handleSuccess = () => {
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
          if (typeof wordCounterSpan !== 'undefined' && wordCounterSpan) wordCounterSpan.textContent = '0';
          phonePrefixInput.value = '+971';
          countrySelect.value = 'ae';
          if (mediaLinksGroup) mediaLinksGroup.style.display = 'none';
          
          agreementCheck.disabled = true;
          agreementCheckLabel.style.opacity = '0.5';
          agreementCheckLabel.style.cursor = 'not-allowed';
        };

        if (supabaseClient) {
          supabaseClient
            .from('rania_submissions')
            .insert([payload])
            .then(({ error }) => {
              if (error) {
                console.error('Supabase insert error:', error);
                alert('An error occurred while saving your application. Please try again.');
                submitSpinner.style.display = 'none';
                submitBtn.disabled = false;
                submitText.textContent = translations[currentLang].btn_submit;
              } else {
                handleSuccess();
              }
            })
            .catch(err => {
              console.error('Supabase network error:', err);
              handleSuccess();
            });
        } else {
          setTimeout(handleSuccess, 1000);
        }
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

  // --- Dual Forms Toggle Tabs & Routing Logic (apply.html only) ---
  const btnToggleGuest = document.getElementById('btn-toggle-guest');
  const btnToggleSponsor = document.getElementById('btn-toggle-sponsor');
  const guestForm = document.getElementById('apply-form');
  const sponsorForm = document.getElementById('sponsor-form');

  const switchForm = (target) => {
    const subtitle = document.getElementById('form-section-subtitle');
    const title = document.getElementById('form-section-title');
    const desc = document.getElementById('form-section-desc');

    if (target === 'sponsor') {
      if (btnToggleGuest && btnToggleSponsor && guestForm && sponsorForm) {
        btnToggleGuest.classList.remove('active');
        btnToggleSponsor.classList.add('active');
        
        // Transition: Fade out guest form, show sponsor form
        guestForm.style.opacity = '0';
        setTimeout(() => {
          guestForm.style.display = 'none';
          sponsorForm.style.display = 'block';
          // trigger layout reflow before opacity
          sponsorForm.offsetHeight; 
          sponsorForm.style.opacity = '1';
        }, 400);

        if (subtitle) subtitle.setAttribute('data-i18n', 'form_badge_sponsor');
        if (title) title.setAttribute('data-i18n', 'form_title_sponsor');
        if (desc) desc.setAttribute('data-i18n', 'form_desc_sponsor');
        
        setLanguage(currentLang);
      }
    } else {
      if (btnToggleGuest && btnToggleSponsor && guestForm && sponsorForm) {
        btnToggleSponsor.classList.remove('active');
        btnToggleGuest.classList.add('active');
        
        // Transition: Fade out sponsor form, show guest form
        sponsorForm.style.opacity = '0';
        setTimeout(() => {
          sponsorForm.style.display = 'none';
          guestForm.style.display = 'block';
          // trigger layout reflow before opacity
          guestForm.offsetHeight; 
          guestForm.style.opacity = '1';
        }, 400);

        if (subtitle) subtitle.setAttribute('data-i18n', 'form_badge');
        if (title) title.setAttribute('data-i18n', 'form_title');
        if (desc) desc.setAttribute('data-i18n', 'form_desc');
        
        setLanguage(currentLang);
      }
    }
  };

  if (btnToggleGuest && btnToggleSponsor) {
    // Add transition style inline to forms
    if (guestForm) guestForm.style.transition = 'opacity 0.4s ease';
    if (sponsorForm) sponsorForm.style.transition = 'opacity 0.4s ease';

    btnToggleGuest.addEventListener('click', () => {
      window.location.hash = 'guest';
    });
    btnToggleSponsor.addEventListener('click', () => {
      window.location.hash = 'sponsor';
    });

    // Check initial hash and bind hashchange routing
    const handleHashRouting = () => {
      const hash = window.location.hash;
      if (hash === '#sponsor') {
        switchForm('sponsor');
      } else {
        switchForm('guest');
      }
    };

    window.addEventListener('hashchange', handleHashRouting);
    // Trigger routing on load
    handleHashRouting();
  }

  // Sponsor Phone Code Dropdown Selector
  const sponsorCountrySelect = document.querySelector('#sponsor-country-select');
  const sponsorPhonePrefixInput = document.querySelector('#sponsor-phone-prefix');
  
  if (sponsorCountrySelect && sponsorPhonePrefixInput) {
    sponsorCountrySelect.addEventListener('change', (e) => {
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
      sponsorPhonePrefixInput.value = prefix;
    });
  }

  // Validate that sponsor signature text matches contact person name
  const sponsorContactInput = document.querySelector('#form-sponsor-contact');
  const sponsorSignatureInput = document.querySelector('#form-sponsor-sig-name');
  const sponsorSignatureError = document.querySelector('#sponsor-sig-error-msg');
  
  const verifySponsorSignature = () => {
    if (!sponsorContactInput || !sponsorSignatureInput) return true;
    const name = sponsorContactInput.value.trim();
    const signature = sponsorSignatureInput.value.trim();
    
    if (name.length > 0 && signature.length > 0 && name.toLowerCase() !== signature.toLowerCase()) {
      sponsorSignatureInput.setCustomValidity('Signature does not match contact person name');
      if (sponsorSignatureError) sponsorSignatureError.style.display = 'block';
      return false;
    } else {
      sponsorSignatureInput.setCustomValidity('');
      if (sponsorSignatureError) sponsorSignatureError.style.display = 'none';
      return true;
    }
  };
  
  if (sponsorSignatureInput && sponsorContactInput) {
    sponsorSignatureInput.addEventListener('input', verifySponsorSignature);
    sponsorContactInput.addEventListener('input', verifySponsorSignature);
  }

  // Sponsor Form submission logic
  const sponsorFormEl = document.querySelector('#sponsor-form');
  const sponsorSubmitBtn = document.querySelector('#sponsor-submit-btn');
  const sponsorSubmitText = document.querySelector('#sponsor-submit-btn-text');
  const sponsorSubmitSpinner = document.querySelector('#sponsor-submit-spinner');
  
  if (sponsorFormEl) {
    sponsorFormEl.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const isSignatureValid = verifySponsorSignature();
      
      if (!isSignatureValid) {
        sponsorSignatureInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        sponsorSignatureInput.focus();
        return;
      }
      
      if (sponsorFormEl.checkValidity()) {
        sponsorSubmitBtn.disabled = true;
        sponsorSubmitText.textContent = translations[currentLang].btn_submitting_sponsor || "Submitting Inquiry...";
        sponsorSubmitSpinner.style.display = 'inline-block';
        
        const companyName = document.querySelector('#form-sponsor-company').value.trim();
        const contactName = sponsorContactInput.value.trim();
        const email = document.querySelector('#form-sponsor-email').value.trim();
        const phonePrefix = sponsorPhonePrefixInput.value;
        const phoneNum = document.querySelector('#form-sponsor-phone-number').value.trim();
        const tier = document.querySelector('#form-sponsor-tier').value;
        const targetPodcast = document.querySelector('#form-sponsor-target') ? document.querySelector('#form-sponsor-target').value : '';
        const budgetRange = document.querySelector('#form-sponsor-budget') ? document.querySelector('#form-sponsor-budget').value : '';
        const message = document.querySelector('#form-sponsor-message') ? document.querySelector('#form-sponsor-message').value.trim() : '';
        const signature = sponsorSignatureInput.value.trim();

        const payload = {
          type: 'sponsor',
          name: contactName,
          email: email,
          phone: `${phonePrefix} ${phoneNum}`,
          company: companyName,
          profession: `${tier} Sponsor`,
          show_choice: targetPodcast,
          message: `Inquiry Message:\n${message}\n\nBudget Range: ${budgetRange}`,
          signature: signature,
          status: 'Pending'
        };

        const handleSponsorSuccess = () => {
          sponsorSubmitSpinner.style.display = 'none';
          sponsorSubmitBtn.disabled = false;
          sponsorSubmitText.textContent = translations[currentLang].btn_submit_sponsor || "Submit Sponsor Inquiry";
          
          showSuccessModal({
            name: contactName,
            email: email,
            phone: `${phonePrefix} ${phoneNum}`,
            profession: `${tier} Sponsor (${companyName})`
          });
          
          sponsorFormEl.reset();
          sponsorPhonePrefixInput.value = '+971';
          sponsorCountrySelect.value = 'ae';
        };

        if (supabaseClient) {
          supabaseClient
            .from('rania_submissions')
            .insert([payload])
            .then(({ error }) => {
              if (error) {
                console.error('Supabase sponsor insert error:', error);
                alert('An error occurred while saving your inquiry. Please try again.');
                sponsorSubmitSpinner.style.display = 'none';
                sponsorSubmitBtn.disabled = false;
                sponsorSubmitText.textContent = translations[currentLang].btn_submit_sponsor || "Submit Sponsor Inquiry";
              } else {
                handleSponsorSuccess();
              }
            })
            .catch(err => {
              console.error('Supabase network error:', err);
              handleSponsorSuccess();
            });
        } else {
          setTimeout(handleSponsorSuccess, 1000);
        }
      } else {
        sponsorFormEl.reportValidity();
      }
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
  // (Audio variables and control functions moved to global scope)

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
      
      if (realAudioInstance) {
        realAudioInstance.currentTime = currentTime;
      }
      updateTimeAndProgress();
    });
  }

  // Toggle Mute
  if (volumeBtn) {
    volumeBtn.addEventListener('click', () => {
      isMuted = !isMuted;
      volumeBtn.classList.toggle('muted', isMuted);
      if (realAudioInstance) {
        realAudioInstance.muted = isMuted;
      }
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

  // --- Premium Testimonials Switcher Logic (Updated with Auto-Cycle) ---
  const selectorBtns = document.querySelectorAll('.selector-btn');
  const activeQuote = document.getElementById('active-quote-text');
  const activeAuthor = document.getElementById('active-quote-author');
  const testimonialNumber = document.getElementById('testimonial-number');
  const testimonialProgressFill = document.getElementById('testimonial-progress-fill');

  let activeTestimonialIndex = 0;
  let testimonialTimer = null;

  const switchTestimonial = (index) => {
    if (selectorBtns.length === 0 || !activeQuote || !activeAuthor) return;

    // Remove active class from all buttons
    selectorBtns.forEach(b => b.classList.remove('active'));
    
    const btn = selectorBtns[index];
    if (btn) btn.classList.add('active');

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
      activeQuote.innerHTML = translations[lang][textKey] || '';
      activeAuthor.innerHTML = translations[lang][authorKey] || '';
      
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
  };

  const startTestimonialTimer = () => {
    if (selectorBtns.length > 0) {
      testimonialTimer = setInterval(() => {
        activeTestimonialIndex = (activeTestimonialIndex + 1) % selectorBtns.length;
        switchTestimonial(activeTestimonialIndex);
      }, 5000);
    }
  };

  const resetTestimonialTimer = () => {
    if (testimonialTimer) clearInterval(testimonialTimer);
    startTestimonialTimer();
  };

  if (selectorBtns.length > 0 && activeQuote && activeAuthor) {
    selectorBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'));
        activeTestimonialIndex = index;
        switchTestimonial(index);
        resetTestimonialTimer();
      });
    });
    // Start initial timer
    startTestimonialTimer();
  }

  // --- Interactive & Looping Selection Process Timeline ---
  const processSteps = document.querySelectorAll('.process-step');
  const progressFill = document.getElementById('timeline-progress-fill');
  const detailTitle = document.getElementById('process-detail-title');
  const detailDesc = document.getElementById('process-detail-desc');
  const detailContent = document.getElementById('detail-panel-content');

  let activeTimelineIndex = 0;
  let timelineTimer = null;

  const switchTimelineStep = (idx) => {
    if (processSteps.length === 0 || !progressFill || !detailTitle || !detailDesc || !detailContent) return;

    // Calculate progress percentage: index 0 is 0%, index 5 is 100%
    const percent = (idx / (processSteps.length - 1)) * 100;
    progressFill.style.width = `${percent}%`;

    // Update active/completed classes
    processSteps.forEach((s, sIdx) => {
      if (sIdx < idx) {
        s.classList.add('completed');
        s.classList.remove('active');
      } else if (sIdx === idx) {
        s.classList.add('active');
        s.classList.remove('completed');
      } else {
        s.classList.remove('active', 'completed');
      }
    });

    // Animate detail panel text swap
    detailContent.classList.add('fade-out');

    setTimeout(() => {
      const stepNum = idx + 1;
      const titleKey = `process_detail_title_${stepNum}`;
      const descKey = `process_detail_desc_${stepNum}`;

      detailTitle.setAttribute('data-i18n', titleKey);
      detailDesc.setAttribute('data-i18n', descKey);

      const lang = currentLang || 'en';
      if (translations[lang]) {
        detailTitle.textContent = translations[lang][titleKey] || '';
        detailDesc.textContent = translations[lang][descKey] || '';
      }

      detailContent.classList.remove('fade-out');
    }, 200);
  };

  const startTimelineTimer = () => {
    if (processSteps.length > 0) {
      timelineTimer = setInterval(() => {
        activeTimelineIndex = (activeTimelineIndex + 1) % processSteps.length;
        switchTimelineStep(activeTimelineIndex);
      }, 5000);
    }
  };

  const resetTimelineTimer = () => {
    if (timelineTimer) clearInterval(timelineTimer);
    startTimelineTimer();
  };

  if (processSteps.length > 0 && progressFill && detailTitle && detailDesc && detailContent) {
    processSteps.forEach((step, idx) => {
      step.addEventListener('click', () => {
        activeTimelineIndex = idx;
        switchTimelineStep(idx);
        resetTimelineTimer();
      });
    });
    // Start initial auto-cycle timeline timer
    startTimelineTimer();
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

  // Dynamic host photo swapping based on language
  const aboutImg = document.getElementById('about-rania-img');
  if (aboutImg) {
    if (lang === 'ar') {
      aboutImg.src = 'assets/rania_no2ta_promo.png';
    } else {
      aboutImg.src = 'assets/rania_btl_promo.jpg';
    }
  }
  
  // Title is translated dynamically via data-i18n query loop
  
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

  if (latestEpisodeData) {
    renderLatestEpisode(latestEpisodeData);
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

// --- Scroll reveal disabled to ensure maximum reliability and prevent blank screens on scroll ---

// ==========================================================================
// DYNAMIC DATABASE & AUDIO PLAYER COUPLING LOGIC (CMS PERSISTENCE)
// ==========================================================================

// Helper to extract YouTube video ID from URL
function getYouTubeId(url) {
  if (!url) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
}

// Dynamic Fetch Latest Episode
async function loadLatestEpisode() {
  if (!supabaseClient) {
    console.warn('Supabase client not loaded.');
    renderLatestEpisodeFallback();
    return;
  }

  try {
    const { data, error } = await supabaseClient
      .from('rania_latest_episode')
      .select('*')
      .eq('id', 1)
      .single();

    if (error || !data) {
      console.error('Error fetching latest episode:', error);
      renderLatestEpisodeFallback();
      return;
    }

    latestEpisodeData = data;
    renderLatestEpisode(data);
  } catch (err) {
    console.error('Catch error fetching latest episode:', err);
    renderLatestEpisodeFallback();
  }
}

function renderLatestEpisode(data) {
  const visualContainer = document.getElementById('latest-ep-visual-container');
  const epName = document.getElementById('latest-ep-name');
  const epDesc = document.getElementById('latest-ep-desc');
  const epMeta = document.getElementById('latest-ep-meta');

  const trackTitle = currentLang === 'ar' ? (data.title_ar || data.title_en) : (data.title_en || data.title_ar);
  const trackDesc = currentLang === 'ar' ? (data.description_ar || data.description_en) : (data.description_en || data.description_ar);

  // Set titles and description if spotlight elements exist
  if (epName) epName.textContent = trackTitle || 'Latest Episode';
  if (epDesc) epDesc.textContent = trackDesc || '';

  // Render visual content based on type if spotlight elements exist
  if (visualContainer && epMeta) {
    if (data.type === 'youtube') {
      const videoId = getYouTubeId(data.youtube_url);
      if (videoId) {
        visualContainer.innerHTML = `
          <button class="latest-ep-cover-btn" id="latest-ep-youtube-play">
            <img src="https://img.youtube.com/vi/${videoId}/maxresdefault.jpg" class="latest-ep-cover-img" alt="Episode Thumbnail" onerror="this.onerror=null;this.src='https://img.youtube.com/vi/${videoId}/mqdefault.jpg';">
            <div class="latest-ep-overlay">
              <div class="latest-ep-play-btn-visual">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="8 5 19 12 8 19 8 5" fill="#ffffff"></polygon></svg>
              </div>
            </div>
          </button>
        `;

        // Wire play button to embed iframe inline
        const playBtnVisual = document.getElementById('latest-ep-youtube-play');
        if (playBtnVisual) {
          playBtnVisual.addEventListener('click', () => {
            visualContainer.innerHTML = `
              <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            `;
          });
        }
      } else {
        visualContainer.innerHTML = `
          <div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-muted);">
            No valid YouTube video ID found.
          </div>
        `;
      }
      epMeta.style.display = 'none';
    } else if (data.type === 'audio') {
      // Show Audio player card in visualContainer
      visualContainer.innerHTML = `
        <div class="latest-ep-card-loading" style="background:url('assets/rania_hero.png') no-repeat center center; background-size:cover; border-radius:20px;">
          <div class="latest-ep-overlay" style="background:rgba(4,6,15,0.75); width:100%; height:100%; display:flex; align-items:center; justify-content:center;">
            <div class="latest-ep-audio-player-card" style="max-width:85%; background:rgba(13,20,43,0.85); border:1px solid rgba(255,255,255,0.1); backdrop-filter:blur(10px); padding: 1.5rem; border-radius:16px;">
              <div class="latest-ep-audio-row" style="display:flex; align-items:center; gap:1.25rem;">
                <button class="latest-ep-audio-btn" id="spotlight-audio-play-btn" style="width:52px; height:52px; border-radius:50%; background:var(--accent-cobalt); border:none; color:#fff; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:var(--transition-fast);">
                  <svg class="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width:24px; height:24px;"><polygon points="8 5 19 12 8 19 8 5"></polygon></svg>
                  <svg class="pause-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width:24px; height:24px; display:none;"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                </button>
                <div class="latest-ep-audio-info" style="display:flex; flex-direction:column; gap:0.25rem; text-align:left;">
                  <span class="latest-ep-audio-track" style="font-weight:700; color:#fff; font-size:0.95rem; display:block;">${trackTitle}</span>
                  <span class="latest-ep-audio-artist" style="color:var(--text-muted); font-size:0.8rem;">Hosted by Rania Barghout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      // Wire Spotlight play button click to control bottom player
      const spotlightAudioPlayBtn = document.getElementById('spotlight-audio-play-btn');
      if (spotlightAudioPlayBtn) {
        // Sync initial state
        spotlightAudioPlayBtn.classList.toggle('playing', window.isPlaying || false);
        const playIconSvg = spotlightAudioPlayBtn.querySelector('.play-icon');
        const pauseIconSvg = spotlightAudioPlayBtn.querySelector('.pause-icon');
        if (playIconSvg && pauseIconSvg) {
          playIconSvg.style.display = window.isPlaying ? 'none' : 'block';
          pauseIconSvg.style.display = window.isPlaying ? 'block' : 'none';
        }

        spotlightAudioPlayBtn.addEventListener('click', () => {
          const playerPlayBtn = document.getElementById('player-play-btn');
          if (playerPlayBtn) playerPlayBtn.click();
        });
      }
    }
  }

  // Prepare HTML5 Audio Instance (Always run for audio type, decoupled from spotlight elements)
  if (data.type === 'audio' && data.audio_url) {
    if (!realAudioInstance || realAudioInstance.src !== data.audio_url) {
      realAudioInstance = new Audio(data.audio_url);
      realAudioInstance.preload = "metadata";
      
      // Listen to timeupdate to sync states
      realAudioInstance.addEventListener('timeupdate', () => {
        currentTime = realAudioInstance.currentTime;
        updateTimeAndProgress();
      });
      
      realAudioInstance.addEventListener('loadedmetadata', () => {
        duration = realAudioInstance.duration || 90;
        updateTimeAndProgress();
      });
      
      realAudioInstance.addEventListener('ended', () => {
        pausePodcast();
        currentTime = 0;
        updateTimeAndProgress();
      });
    }

    // Update sticky bottom player text
    const playerTrackTitle = document.getElementById('player-track-title');
    if (playerTrackTitle) {
      playerTrackTitle.textContent = trackTitle;
    }
  }
}

function renderLatestEpisodeFallback() {
  const data = {
    type: 'youtube',
    youtube_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    title_en: 'Welcome to Between The Lines',
    title_ar: 'مرحباً بكم في نقطة ع السطر',
    description_en: 'This is the official guest registration and podcast showcase portal for Between The Lines and No2ta 3al Sater, hosted by Rania Barghout.',
    description_ar: 'هذه هي البوابة الرسمية لتسجيل الضيوف وعرض حلقات بودكاست نقطة ع السطر وبين السطور، تقديم الإعلامية رانيا برغوت.'
  };
  renderLatestEpisode(data);
}

// Dynamic Fetch Ticker Episodes
async function loadTickerEpisodes() {
  const marqueeGrid = document.getElementById('episodes-cards-grid');
  if (!marqueeGrid) return;

  if (!supabaseClient) {
    console.warn('Supabase client not loaded for ticker.');
    initializeMarqueeTicker();
    return;
  }

  try {
    const { data, error } = await supabaseClient
      .from('rania_episodes')
      .select('*')
      .order('position', { ascending: true });

    if (error || !data || data.length === 0) {
      console.warn('No ticker episodes found in database, using HTML fallbacks.');
      initializeMarqueeTicker();
      return;
    }

    // Clear current grid cards
    marqueeGrid.innerHTML = '';

    data.forEach(episode => {
      const videoId = getYouTubeId(episode.youtube_url);
      if (videoId) {
        const card = document.createElement('a');
        card.className = 'episode-card';
        card.id = `ep-card-${episode.id}`;
        card.href = episode.youtube_url;
        card.target = '_blank';
        card.innerHTML = `
          <div class="episode-image-container">
            <img src="https://img.youtube.com/vi/${videoId}/maxresdefault.jpg" alt="${episode.title_en || 'Episode'}" class="episode-img" loading="lazy" onerror="this.onerror=null;this.src='https://img.youtube.com/vi/${videoId}/mqdefault.jpg';">
            <div class="episode-overlay">
              <span class="play-indicator-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48"><circle cx="12" cy="12" r="10" fill="rgba(0,0,0,0.4)" stroke="currentColor" stroke-width="2"></circle><polygon points="10 8 16 12 10 16 10 8" fill="#ffffff"></polygon></svg>
              </span>
            </div>
          </div>
        `;
        marqueeGrid.appendChild(card);
      }
    });

    initializeMarqueeTicker();
  } catch (err) {
    console.error('Catch error fetching ticker episodes:', err);
    initializeMarqueeTicker();
  }
}

let marqueeInitialized = false;

function initializeMarqueeTicker() {
  const marqueeContainer = document.getElementById('episodes-marquee-container');
  const marqueeGrid = document.getElementById('episodes-cards-grid');

  if (!marqueeContainer || !marqueeGrid) return;
  if (marqueeInitialized) return; // Prevent duplicate setups
  marqueeInitialized = true;

  // Duplicate children to ensure seamless infinite looping
  const originalCards = Array.from(marqueeGrid.children);
  originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    marqueeGrid.appendChild(clone);
  });

  let isDown = false;
  let startX;
  let scrollLeftStart;
  let isHovered = false;
  let W = 0;
  let currentScroll = 0;

  // Helper to calculate total original cards width
  const updateWidth = () => {
    W = marqueeGrid.scrollWidth / 2;
  };

  const initMarquee = () => {
    updateWidth();
    if (W > 0) {
      marqueeContainer.scrollLeft = W;
      currentScroll = W;
    }
  };

  // Run initialization immediately, on readyState complete, and on load
  initMarquee();

  window.addEventListener('load', () => {
    updateWidth();
    if (W > 0) {
      marqueeContainer.scrollLeft = W;
      currentScroll = W;
    }
  });

  window.addEventListener('resize', () => {
    updateWidth();
    currentScroll = marqueeContainer.scrollLeft;
  });
  
  // Drag-to-scroll event handlers
  marqueeContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    marqueeContainer.classList.add('active');
    startX = e.pageX - marqueeContainer.offsetLeft;
    scrollLeftStart = marqueeContainer.scrollLeft;
    currentScroll = scrollLeftStart;
    e.preventDefault(); // prevent images outline drag behavior
  });

  marqueeContainer.addEventListener('mouseleave', () => {
    isDown = false;
    marqueeContainer.classList.remove('active');
    isHovered = false;
    currentScroll = marqueeContainer.scrollLeft;
  });

  marqueeContainer.addEventListener('mouseup', () => {
    isDown = false;
    marqueeContainer.classList.remove('active');
    currentScroll = marqueeContainer.scrollLeft;
  });

  marqueeContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - marqueeContainer.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag scroll velocity modifier
    marqueeContainer.scrollLeft = scrollLeftStart - walk;
    currentScroll = marqueeContainer.scrollLeft;
  });

  // Touch events for mobile swiping
  marqueeContainer.addEventListener('touchstart', (e) => {
    isDown = true;
    isHovered = false; // ensure touch interaction clears hover pause
    startX = e.touches[0].pageX - marqueeContainer.offsetLeft;
    scrollLeftStart = marqueeContainer.scrollLeft;
    currentScroll = scrollLeftStart;
  });

  marqueeContainer.addEventListener('touchend', () => {
    isDown = false;
    isHovered = false; // ensure touch interaction clears hover pause
    currentScroll = marqueeContainer.scrollLeft;
  });

  marqueeContainer.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - marqueeContainer.offsetLeft;
    const walk = (x - startX) * 1.5;
    marqueeContainer.scrollLeft = scrollLeftStart - walk;
    currentScroll = marqueeContainer.scrollLeft;
  });

  // Hover to pause ticker (mouse-only)
  marqueeContainer.addEventListener('mouseenter', (e) => {
    if (e.pointerType === 'touch') return; // ignore touch pointer types
    isHovered = true;
  });

  // Run slow loop animation (speed = 0.6px per frame, left-to-right means decrementing scrollLeft)
  const marqueeSpeed = 0.6;
  const tickerStep = () => {
    // Lazy measure if W isn't loaded yet
    if (W === 0) updateWidth();

    if (W > 0) {
      if (!isDown && !isHovered) {
        currentScroll -= marqueeSpeed;

        // Wrap scroll position infinitely
        if (currentScroll <= 0) {
          currentScroll += W;
        }
        marqueeContainer.scrollLeft = currentScroll;
      } else {
        // Keep it bounded during interaction too
        if (marqueeContainer.scrollLeft <= 0) {
          marqueeContainer.scrollLeft += W;
          currentScroll = marqueeContainer.scrollLeft;
        } else if (marqueeContainer.scrollLeft >= W * 2) {
          marqueeContainer.scrollLeft -= W;
          currentScroll = marqueeContainer.scrollLeft;
        } else {
          currentScroll = marqueeContainer.scrollLeft;
        }
      }
    }
    requestAnimationFrame(tickerStep);
  };

  requestAnimationFrame(tickerStep);
}
