import "../styles/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
        <div className="socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:youremail@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
