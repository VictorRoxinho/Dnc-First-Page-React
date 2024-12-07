import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import ContactForm from "../components/ContactForm/ContactForm"

const Contact = () => {
  return (
    <>
    <Header />
    <Banner title="Contact" image="contact.svg"/>
    <div className="container">
      <ContactForm />
    </div>
    <Footer />
    </>
  )
}

export default Contact