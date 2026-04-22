'use client';

import React, { useState, useEffect } from 'react';
import { Download, Moon, Sun, Menu, X, ExternalLink } from 'lucide-react';

type Lang = "en" | "fr" | "de";

const translations = {
  en: {
    navAbout: "About", navSkills: "Skills", navFormation: "Formation", navExperience: "Experience", navProjects: "Projects", navContact: "Contact",
    download: "Download CV",
    heroSubtitle: "Accountant & Administration",
    heroBio: "Over 25 years of experience in accounting and administration across various Swiss companies. Trilingual (French, German, English)",
    aboutTitle: "About Me",
    aboutText: "With more than 25 years of professional experience in accounting and administration across various Swiss companies, I bring reliability, precision, and deep knowledge of local regulations and software systems.",
    skillsTitle: "Key Competencies",
    formationTitle: "Formation",
    experienceTitle: "Professional Experience",
    projectsTitle: "My Projects & Websites",
    contactTitle: "Contact Me",
    languagesTitle: "Languages",
    formName: "Your Name", formEmail: "Your Email", formMessage: "Your Message", formButton: "Send Message",
  },
  fr: {
    navAbout: "À propos", navSkills: "Compétences", navFormation: "Formation", navExperience: "Expérience", navProjects: "Projets", navContact: "Contact",
    download: "Télécharger CV",
    heroSubtitle: "Comptable & Administration",
    heroBio: "Plus de 25 ans d'expérience en comptabilité et administration dans diverses entreprises suisses. Trilingue (Français, Allemand, Anglais)",
    aboutTitle: "À propos de moi",
    aboutText: "Avec plus de 25 ans d'expérience professionnelle en comptabilité et administration dans diverses entreprises suisses, j'apporte fiabilité, précision et une connaissance approfondie des réglementations locales et des systèmes logiciels.",
    skillsTitle: "Compétences Clés",
    formationTitle: "Formation",
    experienceTitle: "Expérience Professionnelle",
    projectsTitle: "Mes Projets & Sites Web",
    contactTitle: "Contactez-moi",
    languagesTitle: "Langues",
    formName: "Votre Nom", formEmail: "Votre Email", formMessage: "Votre Message", formButton: "Envoyer le Message",
  },
  de: {
    navAbout: "Über mich", navSkills: "Kompetenzen", navFormation: "Ausbildung", navExperience: "Berufserfahrung", navProjects: "Projekte", navContact: "Kontakt",
    download: "CV herunterladen",
    heroSubtitle: "Buchhalter & Administration",
    heroBio: "Über 25 Jahre Erfahrung in Buchhaltung und Administration in verschiedenen Schweizer Unternehmen. Dreisprachig (Französisch, Deutsch, Englisch)",
    aboutTitle: "Über mich",
    aboutText: "Mit mehr als 25 Jahren Berufserfahrung in Buchhaltung und Administration in verschiedenen Schweizer Unternehmen bringe ich Zuverlässigkeit, Präzision und tiefes Wissen über lokale Vorschriften und Software-Systeme mit.",
    skillsTitle: "Schlüsselkompetenzen",
    formationTitle: "Ausbildung",
    experienceTitle: "Berufserfahrung",
    projectsTitle: "Meine Projekte & Websites",
    contactTitle: "Kontakt",
    languagesTitle: "Sprachen",
    formName: "Ihr Name", formEmail: "Ihre E-Mail", formMessage: "Ihre Nachricht", formButton: "Nachricht senden",
  }
};

const skillsData = {
  en: {
    accounting: "Accounting",
    administration: "Administration",
    software: "Software & Tools",
    accountingBullets: [
      "General Ledger & Bookkeeping",
      "Accounts Payable / Receivable",
      "Monthly & Annual Closings",
      "VAT Declaration & Payment",
      "Bank & Cash Reconciliations"
    ],
    administrationBullets: [
      "Family Allowances (APG)",
      "Source Tax Declarations",
      "Training Reimbursement Requests",
      "Occupational Pension (2nd Pillar)",
      "Payroll Processing"
    ],
    softwareBullets: [
      "SAP S/4HANA",
      "Winbiz & Cresus",
      "M-Files, Verifier, CPS",
      "Microsoft Excel (Advanced)"
    ]
  },
  fr: {
    accounting: "Comptabilité",
    administration: "Administration",
    software: "Logiciels & Outils",
    accountingBullets: [
      "Grand Livre & Tenue des comptes",
      "Comptes Fournisseurs / Clients",
      "Clôtures mensuelles et annuelles",
      "Déclaration et paiement de la TVA",
      "Rapprochements bancaires et caisse"
    ],
    administrationBullets: [
      "Allocations familiales (APG)",
      "Déclarations d'impôt à la source",
      "Demandes de remboursement de formation",
      "Prévoyance professionnelle (2ème pilier)",
      "Traitement de la paie"
    ],
    softwareBullets: [
      "SAP S/4HANA",
      "Winbiz & Cresus",
      "M-Files, Verifier, CPS",
      "Microsoft Excel (Avancé)"
    ]
  },
  de: {
    accounting: "Buchhaltung",
    administration: "Administration",
    software: "Software & Tools",
    accountingBullets: [
      "Hauptbuch & Buchführung",
      "Kreditoren / Debitoren",
      "Monats- und Jahresabschlüsse",
      "MWST-Deklaration & Zahlung",
      "Bank- und Kassenabstimmungen"
    ],
    administrationBullets: [
      "Familienzulagen (APG)",
      "Quellensteuererklärungen",
      "Weiterbildungs-Rückerstattungen",
      "Berufliche Vorsorge (2. Säule)",
      "Lohnverarbeitung"
    ],
    softwareBullets: [
      "SAP S/4HANA",
      "Winbiz & Cresus",
      "M-Files, Verifier, CPS",
      "Microsoft Excel (Fortgeschritten)"
    ]
  }
};

const formationData = { /* unchanged */ 
  en: [ /* ... */ ],
  fr: [ /* ... */ ],
  de: [ /* ... */ ]
};

const experienceData = { /* full 13 entries - unchanged from previous correct version */ 
  en: [ /* ... */ ],
  fr: [ /* ... */ ],
  de: [ /* ... */ ]
};

const projectsData = {
  en: [
    { title: "Couture Martha", description: "Professional website for sewing, alterations, repairs and bespoke tailoring services in the Geneva, Versoix and Nyon area.", link: "https://www.couture-martha.ch" },
    { title: "SBB Timetable App", description: "Contribution to the official Swiss Federal Railways (SBB/CFF) timetable and travel planner application.", link: "https://mmhauck.ch/sbb" }
  ],
  fr: [
    { title: "Couture Martha", description: "Site web professionnel pour retouches, réparations et confection sur mesure à Genève, Versoix et Nyon.", link: "https://www.couture-martha.ch" },
    { title: "Application Horaire SBB / CFF", description: "Contribution au développement et à la maintenance de l'application horaire officielle des Chemins de fer fédéraux suisses (CFF/SBB).", link: "https://mmhauck.ch/sbb" }
  ],
  de: [
    { title: "Couture Martha", description: "Professionelle Website für Änderungen, Reparaturen und Maßanfertigungen im Raum Genf, Versoix und Nyon.", link: "https://www.couture-martha.ch" },
    { title: "SBB Fahrplan App", description: "Mitarbeit an der offiziellen Fahrplan- und Reiseplaner-App der Schweizerischen Bundesbahnen (SBB/CFF).", link: "https://mmhauck.ch/sbb" }
  ]
};

const slides = [
  '/photos/slide/abacus.jpg',
  '/photos/slide/calculator.jpg',
  '/photos/slide/computer.jpg',
  '/photos/slide/money.jpg',
];

export default function MichaelHauckCV() {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState<Lang>("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const t = translations[lang];
  const currentFormation = formationData[lang] || formationData.en;
  const currentExperience = experienceData[lang] || experienceData.en;
  const currentProjects = projectsData[lang] || projectsData.en;
  const skills = skillsData[lang] || skillsData.en;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const downloadCV = () => {
    alert("PDF-Download kommt bald!\n\nLegen Sie Ihre PDF als 'cv-michael-hauck.pdf' im public-Ordner ab.");
  };

  const changeLang = (newLang: Lang) => {
    setLang(newLang);
    setIsMenuOpen(false);
  };

  const renderLanguages = () => {
    if (lang === "fr") {
      return (
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 text-2xl">
          <div><strong>Français</strong> – Courant</div>
          <div><strong>Allemand</strong> – Courant</div>
          <div><strong>Anglais</strong> – Courant</div>
          <div><strong>Italien</strong> – Connaissances de base</div>
        </div>
      );
    }
    if (lang === "de") {
      return (
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 text-2xl">
          <div><strong>Französisch</strong> – Fliessend</div>
          <div><strong>Deutsch</strong> – Fliessend</div>
          <div><strong>Englisch</strong> – Fliessend</div>
          <div><strong>Italienisch</strong> – Grundkenntnisse</div>
        </div>
      );
    }
    return (
      <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 text-2xl">
        <div><strong>French</strong> – Fluent</div>
        <div><strong>German</strong> – Fluent</div>
        <div><strong>English</strong> – Fluent</div>
        <div><strong>Italian</strong> – Basic</div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
      {/* Navbar - same as before */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="font-bold text-2xl">Michael Hauck</div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("skills")}>Skills</button>
            <button onClick={() => scrollTo("formation")}>Formation</button>
            <button onClick={() => scrollTo("experience")}>Experience</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>

            <button onClick={toggleTheme} className="p-2 rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-800 transition">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="flex border border-zinc-300 dark:border-zinc-700 rounded-full overflow-hidden font-medium">
              {(["en", "fr", "de"] as const).map((l) => (
                <button key={l} onClick={() => setLang(l)} className={`px-5 py-2 transition-all ${lang === l ? "bg-blue-600 text-white" : "hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <button onClick={downloadCV} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition">
              <Download size={18} /> {t.download}
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-6 px-6">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3 text-center">Language</p>
              <div className="flex border-2 border-blue-600 dark:border-blue-500 rounded-2xl overflow-hidden font-medium">
                {(["en", "fr", "de"] as const).map((l) => (
                  <button key={l} onClick={() => changeLang(l)} className={`flex-1 py-4 text-lg font-semibold transition-all ${lang === l ? "bg-blue-600 text-white" : "bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300"}`}>
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 text-lg border-t border-zinc-200 dark:border-zinc-800 pt-6">
              <button onClick={() => scrollTo("about")} className="text-left py-2">About</button>
              <button onClick={() => scrollTo("skills")} className="text-left py-2">Skills</button>
              <button onClick={() => scrollTo("formation")} className="text-left py-2">Formation</button>
              <button onClick={() => scrollTo("experience")} className="text-left py-2">Experience</button>
              <button onClick={() => scrollTo("projects")} className="text-left py-2">Projects</button>
              <button onClick={() => scrollTo("contact")} className="text-left py-2">Contact</button>
            </div>

            <div className="flex items-center gap-4 mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <button onClick={toggleTheme} className="p-4 rounded-2xl border border-zinc-300 dark:border-zinc-700 flex-1">
                {isDark ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <button onClick={() => { downloadCV(); setIsMenuOpen(false); }} className="flex-1 flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-medium transition">
                <Download size={20} /> {t.download}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero - unchanged */}
      <section 
        className="relative min-h-screen bg-black flex items-center text-white overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover md:object-contain md:p-12" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Michael Hauck</h1>
          <p className="text-3xl text-blue-400 mb-8">{t.heroSubtitle}</p>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed">{t.heroBio}</p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollTo("contact")} className="bg-white text-zinc-900 px-10 py-4 rounded-full font-medium text-lg hover:bg-zinc-100">
              Contact Me
            </button>
            <a href="https://www.linkedin.com/in/michael-hauck-36b067129/" target="_blank" className="border border-white/70 hover:border-white px-10 py-4 rounded-full font-medium text-lg flex items-center gap-2">
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`w-3.5 h-3.5 rounded-full transition-all ${currentSlide === i ? 'bg-white scale-125' : 'bg-white/60'}`} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">{t.aboutTitle}</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">{t.aboutText}</p>
        </div>
      </section>

      {/* Skills - Fully translated */}
      <section id="skills" className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">{t.skillsTitle}</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-semibold text-2xl mb-6 text-blue-600">{skills.accounting}</h3>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                {skills.accountingBullets.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-2xl mb-6 text-blue-600">{skills.administration}</h3>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                {skills.administrationBullets.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-2xl mb-6 text-blue-600">{skills.software}</h3>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                {skills.softwareBullets.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="font-semibold text-3xl mb-10 text-blue-600">{t.languagesTitle}</h3>
            {renderLanguages()}
          </div>
        </div>
      </section>

      {/* Formation, Experience, Projects, Contact, Footer - unchanged from previous correct version */}
      {/* (You can keep the rest from your current file or copy from my previous full version) */}

      {/* For brevity, I'm showing only the changed Skills section above. 
      Keep the Formation, Experience, Projects, Contact and Footer sections exactly as in the last full file I gave you. */}

    </div>
  );
}
