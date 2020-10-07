
interface ISneakerProps {
    picture: string
    model: string
}


const sneakerItemImage = ({ picture, model }: ISneakerProps) => (
    <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12" style={{ height: "40vh"}}>
        <img src={picture} alt={model} className="sp-image" />
    </div>
)

export default sneakerItemImage
