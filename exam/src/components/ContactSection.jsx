const ContactSection = () => (
  <>
    <div className="w3-display-container bgimg-3 parallax">
      <div className="w3-display-middle w3-text-white">
        <h1>CONTACT</h1>
      </div>
    </div>
    <div className="w3-container w3-padding-64 w3-white" id="contact">
      <h2>Contact Me</h2>
      <form className="w3-container w3-card-4 w3-padding-16 w3-white">
        <div className="w3-section">
          <label>Name</label>
          <input className="w3-input" type="text" required />
        </div>
        <div className="w3-section">
          <label>Email</label>
          <input className="w3-input" type="text" required />
        </div>
        <div className="w3-section">
          <label>Message</label>
          <input className="w3-input" type="text" required />
        </div>
        <button type="submit" className="w3-button w3-black">Send</button>
      </form>
    </div>
  </>
);

export default ContactSection;
