const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div style={{ textAlign: "center", marginBottom: 10 }}>
      Copyright © {currentYear}
    </div>
  );
};

export default Footer;
