import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between container mx-auto">
        <div>
          <img src={logo} alt="logo img" />
          <p className="mt-4 max-w-xl text-gray-600">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex gap-6 text-lg mt-2">
            <li>
              <a href="https://github.com/sahidverse/">Github</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sahid-ahmed-aba6b930b/">
                Linkedln
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Product</h3>
          <ul className="mt-4 max-w-xl text-gray-600">
            <li>Home</li>
            <li>Technologies</li>
            <li>Project</li>
          </ul>
        </div>

        <div>
          <h3>Company</h3>
          <ul className="mt-4 max-w-xl text-gray-600">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h3>Legal</h3>
          <ul className="mt-4 max-w-xl text-gray-600">
            <li>Privacy Policy</li>
            <li>Term and Services</li>
          </ul>
        </div>
      </div>


      <div className="flex justify-between mx-auto container my-20  text-gray-600">
        <p>h© 2026 Dev Stack. All rights reserved.</p>
        <ul className="flex gap-4">
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
