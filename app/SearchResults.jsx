import React from 'react';
import ReactDOM from 'react-dom';
import instantsearch from 'instantsearch.js';
import InstructorResult from './InstructorResult.jsx'

instantsearch.widgets.searchResults = SearchResults;

function SearchResults({container}) {
  return {
    getConfiguration: () => ({
    }),

    render({results}) {
      ReactDOM.render(
        <SearchResultsBox
          results={results.hits}
        />,
        container
      );
    }
  };
}

class SearchResultsBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var results = this.props.results;
    var instructorResults = [];

    if (results) {
      for (var i = 0; i < results.length; i++) {
        instructorResults.push(<InstructorResult key={i} instructor={results[i]}  />);
      }


      return (
        <div className='search-results-box'>
          {instructorResults}
        </div>
      );
    } else {
      null
    }

  }
}

export default SearchResults;