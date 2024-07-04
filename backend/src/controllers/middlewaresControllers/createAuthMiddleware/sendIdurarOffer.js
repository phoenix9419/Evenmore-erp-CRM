const { afterRegistrationSuccess } = require('@/emailTemplate/emailVerfication');

const { Resend } = require('resend');

const sendEvenmoreOffer = async ({ email, name }) => {
  const resend = new Resend(process.env.RESEND_API);

  const { data } = await resend.emails.send({
    from: 'hello@evenmoreapp.com',
    to: email,
    subject: 'Customize Evenmore ERP CRM or build your own SaaS',
    html: afterRegistrationSuccess({ name }),
  });

  return data;
};

module.exports = sendEvenmoreOffer;
