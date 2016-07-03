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
      urlSync: true
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
      instantsearch.widgets.numericRefinementList({
        container: '#price-ranges',
        attributeName: 'lowest_hourly_rate_sort',
        options: [
          {name: 'All'},
          {end: 40, name: 'less than $40/hr'},
          {start: 40, end: 65, name: 'between $40/hr and $65/hr'},
          {start: 65, name: 'more than $65/hr'}
        ],
        templates: {
          header: 'Starting hourly rate'
        }
      })
    );

    this.search.addWidget(
      instantsearch.widgets.refinementList({
        container: '#certifications',
        attributeName: 'certifications',
        operator: 'and',
        limit: 10,
        templates: {
          header: 'Certifications'
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
        <div className='filter-options'>
          <div id='certifications'></div>
          <div id='price-ranges'></div>
          <div id='top-coaches'></div>
        </div>
        <div id='search-results'></div>
        <div id='pagination-container'></div>
      </div>
    );
  }
}

export default Search;