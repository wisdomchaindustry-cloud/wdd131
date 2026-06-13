const contactForm =
  document.querySelector("#contactForm");

const confirmationMessage =
  document.querySelector("#confirmationMessage");

const saveMessage = (contactData) => {

  const messages =
    JSON.parse(
      localStorage.getItem(
        "webcafeMessages"
      )
    ) || [];

  messages.push(contactData);

  localStorage.setItem(
    "webcafeMessages",
    JSON.stringify(messages)
  );
};

const displayConfirmation = (contactData) => {

  confirmationMessage.innerHTML = `
    <div class="success-card">

      <h2>
        Thank You, ${contactData.fullName}! 🎉
      </h2>

      <p>
        Your message regarding
        <strong>${contactData.subject}</strong>
        has been received.
      </p>

      <p>
        We appreciate your feedback and will review it shortly.
      </p>

    </div>
  `;
};

if (contactForm){

  contactForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();

      const contactData = {

        fullName:
          document
            .querySelector("#fullName")
            .value
            .trim(),

        email:
          document
            .querySelector("#email")
            .value
            .trim(),

        subject:
          document
            .querySelector("#subject")
            .value,

        message:
          document
            .querySelector("#message")
            .value
            .trim(),

        date:
          new Date().toLocaleString()
      };

      if (
        contactData.fullName === "" ||
        contactData.email === "" ||
        contactData.subject === "" ||
        contactData.message === ""
      ){

        confirmationMessage.innerHTML = `
          <div class="error-card">

            <h2>
              Missing Information
            </h2>

            <p>
              Please complete all fields before submitting the form.
            </p>

          </div>
        `;

        return;
      }

      saveMessage(contactData);

      displayConfirmation(contactData);

      contactForm.reset();
    }
  );
}