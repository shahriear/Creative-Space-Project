export default function VisitOffice() {
  return (
    <section className="visit-office bg-gray-200 ">
      <h2 className="title">Visit Our Office</h2>
      <p className="subtitle">Stop by for a consultation or project discussion</p>

      <div className="container mx-auto px-4 w-[90%] md:w-[80%] h-[400px] rounded-xl overflow-hidden shadow-lg border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.90274730836!2d90.39156387438674!3d23.75087617868737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894ed4b09b9%3A0x8b672c1b1f3e5c9b!2sDhaka!5e0!3m2!1sen!2sbd!4v1699260034567!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
