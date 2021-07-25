import './contactStyle.css';

const Contact = () => {
    
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <div className="contact-text">
                
            <p>You can contact us for any information, about the coffeeshops you see on our website, 
                or any other questions :)</p>
            <p><b>Address:</b> Østergården 41, 2635 Ishøj</p>
            <p><b>Number:</b> 26 35 40 95</p>
            <p><b>Email:</b> MohammedHassani1995@gmail.com</p>

            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.6245903221024!2d12.347433215912334!3d55.608546980515065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525795da2327d9%3A0x77192a2067c548e7!2zw5hzdGVyZ8OlcmRlbiA0MSwgMjYzNSBJc2jDuGo!5e0!3m2!1sda!2sdk!4v1625586320529!5m2!1sda!2sdk" />
        </div>
    );
}

export default Contact;