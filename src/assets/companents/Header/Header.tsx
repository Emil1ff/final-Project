import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuData } from '../../features/actions/menuAction';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import epicLogo from '../../img/logo/epic.png';
import './head.css';
import { FaSearch } from 'react-icons/fa';
import { RootState } from '../../functions/store/store';

interface MenuItem {
  name: string;
  image?: string;
}

interface MenuData {
  play: MenuItem[];
  discover: MenuItem[];
  create: MenuItem[];
  distribute: MenuItem[];
}

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const menuData = useSelector((state: RootState) => state.menu.menuData as MenuData | null);

  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [isDistributeDropdownVisible, setIsDistributeDropdownVisible] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const distributeDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(fetchMenuData());
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("scrol");
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add("headerAnime");
        } else {
          header.classList.remove("headerAnime");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownVisible(false);
      }
      if (
        distributeDropdownRef.current &&
        !distributeDropdownRef.current.contains(event.target as Node)
      ) {
        setIsDistributeDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleDistributeDropdownToggle = () => {
    setIsDistributeDropdownVisible((prev) => !prev);
  };

  return (
    <header>
      <div className="top">
        <div className="logo" onClick={handleDropdownToggle} ref={dropdownRef}>
          <img src={epicLogo} alt="epic-games-logo" />
          <MdKeyboardArrowLeft className={`arrow ${isDropdownVisible ? 'arrow-open' : 'arrow-close'}`} />
          <div
            className={`dropdown-menu ${isDropdownVisible ? 'dropdown-open' : 'dropdown-close'}`}
          >
            {menuData &&
              ['play', 'discover', 'create'].map((section) => (
                <div className="dropdown-section" key={section}>
                  <h4>{section.charAt(0).toUpperCase() + section.slice(1)}</h4>
                  <ul>
                    {menuData[section as keyof MenuData]?.map((item, index) => (
                      <li key={index}>
                        {item.image && (
                          <img src={item.image} alt={item.name} className="menu-item-image" />
                        )}
                        <span>
                          <a href="#">{item.name}</a>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>

        <div className="menu">
          <a href="#" className="menu-item">
            <img
              src="https://cms-assets.unrealengine.com/qAiDvosPSFGqJxTVuY7h"
              alt=""
            />
          </a>
          <a href="#" className="menu-item">
            Support
          </a>
          <div
            className="menu-item distribute"
            onClick={handleDistributeDropdownToggle}
            ref={distributeDropdownRef}
          >
            Distribute
            <MdKeyboardArrowLeft className={`arrow ${isDistributeDropdownVisible ? 'arrow-open' : 'arrow-close'}`} />
            <div
              className={`dropdown-menu-distribute ${
                isDistributeDropdownVisible ? 'dropdown-open' : 'dropdown-close'
              }`}
            >
              {menuData?.distribute?.map((item, index) => (
                <div className="dropdown-item" key={index}>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="buttons">
          <button className="sign-in">
            <span> Sign in </span>
          </button>
          <button className="download">
            <a href='https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi?trackingId=47ee9210e8e543338065b1c156099a16'> Download </a>
          </button>
        </div>
      </div>

      <div className="bottom" id="scrol">
        <div className="bar">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search store" />
          </div>
          <div className="menu-item">
            <a href="#">Discover</a>
          </div>
          <div className="menu-item">
            <a href="#">Browse</a>
          </div>
          <div className="menu-item">
            <a href="#">News</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
