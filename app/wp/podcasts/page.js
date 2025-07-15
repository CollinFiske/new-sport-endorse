"use client"
/*currently, can only get the 3 podcasts from the main page, not each podcasts as it seems that they are each hardcoded into the wordpress with individual iframes for each */

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchPodcastPages } from "./wordpress";

export default function PodcastPage() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPodcastPages().then((data) => {
      //console.log(data);
      setEpisodes(data);
      setLoading(false);
    });
  }, []);

  //console.log(episodes);

  return (
    <>
      <div style={{ padding: '40px 20px 0', textAlign: 'center', marginBottom: '30px'}}>
        <h1 style={{ margin: '0 0 20px', fontSize: '2.5rem', fontWeight: 'bold' }}>
          The <span style={{ fontSize: '3rem' }}>Athlete Sitdown Podcast</span> with <span style={{ fontSize: '3rem' }}>Sport Endorse</span>
        </h1>
        <p style={{ margin: '0', fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          Join us as we delve into the lives and minds of
          athletes from all disciplines. "The Athlete Sitdown"
          brings you candid conversations, personal stories, and
          unique insights from the sports world's most inspiring figures.
          Discover what drives these champions both on and off the field.
        </p>
      </div>

      <p style={{textAlign:"center"}}>Listen To Us On:</p>
      <div style={{ display: 'flex', margin:"0 30vw 25px" }}>
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

      {loading ? (
        <p style={{textAlign:"center", margin:"200px"}}>Loading episodes...</p>
      ) : (
        episodes.map((ep) => (
          <div key={ep.id} style={{margin:"20px auto", textAlign:"center"}}>
            {console.log(ep.slug)}
            {/*<Link href={`/podcast/${ep.slug}`}>
              <h2 dangerouslySetInnerHTML={{ __html: ep.title }} />
            </Link> can't get each one as the */}
            <div
              dangerouslySetInnerHTML={{
                __html: ep.content.match(/<iframe.*?<\/iframe>/)?.[0] || "",
              }}
            />
            {/*<Link href={`/podcast/${ep.slug}`}>Read More →</Link>*/}
            <hr style={{margin:"0 auto", maxWidth:"600px"}} />
          </div>
        ))
      )}
    </>
  );
}
