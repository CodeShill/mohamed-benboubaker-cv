import React, { useRef, useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';

const CV = () => {
  const cvRef = useRef();
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const skills = [
      { skill: 'PHP', level: 60 },
      { skill: 'JavaScript', level: 50 },
      { skill: 'Java', level: 65 },
      { skill: 'HTML/CSS', level: 60 },
      { skill: 'SQL', level: 85 },
      { skill: 'Dolibarr', level: 80 },
      { skill: 'Shopify', level: 65 },
      { skill: 'Windchill PLM', level: 60 },
      { skill: 'API REST', level: 85 },
      { skill: 'Français', level: 70 },
      { skill: 'Anglais', level: 85 },
      { skill: 'Arabe', level: 100 }
    ];

    skills.forEach(({ skill, level }) => {
      let start = 0;
      const duration = 2000; // 2 seconds animation
      const step = level / (duration / 50); // Increment every 50ms
      const timer = setInterval(() => {
        start += step;
        if (start >= level) {
          start = level;
          clearInterval(timer);
        }
        setProgress(prev => ({ ...prev, [skill]: Math.round(start) }));
      }, 50);
    });
  }, []);

  const handleDownload = () => {
    const element = cvRef.current;
    const options = {
      margin: [0, 0],
      filename: 'Mohamed_Benboubaker_CV.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 5, useCORS: true },
      jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all'] }
    };
    html2pdf()
      .set(options)
      .from(element)
      .save();
  };

  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      padding: '0.45rem',
      minHeight: '100vh',
      fontFamily: '"Fira Code", monospace, Arial, sans-serif',
      color: '#d4d4d4',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <style>
        {`
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
          @keyframes scanline {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .typing-effect {
            overflow: hidden;
            white-space: nowrap;
            animation: typing 2s steps(30, end) 1;
          }
          .progress-bar {
            background-color: #3c3c3c;
            border-radius: 3.9px;
            overflow: hidden;
            border: 1px solid #00aaff;
          }
          .progress-bar-fill {
            background: linear-gradient(to right, #007acc, #00aaff);
            height: 6.5px;
            box-shadow: 0 0 5px #00aaff;
            position: relative;
            overflow: hidden;
            transition: width 0.05s linear;
          }
          .progress-bar-fill::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 20px;
            height: 100%;
            background: rgba(255, 255, 255, 0.3);
            animation: scanline 2s linear infinite;
            transform: skewX(-20deg);
          }
          button.mt-8.px-6.py-3.bg-blue-600 {
            display: none !important;
          }
          .cv-page-no-break {
            width: 595pt;
          }
          @media print {
            .progress-bar-fill::after {
              display: none;
            }
            .progress-bar {
              background-image: none !important;
            }
            .cv-page-no-break {
              page-break-inside: avoid;
              break-inside: avoid;
              width: 595pt !important;
            }
          }
          /* Mobile optimizations with multiple breakpoints */
          @media screen and (max-width: 1024px) {
            .cv-page-no-break {
              width: 90vw !important;
              padding: 0.6rem !important;
            }
            .cv-header {
              padding: 0.6rem !important;
            }
            .cv-header h1 {
              font-size: 1.2rem !important;
            }
            .cv-header p {
              font-size: 0.7rem !important;
            }
            .cv-section {
              padding-left: 0.6rem !important;
            }
            .cv-section h2 {
              font-size: 1rem !important;
            }
            .cv-section p, .cv-section ul, .cv-section li, .cv-section span {
              font-size: 0.7rem !important;
              line-height: 1.3 !important;
            }
            .skill-label {
              width: 80px !important;
              font-size: 0.7rem !important;
            }
            .percent-label {
              font-size: 0.75rem !important;
            }
            .download-button-container {
              margin-top: 0.6rem !important;
            }
            .download-button-container button {
              padding: 0.45rem 0.9rem !important;
              font-size: 0.85rem !important;
            }
            .konami-code {
              font-size: 0.6rem !important;
            }
            .debug-footer {
              font-size: 0.6rem !important;
            }
          }
          @media screen and (max-width: 768px) {
            .cv-page-no-break {
              width: 90vw !important;
              padding: 0.5rem !important;
            }
            .cv-header {
              padding: 0.5rem !important;
            }
            .cv-header h1 {
              font-size: 1.1rem !important;
            }
            .cv-header p {
              font-size: 0.65rem !important;
            }
            .cv-section {
              padding-left: 0.5rem !important;
            }
            .cv-section h2 {
              font-size: 0.9rem !important;
            }
            .cv-section p, .cv-section ul, .cv-section li, .cv-section span {
              font-size: 0.65rem !important;
              line-height: 1.2 !important;
            }
            .skill-label {
              width: 70px !important;
              font-size: 0.65rem !important;
            }
            .percent-label {
              font-size: 0.7rem !important;
            }
            .download-button-container {
              margin-top: 0.5rem !important;
            }
            .download-button-container button {
              padding: 0.4rem 0.8rem !important;
              font-size: 0.8rem !important;
            }
            .konami-code {
              font-size: 0.55rem !important;
            }
            .debug-footer {
              font-size: 0.55rem !important;
            }
          }
          @media screen and (max-width: 480px) {
            .cv-page-no-break {
              width: 95vw !important;
              padding: 0.4rem !important;
            }
            .cv-header {
              padding: 0.4rem !important;
            }
            .cv-header h1 {
              font-size: 1rem !important;
            }
            .cv-header p {
              font-size: 0.6rem !important;
            }
            .cv-section {
              padding-left: 0.4rem !important;
            }
            .cv-section h2 {
              font-size: 0.85rem !important;
            }
            .cv-section p, .cv-section ul, .cv-section li, .cv-section span {
              font-size: 0.6rem !important;
              line-height: 1.1 !important;
            }
            .skill-label {
              width: 60px !important;
              font-size: 0.6rem !important;
            }
            .percent-label {
              font-size: 0.65rem !important;
            }
            .download-button-container {
              margin-top: 0.4rem !important;
            }
            .download-button-container button {
              padding: 0.35rem 0.7rem !important;
              font-size: 0.75rem !important;
            }
            .konami-code {
              font-size: 0.5rem !important;
            }
            .debug-footer {
              font-size: 0.5rem !important;
            }
          }
          .skill-label {
            white-space: nowrap;
            width: 88px;
          }
          .percent-label {
            display: inline-block;
            text-align: center;
            background-color: #007acc !important;
            padding: 0.15rem 0.4rem;
            border-radius: 2px;
            transition: transform 0.2s ease;
          }
          .percent-label:hover {
            transform: scale(1.05);
          }
          .konami-code {
            font-family: Arial, sans-serif;
          }
          .download-button-container {
            display: flex;
            justify-content: center;
            width: 100%;
            margin-top: 0.85rem;
          }
        `}
      </style>

      <div
        ref={cvRef}
        className="cv-page-no-break"
        style={{
          backgroundColor: '#252526',
          padding: '0.85rem',
          boxSizing: 'border-box',
          color: '#d4d4d4',
          margin: '0 auto'
        }}
      >
        {/* Header */}
        <div className="cv-header" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '0.28rem',
          backgroundColor: '#007acc',
          padding: '0.68rem',
          borderRadius: '3.9px'
        }}>
          <img
            src="/Me.png"
            alt="Mohamed Benboubaker"
            style={{
              width: '79px',
              borderRadius: '50%',
              border: '2.9px solid #ffffff',
              marginBottom: '0.29rem',
              transition: 'transform 0.3s ease'
            }}
            className="hover:scale-110"
          />
          <h1 style={{
            fontSize: '1.36rem',
            fontWeight: '600',
            color: '#ffffff',
            margin: '0.29rem 0',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }} className="typing-effect">
            Mohamed Benboubaker
          </h1>
          <p style={{
            color: '#d4d4d4',
            fontSize: '0.76rem',
            textAlign: 'center',
            fontStyle: 'italic'
          }}>
            Medbenboubaker1995@gmail.com | +216 543 961 86 | Tunisie
          </p>
        </div>

        {/* Profile */}
        <div className="cv-section" style={{ borderLeft: '2.9px solid #007acc', paddingLeft: '0.68rem', marginBottom: '0.28rem' }}>
          <h2 style={{
            fontSize: '1.06rem',
            color: '#569cd6',
            margin: '0.29rem 0',
            fontWeight: '500'
          }}>
            // Profil Professionnel
          </h2>
          <span style={{
            display: 'inline-block',
            backgroundColor: '#3c3c3c',
            color: '#9cdcfe',
            padding: '0.19rem 0.49rem',
            borderRadius: '3.9px',
            fontSize: '0.76rem',
            marginBottom: '0.29rem'
          }}>
            Full Stack Dev | 2+ Years
          </span>
          <p style={{ color: '#d4d4d4', fontSize: '0.76rem', lineHeight: '1.32' }}>
            Développeur full stack spécialisé en <span style={{ color: '#ce9178' }}>PHP</span>, <span style={{ color: '#dcdcaa' }}>JavaScript</span>, et <span style={{ color: '#4ec9b0' }}>SQL</span>. Expert en ERP, APIs, et automatisation e-commerce.
          </p>
        </div>

        {/* Experience */}
        <div className="cv-section" style={{ borderLeft: '2.9px solid #007acc', paddingLeft: '0.68rem', marginBottom: '0.28rem' }}>
          <h2 style={{
            fontSize: '1.06rem',
            color: '#569cd6',
            margin: '0.29rem 0',
            fontWeight: '500'
          }}>
            // Expérience Professionnelle
          </h2>
          <ul style={{ fontSize: '0.76rem', lineHeight: '1.32', paddingLeft: '14px', color: '#d4d4d4' }}>
            <li style={{ marginBottom: '0.39rem' }}>
              <strong style={{ color: '#9cdcfe' }}>Mai 2024 - Actuellement</strong> | Développeur Full Stack - 5 Element Services<br />
              <span style={{ color: '#6a9955' }}>[+] </span>Conception et déploiement de microservices <span style={{ color: '#ce9178' }}>PHP 8</span>, exposant des REST APIs JSON sécurisées.<br />
              <span style={{ color: '#6a9955' }}>[*] </span>Optimisation de requêtes <span style={{ color: '#4ec9b0' }}>SQL</span> complexes (JOIN, CTE) et indexation, réduisant le TTFB de 40%.<br />
              <span style={{ color: '#6a9955' }}>[+] </span>Implémentation de webhooks et triggers JSON pour synchronisation en temps réel entre <span style={{ color: '#b5cea8' }}>Dolibarr ERP</span> et marketplaces.<br />
              <span style={{ color: '#6a9955' }}>[+] </span>Automatisation via <span style={{ color: '#569cd6' }}>CRON</span> de génération de rapports CSV et envoi d’emails par SMTP authentifié.<br />
              <span style={{ color: '#6a9955' }}>[+] </span>Création de sites <span style={{ color: '#569cd6' }}>Shopify</span> et intégration via API avec <span style={{ color: '#569cd6' }}>Dolibarr</span> pour une synchronisation optimale.<br />
            </li>
            <li style={{ marginBottom: '0.39rem' }}>
              <strong style={{ color: '#9cdcfe' }}>Oct. 2023 - Mai 2024</strong> | Développeur Java - Halley Technologies<br />
              <span style={{ color: '#6a9955' }}>[+] </span>Programmation de pipelines CI/CD avec <span style={{ color: '#b5cea8' }}>BitBucket </span> pour déploiement de modules <span style={{ color: '#569cd6' }}>Windchill PLM</span>.<br />
              <span style={{ color: '#6a9955' }}>[*] </span>Développement de services <span style={{ color: '#ce9178' }}>Java 11</span> manipulant des BOM et métadonnées PLM via SOAP/WSDL.<br />
              <span style={{ color: '#6a9955' }}>[+] </span>Intégration bidirectionnelle entre <span style={{ color: '#569cd6' }}>Windchill PLM</span> et SAP via <span style={{ color: '#b5cea8' }}>TIBCO</span> pour synchronisation de données en temps réel.<br />
              <span style={{ color: '#6a9955' }}>[*] </span>Intégration de tests unitaires <span style={{ color: '#b5cea8' }}>JUnit</span> avec une couverture supérieure à 90% pour chaque build.<br />
            </li>
            <li style={{ marginBottom: '0.39rem' }}>
              <strong style={{ color: '#9cdcfe' }}>Août 2022 - Sept. 2023</strong> | Développeur WordPress - The Team<br />
              <span style={{ color: '#6a9955' }}>[+] </span>Développé des sites <span style={{ color: '#ce9178' }}>WordPress</span> sur mesure avec des plugins personnalisés, optimisant les performances via <span style={{ color: '#b5cea8' }}>WP Super Cache</span>.<br />
              <span style={{ color: '#6a9955' }}>[*] </span>Implémenté des solutions e-commerce avec <span style={{ color: '#b5cea8' }}>WooCommerce</span>, intégrant des passerelles de paiement comme <span style={{ color: '#b5cea8' }}>Stripe</span> et <span style={{ color: '#b5cea8' }}>PayPal</span>.<br />
            </li>
            <li>
              <strong style={{ color: '#9cdcfe' }}>Déc. 2020 - Mai 2021</strong> | Technicien Helpdesk - Teleperformance<br />
              <span style={{ color: '#6a9955' }}>[+] </span>Géré et résolu des tickets B2C via <span style={{ color: '#b5cea8' }}>Zendesk</span>, atteignant un temps de résolution moyen de 15 minutes.<br />
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="cv-section" style={{ borderLeft: '2.9px solid #007acc', paddingLeft: '0.68rem', marginBottom: '0.28rem' }}>
          <h2 style={{
            fontSize: '1.06rem',
            color: '#569cd6',
            margin: '0.29rem 0',
            fontWeight: '500'
          }}>
            // Formation
          </h2>
          <ul style={{ fontSize: '0.76rem', lineHeight: '1.32', paddingLeft: '14px', color: '#d4d4d4' }}>
            <li>Avr. 2023 - Sep. 2023 | Formation Full Stack JS - GoMyCode</li>
            <li>Juin 2021 - Juin 2022 | Service Militaire - Ministère de la Défense</li>
            <li>Sep. 2018 - Oct. 2020 | Master Digital Management - ESSECT</li>
            <li>Sep. 2014 - Jun. 2018 | Licence Informatique de Gestion - ESSECT</li>
            <li>Sep. 2010 - Jun. 2014 | Baccalauréat - Lycée Farhat Hached Radès</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="cv-section" style={{ borderLeft: '2.9px solid #007acc', paddingLeft: '0.68rem', marginBottom: '0.28rem' }}>
          <h2 style={{
            fontSize: '1.06rem',
            color: '#569cd6',
            margin: '0.29rem 0',
            fontWeight: '500'
          }}>
            // Compétences <span className="konami-code" style={{ color: '#6a9955', fontSize: '0.67rem' }}>(Konami Code: ↑↑↓↓←→←→BA)</span>
          </h2>
          <div style={{ fontSize: '0.76rem' }}>
            {[
              { skill: 'PHP', level: 60 },
              { skill: 'JavaScript', level: 50 },
              { skill: 'Java', level: 65 },
              { skill: 'HTML/CSS', level: 60 },
              { skill: 'SQL', level: 85 },
              { skill: 'Dolibarr', level: 80 },
              { skill: 'Shopify', level: 65 },
              { skill: 'Windchill PLM', level: 60 },
              { skill: 'API REST', level: 85 },
              { skill: 'Français', level: 70 },
              { skill: 'Anglais', level: 85 },
              { skill: 'Arabe', level: 100 }
            ].map(({ skill, level }) => (
              <div key={skill} style={{ marginBottom: '0.18rem', display: 'flex', alignItems: 'center' }}>
                <span className="skill-label" style={{
                  color: (skill.includes('ançais') || skill.includes('Anglais') || skill.includes('Arabe'))
                    ? '#ce9178'
                    : '#9cdcfe'
                }}>
                  {skill}
                </span>
                <div style={{ flex: 1 }} className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${progress[skill] || 0}%` }}
                  />
                </div>
                <span className="percent-label" style={{
                  marginLeft: '0.5rem',
                  fontSize: '0.843rem',
                  fontWeight: '600',
                  color: (skill.includes('ançais') || skill.includes('Anglais') || skill.includes('Arabe'))
                    ? '#ce9178'
                    : '#9cdcfe'
                }}>
                  [{progress[skill] || 0}%]
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Debug Console Footer */}
        <div className="debug-footer" style={{
          borderTop: '1px solid #007acc',
          paddingTop: '0.13rem',
          fontSize: '0.67rem',
          color: '#6a9955',
          textAlign: 'center'
        }}>
          <span>console.log("Mohamed Benboubaker: Ready to code!");</span>
        </div>
      </div>

      {/* Download Button Container */}
      <div className="download-button-container">
        <button onClick={handleDownload} style={{
          padding: '0.49rem 0.98rem',
          backgroundColor: '#007acc',
          color: '#ffffff',
          borderRadius: '3.9px',
          border: 'none',
          fontSize: '0.89rem',
          cursor: 'pointer',
          fontFamily: '"Fira Code", monospace, Arial, sans-serif',
          transition: 'background-color 0.3s ease'
        }} className="hover:bg-[#005f99]">
          > Download CV
        </button>
      </div>
    </div>
  );
};

export default CV;