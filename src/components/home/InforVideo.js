
const InforVdeo = (props) =>{
    const { title, describe, btn} = props.content;
    return(
        <div  className="home-page__infor-video">
            <h1 className="infor-video__tittle">
                {title}
            </h1>
            <h2 className="infor-video__description">
                <span>{describe}</span>
            </h2>
            <div className="infor-video__button">
                <a >{btn}</a>
            </div>
        </div>
    )
}
export default InforVdeo;