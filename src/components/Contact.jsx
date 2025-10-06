import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isloading,setloading]=useState(false)
  // Update state on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    setloading(true)
    e.preventDefault();
    console.log(formData); // <-- this logs all input values

    // Here you can send data to your API
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.status==200) {
            setloading(false)

              alert(data.message);
setFormData({
      name: '',
    email: '',
    phone: '',
    message: '',
})
      }
    } catch (err) {
            setloading(false)

      alert('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#2C2C2C]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#8B7355] mx-auto mb-6"></div>
          <p className="text-[#B4AFA5] text-lg">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white text-sm mb-2 tracking-wide">NAME</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-[#6B6B6B] text-white py-3 focus:border-[#8B7355] outline-none transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-white text-sm mb-2 tracking-wide">EMAIL</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-[#6B6B6B] text-white py-3 focus:border-[#8B7355] outline-none transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-white text-sm mb-2 tracking-wide">PHONE</label>
            <input 
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-[#6B6B6B] text-white py-3 focus:border-[#8B7355] outline-none transition-colors"
              placeholder="Your phone number"
              required
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-2 tracking-wide">MESSAGE</label>
            <textarea 
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-[#6B6B6B] text-white py-3 focus:border-[#8B7355] outline-none transition-colors resize-none"
              placeholder="Tell us about your requirement..."
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button className="bg-[#8B7355] text-white px-12 py-4 hover:bg-[#A08968] transition-colors text-sm tracking-wide">
            {isloading?"Sending...":"SEND MESSAGE"}  
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
