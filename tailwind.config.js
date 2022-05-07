module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'backgroundImage': "url(assets/images/home-new-bg-free-img.jpg)",
        'Banner1': "url(assets/images/men-fashion-free-img.jpg)",
        'Banner2': "url(assets/images/women-fashion-free-img.jpg)",
        'mainBanner':"url(assets/images/banner-03.jpg)",
        'aboutBanner':'url(assets/images/banner-04.jpg)',
        'contactBanner':'url(assets/images/banner-06.jpg)',
      },
      height:{
        "75vh":"75vh",
        "50vh":"50vh"
      },
      margin: {
        '150px': '150px',
      },
      backgroundColor:{
        'lightBlack' : 'rgba(0,0,0,0.42)'
      },
      boxShadow:{
        'newShadow':'rgba(50,50,93,0.25) 0 4px 12px -2px,rgba(0,0,0,0.3) 0 3px 7px -3px',
        'secondShadow':'rgba(0,0,0,0.07) 0 1px 1px , rgba(0,0,0,0.07) 0 2px 2px ,rgba(0,0,0,0.07) 0 4px 4px, rgba(0,0,0,0.07) 0 4px 8px,rgba(0,0,0,0.07) 0 9px 16px;'
      }
    },
  },
  plugins: [],
}
