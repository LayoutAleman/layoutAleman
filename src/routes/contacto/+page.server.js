import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';
import { render } from 'svelte-email';
import Contacto from '$lib/emails/Contacto.svelte';

export const actions = {
	default: async ({request}) => {
  
        const data = await request.formData();
		const email = data.get('email');
        const correo_layout = data.get('correo_layout');
		const phone = data.get('phone');
        const logo = data.get('logo');
        const mensaje = data.get('mensaje');


		const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for port 465, false for other ports
            auth: {
              user: "layoutalemanweb@gmail.com",
              pass: "dnodqraaqrabvkfn",
            },
        });

        const emailHtml = render({
            template: Contacto,
            props: {
                email: email,
                phone:phone,
                mensaje: mensaje,
                logo:logo
            }
        });
        
        const options = {
            from: 'you@example.com',
            to: correo_layout.toString(),
            subject: 'Contacto Pagina web',
            html: emailHtml
        };

        const info = await transporter.sendMail(options)

   
        if(info.messageId)return {success:true}
        else return {success:false}
	}
    
};