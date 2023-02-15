<template>
  <div class="w-full">
    <!-- Banner section -->
    <section id="banner" class="w-full">
      <carousel :per-page="1" :autoplay="true" :loop="true" :pagination-active-color="`#4f378b`" :pagination-color="`#d0bcff`">
        <slide>
          <BaseSection>
            <div class="col-span-12 lg:col-span-8 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
              <h1
                data-aos="fade-right"
                data-aos-once="true"
                class="text-[2.5rem] sm:text-4xl xl:text-5xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
              >
                {{ 'Partner Ecosystem & Integrations' }}
              </h1>
              <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
                {{ 'Kami bermitra dengan banyak ekspedisi terkemuka untuk membantu mengembangkan bisnis Anda lebih cepat, dan lebih kuat dari sebelumnya.' }}
              </p>
              <ul class="grid gap-y-5 mb-10 text-sm xl:w-7/12 text-neutral-600">
                <li class="pl-8 relative">
                  <svg
                    width="24"
                    height="24"
                    class="absolute left-0 top-2.5 -translate-y-1/2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_15_153)">
                      <path d="M4.99997 7.2C4.99997 6.61652 5.23176 6.05694 5.64434 5.64436C6.05692 5.23178 6.6165 5 7.19997 5H8.19997C8.78087 4.99967 9.33806 4.7696 9.74997 4.36L10.45 3.66C10.6544 3.4544 10.8975 3.29124 11.1652 3.17991C11.4329 3.06857 11.72 3.01126 12.01 3.01126C12.2999 3.01126 12.587 3.06857 12.8547 3.17991C13.1225 3.29124 13.3655 3.4544 13.57 3.66L14.27 4.36C14.682 4.77 15.24 5 15.82 5H16.82C17.4034 5 17.963 5.23178 18.3756 5.64436C18.7882 6.05694 19.02 6.61652 19.02 7.2V8.2C19.02 8.78 19.25 9.338 19.66 9.75L20.36 10.45C20.5656 10.6544 20.7287 10.8975 20.8401 11.1652C20.9514 11.433 21.0087 11.7201 21.0087 12.01C21.0087 12.2999 20.9514 12.587 20.8401 12.8548C20.7287 13.1225 20.5656 13.3656 20.36 13.57L19.66 14.27C19.2504 14.6819 19.0203 15.2391 19.02 15.82V16.82C19.02 17.4035 18.7882 17.9631 18.3756 18.3756C17.963 18.7882 17.4034 19.02 16.82 19.02H15.82C15.2391 19.0203 14.6819 19.2504 14.27 19.66L13.57 20.36C13.3655 20.5656 13.1225 20.7288 12.8547 20.8401C12.587 20.9514 12.2999 21.0087 12.01 21.0087C11.72 21.0087 11.4329 20.9514 11.1652 20.8401C10.8975 20.7288 10.6544 20.5656 10.45 20.36L9.74997 19.66C9.33806 19.2504 8.78087 19.0203 8.19997 19.02H7.19997C6.6165 19.02 6.05692 18.7882 5.64434 18.3756C5.23176 17.9631 4.99997 17.4035 4.99997 16.82V15.82C4.99964 15.2391 4.76957 14.6819 4.35997 14.27L3.65997 13.57C3.45437 13.3656 3.29121 13.1225 3.17988 12.8548C3.06855 12.587 3.01123 12.2999 3.01123 12.01C3.01123 11.7201 3.06855 11.433 3.17988 11.1652C3.29121 10.8975 3.45437 10.6544 3.65997 10.45L4.35997 9.75C4.76957 9.33809 4.99964 8.7809 4.99997 8.2V7.2Z" fill="#2C6C00" />
                      <path d="M4.99997 7.2C4.99997 6.61652 5.23176 6.05694 5.64434 5.64436C6.05692 5.23178 6.6165 5 7.19997 5H8.19997C8.78087 4.99967 9.33806 4.7696 9.74997 4.36L10.45 3.66C10.6544 3.4544 10.8975 3.29124 11.1652 3.17991C11.4329 3.06857 11.72 3.01126 12.01 3.01126C12.2999 3.01126 12.587 3.06857 12.8547 3.17991C13.1225 3.29124 13.3655 3.4544 13.57 3.66L14.27 4.36C14.682 4.77 15.24 5 15.82 5H16.82C17.4034 5 17.963 5.23178 18.3756 5.64436C18.7882 6.05694 19.02 6.61652 19.02 7.2V8.2C19.02 8.78 19.25 9.338 19.66 9.75L20.36 10.45C20.5656 10.6544 20.7287 10.8975 20.8401 11.1652C20.9514 11.433 21.0087 11.7201 21.0087 12.01C21.0087 12.2999 20.9514 12.587 20.8401 12.8548C20.7287 13.1225 20.5656 13.3656 20.36 13.57L19.66 14.27C19.2504 14.6819 19.0203 15.2391 19.02 15.82V16.82C19.02 17.4035 18.7882 17.9631 18.3756 18.3756C17.963 18.7882 17.4034 19.02 16.82 19.02H15.82C15.2391 19.0203 14.6819 19.2504 14.27 19.66L13.57 20.36C13.3655 20.5656 13.1225 20.7288 12.8547 20.8401C12.587 20.9514 12.2999 21.0087 12.01 21.0087C11.72 21.0087 11.4329 20.9514 11.1652 20.8401C10.8975 20.7288 10.6544 20.5656 10.45 20.36L9.74997 19.66C9.33806 19.2504 8.78087 19.0203 8.19997 19.02H7.19997C6.6165 19.02 6.05692 18.7882 5.64434 18.3756C5.23176 17.9631 4.99997 17.4035 4.99997 16.82V15.82C4.99964 15.2391 4.76957 14.6819 4.35997 14.27L3.65997 13.57C3.45437 13.3656 3.29121 13.1225 3.17988 12.8548C3.06855 12.587 3.01123 12.2999 3.01123 12.01C3.01123 11.7201 3.06855 11.433 3.17988 11.1652C3.29121 10.8975 3.45437 10.6544 3.65997 10.45L4.35997 9.75C4.76957 9.33809 4.99964 8.7809 4.99997 8.2V7.2" stroke="#2C6C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_15_153">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span class="slider-feature-0">Beragam pilihan expedisi & Layanan</span>
                </li>
                <li class="pl-8 relative">
                  <svg
                    width="24"
                    height="24"
                    class="absolute left-0 top-2.5 -translate-y-1/2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_15_153)">
                      <path d="M4.99997 7.2C4.99997 6.61652 5.23176 6.05694 5.64434 5.64436C6.05692 5.23178 6.6165 5 7.19997 5H8.19997C8.78087 4.99967 9.33806 4.7696 9.74997 4.36L10.45 3.66C10.6544 3.4544 10.8975 3.29124 11.1652 3.17991C11.4329 3.06857 11.72 3.01126 12.01 3.01126C12.2999 3.01126 12.587 3.06857 12.8547 3.17991C13.1225 3.29124 13.3655 3.4544 13.57 3.66L14.27 4.36C14.682 4.77 15.24 5 15.82 5H16.82C17.4034 5 17.963 5.23178 18.3756 5.64436C18.7882 6.05694 19.02 6.61652 19.02 7.2V8.2C19.02 8.78 19.25 9.338 19.66 9.75L20.36 10.45C20.5656 10.6544 20.7287 10.8975 20.8401 11.1652C20.9514 11.433 21.0087 11.7201 21.0087 12.01C21.0087 12.2999 20.9514 12.587 20.8401 12.8548C20.7287 13.1225 20.5656 13.3656 20.36 13.57L19.66 14.27C19.2504 14.6819 19.0203 15.2391 19.02 15.82V16.82C19.02 17.4035 18.7882 17.9631 18.3756 18.3756C17.963 18.7882 17.4034 19.02 16.82 19.02H15.82C15.2391 19.0203 14.6819 19.2504 14.27 19.66L13.57 20.36C13.3655 20.5656 13.1225 20.7288 12.8547 20.8401C12.587 20.9514 12.2999 21.0087 12.01 21.0087C11.72 21.0087 11.4329 20.9514 11.1652 20.8401C10.8975 20.7288 10.6544 20.5656 10.45 20.36L9.74997 19.66C9.33806 19.2504 8.78087 19.0203 8.19997 19.02H7.19997C6.6165 19.02 6.05692 18.7882 5.64434 18.3756C5.23176 17.9631 4.99997 17.4035 4.99997 16.82V15.82C4.99964 15.2391 4.76957 14.6819 4.35997 14.27L3.65997 13.57C3.45437 13.3656 3.29121 13.1225 3.17988 12.8548C3.06855 12.587 3.01123 12.2999 3.01123 12.01C3.01123 11.7201 3.06855 11.433 3.17988 11.1652C3.29121 10.8975 3.45437 10.6544 3.65997 10.45L4.35997 9.75C4.76957 9.33809 4.99964 8.7809 4.99997 8.2V7.2Z" fill="#2C6C00" />
                      <path d="M4.99997 7.2C4.99997 6.61652 5.23176 6.05694 5.64434 5.64436C6.05692 5.23178 6.6165 5 7.19997 5H8.19997C8.78087 4.99967 9.33806 4.7696 9.74997 4.36L10.45 3.66C10.6544 3.4544 10.8975 3.29124 11.1652 3.17991C11.4329 3.06857 11.72 3.01126 12.01 3.01126C12.2999 3.01126 12.587 3.06857 12.8547 3.17991C13.1225 3.29124 13.3655 3.4544 13.57 3.66L14.27 4.36C14.682 4.77 15.24 5 15.82 5H16.82C17.4034 5 17.963 5.23178 18.3756 5.64436C18.7882 6.05694 19.02 6.61652 19.02 7.2V8.2C19.02 8.78 19.25 9.338 19.66 9.75L20.36 10.45C20.5656 10.6544 20.7287 10.8975 20.8401 11.1652C20.9514 11.433 21.0087 11.7201 21.0087 12.01C21.0087 12.2999 20.9514 12.587 20.8401 12.8548C20.7287 13.1225 20.5656 13.3656 20.36 13.57L19.66 14.27C19.2504 14.6819 19.0203 15.2391 19.02 15.82V16.82C19.02 17.4035 18.7882 17.9631 18.3756 18.3756C17.963 18.7882 17.4034 19.02 16.82 19.02H15.82C15.2391 19.0203 14.6819 19.2504 14.27 19.66L13.57 20.36C13.3655 20.5656 13.1225 20.7288 12.8547 20.8401C12.587 20.9514 12.2999 21.0087 12.01 21.0087C11.72 21.0087 11.4329 20.9514 11.1652 20.8401C10.8975 20.7288 10.6544 20.5656 10.45 20.36L9.74997 19.66C9.33806 19.2504 8.78087 19.0203 8.19997 19.02H7.19997C6.6165 19.02 6.05692 18.7882 5.64434 18.3756C5.23176 17.9631 4.99997 17.4035 4.99997 16.82V15.82C4.99964 15.2391 4.76957 14.6819 4.35997 14.27L3.65997 13.57C3.45437 13.3656 3.29121 13.1225 3.17988 12.8548C3.06855 12.587 3.01123 12.2999 3.01123 12.01C3.01123 11.7201 3.06855 11.433 3.17988 11.1652C3.29121 10.8975 3.45437 10.6544 3.65997 10.45L4.35997 9.75C4.76957 9.33809 4.99964 8.7809 4.99997 8.2V7.2" stroke="#2C6C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_15_153">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span class="slider-feature-0">Support Cash On Delivery</span>
                </li>
                <li class="pl-8 relative">
                  <svg
                    width="24"
                    height="24"
                    class="absolute left-0 top-2.5 -translate-y-1/2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_15_153)">
                      <path d="M4.99997 7.2C4.99997 6.61652 5.23176 6.05694 5.64434 5.64436C6.05692 5.23178 6.6165 5 7.19997 5H8.19997C8.78087 4.99967 9.33806 4.7696 9.74997 4.36L10.45 3.66C10.6544 3.4544 10.8975 3.29124 11.1652 3.17991C11.4329 3.06857 11.72 3.01126 12.01 3.01126C12.2999 3.01126 12.587 3.06857 12.8547 3.17991C13.1225 3.29124 13.3655 3.4544 13.57 3.66L14.27 4.36C14.682 4.77 15.24 5 15.82 5H16.82C17.4034 5 17.963 5.23178 18.3756 5.64436C18.7882 6.05694 19.02 6.61652 19.02 7.2V8.2C19.02 8.78 19.25 9.338 19.66 9.75L20.36 10.45C20.5656 10.6544 20.7287 10.8975 20.8401 11.1652C20.9514 11.433 21.0087 11.7201 21.0087 12.01C21.0087 12.2999 20.9514 12.587 20.8401 12.8548C20.7287 13.1225 20.5656 13.3656 20.36 13.57L19.66 14.27C19.2504 14.6819 19.0203 15.2391 19.02 15.82V16.82C19.02 17.4035 18.7882 17.9631 18.3756 18.3756C17.963 18.7882 17.4034 19.02 16.82 19.02H15.82C15.2391 19.0203 14.6819 19.2504 14.27 19.66L13.57 20.36C13.3655 20.5656 13.1225 20.7288 12.8547 20.8401C12.587 20.9514 12.2999 21.0087 12.01 21.0087C11.72 21.0087 11.4329 20.9514 11.1652 20.8401C10.8975 20.7288 10.6544 20.5656 10.45 20.36L9.74997 19.66C9.33806 19.2504 8.78087 19.0203 8.19997 19.02H7.19997C6.6165 19.02 6.05692 18.7882 5.64434 18.3756C5.23176 17.9631 4.99997 17.4035 4.99997 16.82V15.82C4.99964 15.2391 4.76957 14.6819 4.35997 14.27L3.65997 13.57C3.45437 13.3656 3.29121 13.1225 3.17988 12.8548C3.06855 12.587 3.01123 12.2999 3.01123 12.01C3.01123 11.7201 3.06855 11.433 3.17988 11.1652C3.29121 10.8975 3.45437 10.6544 3.65997 10.45L4.35997 9.75C4.76957 9.33809 4.99964 8.7809 4.99997 8.2V7.2Z" fill="#2C6C00" />
                      <path d="M4.99997 7.2C4.99997 6.61652 5.23176 6.05694 5.64434 5.64436C6.05692 5.23178 6.6165 5 7.19997 5H8.19997C8.78087 4.99967 9.33806 4.7696 9.74997 4.36L10.45 3.66C10.6544 3.4544 10.8975 3.29124 11.1652 3.17991C11.4329 3.06857 11.72 3.01126 12.01 3.01126C12.2999 3.01126 12.587 3.06857 12.8547 3.17991C13.1225 3.29124 13.3655 3.4544 13.57 3.66L14.27 4.36C14.682 4.77 15.24 5 15.82 5H16.82C17.4034 5 17.963 5.23178 18.3756 5.64436C18.7882 6.05694 19.02 6.61652 19.02 7.2V8.2C19.02 8.78 19.25 9.338 19.66 9.75L20.36 10.45C20.5656 10.6544 20.7287 10.8975 20.8401 11.1652C20.9514 11.433 21.0087 11.7201 21.0087 12.01C21.0087 12.2999 20.9514 12.587 20.8401 12.8548C20.7287 13.1225 20.5656 13.3656 20.36 13.57L19.66 14.27C19.2504 14.6819 19.0203 15.2391 19.02 15.82V16.82C19.02 17.4035 18.7882 17.9631 18.3756 18.3756C17.963 18.7882 17.4034 19.02 16.82 19.02H15.82C15.2391 19.0203 14.6819 19.2504 14.27 19.66L13.57 20.36C13.3655 20.5656 13.1225 20.7288 12.8547 20.8401C12.587 20.9514 12.2999 21.0087 12.01 21.0087C11.72 21.0087 11.4329 20.9514 11.1652 20.8401C10.8975 20.7288 10.6544 20.5656 10.45 20.36L9.74997 19.66C9.33806 19.2504 8.78087 19.0203 8.19997 19.02H7.19997C6.6165 19.02 6.05692 18.7882 5.64434 18.3756C5.23176 17.9631 4.99997 17.4035 4.99997 16.82V15.82C4.99964 15.2391 4.76957 14.6819 4.35997 14.27L3.65997 13.57C3.45437 13.3656 3.29121 13.1225 3.17988 12.8548C3.06855 12.587 3.01123 12.2999 3.01123 12.01C3.01123 11.7201 3.06855 11.433 3.17988 11.1652C3.29121 10.8975 3.45437 10.6544 3.65997 10.45L4.35997 9.75C4.76957 9.33809 4.99964 8.7809 4.99997 8.2V7.2" stroke="#2C6C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_15_153">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span class="slider-feature-0">Dashboard Monitoring</span>
                </li>
              </ul>
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="700"
                class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2 pb-2"
              >
                <BaseButton
                  class="max-w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-700 border border-primary-700 text-white"
                >
                  Daftar Gratis
                </BaseButton>
                <BaseButton
                  class="max-w-full px-6 py-4 bg-inherit border text-primary-700 border-primary-700 flex items-center justify-center"
                >
                  <span>Selengkapnya</span>
                  <ChevronRightIcon :size="20" class="mt-1" />
                </BaseButton>
              </div>
            </div>
            <div class="hidden sm:block col-span-12 lg:col-span-4">
              <div class="w-full">
                <img
                  data-aos="fade-up"
                  data-aos-once="true"
                  src="https://kiriminaja.com/assets/home-v3/integration-image.svg"
                  class="-mt-4"
                  alt=""
                >
              </div>
            </div>
          </BaseSection>
        </slide>
      </carousel>
    </section>

    <section class="bg-neutral-50 relative max-w-full sm:mx-6 my-10 shadow sm:rounded-2xl">
      <div class="w-full sm:px-0 py-16 items-center justify-center space-y-4 text-center container xl:w-10/12 2xl:w-9/12 mx-auto px-3 relative">
        <div class="xl:text-center mb-5">
          <h3 data-aos="flip-down" class="font-display text-2xl xl:text-4xl font-bold mb-3">
            <span>Modern Rest API's, Simply Delivered</span>
          </h3>
          <p data-aos="flip-down" class="mb-5 xl:mb-7 text-neutral-700 xl:w-7/12 xl:mx-auto">
            Kami menggunakan teknologi REST API terbaru yang lebih mudah dimengerti oleh developer ber skala kecil
          </p>
        </div>
        <div class="grid xl:grid-cols-4 gap-5">
          <!--[-->
          <div class="py-6 px-7 group rounded-3xl bg-primary-50 relative overflow-hidden">
            <div class="mb-3">
              <div class="inline-block p-3 bg-gradient-to-b from-primary-200 to-primary-300 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="armchair"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
                  <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5" />
                  <path d="M6 19v2" />
                  <path d="M18 19v2" />
                </svg>
              </div>
            </div>
            <h4 class="font-bold text-lg font-display mb-3">
              Ongkir Up to Date
            </h4>
            <p class="text-sm">
              Ongkos kirim langsung dari ekspedisi, tanpa perubahan
            </p>
          </div>
          <div class="py-6 px-7 group rounded-3xl bg-primary-50 relative overflow-hidden">
            <div class="mb-3">
              <div class="inline-block p-3 bg-gradient-to-b from-primary-200 to-primary-300 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="truck-loading"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M2 3h1a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2h15" />
                  <rect x="9" y="6" width="10" height="8" rx="3" />
                  <circle cx="9" cy="19" r="2" />
                  <circle cx="18" cy="19" r="2" />
                </svg>
              </div>
            </div>
            <h4 class="font-bold text-lg font-display mb-3">
              Pickup &amp; Dropoff
            </h4>
            <p class="text-sm">
              Tentukan dan pilih opsi pengiriman dropoff dan pickup
            </p>
          </div>
          <div class="py-6 px-7 group rounded-3xl bg-primary-50 relative overflow-hidden">
            <div class="mb-3">
              <div class="inline-block p-3 bg-gradient-to-b from-primary-200 to-primary-300 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="focus-centered"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="1" />
                  <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                </svg>
              </div>
            </div>
            <h4 class="font-bold text-lg font-display mb-3">
              AWB Terpusat
            </h4>
            <p class="text-sm">
              Gak perlu pusing menunggu dapet AWB, kami yang antrikan
            </p>
          </div>
          <div class="py-6 px-7 group rounded-3xl bg-primary-50 relative overflow-hidden">
            <div class="mb-3">
              <div class="inline-block p-3 bg-gradient-to-b from-primary-200 to-primary-300 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="git-branch"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="7" cy="18" r="2" />
                  <circle cx="7" cy="6" r="2" />
                  <circle cx="17" cy="6" r="2" />
                  <line x1="7" y1="8" x2="7" y2="16" />
                  <path d="M9 18h6a2 2 0 0 0 2 -2v-5" />
                  <polyline points="14 14 17 11 20 14" />
                </svg>
              </div>
            </div>
            <h4 class="font-bold text-lg font-display mb-3">
              Tracking Satu Pintu
            </h4>
            <p class="text-sm">
              Hasil ekspedisi kami buat dengan satu konsep penyajian
            </p>
          </div>
          <div class="py-6 px-7 group rounded-3xl bg-primary-50 relative overflow-hidden">
            <div class="mb-3">
              <div class="inline-block p-3 bg-gradient-to-b from-primary-200 to-primary-300 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="world-upload"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M21 12a9 9 0 1 0 -9 9" />
                  <path d="M3.6 9h16.8" />
                  <path d="M3.6 15h8.4" />
                  <path d="M11.578 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3c1.719 2.755 2.5 5.876 2.5 9" />
                  <path d="M18 21v-7m3 3l-3 -3l-3 3" />
                </svg>
              </div>
            </div>
            <h4 class="font-bold text-lg font-display mb-3">
              Jangkauan Terluas
            </h4>
            <p class="text-sm">
              Selalu terbuka untuk seluruh area origin dan destinasi
            </p>
          </div>
          <div class="py-6 px-7 group rounded-3xl bg-primary-50 relative overflow-hidden">
            <div class="mb-3">
              <div class="inline-block p-3 bg-gradient-to-b from-primary-200 to-primary-300 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="headset"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="13" rx="2" width="4" height="6" />
                  <rect x="16" y="13" rx="2" width="4" height="6" />
                  <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
                  <path d="M18 19a6 3 0 0 1 -6 3" />
                </svg>
              </div>
            </div>
            <h4 class="font-bold text-lg font-display mb-3">
              Selalu Ada
            </h4>
            <p class="text-sm">
              Kami selalu siap sedia ada setiap hari tanpa libur
            </p>
          </div>
          <div class="py-6 px-7 group rounded-3xl bg-primary-50 relative overflow-hidden">
            <div class="mb-3">
              <div class="inline-block p-3 bg-gradient-to-b from-primary-200 to-primary-300 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="cloud-storm"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                  <polyline points="13 14 11 18 14 18 12 22" />
                </svg>
              </div>
            </div>
            <h4 class="font-bold text-lg font-display mb-3">
              Garansi Uptime
            </h4>
            <p class="text-sm">
              Ongkos kirim langsung dari ekspedisi, tanpa perubahan
            </p>
          </div>
          <div class="py-6 px-7 group rounded-3xl bg-primary-50 relative overflow-hidden">
            <div class="mb-3">
              <div class="inline-block p-3 bg-gradient-to-b from-primary-200 to-primary-300 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="code"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="7 8 3 12 7 16" />
                  <polyline points="17 8 21 12 17 16" />
                  <line x1="14" y1="4" x2="10" y2="20" />
                </svg>
              </div>
            </div>
            <h4 class="font-bold text-lg font-display mb-3">
              Tim teknis supportif
            </h4>
            <p class="text-sm">
              Ongkos kirim langsung dari ekspedisi, tanpa perubahan
            </p>
          </div>
          <!--]-->
        </div>
      </div>
    </section>

    <section class="py-3 xl:pb-14 xl:pt-4 relative">
      <div class="container xl:w-10/12 2xl:w-9/12 mx-auto px-3 relative">
        <div class="xl:text-center mb-5">
          <h3 class="font-display text-2xl xl:text-4xl font-bold mt-5 xl:mt-8 mb-3">
            <span>Telah dipercayai oleh</span>
          </h3><p class="mb-5 xl:mb-7 text-neutral-700 xl:w-7/12 xl:mx-auto">
            KiriminAja berkomitmen untuk selalu mendukung perkembangan dan kemajuan UMKM di seluruh Indonesia
          </p>
        </div>
        <div class="grid grid-cols-2 xl:grid-cols-6 gap-5 items-center">
          <div v-for="(client, index) in clientList" :key="index" class="aspect-video relative">
            <img :src="client.imgUrl" class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" alt="">
          </div>
        </div>
      </div>
    </section>

    <section class="py-3 xl:py-14 relative mb-10">
      <div class="container xl:w-10/12 2xl:w-9/12 mx-auto px-3 relative">
        <div class="xl:text-center mb-5">
          <h3 class="font-display text-2xl xl:text-4xl font-bold mt-5 xl:mt-8 mb-3">
            <span>Kurir Terhubung</span>
          </h3>
          <p class="mb-5 xl:mb-7 text-neutral-700 xl:w-7/12 xl:mx-auto">
            KiriminAja selalu terhubung dengan expedisi yang terbaik di Indonesia, dan akan terus bertambah lagi
          </p>
        </div>
        <div class="grid grid-cols-2 xl:grid-cols-6 gap-5 items-center">
          <div v-for="(kurir, index) in ekspedisiList" :key="index" class="aspect-video relative">
            <img :src="kurir.imgUrl" class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-11" alt="">
          </div>
        </div>
      </div>
    </section>

    <LandingAppPromotion />
  </div>
</template>

<script>
import aosMixin from '@/mixins/aos'

export default {
  name: 'IntegrationPage',
  mixins: [aosMixin],
  head () {
    return {
      title: 'Integrasi API'
    }
  },
  computed: {
    clientList () {
      return this.$store.state.client.list
    },
    ekspedisiList () {
      return this.$store.state.ekspedisi.list
    }
  },
  mounted () {
    this.$store.dispatch('client/fetchClient')
    this.$store.dispatch('ekspedisi/fetchEkspedisi')
  }
}
</script>
