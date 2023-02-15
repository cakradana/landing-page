<template>
  <div class="w-full">
    <!-- Banner section -->
    <section id="banner" class="w-full">
      <carousel :per-page="1" :autoplay="true" :loop="true" :pagination-active-color="`#4f378b`" :pagination-color="`#d0bcff`">
        <slide v-for="(banner, i) in bannerList" :key="i">
          <BaseSection>
            <div class="col-span-12 lg:col-span-8 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
              <h1
                data-aos="fade-right"
                data-aos-once="true"
                class="text-[2.5rem] sm:text-4xl xl:text-5xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
              >
                {{ banner.title }}
              </h1>
              <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
                {{ banner.description }}
              </p>
              <ul class="grid gap-y-5 mb-10 text-sm xl:w-7/12 text-neutral-600">
                <li v-for="(pro, j) in banner.pros" :key="j" class="pl-8 relative">
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
                  <span class="slider-feature-0">{{ pro.name }}</span>
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
                  :src="banner.imgUrl"
                  class="-mt-4"
                  alt=""
                >
              </div>
            </div>
          </BaseSection>
        </slide>
      </carousel>
    </section>

    <!-- Ekspedisi section -->
    <section class="bg-neutral-50 relative max-w-full sm:mx-6 my-10 shadow sm:rounded-2xl">
      <div class="w-full px-6 sm:px-0 py-16 items-center justify-center space-y-4 text-center">
        <h3 data-aos="flip-down" class="text-2xl text-neutral-800 font-semibold">
          Ekspedisi Terpercaya di Seluruh Indonesia
        </h3>
        <p data-aos="flip-down" class="paragraph">
          Kami bekerjasama dengan ekspedisi besar yang tak terhitung jumlahnya di seluruh Indonesia
        </p>
        <carousel
          data-aos="fade-up"
          class="flex flex-wrap items-center justify-center"
          :per-page="6"
          :autoplay="true"
          :loop="true"
          :pagination-enabled="false"
        >
          <slide v-for="(ekspedisi, index) in ekspedisiList" :key="index">
            <img :src="ekspedisi.imgUrl" class="sm:w-1/2 lg:w-72 mx-auto">
          </slide>
        </carousel>
      </div>
    </section>

    <!-- Empowering section -->
    <section class="py-3 xl:py-14 relative mb-10">
      <div class="container xl:w-10/12 2xl:w-9/12 mx-auto px-3">
        <div data-aos="fade-down" class="grid xl:grid-cols-6 mb-10">
          <div class="xl:col-span-3">
            <span class="font-medium text-primary-500">Empowering UMKM</span>
            <h2 class="font-display text-2xl xl:text-4xl font-bold mt-3 mb-5">
              Jangkauan untuk semua kebutuhan
              pengiriman paketmu
            </h2>
            <p class="text-lg text-neutral-700 xl:w-9/12">
              Persembahan dari kami
              untuk mempermudah kebutuhan bisnismu
            </p>
          </div>
        </div>
        <div class="grid xl:grid-cols-3 gap-5">
          <div data-aos="zoom-in" data-aos-delay="0" class="py-6 px-7 hover:ring-2 hover:ring-primary-500 group rounded-3xl bg-primary-100 relative overflow-hidden">
            <div class="absolute bg-primary-300 transition-all w-32 blur-3xl rounded-full aspect-square top-0 -translate-y-full left-1/2 group-hover:-translate-y-1/2 -translate-x-1/2" />
            <div class="relative">
              <div class="mb-3">
                <div class="inline-block p-3 bg-primary-200 text-primary-700 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="armchair text-primary-700"
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
              <h3 class="font-bold text-xl font-display mb-3">
                Layanan Terintegrasi
              </h3>
              <p>Dashboard, API, Dan Mobile kami sediakan untuk mengontrol &amp; monitoring lebih mudah.</p>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="150" class="py-6 px-7 hover:ring-2 hover:ring-primary-500 group rounded-3xl bg-primary-100 relative overflow-hidden">
            <div class="absolute bg-primary-300 transition-all w-32 blur-3xl rounded-full aspect-square top-0 -translate-y-full left-1/2 group-hover:-translate-y-1/2 -translate-x-1/2" />
            <div class="relative">
              <div class="mb-3">
                <div class="inline-block p-3 bg-primary-200 text-primary-700 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="shield-lock text-primary-700"
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
                    <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                    <circle cx="12" cy="11" r="1" />
                    <line x1="12" y1="12" x2="12" y2="14.5" />
                  </svg>
                </div>
              </div>
              <h3 class="font-bold text-xl font-display mb-3">
                Ekspedisi Terbaik
              </h3>
              <p>Kamu bisa pilih layanan sameday, next day, reguler, ekonomi, kargo dan lainya sesukamu.</p>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="300" class="py-6 px-7 hover:ring-2 hover:ring-primary-500 group rounded-3xl bg-primary-100 relative overflow-hidden">
            <div class="absolute bg-primary-300 transition-all w-32 blur-3xl rounded-full aspect-square top-0 -translate-y-full left-1/2 group-hover:-translate-y-1/2 -translate-x-1/2" />
            <div class="relative">
              <div class="mb-3">
                <div class="inline-block p-3 bg-primary-200 text-primary-700 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="brand-github-copilot text-primary-700"
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
                    <path d="M4 18v-5.5c0 -.667 .167 -1.333 .5 -2" />
                    <path d="M12 7.5c0 -1 -.01 -4.07 -4 -3.5c-3.5 .5 -4 2.5 -4 3.5c0 1.5 .002 4 3 4c4 0 5 -2.5 5 -4z" />
                    <path d="M4 12c-1.333 .667 -2 1.333 -2 2c0 1 0 3 1.5 4c3.001 2 6.5 3 8.5 3s5.499 -1 8.5 -3c1.5 -1 1.5 -3 1.5 -4c0 -.667 -.667 -1.333 -2 -2" />
                    <path d="M20 18v-5.5c0 -.667 -.167 -1.333 -.5 -2" />
                    <path d="M12 7.5l.003 -.297l.01 -.269l.027 -.298l.013 -.105l.033 -.215c.014 -.073 .029 -.146 .046 -.22l.06 -.223c.336 -1.118 1.262 -2.237 3.808 -1.873c2.838 .405 3.703 1.797 3.93 2.842l.036 .204c.005 .033 .01 .066 .013 .098l.016 .185l.005 .171l-.003 .49l-.015 .394l-.02 .271c-.122 1.366 -.655 2.845 -2.962 2.845c-3.256 0 -4.524 -1.656 -4.883 -3.081l-.053 -.242a3.865 3.865 0 0 1 -.036 -.235l-.021 -.227a3.518 3.518 0 0 1 -.007 -.215z" />
                    <path d="M10 15v2" />
                    <path d="M14 15v2" />
                  </svg>
                </div>
              </div>
              <h3 class="font-bold text-xl font-display mb-3">
                Sistem Otomatis
              </h3>
              <p>Cetak resi / AWB, tracking, saldo COD dan banyak fitur lainnya.</p>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="450" class="py-6 px-7 hover:ring-2 hover:ring-primary-500 group rounded-3xl bg-primary-100 relative overflow-hidden">
            <div class="absolute bg-primary-300 transition-all w-32 blur-3xl rounded-full aspect-square top-0 -translate-y-full left-1/2 group-hover:-translate-y-1/2 -translate-x-1/2" />
            <div class="relative">
              <div class="mb-3">
                <div class="inline-block p-3 bg-primary-200 text-primary-700 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="headset text-primary-700"
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
              <h3 class="font-bold text-xl font-display mb-3">
                Selalu Ada Untukmu
              </h3>
              <p>Cetak resi / AWB, tracking, saldo COD dan banyak fitur lainnya.</p>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="600" class="py-6 px-7 hover:ring-2 hover:ring-primary-500 group rounded-3xl bg-primary-100 relative overflow-hidden">
            <div class="absolute bg-primary-300 transition-all w-32 blur-3xl rounded-full aspect-square top-0 -translate-y-full left-1/2 group-hover:-translate-y-1/2 -translate-x-1/2" />
            <div class="relative">
              <div class="mb-3">
                <div class="inline-block p-3 bg-primary-200 text-primary-700 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="clipboard-check text-primary-700"
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
                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                    <rect x="9" y="3" width="6" height="4" rx="2" />
                    <path d="M9 14l2 2l4 -4" />
                  </svg>
                </div>
              </div>
              <h3 class="font-bold text-xl font-display mb-3">
                Laporan Aktual
              </h3>
              <p>Kemudahan pantau paket, pencairan COD, saldo, semuanya.</p>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="750" class="py-6 px-7 hover:ring-2 hover:ring-primary-500 group rounded-3xl bg-primary-100 relative overflow-hidden">
            <div class="absolute bg-primary-300 transition-all w-32 blur-3xl rounded-full aspect-square top-0 -translate-y-full left-1/2 group-hover:-translate-y-1/2 -translate-x-1/2" />
            <div class="relative">
              <div class="mb-3">
                <div class="inline-block p-3 bg-primary-200 text-primary-700 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="heart text-primary-700"
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
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg>
                </div>
              </div>
              <h3 class="font-bold text-xl font-display mb-3">
                Friendly
              </h3>
              <p>Ciptakan solusi terbaik dengan masukan, kritik, dan diskusi.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Makin simpel -->
    <section class="py-3 xl:py-14 relative mb-10">
      <div class="container xl:w-10/12 2xl:w-9/12 mx-auto px-3">
        <div data-aos="fade-right" class="grid xl:grid-cols-6 mb-5">
          <div class="xl:col-span-3">
            <span class="font-medium text-primary-500">Makin Simpel</span>
            <h2 class="font-display text-2xl xl:text-4xl font-bold mt-3 mb-5">
              Solusi Pengiriman untuk
              Mempercepat Bisnis Anda
            </h2>
            <p class="text-lg text-neutral-700 xl:w-9/12">
              Ekspedisi terbaik yang
              kami pilihkan hanya untuk kamu lho
            </p>
          </div>
        </div>
        <div class="grid xl:grid-cols-2 gap-12 xl:items-center">
          <div data-aos="fade-right">
            <div class="grid xl:grid-cols-2 gap-4 xl:gap-x-7 xl:gap-y-10">
              <div class="group relative overflow-hidden">
                <div class="mb-3 gap-3 flex items-center">
                  <div class="inline-block bg-primary-200 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-check"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-primary-700">
                      Kurir fleksibel
                    </h4>
                  </div>
                </div>
                <div>
                  <p class="text-neutral-600">
                    Kamu bisa pilih preferensi terbaikmu. Mau same day, reguler, kargo, atau instan? Bisaa
                  </p>
                </div>
              </div>
              <div class="group relative overflow-hidden">
                <div class="mb-3 gap-3 flex items-center">
                  <div class="inline-block bg-primary-200 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-check"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-primary-700">
                      Pencairan COD Tercepat
                    </h4>
                  </div>
                </div>
                <div>
                  <p class="text-neutral-600">
                    Kapan saldo COD cair? Yap, setelah paketmu terkirim, 1x24 jam saldomu langsung cair lho*
                  </p>
                </div>
              </div>
              <div class="group relative overflow-hidden">
                <div class="mb-3 gap-3 flex items-center">
                  <div class="inline-block bg-primary-200 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-check"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-primary-700">
                      Dropoff atau Pickup
                    </h4>
                  </div>
                </div>
                <div>
                  <p class="text-neutral-600">
                    Mager buat nganter ke kurir? Kurir mitra kami bisa lho jemput paket ke rumah kalo kamu mager
                  </p>
                </div>
              </div>
              <div class="group relative overflow-hidden">
                <div class="mb-3 gap-3 flex items-center">
                  <div class="inline-block bg-primary-200 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-check"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-primary-700">
                      Tanpa minimal paket
                    </h4>
                  </div>
                </div>
                <div>
                  <p class="text-neutral-600">
                    Paket kamu masih sedikit? Takut ngga dijemput? Ngga dong, kurir akan tetep jemput tanpa minimum order
                  </p>
                </div>
              </div>
              <div class="group relative overflow-hidden">
                <div class="mb-3 gap-3 flex items-center">
                  <div class="inline-block bg-primary-200 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-check"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-primary-700">
                      Meminimalisir rasio retur
                    </h4>
                  </div>
                </div>
                <div>
                  <p class="text-neutral-600">
                    Kami punya fitur paket bermasalah dan undelivery. Analisa dini untuk mengurangi paket returmu
                  </p>
                </div>
              </div>
              <div class="group relative overflow-hidden">
                <div class="mb-3 gap-3 flex items-center">
                  <div class="inline-block bg-primary-200 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-check"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-primary-700">
                      Aplikasi user friendly
                    </h4>
                  </div>
                </div>
                <div>
                  <p class="text-neutral-600">
                    Mau tambah paket dari mana nih? Upload? Parse? Tracking? Print? Bisa dong cukup satu pintu
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" class="xl:pl-8 xl:pr-0 xl:py-12">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/home-ill-2.webp" class="w-full" alt="Easy Use">
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
  name: 'HomePage',
  mixins: [aosMixin],
  head () {
    return {
      title: 'Home'
    }
  },
  computed: {
    bannerList () {
      return this.$store.state.banner.list
    },
    ekspedisiList () {
      return this.$store.state.ekspedisi.list
    }
  },
  mounted () {
    this.$store.dispatch('banner/fetchBanner')
    this.$store.dispatch('ekspedisi/fetchEkspedisi')
  }
}
</script>

<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
