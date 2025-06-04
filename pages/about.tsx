import React from 'react';
import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <div className="container">
      <div className={styles.aboutContainer}>
        <h1 className={styles.aboutHeading}>About AppNameGenius</h1>
        
        <section className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>What We Do</h2>
          <p>
            AppNameGenius is a specialized tool designed to help app developers, 
            entrepreneurs, and creative professionals come up with compelling names 
            for their applications. Using a combination of linguistic algorithms and 
            creative patterns, we generate unique and brandable app names based on 
            your description.
          </p>
        </section>
        
        <section className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>Our Features</h2>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <strong>Smart Name Generation</strong> - Our algorithm analyzes your app description 
              to identify key concepts and generates names that reflect your app's purpose.
            </li>
            <li className={styles.featureItem}>
              <strong>Variety of Naming Patterns</strong> - We use different naming techniques like 
              prefixes, suffixes, word blending, and more to ensure diverse suggestions.
            </li>
            <li className={styles.featureItem}>
              <strong>Instant Results</strong> - Get 5 creative name suggestions in seconds.
            </li>
            <li className={styles.featureItem}>
              <strong>Name Explanations</strong> - Each suggested name comes with a brief explanation 
              of its meaning and why it might work for your app.
            </li>
            <li className={styles.featureItem}>
              <strong>Free to Use</strong> - Our basic name generation service is completely free.
            </li>
          </ul>
        </section>
        
        <section className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>Tips for Getting Better Names</h2>
          
          <div className={styles.tipCard}>
            <h3 className={styles.tipTitle}>Be Specific</h3>
            <p>
              The more details you provide about your app's function, target audience, 
              and unique selling points, the better our generator can create relevant names.
            </p>
          </div>
          
          <div className={styles.tipCard}>
            <h3 className={styles.tipTitle}>Focus on Benefits</h3>
            <p>
              Describe what problems your app solves or benefits it provides rather than 
              just listing features. This helps our system understand the core value proposition.
            </p>
          </div>
          
          <div className={styles.tipCard}>
            <h3 className={styles.tipTitle}>Include Industry Context</h3>
            <p>
              Mentioning your app's industry or category can help generate names that 
              resonate with your specific market.
            </p>
          </div>
          
          <div className={styles.tipCard}>
            <h3 className={styles.tipTitle}>Try Multiple Times</h3>
            <p>
              If you're not satisfied with the first batch of names, try generating again 
              with a slightly different description. Each generation produces new results.
            </p>
          </div>
        </section>
        
        <section className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p>
            Our name generation process follows these steps:
          </p>
          <ol style={{ paddingLeft: '1.5rem' }}>
            <li>We analyze your app description to extract meaningful keywords.</li>
            <li>These keywords are prioritized based on relevance and frequency.</li>
            <li>Our system applies various naming patterns and linguistic rules.</li>
            <li>We generate a diverse set of potential names using different techniques.</li>
            <li>The most creative and relevant names are selected and presented to you.</li>
          </ol>
        </section>
      </div>
    </div>
  );
}