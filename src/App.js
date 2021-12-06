import './App.css';
import Chefs from './components/homePage/Chefs';
import Guide from './components/globals/Guide';
import Header from './components/homePage/Header';
import Kitchens from './components/homePage/Kitchens';
import homeImages from './assets/images/homeImages/homeImages'

function App() {

  return (
    <article>
      <div className=""><Header params={{img: homeImages[0]}} /></div>
      <div className="py-3"><Kitchens params={{images: homeImages.slice(1, 4)}}/></div>
      <div className="spacing"><Chefs params={{images: homeImages.slice(4, 7)}} /></div>
      <div className="spacing"><Guide params={{img: homeImages[7], direction: "flex-row"}} /></div>
      <div className=""><Guide params={{img: homeImages[8], direction: "flex-row-reverse"}} /></div>
    </article>
  );
}

export default App;