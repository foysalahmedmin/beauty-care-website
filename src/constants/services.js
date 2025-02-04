export const aestheticServices = [
    {
        category: "Facial Rejuvenation Treatments",
        slug: "facial_rejuvenation_treatments",
        description: "Revitalize your skin with our advanced facial treatments, combining cutting-edge technology with luxurious skincare for a radiant, youthful complexion.",
        image: "https://www.ethylsnyc.com/wp-content/uploads/2021/04/Skin-rejuvenation-treatment-and-its-benefits.jpg",
        overview: "Our facial rejuvenation treatments combine cutting-edge technology with medical expertise to restore your skin's natural radiance. Each treatment is customized to address your specific concerns and skin type.",
        compare: {
            before: "https://img.freepik.com/free-photo/lovely-woman-posing_144627-27769.jpg",
            after: "https://img.freepik.com/free-photo/lovely-woman-posing_144627-27768.jpg"
        },
        treatments: [
            {
                name: "HydraFacial",
                price: 120,
                duration: "45 mins",
                description: "A multi-step treatment that cleanses, exfoliates, and hydrates skin while delivering essential nutrients."
            },
            {
                name: "Chemical Peels",
                subtypes: [
                    {
                        type: "Light Peel",
                        price: 95,
                        duration: "30 mins",
                        description: "Gentle exfoliation for superficial skin concerns and overall brightening."
                    },
                    {
                        type: "Medium Peel",
                        price: 130,
                        duration: "45 mins",
                        description: "Deeper exfoliation for more pronounced skin concerns and texture improvement."
                    }
                ]
            },
            {
                name: "Microneedling (Collagen Induction Therapy)",
                price: 200,
                duration: "60 mins",
                description: "Advanced treatment that stimulates natural collagen production for skin rejuvenation."
            },
            {
                name: "Dermaplaning",
                price: 80,
                duration: "30 mins",
                description: "Physical exfoliation technique that removes dead skin cells and peach fuzz for smoother skin."
            },
            {
                name: "LED Light Therapy",
                price: 60,
                duration: "20 mins",
                description: "Non-invasive treatment using specific light wavelengths to target various skin concerns."
            }
        ],
        benefits: [
            "Improved skin texture and tone",
            "Reduced appearance of fine lines",
            "Enhanced skin hydration",
            "Brighter complexion",
            "Minimal downtime",
            "Customized treatment plans"
        ],
        faqs: [
            {
                question: "How often should I get facial treatments?",
                answer: "Treatment frequency varies based on the specific service and your skin's needs. Generally, we recommend treatments every 4-6 weeks for optimal results."
            },
            {
                question: "Are these treatments suitable for sensitive skin?",
                answer: "Yes, we customize each treatment based on your skin type and sensitivity level. We'll perform a thorough consultation to determine the best approach for your skin."
            },
            {
                question: "How long do results last?",
                answer: "Results vary by treatment and individual, but maintaining a good skincare routine and having regular treatments will help extend and optimize results."
            }
        ],
        aftercare: [
            "Avoid direct sun exposure for 24-48 hours",
            "Use gentle, non-irritating skincare products",
            "Stay hydrated",
            "Apply recommended post-treatment products",
            "Use broad-spectrum SPF daily"
        ]
    },
    {
        category: "Anti-Wrinkle Injections (Botox)",
        slug: "botox",
        description: "Smooth away fine lines and wrinkles with our precision anti-wrinkle treatments, delivered by expert practitioners for natural-looking results.",
        image: "https://images.squarespace-cdn.com/content/v1/61af7c40170a5d7dd8863ff2/7fdd6cf3-356d-47ae-b1be-84a7ca5752dc/woman-receiving-anti-wrinkle-injection.jpg",
        overview: "Our anti-wrinkle injections are administered by highly skilled practitioners using premium products to reduce the appearance of fine lines and wrinkles while maintaining natural facial expressions.",
        compare: {
            before: "https://img.freepik.com/free-photo/lovely-woman-posing_144627-27769.jpg",
            after: "https://img.freepik.com/free-photo/lovely-woman-posing_144627-27768.jpg"
        },
        treatments: [
            {
                name: "1 Area",
                price: 180,
                duration: "30 mins",
                description: "Targeted treatment for one facial area such as frown lines, forehead lines, or crow's feet."
            },
            {
                name: "2 Areas",
                price: 250,
                duration: "45 mins",
                description: "Combined treatment for two facial areas for comprehensive wrinkle reduction."
            },
            {
                name: "3 Areas",
                price: 300,
                duration: "60 mins",
                description: "Complete facial rejuvenation treating three areas for optimal results."
            },
            {
                name: "Hyperhidrosis (Excessive Sweating)",
                price: 450,
                duration: "60 mins",
                description: "Specialized treatment to reduce excessive sweating in underarms or other affected areas."
            }
        ],
        benefits: [
            "Natural-looking results",
            "Quick treatment time",
            "Minimal discomfort",
            "Long-lasting results (3-4 months)",
            "No downtime required",
            "Preventive anti-aging effects"
        ],
        faqs: [
            {
                question: "How long do results last?",
                answer: "Results typically last 3-4 months, though this can vary between individuals. Regular treatments may lead to longer-lasting results."
            },
            {
                question: "Is the treatment painful?",
                answer: "Most clients experience minimal discomfort. We use ultra-fine needles and can apply numbing cream if needed."
            },
            {
                question: "When will I see results?",
                answer: "Initial results appear within 3-5 days, with full results visible after 2 weeks."
            }
        ],
        aftercare: [
            "Avoid touching or massaging treated areas for 24 hours",
            "Stay upright for 4 hours after treatment",
            "Avoid strenuous exercise for 24 hours",
            "Don't apply makeup for 12 hours",
            "Avoid alcohol and blood-thinning medications"
        ]
    },
    {
        category: "Dermal Fillers",
        slug: "dermal_fillers",
        description: "Restore volume and enhance your natural features with our premium dermal fillers, creating subtle, beautiful results tailored to your desires.",
        image: "https://www.beautifi.com/wp-content/uploads/2021/12/23.-Dermal-Fillers.jpeg",
        compare: {
            before: "https://img.freepik.com/free-photo/lovely-woman-posing_144627-27769.jpg",
            after: "https://img.freepik.com/free-photo/lovely-woman-posing_144627-27768.jpg"
        },
        overview: "Our premium dermal filler treatments are performed by expert practitioners using the highest quality products to enhance your natural features while maintaining facial harmony.",
        treatments: [
            {
                name: "Lip Enhancement",
                priceRange: "250–350",
                duration: "45 mins",
                description: "Natural-looking lip augmentation to enhance volume, shape, and symmetry of the lips."
            },
            {
                name: "Nasolabial Folds (Smile Lines)",
                priceRange: "300–400",
                duration: "45 mins",
                description: "Soften deep lines running from the nose to mouth corners for a more youthful appearance."
            },
            {
                name: "Cheek Enhancement",
                priceRange: "350–450",
                duration: "60 mins",
                description: "Restore or enhance cheek volume for improved facial contours and a lifted appearance."
            },
            {
                name: "Jawline Contouring",
                priceRange: "400–500",
                duration: "60 mins",
                description: "Define and sculpt the jawline for improved facial profile and symmetry."
            },
            {
                name: "Tear Trough Filler",
                priceRange: "400–500",
                duration: "45 mins",
                description: "Reduce under-eye hollows and dark circles for a refreshed, well-rested appearance."
            }
        ],
        benefits: [
            "Immediate visible results",
            "Natural-looking enhancement",
            "Long-lasting (6-18 months)",
            "Minimal recovery time",
            "Reversible if desired",
            "Customizable treatment plans"
        ],
        faqs: [
            {
                question: "How long do dermal fillers last?",
                answer: "Results typically last 6-18 months depending on the treatment area and product used. Maintenance treatments can help extend results."
            },
            {
                question: "Is the treatment painful?",
                answer: "We use numbing cream and fillers containing local anesthetic to ensure your comfort. Most clients report minimal discomfort."
            },
            {
                question: "When will I see results?",
                answer: "Results are immediate, though there may be some initial swelling. Final results are visible after 2 weeks when any swelling has subsided."
            }
        ],
        aftercare: [
            "Avoid touching or massaging treated areas for 24 hours",
            "Sleep with head elevated for first night",
            "Apply cold compresses if needed",
            "Avoid strenuous exercise for 24-48 hours",
            "Stay hydrated and avoid alcohol for 24 hours"
        ]
    },
    {
        category: "Laser Treatments",
        slug: "laser_treatments",
        description: "Transform your skin with our state-of-the-art laser treatments, targeting everything from hair removal to skin rejuvenation with precision and care.",
        compare: {
            before: "https://img.freepik.com/free-photo/lovely-woman-posing_144627-27769.jpg",
            after: "https://img.freepik.com/free-photo/lovely-woman-posing_144627-27768.jpg"
        },
        image: "https://www.instyle.com/thmb/sSLIVBytnseFMojimQQ3sdw8Gsg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/052623-Laser-facial-treatment-lead-e858389458d54fb29aa80265a30e913d.jpg",
        overview: "Our state-of-the-art laser treatments utilize advanced technology to deliver precise, effective results for various concerns, from permanent hair reduction to skin rejuvenation.",
        treatments: [
            {
                name: "Laser Hair Removal",
                description: "Advanced laser hair removal suitable for all skin types, providing long-lasting results.",
                subtypes: [
                    {
                        type: "Small Area (e.g., Upper Lip)",
                        price: 40,
                        duration: "15 mins",
                        description: "Precise treatment for small, delicate areas of unwanted hair."
                    },
                    {
                        type: "Medium Area (e.g., Bikini Line)",
                        price: 80,
                        duration: "30 mins",
                        description: "Targeted treatment for medium-sized areas with consistent results."
                    },
                    {
                        type: "Large Area (e.g., Legs)",
                        price: 150,
                        duration: "60 mins",
                        description: "Comprehensive treatment for larger body areas with long-lasting results."
                    }
                ]
            },
            {
                name: "Skin Rejuvenation",
                description: "Advanced laser treatments for various skin concerns",
                subtypes: [
                    {
                        type: "IPL Photofacial",
                        price: 200,
                        duration: "45 mins",
                        description: "Treatment for sun damage, age spots, and uneven skin tone."
                    },
                    {
                        type: "Fractional Laser",
                        price: 350,
                        duration: "60 mins",
                        description: "Deep skin resurfacing for wrinkles, scars, and texture improvement."
                    }
                ]
            }
        ],
        benefits: [
            "Permanent hair reduction",
            "Suitable for all skin types",
            "Precise and targeted treatment",
            "Minimal discomfort",
            "Progressive improvement",
            "FDA-approved technology"
        ],
        faqs: [
            {
                question: "How many sessions will I need?",
                answer: "For hair removal, most clients need 6-8 sessions spaced 4-6 weeks apart. Skin rejuvenation typically requires 3-6 sessions depending on the concern."
            },
            {
                question: "Is laser treatment safe?",
                answer: "Yes, our laser treatments are FDA-approved and performed by certified professionals. We use advanced technology with built-in cooling systems for maximum comfort and safety."
            },
            {
                question: "What results can I expect?",
                answer: "Results vary by treatment type. Hair removal provides permanent reduction, while skin rejuvenation shows progressive improvement in texture and tone over several sessions."
            }
        ],
        aftercare: [
            "Avoid sun exposure and use SPF 50",
            "Keep treated area clean and moisturized",
            "Avoid hot showers for 24 hours",
            "No swimming or saunas for 48 hours",
            "Follow specific post-treatment instructions"
        ]
    },
    {
        category: "Body Contouring and Fat Reduction",
        slug: "body_contouring_and_fat_reduction",
        description: "Sculpt and refine your body with our non-invasive contouring treatments, designed to target stubborn fat and enhance your natural silhouette.",
        compare: {
            before: "https://img.freepik.com/free-photo/lovely-woman-posing_144627-27769.jpg",
            after: "https://img.freepik.com/free-photo/lovely-woman-posing_144627-27768.jpg"
        },
        image: "https://thehebespa.com/wp-content/uploads/2024/09/image2-2.jpg",
        overview: "Our non-invasive body contouring treatments use advanced technology to target stubborn fat deposits and tighten skin, helping you achieve your desired body shape safely and effectively.",
        treatments: [
            {
                name: "Cryolipolysis (Fat Freezing)",
                price: 350,
                duration: "60-90 mins",
                description: "Advanced fat reduction treatment that freezes and eliminates stubborn fat cells permanently."
            },
            {
                name: "Radiofrequency Skin Tightening",
                price: 150,
                duration: "45 mins",
                description: "Non-invasive treatment that tightens and firms skin through controlled heating."
            },
            {
                name: "Cellulite Reduction Therapy",
                price: 200,
                duration: "60 mins",
                description: "Targeted treatment to reduce the appearance of cellulite and improve skin texture."
            }
        ],
        benefits: [
            "No surgery or downtime required",
            "Permanent fat reduction results",
            "Improved skin firmness and tone",
            "Natural-looking results",
            "Suitable for multiple body areas",
            "Boost in confidence"
        ],
        faqs: [
            {
                question: "How many sessions will I need?",
                answer: "The number of sessions varies depending on your goals and the treatment area. Most clients see optimal results with 3-6 sessions spaced 4-6 weeks apart."
            },
            {
                question: "Is the treatment painful?",
                answer: "Our body contouring treatments are generally comfortable with minimal discomfort. Cryolipolysis may cause initial cold sensations, while RF treatments provide a warm feeling."
            },
            {
                question: "When will I see results?",
                answer: "Initial results can be visible within 3-4 weeks, with optimal results showing at 2-3 months as your body naturally processes the treated fat cells."
            }
        ],
        aftercare: [
            "Stay hydrated and maintain a healthy diet",
            "Gentle exercise to promote circulation",
            "Wear compression garments if recommended",
            "Avoid excessive heat exposure for 24 hours",
            "Follow specific post-treatment instructions"
        ]
    },
    {
        category: "Ozone and Oxygen Therapies",
        slug: "ozone_and_oxygen_therapies",
        description: "Boost your body's natural healing and rejuvenation with our advanced oxygen therapies, promoting wellness from the inside out.",
        compare: {
            before: "https://img.freepik.com/free-photo/lovely-woman-posing_144627-27769.jpg",
            after: "https://img.freepik.com/free-photo/lovely-woman-posing_144627-27768.jpg"
        },
        image: "https://brainmd.com/blog/wp-content/uploads/Hyperbaric-Oxygen-Therapy.jpg",
        overview: "Experience the healing power of oxygen with our advanced therapies designed to boost your body's natural healing processes, enhance cellular function, and promote overall wellness.",
        treatments: [
            {
                name: "Ozone Therapy",
                price: 120,
                package: { courseOf5: 550 },
                duration: "45 mins",
                description: "Advanced therapy using medical-grade ozone to boost immunity and promote healing."
            },
            {
                name: "Oxygen Therapy (Hyperbaric)",
                price: 100,
                package: { courseOf5: 450 },
                duration: "60 mins",
                description: "Pure oxygen therapy in a pressurized environment to enhance healing and recovery."
            }
        ],
        benefits: [
            "Enhanced immune system function",
            "Improved cellular regeneration",
            "Increased energy levels",
            "Better circulation",
            "Faster recovery from illness",
            "Anti-aging effects"
        ],
        faqs: [
            {
                question: "How often should I have treatments?",
                answer: "Treatment frequency depends on your health goals. Some clients benefit from weekly sessions, while others may need only monthly maintenance."
            },
            {
                question: "Are these treatments safe?",
                answer: "Yes, both ozone and hyperbaric oxygen therapy are safe when administered by our qualified professionals. We follow strict medical protocols."
            },
            {
                question: "What conditions can these therapies help with?",
                answer: "These therapies can help with chronic fatigue, immune disorders, wound healing, recovery from illness, and overall wellness optimization."
            }
        ],
        aftercare: [
            "Stay hydrated with plenty of water",
            "Avoid strenuous activity for 24 hours",
            "Get adequate rest",
            "Follow any specific dietary recommendations",
            "Monitor your response to treatment"
        ]
    },
    {
        category: "IV Therapy and Vitamin Drips",
        slug: "iv_therapy_and_vitamin_drips",
        description: "Revitalize your body with our customized IV therapy treatments, delivering essential nutrients directly for optimal health and wellness.",
        compare: {
            before: "https://img.freepik.com/free-photo/lovely-woman-posing_144627-27769.jpg",
            after: "https://img.freepik.com/free-photo/lovely-woman-posing_144627-27768.jpg"
        },
        image: "https://knoxwellnessexperience.com/wp-content/uploads/2023/12/shutterstock_1760535659-2.jpg",
        overview: "Our customized IV therapy treatments deliver essential vitamins, minerals, and nutrients directly into your bloodstream for maximum absorption and optimal health benefits.",
        treatments: [
            {
                name: "Hydration Drip",
                price: 150,
                duration: "45 mins",
                description: "Rapid rehydration with electrolytes and minerals for optimal cellular function."
            },
            {
                name: "Vitamin C Boost",
                price: 160,
                duration: "45 mins",
                description: "High-dose vitamin C for immune support and antioxidant protection."
            },
            {
                name: "Immune Support Drip",
                price: 180,
                duration: "60 mins",
                description: "Comprehensive blend of vitamins and minerals to strengthen immune function."
            },
            {
                name: "Anti-Ageing Cocktail",
                price: 200,
                duration: "60 mins",
                description: "Premium blend of antioxidants and nutrients for cellular repair and rejuvenation."
            },
            {
                name: "Detox Drip (Glutathione)",
                price: 200,
                duration: "60 mins",
                description: "Powerful antioxidant therapy for detoxification and skin brightening."
            }
        ],
        benefits: [
            "100% nutrient absorption",
            "Immediate hydration",
            "Increased energy levels",
            "Enhanced immune function",
            "Improved skin health",
            "Quick recovery from fatigue"
        ],
        faqs: [
            {
                question: "How often can I receive IV therapy?",
                answer: "Frequency depends on your health goals and specific needs. Some clients benefit from weekly sessions, while others may only need monthly treatments."
            },
            {
                question: "How long does a session take?",
                answer: "Sessions typically last 45-60 minutes, depending on the type of drip and your individual needs."
            },
            {
                question: "Are there any side effects?",
                answer: "IV therapy is generally very safe. Some people may experience mild cooling sensation during treatment. All treatments are administered by qualified healthcare professionals."
            }
        ],
        aftercare: [
            "Stay hydrated",
            "Avoid strenuous exercise for 2-3 hours",
            "Monitor your response",
            "Report any unusual symptoms",
            "Follow recommended treatment schedule"
        ]
    },
    {
        category: "Acne and Scar Treatments",
        slug: "acne_and_scar_treatments",
        description: "Achieve clearer, smoother skin with our specialized acne and scar treatments, using advanced techniques to restore your skin's natural beauty.",
        compare: {
            before: "https://img.freepik.com/free-photo/lovely-woman-posing_144627-27769.jpg",
            after: "https://img.freepik.com/free-photo/lovely-woman-posing_144627-27768.jpg"
        },
        image: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2556996.jpg",
        overview: "Our comprehensive acne and scar treatments combine advanced laser technology with specialized therapies to improve skin texture, reduce scarring, and promote clear, healthy skin.",
        treatments: [
            {
                name: "Laser Acne Treatment",
                priceRange: "150–250",
                duration: "45 mins",
                description: "Targeted laser therapy to reduce active acne and prevent future breakouts."
            },
            {
                name: "Scar Revision Therapy",
                price: 300,
                duration: "60 mins",
                description: "Advanced treatment to minimize the appearance of acne scars and improve skin texture."
            },
            {
                name: "Carbon Laser Peel (Hollywood Peel)",
                price: 200,
                duration: "45 mins",
                description: "Innovative laser treatment for skin rejuvenation and pore refinement."
            }
        ],
        benefits: [
            "Reduced acne breakouts",
            "Improved skin texture",
            "Minimized scarring",
            "Smaller pore appearance",
            "Enhanced skin clarity",
            "Boosted confidence"
        ],
        faqs: [
            {
                question: "How many treatments will I need?",
                answer: "Most clients need 4-6 treatments spaced 2-4 weeks apart for optimal results. Maintenance treatments may be recommended."
            },
            {
                question: "Is there any downtime?",
                answer: "Minimal downtime is required. Some treatments may cause temporary redness or mild peeling for 1-3 days."
            },
            {
                question: "When will I see results?",
                answer: "Initial improvements can be seen after the first treatment, with progressive results developing over subsequent sessions."
            }
        ],
        aftercare: [
            "Use prescribed skincare products",
            "Avoid sun exposure and wear SPF",
            "Keep skin clean and moisturized",
            "Avoid picking or touching treated areas",
            "Follow recommended treatment schedule"
        ]
    },
    {
        category: "Skin Tightening Treatments",
        description: "Restore your skin's firmness and elasticity with our innovative tightening treatments, delivering visible results without surgery.",
        slug: "skin_tightening_treatments",
        compare: {
            before: "https://img.freepik.com/free-photo/lovely-woman-posing_144627-27769.jpg",
            after: "https://img.freepik.com/free-photo/lovely-woman-posing_144627-27768.jpg"
        },
        image: "https://www.americanself.com/wp-content/uploads/2017/04/Whipple-skin-tightning-options.jpg",
        overview: "Our advanced skin tightening treatments use cutting-edge technology to stimulate collagen production and restore skin firmness, providing natural-looking results without surgery.",
        treatments: [
            {
                name: "HIFU (High-Intensity Focused Ultrasound)",
                priceRange: "500–800",
                duration: "60-90 mins",
                description: "Non-surgical facelift using focused ultrasound energy for deep tissue tightening."
            },
            {
                name: "Radiofrequency Skin Tightening (Face)",
                price: 200,
                duration: "45 mins",
                description: "Controlled heating therapy to tighten skin and improve facial contours."
            }
        ],
        benefits: [
            "Non-surgical treatment",
            "Natural-looking results",
            "No downtime required",
            "Long-lasting effects",
            "Stimulates natural collagen",
            "Progressive improvement"
        ],
        faqs: [
            {
                question: "How long do results last?",
                answer: "Results can last 12-18 months depending on the treatment type and individual factors. Maintenance sessions may be recommended."
            },
            {
                question: "Is the treatment painful?",
                answer: "Most clients experience minimal discomfort. HIFU may cause brief sensations of heat and tingling. We provide comfort measures as needed."
            },
            {
                question: "When will I see results?",
                answer: "Initial results may be visible immediately, with continued improvement over 2-3 months as collagen production increases."
            }
        ],
        aftercare: [
            "Stay hydrated and maintain good skincare",
            "Avoid excessive heat exposure",
            "Use recommended skincare products",
            "Protect skin from sun damage",
            "Follow maintenance schedule"
        ]
    },
]

export const gpServices = [
    {
        name: "Private GP Consultation",
        slug: "private_gp_consultation",
        description: "Experience personalized medical care with our private GP consultations, where we take the time to understand your health concerns and provide comprehensive solutions.",
        price: 80,
        duration: "30 minutes",
        image: "https://magnagp.co.uk/wp-content/uploads/2024/09/PrivateMedicalConsultation-1024x683.png",
        includes: [
            "One-to-one consultation with an experienced GP",
            "Review of medical history",
            "Physical examination if required",
            "Prescription services when needed",
            "Specialist referrals if necessary",
            "Follow-up recommendations"
        ],
        benefits: [
            "Minimal waiting times",
            "Convenient appointment times",
            "Comprehensive medical care",
            "Direct access to your doctor",
            "Same-day appointments available"
        ],
        faqs: [
            {
                question: "How long is a standard consultation?",
                answer: "A standard consultation is 30 minutes, giving you ample time to discuss your health concerns."
            },
            {
                question: "Can I get prescriptions during my visit?",
                answer: "Yes, our doctors can provide prescriptions when medically necessary."
            },
            {
                question: "Do you offer specialist referrals?",
                answer: "Yes, we can refer you to specialists when required and help coordinate your care."
            }
        ]
    },
    {
        name: "Extended GP Consultation",
        slug: "extended_gp_consultation",
        description: "Benefit from longer appointment times allowing for in-depth discussion of complex health issues or multiple concerns in a single visit.",
        price: 150,
        duration: "45 minutes",
        image: "https://www.myhealthspecialist.com/blog/wp-content/uploads/2016/09/consultation.jpg",
        includes: [
            "Extended 45-minute consultation",
            "Comprehensive medical review",
            "Multiple health concerns addressed",
            "Detailed treatment planning",
            "Lifestyle and preventive advice",
            "Written health summary"
        ],
        benefits: [
            "More time for complex issues",
            "Multiple conditions addressed",
            "Detailed medical advice",
            "Comprehensive care plan",
            "Preventive health strategies"
        ],
        faqs: [
            {
                question: "Who should book an extended consultation?",
                answer: "Extended consultations are ideal for patients with multiple health concerns, complex medical conditions, or those needing detailed medical advice."
            },
            {
                question: "What's included in the written health summary?",
                answer: "The summary includes your consultation details, diagnoses, treatment plan, and recommendations for ongoing care."
            },
            {
                question: "Can I discuss multiple health issues?",
                answer: "Yes, the extended time allows us to address multiple health concerns comprehensively in one visit."
            }
        ]
    },
    {
        name: "Full Health Check",
        slug: "full_health_check",
        description: "Get a comprehensive assessment of your health status with our thorough health check, including vital screenings and preventive care recommendations.",
        price: 300,
        duration: "90 minutes",
        image: "https://my-doc.com/wp-content/uploads/2020/04/examining-medical-check-up-singapore.jpg",
        includes: [
            "Complete physical examination",
            "Blood pressure and heart check",
            "BMI and body composition analysis",
            "Blood tests and urinalysis",
            "Lifestyle assessment",
            "Mental health screening",
            "Comprehensive health report"
        ],
        benefits: [
            "Early disease detection",
            "Comprehensive health overview",
            "Personalized health plan",
            "Preventive health advice",
            "Detailed written report",
            "Follow-up consultation included"
        ],
        faqs: [
            {
                question: "How often should I have a full health check?",
                answer: "We recommend an annual health check for most adults, though frequency may vary based on age, risk factors, and medical history."
            },
            {
                question: "What's included in the blood tests?",
                answer: "Our comprehensive blood panel includes cholesterol, diabetes screening, kidney and liver function, full blood count, and other key health markers."
            },
            {
                question: "How long does it take to get results?",
                answer: "Most results are available within 48-72 hours, followed by a consultation to discuss findings and recommendations."
            }
        ]
    }
];

export const conciergeServices = []