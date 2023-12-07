import React  ,{useEffect} from "react";
import styles from './privacyPolicy.module.css'
const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className={styles.section}>
            <p className={styles.heading}>
            Contact Us
            </p>
            <div className={styles.para}>
            <p>
                <h5>Last updated on 07-12-2023 13:08:20</h5>
                <p>You may contact us using the information below:</p>

<p>Merchant Legal entity name: SANDESH SATAVAJI HAMBARDE</p>
<p>Registered Address: kathora naka, amravati, amravati, Maharashtra, PIN: 444606</p>
<p>Operational Address: kathora naka, amravati, amravati, Maharashtra, PIN: 444606</p>
<p>Telephone No: 8010117421</p>
<p>E-Mail ID: <a href="mailto:kendremahesh299@gmail.com">kendremahesh299@gmail.com</a></p>
             </p>
            </div>
        </div>
    );
}
export default ContactUs;