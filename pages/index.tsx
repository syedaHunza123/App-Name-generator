import React, { useState } from 'react';
import styles from '@/styles/Home.module.css';
import NameCard from '@/components/NameCard';
import { generateAppNames } from '@/utils/generateNames';

export default function Home() {
  const [description, setDescription] = useState('');
  const [generatedNames, setGeneratedNames] = useState<{ name: string, description: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!description.trim()) return;
    
    setIsLoading(true);
    setHasGenerated(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const names = generateAppNames(description);
      setGeneratedNames(names);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="container">
      <section className={styles.hero}>
        <h1 className={styles.title}>Generate Creative App Names</h1>
        <p className={styles.subtitle}>
          Describe your app's function below and we'll suggest 5 creative and brandable names
        </p>
      </section>

      <section>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="description" className={styles.label}>
              Describe what your app does:
            </label>
            <textarea
              id="description"
              className={`${styles.textarea}`}
              placeholder="e.g., An app that helps users track their daily water intake and reminds them to stay hydrated throughout the day."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Generate Names
          </button>
        </form>
      </section>

      {hasGenerated && (
        <section className={styles.results}>
          <h2>Suggested App Names</h2>
          
          {isLoading ? (
            <div className={styles.loading}>
              <div className={styles.spinner}></div>
            </div>
          ) : generatedNames.length > 0 ? (
            <div className={styles.resultsList}>
              {generatedNames.map((name, index) => (
                <NameCard 
                  key={index} 
                  name={name.name} 
                  description={name.description} 
                />
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              No names could be generated. Please try a more detailed description.
            </div>
          )}
        </section>
      )}
    </div>
  );
}