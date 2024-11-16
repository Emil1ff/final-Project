import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuData } from '../actions/actions';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import epicLogo from '../../img/logo/epic.png';
import './head.css';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const dispatch = useDispatch();
  const menuData = useSelector((state: any) => state.menuData);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    };

    if (isDropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownVisible]);

  const handleDropdownToggle = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  return (
    <header>
      <div className="top">
        <div className="logo" onClick={handleDropdownToggle} ref={dropdownRef}>
          <img src={epicLogo} alt="epic-games-logo" />
          <MdKeyboardArrowLeft className={`arrow ${isDropdownVisible ? 'arrow-open' : 'arrow-close'}`}/>

          <div
            className={`dropdown-menu ${
              isDropdownVisible ? 'dropdown-open' : 'dropdown-close'
            }`}
          >
            {menuData &&
              ['play', 'discover', 'create'].map((section) => (
                <div className="dropdown-section" key={section}>
                  <h4>{section.charAt(0).toUpperCase() + section.slice(1)}</h4>
                  <ul>
                    {menuData[section]?.map((item: any, index: number) => (
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
          <a href="#" className="menu-item">
            Distribute
            <MdKeyboardArrowLeft className="arrow" />
          </a>
        </div>
        <div className="buttons">
          <button className="sign-in">
            <span> Sign in </span>
          </button>
          <button className="download">
            <span> Download </span>
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
