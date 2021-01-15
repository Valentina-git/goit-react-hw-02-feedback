import React from 'react';
import PropTypes from 'prop-types';
import SectionStyled from './StyledSection';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <h2 className="section-title">{title}</h2>
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
