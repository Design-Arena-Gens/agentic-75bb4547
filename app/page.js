"use client";

import { useMemo } from "react";

const timeline = [
  {
    year: 1980,
    title: "Consolidation des alliances anti-hégémoniques",
    detail:
      "Cuba et l'Iran renforcent leur coopération avec l'URSS et les mouvements non-alignés, cherchant des partenaires face à la pression américaine."
  },
  {
    year: 2005,
    title: "Virage chaviste et rapprochement Caracas-Téhéran",
    detail:
      "Hugo Chávez signe des accords stratégiques avec Mahmoud Ahmadinejad, inaugurant une collaboration énergétique, sécuritaire et diplomatique."
  },
  {
    year: 2015,
    title: "Crise vénézuélienne et sanctions américaines",
    detail:
      "Les sanctions ciblant PDVSA et le blocus financier renforcent la perception d'un encerclement, poussant Caracas à verrouiller ses espaces souverains."
  },
  {
    year: 2020,
    title: "Intensification des livraisons pétrole contre produits",
    detail:
      "Les ponts aériens et maritimes iraniens vers le Venezuela deviennent vitaux pour la survie économique, nécessitant un contrôle strict de l'espace aérien."
  },
  {
    year: 2024,
    title: "Réaffirmation coordonnée du blocage aérien",
    detail:
      "Dans un contexte de recomposition multipolaire, Caracas, La Havane et Téhéran affichent un front diplomatique commun contre Washington."
  }
];

const drivers = [
  {
    category: "Sécurité",
    points: [
      "Limiter les opérations de surveillance électronique américaine (SIGINT) au-dessus des infrastructures sensibles.",
      "Réduire les possibilités d'exfiltration ou d'infiltration clandestine par des appareils identifiés comme civils mais opérant pour des agences américaines.",
      "Protéger les corridors aériens utilisés pour des échanges militaires et logistiques internes ou alliés."
    ]
  },
  {
    category: "Politique",
    points: [
      "Signaler une posture de défiance et d'autonomie stratégique vis-à-vis de Washington.",
      "Renforcer la cohésion intérieure autour d'un discours souverainiste et anti-impérialiste.",
      "Créer des leviers de négociation dans les discussions bilatérales ou multilatérales sur les sanctions."
    ]
  },
  {
    category: "Économie",
    points: [
      "Valider des corridors sécurisés pour le transport de biens critiques (pièces de rechange, médicaments, équipements énergétiques).",
      "Encourager le développement de hubs aériens alternatifs (alliés ou neutres) pour le trafic commercial et diplomatique.",
      "Préserver l'attractivité de compagnies aériennes nationales ou partenaires en situation de quasi-monopole sur ces routes."
    ]
  },
  {
    category: "Narratif international",
    points: [
      "S'inscrire dans les dynamiques BRICS+ et des pays sanctionnés cherchant à s'affranchir du dollar et des flux occidentaux.",
      "Projeter une image de résilience et d'interconnexion Sud-Sud face aux pressions occidentales.",
      "Capitaliser sur la perception d'une hégémonie américaine déclinante pour attirer de nouveaux partenaires."
    ]
  }
];

const scenarios = [
  {
    label: "Durcissement",
    likelihood: "Élevée",
    impact: "Fort",
    description:
      "Les trois capitales coordonnent davantage leurs procédures aériennes, imposant des survols obligatoires via des alliés (Russie, Chine) et restreignant les vols humanitaires américains."
  },
  {
    label: "Gestion pragmatique",
    likelihood: "Moyenne",
    impact: "Moyen",
    description:
      "Des exemptions ponctuelles sont accordées pour des missions humanitaires, mais restent strictement contrôlées; le verrouillage demeure un outil de pression diplomatique."
  },
  {
    label: "Désescalade",
    likelihood: "Faible",
    impact: "Faible",
    description:
      "Un rapprochement circonstanciel avec Washington pourrait ouvrir des couloirs temporaires, mais cela impliquerait des concessions économiques majeures."
  }
];

export default function Page() {
  const timelineContent = useMemo(
    () =>
      timeline.map((item) => (
        <article className="timeline-card" key={item.year}>
          <span className="year">{item.year}</span>
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
        </article>
      )),
    []
  );

  return (
    <main>
      <header className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="tag">Analyse géopolitique</p>
          <h1>Pourquoi le Venezuela, Cuba et l&apos;Iran ferment-ils leur espace aérien aux États-Unis ?</h1>
          <p className="lead">
            Les restrictions aériennes reflètent une stratégie concertée où souveraineté, sécurité et diplomatie
            s&apos;entremêlent. Cette analyse offre un décryptage structuré des motivations et des impacts de cette
            posture.
          </p>
        </div>
      </header>

      <section className="section">
        <h2>Résumé exécutif</h2>
        <p>
          La fermeture de l&apos;espace aérien aux appareils américains par Caracas, La Havane et Téhéran constitue un
          acte de souveraineté destiné à limiter l&apos;influence stratégique des États-Unis. Cette politique est motivée par
          la crainte d&apos;intrusions militaires ou de renseignement, par la volonté d&apos;affaiblir l&apos;effet des sanctions
          économiques et par la recherche d&apos;une stature géopolitique crédible auprès des partenaires non occidentaux.
        </p>
      </section>

      <section className="section">
        <h2>Socle historique</h2>
        <div className="timeline">{timelineContent}</div>
        <p>
          Ces trajectoires nationales convergent autour d&apos;une perception partagée d&apos;ingérence américaine. Les expériences
          cubaines (Baie des Cochons), iraniennes (opération Ajax, abattage du vol Iran Air 655) et vénézuéliennes (tentative
          de coup d&apos;État de 2002) alimentent une mémoire stratégique où l&apos;espace aérien est considéré comme un front
          hybride essentiel.
        </p>
      </section>

      <section className="section">
        <h2>Déterminants principaux</h2>
        <div className="drivers-grid">
          {drivers.map((driver) => (
            <div className="driver-card" key={driver.category}>
              <h3>{driver.category}</h3>
              <ul>
                {driver.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Dimension juridique</h2>
        <p>
          Conformément à la Convention de Chicago de 1944, chaque État conserve une souveraineté totale sur son espace
          aérien. Les autorisations de survol relèvent d&apos;accords bilatéraux ou de principes de réciprocité. En se retirant
          ou en suspendant ces arrangements, le Venezuela, Cuba et l&apos;Iran ne violent pas le droit international, mais
          acceptent de limiter le trafic commercial américain au profit de réseaux alternatifs — russes, chinois ou
          régionaux — qui s&apos;engagent à respecter leurs conditions de survol.
        </p>
      </section>

      <section className="section">
        <h2>Impacts opérationnels</h2>
        <div className="impacts-grid">
          <article>
            <h3>Pour Washington</h3>
            <p>
              Les États-Unis voient leur capacité de projection rapide réduite sur des axes critiques (Caraïbes, Golfe
              Persique). Les opérations humanitaires ou d&apos;évacuation nécessitent désormais des corridors approuvés par
              des États tiers, augmentant le temps de réaction.
            </p>
          </article>
          <article>
            <h3>Pour les alliés régionaux</h3>
            <p>
              Les pays voisins subissent des pressions pour autoriser ou refuser les reroutages américains. Certains
              (Colombie, Bahreïn) en profitent pour monnayer leur coopération. D&apos;autres, comme le Mexique, cherchent un
              équilibre pour éviter l&apos;escalade.
            </p>
          </article>
          <article>
            <h3>Pour les économies locales</h3>
            <p>
              En stimulant les compagnies partenaires (Conviasa, Mahan Air, Cubana), ces États consolident des réseaux
              logistiques protégés contre les sanctions, tout en acceptant des surcoûts d&apos;assurance et des ralentissements
              commerciaux.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Scénarios à 12-24 mois</h2>
        <div className="scenarios">
          {scenarios.map((scenario) => (
            <div className="scenario-card" key={scenario.label}>
              <header>
                <h3>{scenario.label}</h3>
                <span className="badge">{scenario.likelihood}</span>
              </header>
              <p className="impact">Impact : {scenario.impact}</p>
              <p>{scenario.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Points de vigilance</h2>
        <ul className="checklist">
          <li>Surveillance des routes maritimes alternatives compensant les restrictions aériennes.</li>
          <li>Observation des exercices militaires conjoints impliquant la Russie ou la Chine dans ces espaces.</li>
          <li>Analyse de la posture des assureurs internationaux face aux vols vers ces destinations.</li>
          <li>Évolution des négociations sur les sanctions et levées partielles conditionnelles.</li>
        </ul>
      </section>

      <footer className="footer">
        <p>
          Rapport produit par un analyste géopolitique spécialisé dans les dynamiques de souveraineté aérienne et les
          politiques de sanctions. Données consolidées en juillet 2024.
        </p>
      </footer>
    </main>
  );
}
