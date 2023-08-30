import React from 'react';
import './Contacts.css'; // Import your CSS file

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="column">
        <h3>Contact</h3>
        <ul>
          <li>Phone: 349-56-47</li>
          <li>Email: vrspace.pt@gmail.com</li>
          <li>Address: 123 Main St, Setubal</li>
        </ul>
      </div>
      <div className="column">
        <h3>Blog</h3>
        <ul>
          <li>Latest Post: Lorem ipsum dolor sit amet</li>
          <li>Popular Posts: Consectetur adipiscing elit</li>
          <li>Categories: Sed do eiusmod tempor</li>
        </ul>
      </div>
      <div className="column">
        <h3>Games</h3>
        <ul>
          <li>Top Games: Lorem ipsum dolor sit amet</li>
          <li>New Releases: Consectetur adipiscing elit</li>
          <li>Genres: Sed do eiusmod tempor</li>
        </ul>
      </div>
      <div className="column">
        <h3>Join Our Mailing List</h3>
        <li>Stay updated with the latest news and events by subscribing to our mailing list.</li>
      </div>
    </div>
  );
}

export default Contacts;
