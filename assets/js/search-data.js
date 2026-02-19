// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-resume-cv",
          title: "Resume/CV",
          description: "Here is a web based version of my resume! If you are looking for a pdf, click the icon right above this post!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
      },
    },{id: "news-i-like-turtle-wow",
          title: 'I like Turtle Wow',
          description: "",
          section: "News",},{id: "projects-prccdc-2016",
          title: 'PRCCDC 2016',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CCDC/";
            },},{id: "projects-stake-animation-rigging",
          title: 'Stake Animation Rigging',
          description: "My experience creating my first Animation rig in Blender for my video game Stake",
          section: "Projects",handler: () => {
              window.location.href = "/projects/stakeAnimationRigging/";
            },},{id: "projects-stake",
          title: 'Stake',
          description: "A vampire themed Rogue-like FPS. Explode enemies with gruesome physics based combat.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/stakeOverview/";
            },},{id: "projects-quick-deploy-pentest-lab-with-vagrant",
          title: 'Quick Deploy Pentest Lab with Vagrant',
          description: "Building a Quickly Deployable Red Team/Blue Team Lab with Vagrant",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vagrantPentestLab/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%61%73%65%73%68%61%72%70%39%36@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/257644297187229696", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Chazae", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/Chazae", "_blank");
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
