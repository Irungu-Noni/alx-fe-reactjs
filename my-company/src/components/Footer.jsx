function Footer() {
  return (
    <footer style={{ 
      background: "#333", 
      color: "#fff", 
      textAlign: "center", 
      padding: "20px", 
      marginTop: "20px"
    }}>
      <p>© {new Date().getFullYear()} My Company. All rights reserved.</p>
      
      {/* Example of an image (like a logo) */}
      <img 
        src="https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=786&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="tech bar lines" 
        style={{ marginTop: "10px", borderRadius: "50%" }}
      />
    </footer>
  );
}

export default Footer;
