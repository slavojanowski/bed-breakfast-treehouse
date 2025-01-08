import PropTypes from "prop-types";

const HeadingTitle = ({
  headingTitle,
  headingTagline,
  headingTitleStyle = "heading-title",
}) => {
  return (
    <div className={headingTitleStyle}>
      <h3>{headingTitle}</h3>
      <h4>{headingTagline}</h4>
    </div>
  );
};

HeadingTitle.propTypes = {
  headingTitle: PropTypes.string,
  headingTagline: PropTypes.string,
  headingTitleStyle: PropTypes.string,
};

// HeadingTitle.defaultProps = {
//   headingTitleStyle: "heading-title",
// };

export default HeadingTitle;
