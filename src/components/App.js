import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component {
	onSearchSubmit(term) {
		console.log(term)
		axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization:
					'Client-ID _cJ4sW0anhuStooQVSA_BmBvpatSm91-PUzeaKlV-50'
			}
		})
	}
	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		)
	}
}

export default App
