import { PUBLIC_URL } from "config/constants";
import { headerStyles, logoStyles } from "./Header.styles";

const Header = () => {
  const logoSrc = `${PUBLIC_URL}/assets/images/atlantiasearch_logo.png`;

  return (
    <div data-testid="header" style={headerStyles}>
      <img
        alt="atlantia logo"
        data-testid="header-logo"
        src={logoSrc}
        style={logoStyles}
      />
    </div>
  );
};

export default Header;
