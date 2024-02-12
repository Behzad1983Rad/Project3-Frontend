
import './AboutusPage.css';

export default function AboutusPage() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-content" style={{ boxShadow: "10px 5px 5px 5px black", borderRadius: "8%", padding:"5vh", backgroundColor: "hsla(0, 0%, 0%, 0.4)"}}>
        <h1 className="fade-in">About Cosmic Collectibles</h1>
        &nbsp;
        <p className="fade-in-delay">Welcome to Cosmic Collectibles, your premier destination for all things celestial and cosmic. Founded by three passionate individuals – Alex, Baran, and Behzad – Cosmic Collectibles is the culmination of our shared love for the wonders of the universe and our dedication to providing enthusiasts with high-quality, unique items that celebrate the cosmos.</p>
        
        <h2 className="fade-in">Our Mission</h2>
        <p className="fade-in-delay">Our mission at Cosmic Collectibles is simple: to bring the cosmos closer to you. We strive to offer a diverse range of products that not only reflect the beauty and grandeur of space but also spark curiosity and wonder. Each item in our collection is carefully selected and sourced to ensure authenticity, quality, and a genuine connection to the cosmos.</p>
        
        <h2 className="fade-in">What Sets Us Apart</h2>
        <p className="fade-in-delay">What distinguishes Cosmic Collectibles from other online retailers is our unwavering commitment to excellence and customer satisfaction. As fellow enthusiasts, we understand the importance of trust and reliability when it comes to purchasing cosmic memorabilia. That's why we go above and beyond to provide:</p>
        <ul className="fade-in-delay">
          <li><strong>Authenticity:</strong> Every item in our collection is meticulously vetted for authenticity and provenance, so you can shop with confidence knowing you're getting the real deal.</li>
          <li><strong>Quality:</strong> From planetary rocks to astronaut gear, each product is crafted with the utmost care and attention to detail, ensuring exceptional quality and durability.</li>
          <li><strong>Exceptional Service:</strong> Our dedicated team is here to assist you every step of the way, from browsing our collection to placing your order and beyond. Have a question or need assistance? Don't hesitate to reach out – we're here to help.</li>
        </ul>
        
        <h2 className="fade-in">Meet the Team</h2>
        <p className="fade-in-delay"><strong>Baran:</strong> With a keen eye for design and a passion for all things cosmic, Baran brings creativity and innovation to the Cosmic Collectibles experience. From curating our collection to crafting engaging user experiences, Baran's dedication to excellence shines through in every aspect of our website.</p>
        <p className="fade-in-delay"><a href="https://www.linkedin.com/in/behzad-radgizadeh" style={{textDecoration: "none"}}><strong>Behzad: </strong></a>
         As the backbone of our technical operations, Behzad ensures that Cosmic Collectibles runs smoothly and seamlessly. With expertise in backend development and a knack for problem-solving, Behzad keeps our website secure, efficient, and user-friendly, ensuring a seamless shopping experience for our customers.</p>
        <p className="fade-in-delay"><strong>Alex:</strong> With a deep appreciation for the wonders of the universe and a commitment to customer satisfaction, Alex is the driving force behind Cosmic Collectibles' customer service and community engagement efforts. From answering inquiries to providing personalized recommendations, Alex is dedicated to ensuring that every customer's experience with Cosmic Collectibles is nothing short of stellar.</p>
        
        <p className="fade-in">Whether you're a seasoned collector or a budding enthusiast, we invite you to join us on our cosmic journey. Explore our collection, immerse yourself in the wonders of the universe, and discover the perfect cosmic collectible to fuel your passion and curiosity. Thank you for choosing Cosmic Collectibles – where the cosmos comes to life.</p>
        
        <p className="fade-in"><em>To infinity and beyond!</em></p>
        <p className="fade-in">Alex, Baran, and Behzad</p>
        <p className="fade-in">Founders, Cosmic Collectibles</p>
      </div>
    </div>
  );
}