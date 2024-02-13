import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrancyHeader = () => (
    <div className="list-header">
      <p className="list-heading">Coin Type</p>
      <div className="usd-euro-container">
        <p className="usd">USD</p>
        <p className="usd">EURO</p>
      </div>
    </div>
  )

  renderCryptocurrencyView = () => {
    const {cryptocurrancyData} = this.props
    return (
      <div className="crypto-list-container" data-testid="loader">
        {this.renderCryptocurrancyHeader()}
        <ul className="crypto-list">
          {cryptocurrancyData.map(eachCrypto => (
            <CryptocurrencyItem
              key={eachCrypto.id}
              cryptocurrancyDetails={eachCrypto}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="crypto-container">
        <h1 className="track-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        {this.renderCryptocurrencyView()}
      </div>
    )
  }
}
export default CryptocurrenciesList
