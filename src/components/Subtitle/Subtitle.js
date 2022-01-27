import PropTypes from "prop-types";
import { subtitleStyles } from "./Subtitle.styles";

const Subtitle = ({ id, subtitle }) => {
  return (
    <p data-testid={id} id={id} style={subtitleStyles}>
      {subtitle}
    </p>
  );
};

export default Subtitle;

Subtitle.propTypes = {
  id: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
