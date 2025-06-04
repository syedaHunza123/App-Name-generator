// List of prefixes for app name generation
const prefixes = [
  'Swift', 'Rapid', 'Nimble', 'Quick', 'Fast', 'Speedy', 'Turbo', 
  'Nova', 'Stellar', 'Cosmic', 'Astro', 'Galaxy', 'Space', 'Star', 
  'Pixel', 'Byte', 'Digital', 'Tech', 'Smart', 'Clever', 'Bright', 
  'Easy', 'Simple', 'Clear', 'Pure', 'Fresh', 'Crisp', 'Sleek',
  'Wave', 'Flow', 'Stream', 'Fluid', 'Flux', 'Motion', 'Dynamic',
  'Zen', 'Calm', 'Focus', 'Core', 'Center', 'Essence', 'Vital',
  'Peak', 'Summit', 'Apex', 'Prime', 'Ultra', 'Max', 'Top'
];

// List of suffixes for app name generation
const suffixes = [
  'App', 'Hub', 'Spot', 'Space', 'Zone', 'Sphere', 'World', 
  'Net', 'Web', 'Wire', 'Link', 'Connect', 'Sync', 'Mesh', 
  'Ware', 'Tech', 'Labs', 'Works', 'Studio', 'Craft', 'Forge', 
  'Box', 'Kit', 'Set', 'Pack', 'Suite', 'Pro', 'Plus',
  'Go', 'Now', 'Fast', 'Quick', 'Express', 'Instant', 'Rapid',
  'Ly', 'Ify', 'Ize', 'Ible', 'Able', 'Er', 'Ist'
];

// List of modifiers for app name generation
const modifiers = [
  'Smart', 'Easy', 'Quick', 'Fast', 'Pro', 'AI', 'Auto', 
  'Super', 'Ultra', 'Hyper', 'Mega', 'Power', 'Boost', 'Max', 
  'Elite', 'Prime', 'Premium', 'Top', 'Best', 'Perfect', 'Ideal', 
  'My', 'Your', 'Our', 'The', 'A', 'One', 'First',
  'New', 'Fresh', 'Modern', 'Next', 'Future', 'Advanced', 'Innovative'
];

// List of action verbs for app name generation
const actionVerbs = [
  'Do', 'Make', 'Create', 'Build', 'Craft', 'Design', 'Develop', 
  'Manage', 'Track', 'Monitor', 'Analyze', 'Check', 'Scan', 'View', 
  'See', 'Look', 'Watch', 'Find', 'Discover', 'Explore', 'Navigate', 
  'Go', 'Move', 'Shift', 'Change', 'Transform', 'Convert', 'Adapt',
  'Help', 'Assist', 'Aid', 'Support', 'Guide', 'Direct', 'Lead'
];

// Extract keywords from description
const extractKeywords = (description: string): string[] => {
  const stopWords = [
    'a', 'an', 'the', 'and', 'or', 'but', 'for', 'with', 'in', 
    'on', 'at', 'to', 'from', 'by', 'about', 'as', 'into', 'like', 
    'through', 'after', 'over', 'between', 'out', 'against', 'during', 
    'without', 'before', 'under', 'around', 'among', 'that', 'this', 
    'these', 'those', 'is', 'are', 'was', 'were', 'be', 'been', 
    'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 
    'would', 'shall', 'should', 'can', 'could', 'may', 'might', 
    'must', 'of'
  ];
  
  const words = description
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => !stopWords.includes(word) && word.length > 2);
  
  // Count frequency
  const wordFrequency: Record<string, number> = {};
  words.forEach(word => {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
  });
  
  // Sort by frequency and get top keywords
  return Object.entries(wordFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(entry => entry[0]);
};

// Generate a name from keywords
const generateNameFromKeywords = (keywords: string[]): { name: string, description: string } => {
  const random = Math.random();
  let name = '';
  let description = '';
  
  // Choose a random keyword
  const keyword = keywords[Math.floor(Math.random() * keywords.length)];
  const capitalizedKeyword = keyword.charAt(0).toUpperCase() + keyword.slice(1);
  
  // Different name generation strategies
  if (random < 0.2) {
    // Prefix + Keyword
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    name = prefix + capitalizedKeyword;
    description = `A name combining agility (${prefix}) with your core function (${keyword}).`;
  } 
  else if (random < 0.4) {
    // Keyword + Suffix
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    name = capitalizedKeyword + suffix;
    description = `Directly communicates your app's purpose (${keyword}) with a professional touch (${suffix}).`;
  }
  else if (random < 0.6) {
    // Modifier + Keyword
    const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
    name = modifier + capitalizedKeyword;
    description = `Emphasizes quality (${modifier}) in your app's main function (${keyword}).`;
  }
  else if (random < 0.8) {
    // Action Verb + Keyword
    const verb = actionVerbs[Math.floor(Math.random() * actionVerbs.length)];
    name = verb + capitalizedKeyword;
    description = `Focuses on what your app does (${verb}) with its main subject (${keyword}).`;
  }
  else {
    // Blend two keywords or create a portmanteau
    if (keywords.length > 1) {
      const keyword2 = keywords.filter(k => k !== keyword)[Math.floor(Math.random() * (keywords.length - 1))];
      
      // Take first half of first word and second half of second word
      const firstHalf = keyword.substring(0, Math.ceil(keyword.length / 2));
      const secondHalf = keyword2.substring(Math.floor(keyword2.length / 2));
      
      const blendedWord = firstHalf + secondHalf;
      name = blendedWord.charAt(0).toUpperCase() + blendedWord.slice(1);
      description = `A creative blend of ${keyword} and ${keyword2}, creating a unique and memorable identity.`;
    } else {
      // Not enough keywords for blending, fallback to prefix + keyword
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      name = prefix + capitalizedKeyword;
      description = `A name combining innovation (${prefix}) with your core function (${keyword}).`;
    }
  }
  
  return { name, description };
};

// Main function to generate app names
export const generateAppNames = (description: string): { name: string, description: string }[] => {
  const keywords = extractKeywords(description);
  const names: { name: string, description: string }[] = [];
  
  // Generate unique names
  const usedNames = new Set<string>();
  
  while (names.length < 5 && names.length < 100) {  // Avoid infinite loop
    const nameObj = generateNameFromKeywords(keywords);
    
    if (!usedNames.has(nameObj.name)) {
      usedNames.add(nameObj.name);
      names.push(nameObj);
    }
  }
  
  return names;
};