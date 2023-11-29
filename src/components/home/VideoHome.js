

const VideoHome = (props) => {
    return(
        <video autoPlay muted loop className="home-page__video">
            <source 
                src={props.videoHome}
                type="video/webm"
            />
        </video>
    )
}
export default VideoHome;