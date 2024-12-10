import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MobileMenuButton = ({ onClick }: { onClick: () => void }) => (
    <button
        onClick={onClick}
        className="text-darkBlue text-2xl focus:outline-none"
        aria-label="Toggle menu"
    >
        <FontAwesomeIcon icon={faBars} />
    </button>
);

export default MobileMenuButton;