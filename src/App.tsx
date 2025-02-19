import React from 'react';
import { ChefHat, Wine, Clock, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <header className="h-screen relative flex items-center justify-center" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="text-center">
          <h1 className="text-6xl font-serif mb-4">
            <span className="text-red-600">L'</span>
            <span className="text-yellow-500">ESSENCE</span>
          </h1>
          <p className="text-xl text-gray-300">Haute Cuisine & Fine Dining</p>
        </div>
      </header>

      {/* Story Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-yellow-500 text-center mb-12">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 leading-relaxed">
              Founded in 2015, L'ESSENCE represents the pinnacle of contemporary French cuisine. 
              Our executive chef, trained in Paris's most prestigious kitchens, brings together 
              traditional techniques with modern innovation to create unforgettable dining experiences.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Chef preparing dish"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-20 bg-gray-900">
        <div className="px-4 md:px-8 max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-yellow-500 text-center mb-12">Signature Dishes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Lobster Thermidor",
                image: "https://images.unsplash.com/photo-1533682805518-48d1f5b8cd3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                price: "€85"
              },
              {
                name: "Wagyu A5 Tenderloin",
                image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                price: "€120"
              },
              {
                name: "Truffle Risotto",
                image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                price: "€45"
              }
            ].map((dish, index) => (
              <div key={index} className="bg-black rounded-lg overflow-hidden shadow-xl">
                <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-serif text-yellow-500">{dish.name}</h3>
                  <p className="text-red-600 mt-2">{dish.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Menu */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-yellow-500 text-center mb-12">Tasting Menus</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-serif text-red-600 mb-4">Dégustation</h3>
            <p className="text-gray-300 mb-4">7 courses • Wine Pairing Available</p>
            <p className="text-yellow-500">€185 per person</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-serif text-red-600 mb-4">Chef's Experience</h3>
            <p className="text-gray-300 mb-4">11 courses • Premium Wine Pairing</p>
            <p className="text-yellow-500">€285 per person</p>
          </div>
        </div>
      </section>

      {/* Interior */}
      <section className="py-20 bg-gray-900">
        <div className="px-4 md:px-8 max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-yellow-500 text-center mb-12">Our Space</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Restaurant interior"
              className="rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Dining area"
              className="rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Private dining"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Secret Menu */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-yellow-500 text-center mb-12">Chef's Secret Menu</h2>
        <div className="bg-gray-900 p-8 rounded-lg text-center">
          <ChefHat className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <p className="text-gray-300 mb-4">
            Ask your server about our exclusive off-menu items, 
            available only to our most discerning guests.
          </p>
        </div>
      </section>

      {/* Beverages */}
      <section className="py-20 bg-gray-900">
        <div className="px-4 md:px-8 max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-yellow-500 text-center mb-12">Wine & Spirits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <Wine className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-serif text-yellow-500 mb-4">Curated Wine Selection</h3>
              <p className="text-gray-300">
                Over 300 labels from the world's finest vineyards
              </p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-serif text-yellow-500 mb-4">Craft Cocktails</h3>
              <p className="text-gray-300">
                Signature drinks crafted by our master mixologists
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservations */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-yellow-500 text-center mb-12">Reservations</h2>
        <div className="bg-gray-900 p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-serif text-red-600 mb-4">Contact Us</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-2" /> +33 1 23 45 67 89
                </p>
                <p className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-2" /> reservations@lessence.com
                </p>
                <p className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-2" /> 123 Rue de la Gastronomie, Paris
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif text-red-600 mb-4">Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>Tuesday - Saturday</p>
                <p>Dinner: 18:30 - 23:00</p>
                <p>Sunday & Monday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-20 bg-gray-900">
        <div className="px-4 md:px-8 max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-yellow-500 text-center mb-12">Join Our Team</h2>
          <div className="text-center">
            <p className="text-gray-300 mb-6">
              We're always looking for passionate individuals to join our team.
              If you share our commitment to excellence, we'd love to hear from you.
            </p>
            <a href="mailto:careers@lessence.com" className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="px-4 md:px-8 max-w-6xl mx-auto">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-yellow-500">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2024 L'ESSENCE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;