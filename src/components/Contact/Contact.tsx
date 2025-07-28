const ExampleComponent = () => {
  // (move your hero section constants and logic here)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Basic validation
    const name = formData.get('name') as string;
    const email = formData.get('_replyto') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    // Submit to Formspree (or handle as needed)
    form.submit();
  };

  return (
      <section className="contact" id="contact">
        <h2 className="contact__heading section-heading">Contact</h2>
        <p className="contact__text">
          Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
        </p>
        <form className="contact__form" action="https://formspree.io/f/xdoprgpv" method="POST" onSubmit={handleSubmit}>
          <input className="contact__form-name" name="name" placeholder="Name" required />
          <input className="contact__form-email" type="email" name="_replyto" placeholder="Email" required />
          <textarea className="contact__form-message" name="message" placeholder="Message" required />
          <div className="contact__form-error-submit">
            <button type="submit" className="contact__form-submit-2 project__live-2">
              Submit
            </button>
          </div>
        </form>
      </section>
  );
};

export default ExampleComponent;