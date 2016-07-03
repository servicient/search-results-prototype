import React from 'react';
import instantsearch from 'instantsearch.js';
import SearchResults from './SearchResults.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.search = instantsearch({
      appId: '0HO4Y2VURP',
      apiKey: '2c5c55c3eca1dcd6ca636a19377618d3',
      indexName: 'staging-mytennislessons.com-instructors-distance',
      urlSync: false
    });
  }

  componentDidMount() {
    this.search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-input',
        placeholder: 'Search coaches'
      })
    );

    this.search.addWidget(
      instantsearch.widgets.searchResults({
        container: document.querySelector('#search-results')
      })
    );

    this.search.addWidget(
        instantsearch.widgets.pagination({
          container: '#pagination-container',
          maxPages: 20,
          // default is to scroll to 'body', here we disable this behavior
          scrollTo: false
        })
      );

      this.search.addWidget(
        instantsearch.widgets.toggle({
          container: '#top-coaches',
          attributeName: 'featured',
          label: 'See Top Coaches',
          values: {
            on: true,
            off: false
          }
        })
      );

      this.search.addWidget(
        instantsearch.widgets.priceRanges({
          container: '#price-ranges',
          attributeName: 'lowest_hourly_rate_sort',
          labels: {
            currency: '$',
            separator: 'to',
            button: 'Go'
          },
          templates: {
            header: 'Price'
          }
        })
      );

    this.search.start();
  }

  render() {
    return(
      <div className='search-container'>
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/instantsearch.js/1/instantsearch.min.css" />
        <input id="search-input" />
        <div id='top-coaches'></div>
        <div id='price-ranges'></div>
        <div id='search-results'></div>
        <div id='pagination-container'></div>
      </div>
    );
  }
}

export default Search;