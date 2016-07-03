import React from 'react';

class InstructorResult extends React.Component {
  render() {
    let result = this.props.instructor;
    return(
      <div className='instructor-result'>Coach: {result.instructor_name} in {result.location_city}, {result.location_state}</div>
    );
  }
}

export default InstructorResult;