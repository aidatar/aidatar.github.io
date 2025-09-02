// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research-outputs",
          title: "research outputs",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-presented-my-fourth-and-final-annual-review-poster-at-the-ukri-ai-cdts-in-nlp-joint-partners-summit-in-edinburgh",
          title: 'I presented my fourth and final annual review poster at the UKRI AI...',
          description: "",
          section: "News",},{id: "news-i-m-pleased-to-share-that-i-passed-my-fourth-and-final-anual-review-with-very-good",
          title: 'I’m pleased to share that I passed my fourth and final anual review...',
          description: "",
          section: "News",},{id: "news-i-will-give-an-oral-presentation-of-our-latest-work-at-the-british-psychological-society-scottish-branch-postgraduate-annual-conference-2025-in-late-september",
          title: 'I will give an oral presentation of our latest work at the British...',
          description: "",
          section: "News",},{id: "projects-multilingual-disfluencies",
          title: 'Multilingual Disfluencies',
          description: "Collaboration with Julian Hough on multilingual disfluencies using DUEL and STIR/deep_disfluency.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ml_disfluencies/";
            },},{id: "projects-persian-j-soap-ii-interview-package",
          title: 'Persian J-SOAP-II Interview Package',
          description: "Curation of a Persian version of J-SOAP-II for assessing juvenile sex offenders.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/persian_jsoap/";
            },},{id: "projects-give-me-the-camera",
          title: 'Give me the camera.',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/photography/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/f-a-s-tarighat", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=JBIFAB0AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
