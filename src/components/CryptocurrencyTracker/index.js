import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {cryptocurrancyData: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrency()
  }

  getCryptocurrency = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()

    this.setState({
      cryptocurrancyData: data.map(eachCurrency => ({
        id: eachCurrency.id,
        currencyIcon: data.currency_icon,
        currencyName: data.currency_name,
        usdValue: data.usd_value,
        euroValue: data.euro_value,
      })),
      isLoading: false,
    })
  }

  renderCryptoCurrencyList = () => {
    const {cryptocurrancyData} = this.state
    return <CryptocurrenciesList cryptocurrancyData={cryptocurrancyData} />
  }

  renderLoader = () => (
    <div>
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container" data-testid="loader">
        {isLoading ? this.renderLoader() : this.renderCryptoCurrencyList()}
      </div>
    )
  }
}
export default CryptocurrencyTracker
