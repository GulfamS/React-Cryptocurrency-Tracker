import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrancyDetails} = props
  const {currencyLogo, currencyName, usdValue, euroValue} =
    cryptocurrancyDetails

  return (
    <li className="crypto-items">
      <div className="logo-name-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="values-container">
        <p className="value">{usdValue}</p>
        <p className="value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
