import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hola 🐾, soy tu asistente virtual.<br>¿En qué puedo ayudarte hoy?' }
  ]);
  const [showOptions, setShowOptions] = useState(true);

  const respuestas = {
    'comida-recomendada': 'Los perros pueden comer croquetas balanceadas o comida natural supervisada por un veterinario. Evita grasas y condimentos.',
    'frecuencia': 'Cachorros: 3-4 veces al día. Adultos: 2 veces. Mayores: 1-2 veces según actividad.',
    'alimentos-prohibidos': 'Evita chocolate, cebolla, uvas, aguacate y huesos cocidos, pueden ser tóxicos.',
    'vacunas': 'Vacunas esenciales: Moquillo, Parvovirus, Hepatitis, Rabia y Leptospirosis.',
    'desparasitacion': 'Cada 3 meses es recomendable desparasitar con productos aprobados por tu veterinario.',
    'emergencias': 'Mantén calma. Si hay envenenamiento, heridas graves o convulsiones, acude al veterinario inmediatamente.',
    'entrenamiento': 'Refuerza conductas positivas con premios y paciencia. Evita castigos.',
    'ansiedad': 'Crea rutinas, paseos y juguetes para reducir el estrés. Evita dejarlo solo por largos periodos.',
    'agresividad': 'Consulta con un etólogo. La agresividad puede ser por miedo o territorialidad.',
    'contacto-veterinario': 'Para contactar a un veterinario, llama al +52 55 1234 5678 o visita nuestra página de contacto.',
    'contacto-etologo': 'Para contactar a un etólogo, envía un correo a etologo@petconnect.com o llama al +52 55 9876 5432.',
    'contacto-general': 'Para información general, visita nuestra página de contacto o llama al +52 55 1111 2222.'
  };

  const showSubOptions = (topic) => {
    let subOptions = [];
    let botMsg = '';

    if (topic === 'alimentacion') {
      botMsg = '🐾 Alimentación - ¿Qué deseas saber?';
      subOptions = [
        { text: 'Tipos de comida recomendada', action: 'comida-recomendada' },
        { text: 'Frecuencia de alimentación', action: 'frecuencia' },
        { text: 'Alimentos prohibidos', action: 'alimentos-prohibidos' }
      ];
    } else if (topic === 'salud') {
      botMsg = '💊 Salud - ¿Qué te gustaría consultar?';
      subOptions = [
        { text: 'Vacunas necesarias', action: 'vacunas' },
        { text: 'Desparasitación', action: 'desparasitacion' },
        { text: 'Qué hacer en emergencias', action: 'emergencias' }
      ];
    } else if (topic === 'comportamiento') {
      botMsg = '🐶 Comportamiento - Elige un tema:';
      subOptions = [
        { text: 'Entrenamiento básico', action: 'entrenamiento' },
        { text: 'Ansiedad o estrés', action: 'ansiedad' },
        { text: 'Agresividad o miedos', action: 'agresividad' }
      ];
    } else if (topic === 'especialista') {
      botMsg = '👨‍⚕️ Contactar a un especialista - ¿Cómo podemos ayudarte?';
      subOptions = [
        { text: 'Contactar veterinario', action: 'contacto-veterinario' },
        { text: 'Contactar etólogo', action: 'contacto-etologo' },
        { text: 'Información general', action: 'contacto-general' }
      ];
    }

    setMessages(prev => [...prev, { type: 'bot', text: botMsg }]);
    setShowOptions(false);
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'options', options: subOptions }]);
    }, 500);
  };

  const showAnswer = (answer, text) => {
    const reply = respuestas[answer] || 'Lo siento, no tengo información sobre eso 🐾.';
    setMessages(prev => [
      ...prev,
      { type: 'user', text: `👉 ${text}` },
      { type: 'bot', text: reply }
    ]);
  };

  return (
    <main>
      {/* Hero Section with Chatbot */}
      <div className="hero">
        <h2>¿Tienes dudas sobre tu mascota?</h2>
        <p>Nuestro Chat-Bot te brinda asesoría al instante o te conecta con un especialista.</p>
        <div className="chatbot-seccion">
          <div className="chatbot-box">
            <div className="chat-header">
              <h3>🐕‍🦺 PetBot 🤖</h3>
            </div>

            <div className="chat-body">
              {messages.map((msg, index) => (
                <div key={index}>
                  {msg.type === 'bot' && <div className="bot-msg" dangerouslySetInnerHTML={{ __html: msg.text }}></div>}
                  {msg.type === 'user' && <div className="user-msg">{msg.text}</div>}
                  {msg.type === 'options' && (
                    <div className="options">
                      {msg.options.map((option, i) => (
                        <button key={i} onClick={() => showAnswer(option.action, option.text)}>
                          {option.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {showOptions && (
                <div className="options" id="main-options">
                  <button onClick={() => showSubOptions('alimentacion')}>🍖 Alimentación</button>
                  <button onClick={() => showSubOptions('salud')}>💊 Salud</button>
                  <button onClick={() => showSubOptions('comportamiento')}>🐶 Comportamiento</button>
                  <button onClick={() => showSubOptions('especialista')}>👨‍⚕️ Contactar a un especialista</button>
                </div>
              )}
            </div>

            <div className="chat-footer">
              <small>PetConnect Asistente Virtual</small>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
