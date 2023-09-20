import './index.css'

const BannerCardItem = props => {
  const {sourceItem} = props
  const {headerText, description, className} = sourceItem
  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="para">{description}</p>
      <button className="card-button">Show More</button>
    </li>
  )
}
export default BannerCardItem
