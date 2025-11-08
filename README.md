![Excel Práctico](public/favicon.svg)

# Excel Práctico | Landing Page

Landing page moderna, profesional y 100% responsive construida con **React + Vite** para la marca **Excel Práctico**, especializada en la venta de plantillas profesionales en VBA para Excel. Incluye catálogo interactivo, servicio de plantillas personalizadas, requisitos del sistema y sección de contacto.

## Stack principal

- React 18 + Vite
- TailwindCSS
- shadcn/ui (componentes adaptados)
- Framer Motion
- Swiper.js
- Lucide-react

## Requisitos previos

- Node.js 18+ (se recomienda 20+)
- npm 9+

## Instalación

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

## Scripts disponibles

- `npm run dev`: ejecuta el entorno de desarrollo con Vite.
- `npm run build`: genera la versión optimizada para producción.
- `npm run preview`: sirve la build productiva para revisión.

## Estructura principal

```
src/
├── components/
│   ├── Catalogo.jsx
│   ├── Contacto.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── ModalComprar.jsx
│   ├── ModalDetalles.jsx
│   ├── Navbar.jsx
│   ├── Personalizadas.jsx
│   └── ui/
│       ├── button.jsx
│       ├── card.jsx
│       ├── dialog.jsx
│       ├── input.jsx
│       └── textarea.jsx
├── data/
│   └── plantillas.js
├── lib/
│   └── utils.js
├── App.jsx
├── index.css
└── main.jsx
```

## Cómo agregar nuevas plantillas al catálogo

1. Abre `src/data/plantillas.js`.
2. Añade un nuevo objeto al arreglo `plantillas` con las propiedades:
   - `id`: identificador único (sin espacios).
   - `nombre`: título de la plantilla.
   - `descripcion`: resumen corto.
   - `descripcionExtendida`: detalle completo que se mostrará en el modal.
   - `precio`: valor en USD (número).
   - `miniatura`: URL de la imagen principal.
   - `imagenes`: arreglo de URLs para el carrusel del modal.
   - `videoUrl`: URL de YouTube en formato embed.
   - `hotmartLink`: enlace directo de compra.
   - `whatsappLink`: enlace directo a WhatsApp para soporte o personalización.
3. Guarda el archivo y el nuevo elemento se mostrará automáticamente.

## Personalización rápida

- Colores base definidos en `tailwind.config.js` (`excel`, `excel.dark`, `excel.light`).
- Tipografía: Inter (via `@fontsource/inter`).
- Animaciones configuradas con Framer Motion y utilidades de Tailwind.

## Despliegue

1. Ejecuta `npm run build`.
2. Sirve la carpeta `dist` con tu hosting preferido (la web está pensada para uso local/interno).

---

© 2025 Excel Práctico — Plantillas profesionales en VBA para Excel.
