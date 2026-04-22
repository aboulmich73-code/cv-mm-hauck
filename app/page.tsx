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

const formationData = {
  en: [
    { title: "Payroll Administrator", institution: "Ingesco • Switzerland", period: "11.2025 - 12.2025" },
    { title: "Federal VET Diploma - Commercial Employee", institution: "Kaufmännischer Verein Basel • Basel", period: "1994 - 1997" },
    { title: "Maturity / Fachmaturiät", institution: "Fachmaturiätsschule Bâle • Basel", period: "1988 - 1992" },
    { title: "Secondary School Diploma", institution: "Burgschulhaus • Riehen", period: "1984 - 1988" }
  ],
  fr: [
    { title: "Gestionnaire de salaire", institution: "Ingesco • Suisse", period: "12.2025" },
    { title: "CFC d'employé de commerce", institution: "Kaufmännischer Verein Basel • Bâle", period: "1994 - 1997" },
    { title: "Maturité / Fachmaturiät", institution: "Fachmaturiätsschule Bâle • Bâle", period: "1988 - 1992" },
    { title: "Diplôme de l'école secondaire", institution: "Burgschulhaus • Riehen", period: "1984 - 1988" }
  ],
  de: [
    { title: "Lohnbuchhalter", institution: "Ingesco • Schweiz", period: "11.2025 - 12.2025" },
    { title: "Eidg. Fähigkeitszeugnis Kaufmann", institution: "Kaufmännischer Verein Basel • Basel", period: "1994 - 1997" },
    { title: "Maturiät / Fachmaturiät", institution: "Fachmaturiätsschule Basel • Basel", period: "1988 - 1992" },
    { title: "Sekundarschulabschluss", institution: "Burgschulhaus • Riehen", period: "1984 - 1988" }
  ]
};

const experienceData = {
  en: [
    { title: "Accounts Payable Accountant / Administrative Assistant", company: "Interiman Group, Renens", period: "01.2023 – 02.2025", bullets: ["Enter supplier invoices in Verifier and manage invoice processing via M-Files and CPS", "Manage family allowance requests and Swiss Army loss of earnings compensation (APG)", "Handle source tax declaration for Ticino using easytemp and Ifonte", "Record Tax Residence Certificate (ARF) and configure withholding tax", "Process Temptraining training reimbursement requests"] },
    { title: "Data Correction (Temporary Contract)", company: "Assura assurance, Lausanne", period: "07.2022 – 12.2022", bullets: ["Correct and validate insurance data to ensure system accuracy", "Analyze complex datasets"] },
    { title: "Financial Assistant", company: "Burger King, Nyon", period: "11.2020 – 04.2021", bullets: ["Manage accounts payable, intercompany accounting and bank reconciliations", "Execute bank payments and manage collection reminders"] },
    { title: "General Accounting Intern", company: "Ouistart, Geneva", period: "01.2020 – 07.2020", bullets: ["Manage the full invoice posting cycle for receivables and payables", "Prepare and process payroll, social contributions and operating expenses", "Perform VAT calculation and payment", "Contribute to quarterly and annual closings"] },
    { title: "Accounts Payable Accountant (Fixed-term)", company: "Touring Club Suisse, Vernier", period: "12.2017 – 02.2018", bullets: ["Accurately enter incoming invoices using SAP S/4HANA", "Handle incoming mail processing"] },
    { title: "Accountant", company: "Dinifan, Les Acacias", period: "03.2011 – 03.2017", bullets: ["Manage accounts payable, receivable and general accounting including monthly closings", "Prepare invoicing, credit notes and client reminders", "Prepare electronic payments in DTA format and reconcile bank and postal accounts", "Maintain client contact in French, German and English"] },
    { title: "Accountant (Fixed-term)", company: "DHL Suisse, Geneva", period: "10.2010 – 01.2011", bullets: ["Responsible for cash collection from customers", "Extract and perform detailed analysis of customer accounts", "Conduct targeted telephone reminders"] },
    { title: "Accountant", company: "Primacy Relocation, Geneva", period: "02.2008 – 01.2010", bullets: ["Accurately post bank entries into the accounting system", "Manage invoicing and collection of customer payments", "Perform monthly account reconciliations"] },
    { title: "Data Entry (Fixed-term)", company: "Cotecna, Geneva", period: "10.2007", bullets: ["Perform fast and accurate entry of large volumes of data"] },
    { title: "Collections and Receipts Accountant", company: "Europe, Bussigny", period: "06.2006 – 04.2007", bullets: ["Record incoming customer payments and manage returned payment processing", "Monitor customer accounts with overdue payments", "Generate reminders and produce detailed overdue reports"] },
    { title: "Assistant Accountant", company: "SGA Affichage, Geneva", period: "06.2004 – 10.2005", bullets: ["Manage receivables processing, including issuing and following up on reminders", "Maintain CCP accounts, bank accounts and cash, prepare weekly cash position reports", "Handle payment traffic and processing of checks and Visa cards"] },
    { title: "Assistant Accountant (Fixed-term)", company: "Pharmacie Principale, Geneva", period: "12.2003 – 04.2004", bullets: ["Post and reconcile cash and card payments", "Manage supplier invoices and reminders", "Optimize internal procedures and client billing"] },
    { title: "Assistant Accountant – Occupational Pension (Fixed-term)", company: "Providentia Assurances, Nyon", period: "04.2000 – 05.2002", bullets: ["Post insurance premiums and manage receipts and disbursements", "Monitor occupational pension benefits", "Perform monthly reconciliations"] }
  ],
  fr: [
    { title: "Comptable Fournisseurs / Assistant Administratif", company: "Interiman Group, Renens", period: "01.2023 – 02.2025", bullets: ["Saisie des factures fournisseurs dans Verifier et gestion via M-Files et CPS", "Gestion des allocations familiales et APG", "Déclaration d'impôt à la source pour le Tessin", "Enregistrement du certificat de résidence fiscale (ARF)", "Traitement des demandes de remboursement Temptraining"] },
    { title: "Correction de Données (Contrat Temporaire)", company: "Assura assurance, Lausanne", period: "07.2022 – 12.2022", bullets: ["Correction et validation des données d'assurance complexes", "Analyse de jeux de données complexes"] },
    { title: "Assistant Financier", company: "Burger King, Nyon", period: "11.2020 – 04.2021", bullets: ["Gestion des comptes fournisseurs et rapprochements bancaires", "Exécution des paiements et rappels"] },
    { title: "Stagiaire en Comptabilité Générale", company: "Ouistart, Geneva", period: "01.2020 – 07.2020", bullets: ["Cycle complet de saisie des factures", "Préparation de la paie et charges sociales", "Calcul et paiement de la TVA", "Participation aux clôtures trimestrielles et annuelles"] },
    { title: "Comptable Fournisseurs (Durée Déterminée)", company: "Touring Club Suisse, Vernier", period: "12.2017 – 02.2018", bullets: ["Saisie précise des factures entrantes avec SAP S/4HANA", "Traitement du courrier entrant"] },
    { title: "Comptable", company: "Dinifan, Les Acacias", period: "03.2011 – 03.2017", bullets: ["Gestion complète de la comptabilité fournisseurs, clients et générale", "Préparation des factures, avoirs et rappels", "Paiements électroniques en format DTA", "Contact clients en français, allemand et anglais"] },
    { title: "Comptable (Durée Déterminée)", company: "DHL Suisse, Geneva", period: "10.2010 – 01.2011", bullets: ["Recouvrement des clients", "Analyse détaillée des comptes clients", "Rappels téléphoniques ciblés"] },
    { title: "Comptable", company: "Primacy Relocation, Geneva", period: "02.2008 – 01.2010", bullets: ["Saisie des écritures bancaires", "Facturation et recouvrement clients", "Rapprochements mensuels"] },
    { title: "Saisie de Données (Durée Déterminée)", company: "Cotecna, Geneva", period: "10.2007", bullets: ["Saisie rapide et précise de grands volumes de données"] },
    { title: "Comptable Recouvrements et Encaissements", company: "Europe, Bussigny", period: "06.2006 – 04.2007", bullets: ["Enregistrement des paiements clients", "Suivi des comptes en retard", "Génération de rappels et rapports"] },
    { title: "Assistant Comptable", company: "SGA Affichage, Geneva", period: "06.2004 – 10.2005", bullets: ["Suivi des créances et rappels", "Gestion des comptes CCP, banque et caisse", "Rapports hebdomadaires de trésorerie"] },
    { title: "Assistant Comptable (Durée Déterminée)", company: "Pharmacie Principale, Geneva", period: "12.2003 – 04.2004", bullets: ["Rapprochement caisse et cartes", "Gestion des factures fournisseurs et rappels"] },
    { title: "Assistant Comptable – Prévoyance Professionnelle (Durée Déterminée)", company: "Providentia Assurances, Nyon", period: "04.2000 – 05.2002", bullets: ["Affiliation des primes d'assurance", "Suivi des prestations de prévoyance", "Rapprochements mensuels"] }
  ],
  de: [
    { title: "Kreditorenbuchhalter / Administrativer Mitarbeiter", company: "Interiman Group, Renens", period: "01.2023 – 02.2025", bullets: ["Verarbeitung von Lieferantenrechnungen in Verifier und Freigabe via M-Files und CPS", "Bearbeitung von Familienzulagen und APG", "Quellensteuererklärungen (Tessin)", "Erfassung von Wohnsitzbescheinigungen", "Bearbeitung von Weiterbildungs-Rückerstattungen"] },
    { title: "Datenkorrektur (Befristet)", company: "Assura assurance, Lausanne", period: "07.2022 – 12.2022", bullets: ["Korrektur und Validierung komplexer Versicherungsdaten", "Analyse komplexer Datensätze"] },
    { title: "Finanzassistent", company: "Burger King, Nyon", period: "11.2020 – 04.2021", bullets: ["Kreditorenbuchhaltung und Bankabstimmungen", "Ausführung von Bankzahlungen und Mahnungen"] },
    { title: "Praktikant in der Finanzbuchhaltung", company: "Ouistart, Geneva", period: "01.2020 – 07.2020", bullets: ["Vollständiger Rechnungszyklus", "Lohn- und Sozialabgabenverarbeitung", "MWST-Berechnung und Zahlung", "Mitwirkung bei Abschlüssen"] },
    { title: "Kreditorenbuchhalter (Befristet)", company: "Touring Club Suisse, Vernier", period: "12.2017 – 02.2018", bullets: ["Rechnungserfassung in SAP S/4HANA", "Bearbeitung des Posteingangs"] },
    { title: "Buchhalter", company: "Dinifan, Les Acacias", period: "03.2011 – 03.2017", bullets: ["Vollständige Buchhaltung inkl. Monatsabschlüsse", "Rechnungsstellung und Mahnwesen", "Elektronische Zahlungen im DTA-Format", "Kundenbetreuung in drei Sprachen"] },
    { title: "Buchhalter (Befristet)", company: "DHL Suisse, Geneva", period: "10.2010 – 01.2011", bullets: ["Inkasso und Kundenanalyse", "Telefonische Mahnungen"] },
    { title: "Buchhalter", company: "Primacy Relocation, Geneva", period: "02.2008 – 01.2010", bullets: ["Bankbuchungen und Abstimmungen"] },
    { title: "Datenerfassung (Befristet)", company: "Cotecna, Geneva", period: "10.2007", bullets: ["Schnelle und genaue Dateneingabe großer Volumen"] },
    { title: "Inkasso- und Zahlungsbuchhalter", company: "Europe, Bussigny", period: "06.2006 – 04.2007", bullets: ["Verbuchung von Zahlungseingängen", "Überwachung überfälliger Konten", "Erstellung von Mahnberichten"] },
    { title: "Buchhaltungsassistent", company: "SGA Affichage, Geneva", period: "06.2004 – 10.2005", bullets: ["Forderungsmanagement und Mahnwesen", "Führung von CCP-, Bank- und Kassenkonten", "Wöchentliche Liquiditätsberichte"] },
    { title: "Buchhaltungsassistent (Befristet)", company: "Pharmacie Principale, Geneva", period: "12.2003 – 04.2004", bullets: ["Kassen- und Kartenzahlungsabstimmung", "Lieferantenrechnungen und Mahnungen"] },
    { title: "Buchhaltungsassistent – Berufliche Vorsorge (Befristet)", company: "Providentia Assurances, Nyon", period: "04.2000 – 05.2002", bullets: ["Prämienverbuchung und Leistungsüberwachung", "Monatliche Abstimmungen"] }
  ]
};

const projectsData = {
  en: [
    { title: "Couture Martha", description: "Professional website for sewing, alterations, repairs and bespoke tailoring services in the Geneva, Versoix and Nyon area.", link: "https://www.couture-martha.ch" },
    { title: "SBB Timetable App", description: "Contribution to the official Swiss Federal Railways (SBB/CFF) timetable and travel planner application.", link: "https://www.sbb.ch" }
  ],
  fr: [
    { title: "Couture Martha", description: "Site web professionnel pour retouches, réparations et confection sur mesure à Genève, Versoix et Nyon.", link: "https://www.couture-martha.ch" },
    { title: "Application Horaire SBB / CFF", description: "Contribution au développement et à la maintenance de l'application horaire officielle des Chemins de fer fédéraux suisses (CFF/SBB).", link: "https://www.sbb.ch" }
  ],
  de: [
    { title: "Couture Martha", description: "Professionelle Website für Änderungen, Reparaturen und Maßanfertigungen im Raum Genf, Versoix und Nyon.", link: "https://www.couture-martha.ch" },
    { title: "SBB Fahrplan App", description: "Mitarbeit an der offiziellen Fahrplan- und Reiseplaner-App der Schweizerischen Bundesbahnen (SBB/CFF).", link: "https://www.sbb.ch" }
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
      {/* Navbar */}
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

      {/* Hero */}
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

      {/* Skills */}
      <section id="skills" className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">{t.skillsTitle}</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-semibold text-2xl mb-6 text-blue-600">Accounting</h3>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                <li>• General Ledger & Bookkeeping</li>
                <li>• Accounts Payable / Receivable</li>
                <li>• Monthly & Annual Closings</li>
                <li>• VAT Declaration & Payment</li>
                <li>• Bank & Cash Reconciliations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-2xl mb-6 text-blue-600">Administration</h3>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                <li>• Family Allowances (APG)</li>
                <li>• Source Tax Declarations</li>
                <li>• Training Reimbursement Requests</li>
                <li>• Occupational Pension (2nd Pillar)</li>
                <li>• Payroll Processing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-2xl mb-6 text-blue-600">Software & Tools</h3>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                <li>• SAP S/4HANA</li>
                <li>• Winbiz & Cresus</li>
                <li>• M-Files, Verifier, CPS</li>
                <li>• Microsoft Excel (Advanced)</li>
              </ul>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="font-semibold text-3xl mb-10 text-blue-600">{t.languagesTitle}</h3>
            {renderLanguages()}
          </div>
        </div>
      </section>

      {/* Formation */}
      <section id="formation" className="py-20 bg-zinc-100 dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">{t.formationTitle}</h2>
          <div className="space-y-12">
            {currentFormation.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row md:justify-between gap-6 border-b pb-8 last:border-none">
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">{item.institution}</p>
                </div>
                <div className="text-right text-sm text-zinc-500 font-mono">{item.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience - All 13 entries */}
      <section id="experience" className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">{t.experienceTitle}</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-300 dark:bg-zinc-700"></div>
            <div className="space-y-16">
              {currentExperience.map((job, index) => (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-6 w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-zinc-950"></div>
                  <div className="flex flex-col md:flex-row md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <p className="text-blue-600 font-medium">{job.company}</p>
                    </div>
                    <p className="text-base md:text-lg font-semibold text-zinc-600 dark:text-zinc-400 whitespace-nowrap mt-1 md:mt-0">
                      {job.period}
                    </p>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
                    {job.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-zinc-100 dark:bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">{t.projectsTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow hover:shadow-xl transition group">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 transition">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Visit Website <ExternalLink size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">{t.contactTitle}</h2>
          <div className="max-w-[700px] mx-auto bg-white dark:bg-zinc-800 p-10 rounded-2xl shadow">
            <form action="https://formspree.io/f/xgopoqjg" method="POST">
              <input type="text" name="name" placeholder={t.formName} required className="w-full px-5 py-4 mb-4 border border-gray-300 dark:border-zinc-600 rounded-xl focus:border-blue-500 dark:bg-zinc-900" />
              <input type="email" name="email" placeholder={t.formEmail} required className="w-full px-5 py-4 mb-4 border border-gray-300 dark:border-zinc-600 rounded-xl focus:border-blue-500 dark:bg-zinc-900" />
              <textarea name="message" rows={6} placeholder={t.formMessage} required className="w-full px-5 py-4 mb-6 border border-gray-300 dark:border-zinc-600 rounded-xl focus:border-blue-500 dark:bg-zinc-900 resize-y min-h-[160px]" />
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-colors">
                {t.formButton}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-sm text-zinc-500 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        © 2026 Michael Hauck • Switzerland
      </footer>
    </div>
  );
}
