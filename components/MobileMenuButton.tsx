import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MobileMenuButton = ({ onClick, isScrolled }: { onClick: () => void, isScrolled: boolean }) => (
    <button
        onClick={onClick}
        className={isScrolled ? "text-darkBlue" : "text-white"}
        aria-label="Toggle menu"
    >
        <FontAwesomeIcon icon={faBars} size="lg" />
    </button>
);

export default MobileMenuButton;