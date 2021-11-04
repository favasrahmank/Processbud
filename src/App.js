import './App.css';
import Header from "./components/Header/Header.js";
import Banner from "./components/Banner/Banner.js";
import Keypoints from "./components/Keypoints/Keypoints.js";
import Aboutus from "./components/Aboutus/Aboutus.js";
import Jointeam from './components/Jointeam/Jointeam.js';

// Import Fonts
import './fonts/Gilroy/Gilroy-Light.ttf';
import './fonts/Gilroy/Gilroy-Regular.ttf';
import './fonts/Gilroy/Gilroy-Medium.ttf';
import './fonts/Gilroy/Gilroy-Semibold.ttf';
import './fonts/Gilroy/Gilroy-Bold.ttf';
import './fonts/Gilroy/Gilroy-Extrabold.ttf';
import './fonts/Gilroy/Gilroy-Black.ttf';


function App() {
    return (
        <div className="App">
            <Header></Header>
            <Banner></Banner>
            <Keypoints></Keypoints>
            <Aboutus></Aboutus>
            <Jointeam></Jointeam>
        </div>
    );
}

export default App;