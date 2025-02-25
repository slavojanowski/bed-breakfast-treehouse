import PropTypes from "prop-types";

const HeadingTitle = ({
  headingTitle,
  headingTagline,
  headingTitleStyle = "heading-title",
}) => {
  return (
    <div className={headingTitleStyle}>
      <h2>{headingTitle}</h2>
      <h4>{headingTagline}</h4>
    </div>
  );
};

HeadingTitle.propTypes = {
  headingTitle: PropTypes.string,
  headingTagline: PropTypes.string,
  headingTitleStyle: PropTypes.string,
};

export default HeadingTitle;
