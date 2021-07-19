import {Row} from 'reactstrap';

const Footer = () => {

  const footerStyle = {
    position: 'absolute',
    left: '0',
    bottom: '0',
    right: '0'
  }
  return(
    <div class="footer-new" style={footerStyle}>
      <Row>
        <p>&copy; GardenJam - 2021  |  Team 6: Maria, Katherine, Amanda, Justin</p>
      </Row>
    </div>
  );
};

export default Footer;