import {Row} from 'reactstrap';

const Footer = () => {

  const footerStyle = {
    position: 'fixed',
    left: '0',
    bottom: '0',

    width: '100%',
    height: '8vh',
    fontSize: '1em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'


  }
  return(
    <div class="footer-new" style={footerStyle}>
      <Row>
        <p>&copy; National Parkopedia - 2021  |  Team 6: Maria, Katherine, Amanda, Justin</p>
      </Row>
    </div>
  );
};

export default Footer;