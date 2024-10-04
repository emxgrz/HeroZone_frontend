function Footer() {
  return (
    <footer className="footer text-center text-white py-3">
      <div className="container">
        <p className="mb-2">Pain is for lesser men. I. Am. Doom.</p>
        <small className="marvel-api-credit">
          Data provided by © 2024{" "}
          <a
            href="https://developer.marvel.com/"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            MARVEL
          </a>
        </small>
        <br></br>
        <small className="marvel-api-credit">
          →{" "}
          <a
            href="https://github.com/emxgrz/HeroZone_frontend/"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            GitHub
          </a>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
