<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <svg
    v-if="name === 'phone'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.05 9.91a16 16 0 0 0 6.04 6.04l1.27-1.27a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92Z" />
  </svg>
  <svg v-else-if="name === 'lock'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="4" y="10" width="16" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
  <svg v-else-if="name === 'arrow-left'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </svg>
  <svg v-else-if="name === 'arrow-right'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
  <svg v-else-if="name === 'arrow-up'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="m18 15-6-6-6 6" />
  </svg>
  <svg v-else-if="name === 'play'" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5v14l11-7Z" />
  </svg>
  <svg v-else-if="name === 'volume-off'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M11 5 6 9H3v6h3l5 4V5Z" />
    <path d="m22 9-6 6" />
    <path d="m16 9 6 6" />
  </svg>
  <svg v-else-if="name === 'maximize'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M8 3H5a2 2 0 0 0-2 2v3" />
    <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
    <path d="M3 16v3a2 2 0 0 0 2 2h3" />
    <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
  </svg>
  <svg v-else-if="name === 'more-vertical'" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <circle cx="12" cy="5" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="19" r="2" />
  </svg>
  <svg v-else-if="name === 'message'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
  </svg>
  <svg v-else-if="name === 'file-text'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
    <path d="M10 9H8" />
  </svg>
  <svg v-else-if="name === 'shield'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  </svg>
  <svg v-else-if="name === 'hospital'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M3 21h18" />
    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
    <path d="M9 21v-5h6v5" />
    <path d="M12 7v6" />
    <path d="M9 10h6" />
  </svg>
  <svg v-else-if="name === 'heart-pulse'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M19.5 12.6 12 20l-7.5-7.4A5 5 0 0 1 12 6a5 5 0 0 1 7.5 6.6Z" />
    <path d="M3 12h4l2-3 3 6 2-3h7" />
  </svg>
  <svg v-else-if="name === 'briefcase-medical'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
    <rect x="3" y="6" width="18" height="15" rx="2" />
    <path d="M12 11v5" />
    <path d="M9.5 13.5h5" />
  </svg>
  <svg v-else-if="name === 'alert'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
  <svg v-else-if="name === 'clock'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
  <svg v-else-if="name === 'soap'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="5" y="10" width="14" height="8" rx="4" />
    <path d="M8 7h8" />
    <path d="M10 4h4" />
  </svg>
  <svg v-else-if="name === 'mask'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M4 10c4-3 12-3 16 0v4c-4 4-12 4-16 0Z" />
    <path d="M7 13h10" />
    <path d="M4 11H2" />
    <path d="M20 11h2" />
  </svg>
  <svg v-else-if="name === 'ban'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="m5.6 5.6 12.8 12.8" />
  </svg>
  <svg v-else-if="name === 'hands'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M7 11h4l2 2 4-4" />
    <path d="M3 13l5 5 4-4" />
    <path d="M21 11l-5 5-4-4" />
  </svg>
  <svg v-else-if="name === 'sparkles'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z" />
    <path d="M19 15v4" />
    <path d="M17 17h4" />
  </svg>
  <svg v-else-if="name === 'facebook'" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M14 8h3V4h-3c-3.1 0-5 1.9-5 5v3H6v4h3v6h4v-6h3.2l.8-4h-4V9c0-.7.3-1 1-1Z" />
  </svg>
  <svg v-else-if="name === 'twitter'" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.9 3H22l-6.8 7.8L23.2 21h-6.3l-4.9-6.4L6.4 21H3.2l7.3-8.4L2.8 3h6.4l4.4 5.8Z" />
  </svg>
</template>
