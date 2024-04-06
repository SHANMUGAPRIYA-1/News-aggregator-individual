import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image'
import './App.css'

const slideImage = [
  {
    "url":"https://www.hindustantimes.com/cricket/hardik-pandya-ripped-into-by-praveen-kumar-over-mi-captaincy-ipl-gets-injured-does-not-play-domestic-or-for-india-101710248304036.html",
    "urlToImage":"https://www.hindustantimes.com/ht-img/img/2024/03/12/1600x900/hardik-mi_1649231615693_1710252631678.jpg",
    "title":"Hardik Pandya ripped into by Praveen Kumar over MI captaincy in IPL: 'Gets injured, doesn't play domestic or for India"
  },
  {
    "url":"https://www.jpost.com/health-and-wellness/article-791535",
    "urlToImage":"https://images.jpost.com/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_407,w_690/584575",
    "title":"Study examines reasons for age-related hearing loss"
  },
  {
    
    "url":"https://www.ndtvprofit.com/trending/nasas-juno-spacecraft-captures-stunning-image-of-jupiters-great-red-spot-npc",
   "urlToImage":"https://media.assettype.com/bloombergquint%2F2024-03%2F794a935b-d1aa-4169-8e79-a88adda85897%2Fnasa_2W_QWAC0mzI_unsplash.jpg?w=1200&auto=format%2Ccompress&ogImage=true",
   "title":"NASA's Juno Spacecraft Captures Stunning Image Of Jupiter's Great Red Spot"

  },
  {
    "url":"https://www.livemint.com/market/stock-market-news/stock-market-today-how-to-tweak-your-portfolio-before-lok-sabha-election-2024-11710218444947.html",

    "urlToImage":"https://www.livemint.com/lm-img/img/2024/03/12/1600x900/Stock_market_today_Lok_Sabha_election_Stock_to_buy_1710218806055_1710218806431.jpg ",
    "title":"Stock market today: How to tweak your portfolio before Lok Sabha election 2024"
  },
 
  {
    "url":"https://www.gadgets360.com/mobiles/news/google-pixel-8a-launch-confirm-support-page-listing-expected-specifications-price-5222511",
    "urlToImage":"https://i.gadgets360cdn.com/large/google_pixel_8_pro_series_google_1707895350974.jpg",
    "title":"Google Pixel 8a Expected to Launch Soon After Moniker Surfaces on Company Support Page"
  },
];

const divStyle = {
  display: 'flex',
  alignItems: "center",
  justifyContent: "center",
  height: "400px",
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}
const spanStyle = {
  fontSize: "20px",
}

function SlidingComponent() {
  return (
    <div className='slide-container'>
      <Fade className="slide-item">
        {slideImage.map((image, index) => (
          <a key={index} href={image.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'transparent' }}>
            <div style={{ ...divStyle, backgroundImage: `url(${image.urlToImage})`}}>
              <span style={{ ...spanStyle, visibility: 'hidden' }}>{image.url}</span>
            </div>
            <div style={{ textAlign: 'center', fontSize: '22px', marginTop: '10px', color:'black',fontFamily:"fantasy"}}>{image.title}</div>
          </a>
        ))}
      </Fade>
    </div>
  )
}

export default  SlidingComponent;