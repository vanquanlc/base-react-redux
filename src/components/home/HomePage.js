
import { ToastContainer } from "react-toastify";
import videoHome1 from "../../assets/video-homepage-1.webm";
import videoHome2 from "../../assets/video-homepage-2.webm";
import videoHome3 from "../../assets/video-homepage-3.webm";
import InforVdeo from "./InforVideo";
import VideoHome from "./VideoHome";
import "./homePage.scss";


const HomePage = () =>{

    const state = [
        {
            id: 'IDCT'+ Math.ceil(Math.random()*1000),
            title: 'Forms that break the norm',
            describe: 'Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different.',
            btn: "Get started - it's free",
            video: videoHome1
        },
        {
            id: 'IDCT'+ Math.ceil(Math.random()*1000),
            title: 'Looks striking. Feels effortless.',
            describe: 'Impress your form takers. Catch their eye with striking visuals, and make form-filling feel effortless by replacing walls of questions with just one at a time.',
            btn: "Sign up",
            video: videoHome2

        },
        {
            id: 'IDCT'+ Math.ceil(Math.random()*1000),
            title: 'Embeds smoothly. Reveals more.',
            describe: 'Collect more and better data.Embed forms where people see them, from web to email. Ask the right follow-up question at the right time to reveal deeper insights.',
            btn: "Sign up",
            video: videoHome3

        }
    ]

    return (
        <div className="home-page-container">
            {state.map((item, index) => {
                if (index%2===0) {
                    return(
                    <section key={item.id} className="video-container">
                        <VideoHome videoHome = {item.video}/> 
                        <InforVdeo 
                            content={item}
                        />
                    </section>)
                }
                else{
                    return(
                        <section key={item.id} className="video-container">
                        <InforVdeo
                            content={item}
                        />
                        <VideoHome videoHome = {item.video}/> 
                        </section>
                    )
                }
            })}
        </div>
    )
}
export default HomePage;