import React, { useEffect, useState } from 'react';

const GitHubStars = () => {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/simon-bonnedahl/stackly')
      .then(response => response.json())
      .then(data => setStars(data.stargazers_count))
      .catch(error => console.error('Error fetching GitHub stars:', error));
  }, []);

  if (stars === null) return null;

  return (
    <a
      href="https://github.com/simon-bonnedahl/stackly"
      target="_blank"
      rel="noopener noreferrer"
      className="github-stars"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.25rem 0.5rem',
        fontSize: '0.875rem',
        color: 'inherit',
        textDecoration: 'none',
        borderRadius: '0.375rem',
        transition: 'background-color 0.2s',
      }}
    >
      <span style={{ marginRight: '0.25rem' }}>⭐</span>
      {stars}
    </a>
  );
};

export default GitHubStars;