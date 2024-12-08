/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      animation: {
        'rotate-pause': 'rotate-pause 3s infinite', // Custom animation with pause
        float: 'float 3s ease-in-out infinite',
        float1: 'float1 3s ease-in-out infinite',
        float2: 'float2 4s ease-in-out infinite',
        float3: 'float3 2s ease-in-out infinite',
      },
      keyframes: {
        'rotate-pause': {
          '50%, 100%': { transform: 'rotate(0deg)' }, // Stay still at 0 degrees
          '100%': { transform: 'rotate(360deg)' },   // Rotate 360 degrees at halfway
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float1: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }, // First float range
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }, // Second float range
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(15px)' }, // Third float range
        },
      },
      boxShadow: {
        glow: '0 0 15px rgba(255, 255, 255, 0.7)', // Customize the glow
      }
    },
  },
  plugins: [],
}
