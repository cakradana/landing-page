<template>
  <section>
    <div data-aos="zoom-in" class="container xl:w-10/12 2xl:w-9/12 mx-auto px-3">
      <div class="bg-gradient-to-t overflow-hidden from-primary-700 to-primary-600 p-6 pb-0 rounded-2xl text-white">
        <div class="grid xl:grid-cols-2 xl:gap-16 xl:place-items-center">
          <div class="xl:px-20">
            <div class="relative">
              <div class="bg-primary-400 xl:animate-pulse absolute top-0 left-0 right-0 bottom-0 rounded-full blur-3xl" />
              <img width="100%" height="100%" src="https://kiriminaja-static-file.imgix.net/home-v3/call-to-action-compressed.webp" class="relative" alt="Call to action">
            </div>
          </div>
          <div class="py-7 xl:py-0">
            <h3 class="text-2xl font-semibold font-display xl:text-4xl mb-5 w-11/12">
              <span>Udah tenang, kirim paketmu dengan KiriminAja sekarang! </span>
              <span class="italic text-primary-200">#Bisnisjaditenang</span>
            </h3>
            <p class="text-primary-300 w-10/12 mb-10">
              Semua bisa mulai kirim paket tanpa ribet. Jadikan pengalaman pengiriman paket lebih mudah dengan KiriminAja.
            </p>
            <div class="flex gap-3">
              <div>
                <a aria-label="Badge App Store" target="_blank" href="https://apps.apple.com/us/app/kiriminaja/id1544207424">
                  <img width="144" height="49" src="https://kiriminaja-static-file.imgix.net/home-v3/apple-badge.png" alt="App Store">
                </a>
              </div>
              <div>
                <a aria-label="Badge Play Store" target="_blank" href="https://play.google.com/store/apps/details?id=id.tries.kiriminaja&amp;hl=in">
                  <img width="144" height="49" src="https://kiriminaja-static-file.imgix.net/home-v3/google-badge.png" alt="Play Store">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppPromotion'
}
</script>
