import { Resend } from 'resend';

const resend = new Resend('re_K23yHSZ1_7N6q75BDWzjnkf91zAVttGuw');

export const sendEmail = async () => {
    await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['cajiibxaaji02@gmail.com'],
        subject: 'hello world',
        html: '<p>it works!</p>',
    });

}