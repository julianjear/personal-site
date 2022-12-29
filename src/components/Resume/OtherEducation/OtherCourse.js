import React from 'react';
import PropTypes from 'prop-types';

const OtherCourse = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <p className="school"><a href={data.link} target="_blank" rel="noopener noreferrer">{data.school}</a>, {data.year}</p>
    </header>
    <ul className="points" style={{ fontSize: "0.9em" }}>
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

OtherCourse.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default OtherCourse;
