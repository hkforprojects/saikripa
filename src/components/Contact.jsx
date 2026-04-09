import { useState } from 'react';
import { MapPin, Phone, Mail, User } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Website Enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nProduct of Interest: ${formData.product}\n\nMessage:\n${formData.message}`
    );
    
    // Attempt to open mailto link
    window.location.href = `mailto:saikripadistributors.sales@gmail.com?subject=${subject}&body=${body}`;
    
    // Optional: Reset form or show success message after a short delay since we can't truly know if mail client opened
    setTimeout(() => {
      setFormData({ name: '', phone: '', product: '', message: '' });
      alert("Opening your email client...");
    }, 500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "Bhakti Residency, Plot No 6, Sector 11, Sanpada, Navi Mumbai, Maharashtra 400705"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "098199 53909",
      link: "tel:+919819953909"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "saikripadistributors.sales@gmail.com",
      link: "mailto:saikripadistributors.sales@gmail.com"
    },
    {
      icon: User,
      title: "Director",
      content: "Mr. Rajendra Sharma" // Using placeholder name
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark mb-4">
            Contact Sai Kripa
          </h2>
          <p className="text-text-body text-base sm:text-lg">
            Have a question or looking for a quotation? Reach out to us and our team will get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          
          {/* Contact Info Column */}
          <div className="reveal">
            <h3 className="text-2xl font-serif font-bold text-dark mb-8">Contact Information</h3>
            <div className="space-y-8">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary shrink-0">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark mb-1">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-text-body hover:text-primary transition-colors">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-text-body leading-relaxed">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-accent rounded-xl border border-primary-light/20">
              <h4 className="font-bold text-dark mb-2">Business Hours</h4>
              <p className="text-text-body">Monday - Saturday: 9:00 AM to 8:00 PM</p>
              <p className="text-text-body">Sunday: Closed</p>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 reveal">
            <h3 className="text-2xl font-serif font-bold text-dark mb-6">Send an Enquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-dark mb-2">Product of Interest</label>
                  <input
                    type="text"
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="e.g. Omron BP Monitor"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="I would like to know the wholesale pricing for..."
                ></textarea>
              </div>
              
              <button type="submit" className="w-full btn-primary py-4 text-lg">
                Send Enquiry
              </button>
            </form>
          </div>

        </div>

        {/* Map Embed - Sai Kripa Distributors specific embed */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-md reveal border border-gray-200 bg-gray-100 relative">
          <iframe 
            src="https://maps.google.com/maps?q=Sai%20Kripa%20Distributors%2C%20Bhakti%20Residency%2C%20Sanpada&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Sai Kripa Location Map"
          ></iframe>
          <a 
            href="https://google.com/maps/place/Sai+Kripa+Distributors/data=!4m2!3m1!1s0x0:0xb75d95b3f0e6ac62?sa=X&ved=1t:2428&ictx=111"
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded shadow text-sm font-bold text-gray-800 hover:text-primary transition-colors border border-gray-200"
          >
            View on Google Maps
          </a>
        </div>

      </div>
    </section>
  );
}
