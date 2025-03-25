// Manejo del formulario de contacto
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Aquí normalmente se enviaría el formulario a un backend
            // Para GitHub Pages, puedes usar servicios como Formspree
            // o implementar una solución con Netlify Forms
            
            // Ejemplo básico
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            console.log('Formulario enviado:');
            console.log('Nombre:', name);
            console.log('Email:', email);
            console.log('Mensaje:', message);
            
            // Reset form
            contactForm.reset();
            
            // Mostrar mensaje de éxito
            alert('¡Gracias por tu mensaje! Te responderé lo antes posible.');
        });
    }
});