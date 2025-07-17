"use client"
// page.js - Main podcasts page component
import { fetchPodcasts, stripHtml, formatDate, createExcerpt, } from './wordpress.js';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Error component
function ErrorMessage({ message }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ color: '#ef4444', fontSize: '1.25rem', marginBottom: '1rem' }}>⚠️</div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>Something went wrong</h2>
        <p style={{ color: '#6b7280' }}>{message}</p>
      </div>
    </div>
  );
}

// Individual podcast card component
function PodcastCard({ podcast }) {
  const title = stripHtml(podcast.title.rendered);
  const excerpt = createExcerpt(podcast.excerpt.rendered);
  const date = formatDate(podcast.date);
  const slug = podcast.slug;

  return (
    <article style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease', overflow: 'hidden', marginBottom: '1.5rem' }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }}>
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <time style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: '500' }}>
            {date}
          </time>
          <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', fontSize: '0.75rem', fontWeight: '600', padding: '0.25rem 0.625rem', borderRadius: '4px' }}>
            Podcast
          </span>
        </div>
        
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem', lineHeight: '1.4', transition: 'color 0.3s ease' }}>
          <Link 
            href={podcast.link} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#2563eb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#111827';
            }}
          >
            {title}
          </Link>
        </h2>
        
        <p style={{ color: '#6b7280', marginBottom: '1rem', lineHeight: '1.6' }}>
          {excerpt}
        </p>

        {/* iframe */}
        <p>iframe goes here!</p>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link 
            href={podcast.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', color: '#2563eb', fontWeight: '500', textDecoration: 'none', transition: 'color 0.3s ease' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#1d4ed8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#2563eb';
            }}
          >
            Listen Now
            <svg style={{ width: '1rem', height: '1rem', marginLeft: '0.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
          
          <button 
            onClick={() => navigator.share?.({ 
              title: title, 
              url: podcast.link 
            }) || navigator.clipboard?.writeText(podcast.link)}
            style={{ color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.3s ease', padding: '0.25rem' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#4b5563';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#9ca3af';
            }}
            title="Share podcast"
          >
            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

// Main podcasts page component
export default function PodcastsPage() {
  const [podcasts, setPodcasts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPodcasts() {
      try {
        setLoading(true);
        const podcastData = await fetchPodcasts();
        setPodcasts(podcastData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadPodcasts();
  }, []);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#6b7280', fontSize: '1.125rem' }}>Loading podcasts...</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f9fafb' }}>
      {/* Header */}
      <header style={{ backgroundColor: 'white', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>
              The Athlete Sitdown
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '512px', margin: '0 auto' }}>
              Discover inspiring stories and insights from world-class athletes and sports professionals
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', margin:"0 0 5px" }}>
              <a href="https://podcasts.apple.com/ie/podcast/the-athlete-sitdown/id1550095395" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/podcast/apple-podcasts-logo.webp" 
                  alt="Apple Podcasts logo" 
                  style={{ height: '32px', cursor: 'pointer' }}
                />
              </a>
              <a href="https://music.amazon.com/podcasts/47a22b01-42ad-447a-b137-1866a49890a1/the-athlete-sitdown" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/podcast/amazon-music-logo.webp" 
                  alt="Amazon Music logo" 
                  style={{ height: '45px', cursor: 'pointer', margin:" 0 5px 0 20px" }}
                />
              </a>
              <a href="https://open.spotify.com/show/2c2mWOkxmUpeGyFI2dZgC5" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/images/podcast/Spotify-Logo.webp" 
                  alt="Spotify logo" 
                  style={{ height: '75px', cursor: 'pointer' }}
                />
              </a>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <svg style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                {podcasts.length} Episodes
              </span>
              <span>•</span>
              <span>Discover Sport Endorse Podcasts</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        {podcasts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <div style={{ color: '#9ca3af', fontSize: '3.75rem', marginBottom: '1rem' }}>🎙️</div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>No podcasts found</h2>
            <p style={{ color: '#6b7280' }}>Check back later for new episodes!</p>
          </div>
        ) : (
          <>
            {/* Podcasts Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              {podcasts.map((podcast) => (
                <PodcastCard key={podcast.id} podcast={podcast} />
              ))}
            </div>
          </>
        )}
      </main>

    </div>
  );
}
/*

<iframe src='https://podomatic.com/embed/html5/podcast/6266614' height='208' width='504'frameborder='0' marginheight='0' marginwidth='0' scrolling='no' allowfullscreen></iframe>

https://podomatic.com/embed/html5/episode/10791101

https://podomatic.com/embed/html5/episode/10797470

https://podomatic.com/embed/html5/episode/10784445

https://podomatic.com/embed/html5/episode/10771515

https://podomatic.com/embed/html5/episode/10764959

https://podomatic.com/embed/html5/episode/10757717

*/