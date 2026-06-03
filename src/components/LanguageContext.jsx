import { createContext, useState, useContext } from 'react'

const translations = {
  en: {
    // Header
    home: 'Home',
    activities: 'Activities',
    vehicles: 'Vehicles',
    booking: 'Book Now',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'Professional Shuttle & Chauffeur Services in Hermanus',
    heroSubtitle: 'Experience comfortable, reliable transportation throughout the Western Cape',
    bookNow: 'Book Now',
    learnMore: 'Learn More',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive transportation solutions for every occasion',
    airportTransfer: 'Airport Transfers',
    privateTours: 'Private Tours',
    corporateTravel: 'Corporate Travel',
    wheelchairAccessible: 'Wheelchair Accessible',
    
    // Booking
    bookingTitle: 'Book Your Ride',
    pickupLocation: 'Pickup Location',
    dropoffLocation: 'Dropoff Location',
    pickupDate: 'Pickup Date',
    pickupTime: 'Pickup Time',
    passengers: 'Passengers',
    serviceType: 'Service Type',
    vehicleType: 'Vehicle Type',
    submit: 'Book Now',
    
    // Contact
    contactTitle: 'Get In Touch',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    send: 'Send Message',
    
    // Footer
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved',
    
    // Common
    loading: 'Loading...',
    success: 'Success!',
    error: 'Error',
    close: 'Close',
    available247: 'Available 24/7'
  },
  af: {
    // Header
    home: 'Tuis',
    activities: 'Aktiwiteite',
    vehicles: 'Voertuie',
    booking: 'Bespreek Nou',
    contact: 'Kontak',
    
    // Hero
    heroTitle: 'Professionele Pendelbus & Sjauffeursdienste in Hermanus',
    heroSubtitle: 'Ervaar gemaklike, betroubare vervoer regdeur die Wes-Kaap',
    bookNow: 'Bespreek Nou',
    learnMore: 'Leer Meer',
    
    // Services
    servicesTitle: 'Ons Dienste',
    servicesSubtitle: 'Omvattende vervoeroplossings vir elke geleentheid',
    airportTransfer: 'Lughawe Oordragte',
    privateTours: 'Private Toere',
    corporateTravel: 'Korporatiewe Reis',
    wheelchairAccessible: 'Rolstoel Toeganklik',
    
    // Booking
    bookingTitle: 'Bespreek Jou Rit',
    pickupLocation: 'Optel Lokasie',
    dropoffLocation: 'Aflaai Lokasie',
    pickupDate: 'Optel Datum',
    pickupTime: 'Optel Tyd',
    passengers: 'Passasiers',
    serviceType: 'Diens Tipe',
    vehicleType: 'Voertuig Tipe',
    submit: 'Bespreek Nou',
    
    // Contact
    contactTitle: 'Kom In Kontak',
    name: 'Naam',
    email: 'E-pos',
    phone: 'Telefoon',
    message: 'Boodskap',
    send: 'Stuur Boodskap',
    
    // Footer
    quickLinks: 'Vinnige Skakels',
    followUs: 'Volg Ons',
    allRightsReserved: 'Alle regte voorbehou',
    
    // Common
    loading: 'Laai...',
    success: 'Sukses!',
    error: 'Fout',
    close: 'Sluit',
    available247: 'Beskikbaar 24/7'
  }
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'af' : 'en')
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export default LanguageContext
