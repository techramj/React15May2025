import React from 'react'
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <div>
      <footer>
        <p>© 2023 Style Demo. All rights reserved.</p>
        <p>Follow us on 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a> and 
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>.
        </p>
      </footer>
    </div>
  )
}

export default Footer
