import React from 'react';
import {useEffect} from 'react';

export default function DiscourseComments({url}) {
  useEffect(() => {
    window.DiscourseEmbed = {
      discourseUrl: 'https://forum.buspirate.com/',
      discourseEmbedUrl: url,
    };

    const d = document.createElement('script');
    d.type = 'text/javascript';
    d.async = true;
    d.src = window.DiscourseEmbed.discourseUrl + 'javascripts/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
  }, []);

  return (
    <div>
      <div id="discourse-comments"></div>
    </div>
  );
}

