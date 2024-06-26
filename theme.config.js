const YEAR = new Date().getFullYear();

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Aknur.
        <p>Abu Dhabi</p>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        p {
          float: right;
        }
      `}</style>
    </footer>
  ),
  nextThemes: {
    defaultTheme: 'dark'
  },
};
