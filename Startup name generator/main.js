function getStartupName() {
    const word1 = ['Tech', 'Smart', 'Next', 'Innovative', 'Cloud', 'Quantum'];
    const word2 = ['Solutions', 'Labs', 'Systems', 'Industries', 'Boi', 'Network', 'Ventures'];

    const randomWord1 = word1[Math.floor(Math.random() * word1.length)];
    const randomWord2 = word2[Math.floor(Math.random() * word2.length)];
    return `${randomWord1} ${randomWord2}`;
}

console.log(`Your startup name could be: ${getStartupName()}`);
