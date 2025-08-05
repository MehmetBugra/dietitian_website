import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Navbar.css";
import logo from "../assets/yazisiz_logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const dropdownVariants = {
        hidden: { opacity: 0, y: -5, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.15, ease: "easeOut" },
        },
        exit: {
            opacity: 0,
            y: -5,
            scale: 0.98,
            transition: { duration: 0.1, ease: "easeIn" },
        },
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/" onClick={closeMenu}>
                    <img
                        src={logo}
                        alt="Diyetisyenim Logo"
                        className="navbar-logo-img me-2"
                    />
                    Diyetisyenim
                </Link>

                <button
                    className={`navbar-toggler ${isMenuOpen ? "active" : ""}`}
                    type="button"
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                >
                    <i
                        className={`bi ${isMenuOpen ? "bi-x-lg" : "bi-list"}`}
                    ></i>
                </button>

                <div
                    className={`collapse navbar-collapse ${
                        isMenuOpen ? "show" : ""
                    }`}
                >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/"
                                onClick={closeMenu}
                            >
                                Ana Sayfa
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown" ref={dropdownRef}>
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                onClick={toggleDropdown}
                                aria-expanded={isDropdownOpen}
                            >
                                Özellikler
                            </a>
                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.ul
                                        className="dropdown-menu show"
                                        aria-labelledby="navbarDropdown"
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        <li>
                                            <NavLink
                                                className="dropdown-item"
                                                to="/features/pro"
                                                onClick={closeMenu}
                                            >
                                                Diyetisyen-Pro
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className="dropdown-item"
                                                to="/features/danisan"
                                                onClick={closeMenu}
                                            >
                                                Diyetisyen-Danışan
                                            </NavLink>
                                        </li>
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/pricing"
                                onClick={closeMenu}
                            >
                                Fiyatlandırma
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/login"
                                onClick={closeMenu}
                            >
                                Giriş Yap
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="btn btn-primary ms-3"
                                to="/register"
                                onClick={closeMenu}
                            >
                                Ücretsiz Dene
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
