const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
        <nav className="footer-links">
          <a href="/terms-of-use">Terms of Use</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
