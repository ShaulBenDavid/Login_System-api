import { useState } from 'react';
import abraLogo from '../../Assets/logo.png';
import Button from '../Button/Button';
import { StyledBanner } from './Banner.style';

const Banner = () => {
    const [isActive, setIsActive] = useState(() => false);

    const handleSubmit = () => {
        setIsActive(prevIsActive => !prevIsActive);
    }

    return (
        <StyledBanner active={isActive}>
            <img src={abraLogo} alt="Logo" />
            <Button onClick={handleSubmit}>Continue</Button>
        </StyledBanner>
    );
}

export default Banner;