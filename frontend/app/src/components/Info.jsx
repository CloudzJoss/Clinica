import React from "react";
import "../styles/Info.css";

export default function Info() {
  return (
    <section className="Contenido">
      <main className="info">

        {/* Sección: Staff Médicos */}
        <section id="staff" className="section-block">
          <h2>Staff Médicos</h2>
          <p>
            Contamos con un equipo de profesionales altamente calificados en 
            distintas especialidades como cardiología, pediatría, ginecología, 
            y cirugía general. Nuestro objetivo es brindar atención integral y 
            personalizada a cada paciente.
          </p>
        </section>

        {/* Sección: Nosotros */}
        <section id="nosotros" className="section-block">
          <h2>¿Qué Somos?</h2>
          <p>
            Somos una clínica dedicada al cuidado de la salud de la 
            comunidad. Nuestro compromiso es ofrecer servicios médicos de calidad 
            con tecnología moderna y un enfoque humano en cada consulta.
          </p>
        </section>

        {/* Sección: Servicios */}
        <section id="servicios" className="section-block">
          <h2>Servicios</h2>
          <ul>
            <li>Consultas médicas generales y especializadas</li>
            <li>Exámenes de laboratorio y diagnóstico por imágenes</li>
            <li>Programas de prevención y bienestar</li>
            <li>Reserva de citas</li>
          </ul>
        </section>

        {/* Sección: Reservas */}
        <section id="reservas" className="section-block">
          <h2>Reservas</h2>
          <p>
            Reserva tu cita médica de manera sencilla y rápida a través de 
            nuestro sistema en línea o comunicándote con nuestra central telefónica. 
            ¡Nos preocupamos por tu tiempo y tu salud!
          </p>
        </section>

      </main>
    </section>
  );
}
