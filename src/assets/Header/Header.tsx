import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuData } from '../companents/actions/actions';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import epicLogo from '../img/logo/epic.png';
import './head.css';

const Header = () => {
  const dispatch = useDispatch();
  const menuData = useSelector((state: any) => state.menuData);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    dispatch(fetchMenuData());
  }, [dispatch]);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); 
      timeoutId = null;
    }
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 1000);
  };

  return (
    <header>
      <div className="top">
        <div
          className="logo"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={epicLogo} alt="epic-games-logo" />
          <MdKeyboardArrowLeft className="arrow" />
          {isDropdownVisible && menuData && (
            <div className="dropdown-menu">
              {['play', 'discover', 'create'].map((section) => (
                <div className="dropdown-section" key={section}>
                  <h4>{section.charAt(0).toUpperCase() + section.slice(1)}</h4>
                  <ul>
                    {menuData[section].map((item: any, index: number) => (
                      <li key={index}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="menu-item-image"
                        />
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="menu">
          <a href="#" className="menu-item">Support</a>
          <a href="#" className="menu-item">
            Distribute
            <MdKeyboardArrowLeft className="arrow" />
          </a>
        </div>
        <div className="buttons">
          <button className="sign-in">Sign in</button>
          <button className="download">Download</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
