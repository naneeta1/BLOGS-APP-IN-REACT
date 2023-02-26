import { IonIcon } from '@ionic/react';
import { logoFacebook } from 'ionicons/icons';

const About = () => {
    return (
        <div className="about">
            <h2>About page</h2>
            <div className="social">
                <div className="facebook">
                    <IonIcon logo={logoFacebook} />
                </div>
                <div className="instagram">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>
                <div className="twitter">
                    <ion-icon name="logo-twitter"></ion-icon>
                </div>
            </div>
        </div>
      );
}
 
export default About;