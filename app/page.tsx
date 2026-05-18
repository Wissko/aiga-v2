'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/components/LanguageProvider';

const machineBlocks = {
  fr: {
    eyebrow: 'AIGA V2 / atelier IA',
    heroTitle: 'On rend les machines utiles.',
    manifesto:
      "AIGA installe des systèmes IA sobres, robustes et lisibles. Pas de magie. Pas de théâtre. Des machines qui répondent juste, travaillent proprement et soulagent vraiment l'équipe.",
    primaryCta: 'Diagnostiquer un usage',
    secondaryCta: 'Voir la méthode',
    utilityTitle: 'Ce qu’on rend utile',
    utilityIntro:
      "On part des irritants réels du terrain, puis on construit l'outil minimum qui tient dans la durée.",
    methodTitle: 'Une machine bien élevée se règle avant de tourner.',
    methodBody:
      "Chaque système est cadré, testé et documenté. L'IA reste au service du métier, avec des garde-fous clairs et une sortie humaine quand il le faut.",
    finalTitle: 'Vous avez un process qui coince ? On peut le mettre sur établi.',
    finalBody:
      "En 30 minutes, on identifie ce qui mérite une machine, ce qui mérite une règle simple, et ce qu'il ne faut surtout pas automatiser.",
    finalCta: 'Ouvrir un chantier',
    blocks: [
      ['Réponse client', 'Trier les demandes, préparer les réponses, réduire les oublis sans robotiser la relation.'],
      ['Opérations internes', 'Transformer les routines floues en checklists, tableaux de bord et assistants d’exécution.'],
      ['Vente et suivi', 'Relancer au bon moment, qualifier proprement, garder une trace exploitable.'],
      ['Connaissance métier', 'Rendre les docs, procédures et décisions accessibles sans fouille interminable.'],
    ],
    method: [
      ['01', 'Cartographier', 'Identifier les gestes répétitifs, les risques et les décisions qui doivent rester humaines.'],
      ['02', 'Assembler', 'Brancher les bons outils, écrire les règles, simplifier le parcours avant d’ajouter de l’IA.'],
      ['03', 'Éduquer', 'Tester les cas limites, documenter le fonctionnement et former l’équipe à reprendre la main.'],
    ],
    gauges: ['Utile', 'Lisible', 'Contrôlé'],
  },
  en: {
    eyebrow: 'AIGA V2 / AI workshop',
    heroTitle: 'We make machines useful.',
    manifesto:
      'AIGA installs sober, sturdy, legible AI systems. No magic. No theatre. Machines that answer correctly, work cleanly and genuinely reduce the load on the team.',
    primaryCta: 'Diagnose a use case',
    secondaryCta: 'See the method',
    utilityTitle: 'What we make useful',
    utilityIntro:
      'We start with real operational friction, then build the smallest tool that can hold up over time.',
    methodTitle: 'A well raised machine is tuned before it runs.',
    methodBody:
      'Every system is framed, tested and documented. AI stays in service of the work, with clear guardrails and a human exit when needed.',
    finalTitle: 'Got a process that jams? Put it on the bench.',
    finalBody:
      'In 30 minutes, we identify what deserves a machine, what deserves a simple rule, and what should not be automated at all.',
    finalCta: 'Open a workbench',
    blocks: [
      ['Customer response', 'Triage requests, prepare replies and reduce missed follow-ups without flattening the relationship.'],
      ['Internal operations', 'Turn vague routines into checklists, dashboards and execution assistants.'],
      ['Sales and follow-up', 'Follow up at the right moment, qualify cleanly and keep usable traces.'],
      ['Business knowledge', 'Make documents, procedures and decisions accessible without endless digging.'],
    ],
    method: [
      ['01', 'Map', 'Identify repetitive moves, risks and the decisions that must stay human.'],
      ['02', 'Assemble', 'Connect the right tools, write the rules and simplify the path before adding AI.'],
      ['03', 'Train', 'Test edge cases, document behaviour and teach the team how to take over.'],
    ],
    gauges: ['Useful', 'Legible', 'Controlled'],
  },
} as const;

export default function HomePage() {
  const { locale } = useLanguage();
  const copy = machineBlocks[locale];
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section className="aiga-hero" aria-labelledby="aiga-hero-title">
        <div className="aiga-grid-mask" aria-hidden="true" />
        <div className="aiga-hero-rails" aria-hidden="true">
          <span>SYSTEME / OUTIL / GARDE-FOU</span>
          <span>AIGA / MACHINE BIEN ELEVEE</span>
        </div>

        <div className="aiga-shell aiga-hero-layout">
          <AnimatedSection>
            <p className="aiga-eyebrow">{copy.eyebrow}</p>
            <h1 id="aiga-hero-title" className="aiga-hero-title">{copy.heroTitle}</h1>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="aiga-control-card">
              <div className="aiga-card-header">
                <span>CTRL-01</span>
                <span>MODE: UTILE</span>
              </div>
              <p>{copy.manifesto}</p>
              <div className="aiga-actions">
                <Link href="/contact" className="aiga-btn aiga-btn-primary">{copy.primaryCta}</Link>
                <a href="#methode" className="aiga-btn aiga-btn-secondary">{copy.secondaryCta}</a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <motion.div
          className="aiga-machine-strip"
          aria-hidden="true"
          animate={reduceMotion ? undefined : { x: ['0%', '-33.333%'] }}
          transition={reduceMotion ? undefined : { duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          {Array.from({ length: 3 }).map((_, group) => (
            <div className="aiga-strip-group" key={group}>
              <span>BRIEF</span><span>CADRE</span><span>TEST</span><span>MAIN HUMAINE</span><span>SORTIE PROPRE</span>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="aiga-section aiga-section-paper">
        <div className="aiga-shell">
          <div className="aiga-section-head">
            <AnimatedSection>
              <p className="aiga-eyebrow dark">PLAN DE TRAVAIL</p>
              <h2 className="aiga-section-title">{copy.utilityTitle}</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <p className="aiga-section-intro">{copy.utilityIntro}</p>
            </AnimatedSection>
          </div>

          <div className="aiga-utility-grid">
            {copy.blocks.map(([title, body], index) => (
              <AnimatedSection key={title} delay={index * 0.05}>
                <article className="aiga-tool-card">
                  <div className="aiga-tool-index">{String(index + 1).padStart(2, '0')}</div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="methode" className="aiga-section aiga-section-charcoal">
        <div className="aiga-shell aiga-method-layout">
          <AnimatedSection>
            <p className="aiga-eyebrow">METHODE</p>
            <h2 className="aiga-section-title light aiga-method-title">{copy.methodTitle}</h2>
            <p className="aiga-method-body">{copy.methodBody}</p>
          </AnimatedSection>

          <div className="aiga-method-board">
            {copy.method.map(([num, title, body], index) => (
              <AnimatedSection key={num} delay={index * 0.06}>
                <article className="aiga-step-row">
                  <span>{num}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="aiga-section aiga-section-signal">
        <div className="aiga-shell aiga-final-card">
          <div className="aiga-final-copy">
            <p className="aiga-eyebrow dark">PROCHAIN REGLAGE</p>
            <h2>{copy.finalTitle}</h2>
            <p>{copy.finalBody}</p>
          </div>
          <div className="aiga-gauge-panel" aria-label={copy.gauges.join(', ')}>
            {copy.gauges.map((gauge, index) => (
              <div className="aiga-gauge" key={gauge} style={{ '--gauge': `${72 + index * 8}%` } as React.CSSProperties}>
                <span>{gauge}</span>
              </div>
            ))}
          </div>
          <Link href="/contact" className="aiga-btn aiga-btn-dark aiga-final-cta">{copy.finalCta}</Link>
        </div>
      </section>
    </>
  );
}
