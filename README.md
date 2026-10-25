# Números · Misión Aprendizaje

**Mundo: Selva de los números.** Fondo de selva tranquilo, tarjetas color crema, una tinta verde y un sol amarillo para lo importante; números grandes y botones de respuesta con relieve para dedos de 5 años. Durante el juego solo quedan 🏠 y 🔊; idioma y sonido están en el panel del adulto.

Juego web de una sola página para que niños con TDAH aprendan números y lógica matemática básica. Funciona en iPad, tablet o computadora, en español e inglés, con voz.

**Jugar:** https://jlcaleroh-apps.github.io/numeros/

## Modos

| Modo | Qué trabaja |
|---|---|
| 📖 Memorizar | Secuencia de números (1-10 … 31-40) con álbum de stickers |
| 🎲 Reconocer | Escuchar un número y encontrarlo (con 💡 pista si hace falta) |
| 🔗 Vincular | Asociar cantidad con numeral (1-5, 6-10) |
| 🔢 Contar | Conteo uno a uno: tocar cada objeto, escuchar el número y elegir la cantidad |
| ➕ Sumar | Sumas con objetos en marco de 5 |
| ➖ Restar | Objetos que "se van" (tachados) en el marco: ¿cuántos quedan? |
| 🪜 ¿Qué sigue? | Secuencias: número que falta; luego hasta 20, de 2 en 2 y hacia atrás |
| ⚖️ Más o menos | Comparar dos grupos en marcos de 10: dónde hay más / menos |

## Principios para TDAH

- Instrucciones cortas y siempre habladas.
- Refuerzo inmediato (check, voz, confeti).
- Error suave: se nombra lo que tocó y se repite la meta, sin castigo.
- Sesiones con final claro: 10 estrellas por reto.
- Sin temporizadores ni presión de tiempo.
- Dificultad adaptativa por niño: 3 aciertos seguidos suben el nivel, 2 errores lo bajan.
- Modo foco: durante el juego solo quedan 🏠 y 🔊 Otra vez.
- Marco de 5 y de 10 para ver cantidades de un vistazo.
- Cada reto completado da un sticker para "Mi colección" (30 en total).
- Números difíciles: los que más falla salen más seguido; 6↔9 y 12↔21 aparecen juntos para practicar la diferencia.
- Pausas de movimiento: cada 2 retos (ajustable) propone moverse un momento.
- Del 11 al 40, el álbum muestra decenas como marcos de 10 llenos + unidades (valor posicional).
- Botón 🔊/🔇 para silenciar la voz; en el panel también se pueden apagar los efectos.

## Para el adulto

- Perfiles: la primera vez se escribe el nombre; después el niño solo toca su tarjeta.
- **👤 Adulto** (mantener presionado 1.5 s): niveles de cada juego, progreso por rango, colección, borrar progreso o quitar el perfil.
- La voz (niño/niña) se elige en la pantalla de inicio y se recuerda por nombre.
- Todo se guarda solo en el dispositivo (no hay cuentas ni internet para el progreso).

## Instalar en el iPad (funciona sin internet)

1. Abre la app en **Safari**.
2. Toca **Compartir** (cuadro con flecha) → **Agregar a pantalla de inicio**.
3. Ábrela una vez con internet; después funciona sin conexión.

## Créditos

Creado por José Luis Calero Hernández, con apoyo de herramientas de IA.

## Componentes comunes (iguales en todas las apps de jlcaleroh-apps)
Esta app sigue el [estándar común](https://github.com/jlcaleroh-apps/plantilla/blob/main/ESTANDAR.md). Las apps nuevas se crean desde [plantilla](https://github.com/jlcaleroh-apps/plantilla).

- **`respaldo.js` · Respaldo del progreso:** en el panel del adulto, "Guardar respaldo" crea un archivo con el progreso de todos los niños (se guarda en Archivos, AirDrop o correo) y "Restaurar respaldo" lo carga en este u otro iPad. Muestra la fecha del último respaldo y avisa si pasaron más de 2 semanas. También pide al iPad que no borre los datos de la app.
  - Es el mismo archivo en todas las apps: si se mejora, se copia igual en cada repo.
  - Cada app declara qué claves de almacenamiento son suyas, porque todas comparten el dominio `jlcaleroh-apps.github.io`. En Números todas empiezan con `numeros:`; las claves antiguas sin prefijo se migran solas la primera vez que se abre la app.
- **`voz.js` · Prueba de voz:** en el panel del adulto, elegir la voz del iPad para cada idioma, ajustar la velocidad y escuchar ejemplos de la app. Donde aplica, permite grabar tu propia voz para letras, sílabas o palabras sueltas; las grabaciones viajan en el respaldo.
- **`adulto.js` · Gesto del panel del adulto:** mantener presionado 2 segundos; el botón se llena de color y, si se suelta antes, aparece un aviso. Así los niños no lo abren por accidente.
- **`pantalla.js` · Pantalla encendida:** mientras el niño toca la pantalla, el iPad no se apaga; tras 3 minutos sin actividad se suelta para cuidar la batería.
- **`apps.js` · Otras apps:** en la ventana de información, enlaces a las demás apps de la colección (Robot Sílabo, Trazos de Arquitecto, Números, Mi Rutina) para que los padres conozcan las otras. Al crear una app nueva se agrega a su lista y se copia igual en todos los repos.

## Contacto
jlcaleroh@gmail.com
