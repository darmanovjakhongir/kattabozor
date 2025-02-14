import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-300 my-8">
      <h1 className="text-2xl font-bold mb-4">Maxfiylik siyosati</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">1. Umumiy qoidalar</h2>
        <p className="text-gray-700 mt-2">
          1.1. Ushbu maxfiylik siyosati (keyingi o'rinlarda “Siyosat” deb
          yuritiladi) “KATTABOZOR” xizmati (keyingi o'rinlarda “Xizmat” deb
          yuritiladi) tomonidan ishlab chiqilgan va qabul qilish, to'plash,
          to'plash, saqlash, qayta ishlash, foydalanish, himoya qilishni
          ta'minlash tartibini belgilaydi. va Xizmat foydalanuvchilarining
          shaxsiy ma'lumotlarini (keyingi o'rinlarda "Ma'lumotlar" deb
          yuritiladi) oshkor qilish.
        </p>
        <p className="text-gray-700 mt-2">
          1.2 Ma'lumotlar ma'lum bir foydalanuvchiga bevosita yoki bilvosita
          tegishli bo'lgan har qanday ma'lumotni anglatadi. Bu quyidagilar
          bo'lishi mumkin: ism, familiya, IP-manzil, foydalanuvchi
          foydalanadigan qurilmalar haqidagi ma'lumotlar (brauzer turi, mobil
          qurilmaning operatsion tizimi), xabarlar (foydalanuvchilarning
          bir-biri bilan yozishmalarida, shuningdek, foydalanuvchi bilan
          yozishmalarda mavjud bo'lgan ma'lumotlar). xizmat ma'muriyati),
          foydalanuvchining ixtiyoriga ko'ra u tomonidan ro'yxatdan o'tish
          shakli orqali va/yoki Xizmatda o'z profilini to'ldirishda, xabar
          va/yoki sharh yozishda taqdim etiladigan boshqa aloqa ma'lumotlari.
        </p>
        <p className="text-gray-700 mt-2">
          1.3 Ma'lumotlarni qayta ishlash deganda ma'lumotlar bilan har qanday
          harakat, shu jumladan, lekin ular bilan cheklanmagan holda: kirish,
          to'plash, tizimlashtirish, saqlash, to'plash, qayd etish, bloklash,
          o'chirish, aniqlashtirish, yangilash va/yoki o'zgartirish,
          shaxsiylashtirish va Xizmat tomonidan ma'lumotlardan foydalanishning
          boshqa usullari. .
        </p>
        <p className="text-gray-700 mt-2">
          1.4. Xizmatdan foydalangan holda, Foydalanuvchi ushbu Siyosat
          qoidalariga roziligini bildiradi va o'z ma'lumotlarini qayta ishlashga
          ruxsat beradi.
        </p>
        <p className="text-gray-700 mt-2">
          1.5. Foydalanuvchi ushbu Siyosat shartlariga rozi bo'lmasa, Xizmatdan
          foydalanish huquqiga ega emas.
        </p>
        <p className="text-gray-700 mt-2">
          1.6. Foydalanuvchi o'z ma'lumotlari va avtorizatsiya ma'lumotlarining
          (parol, login) xavfsizligi va himoyasiga beparvo munosabatda bo'lgan
          taqdirda, uchinchi shaxslar foydalanuvchining hisob qaydnomasi va
          ma'lumotlariga ruxsatsiz kirish huquqiga ega bo'lishi mumkinligini tan
          oladi. Xizmat bunday kirish natijasida etkazilgan har qanday zarar
          uchun javobgar bo'lmaydi.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">
          2. Qanday shaxsiy ma'lumotlar to'planishi mumkin
        </h2>
        <p className="text-gray-700 mt-2">
          2.1 Xizmat quyidagi ma'lumotlarni to'plashi mumkin:
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>ismi, familiyasi, jinsi;</li>
          <li>
            kompaniya nomi, kompaniyaning aloqa raqamlari, kompaniya joylashgan
            manzili;
          </li>
          <li>
            foydalanuvchining iltimosiga binoan boshqa aloqa ma'lumotlari;
          </li>
          <li>
            foydalanuvchi tomonidan foydalaniladigan qurilmalar haqidagi
            ma'lumotlar, IP-manzil, foydalanuvchi Xizmatdan foydalangan sana va
            vaqt, dasturiy ta'minot haqidagi ma'lumotlar, shuningdek
            foydalanilgan internet-brauzer, mobil qurilmaning operatsion tizimi
            haqidagi ma'lumotlar;
          </li>
        </ul>
        <p className="text-gray-700 mt-2">
          2.2 Xizmat shuningdek, quyidagi texnologiyalar yordamida ma'lumotlarni
          qayta ishlashi mumkin:
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>
            Cookie-fayllar (cookie-fayllar - bu veb-sahifaga tashrif buyurish
            va/yoki veb-sahifadagi reklama modulini ko'rish paytida
            foydalanuvchi kompyuteriga yuboriladigan va foydalanuvchining
            kompyuterida va/yoki mobil qurilmasida saqlanadigan kichik
            ma'lumotlar qismi);
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">
          3. Ma'lumotlarni qayta ishlashdan foydalanish va maqsadlari
        </h2>
        <p className="text-gray-700 mt-2">
          3.1 Xizmat ma'lumotlardan quyidagi maqsadlarda foydalanadi va qayta
          ishlaydi:
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>
            O'zbekistonning amaldagi qonunchiligiga muvofiq Xizmatga yuklangan
            funksiyalar, vakolatlar va vazifalarni amalga oshirish;
          </li>
          <li>
            foydalanuvchilar bilan muloqot qilish, shu jumladan xizmatlar
            ko'rsatish, aksiyalar haqida xabar berish, xizmatlar sifatini
            oshirish, reytinglarni shakllantirish, foydalanuvchi faoliyatini
            tahlil qilish, kalit so'zlarni qidirish, trafikni boshqarish
            maqsadida mijozni Xizmat foydalanuvchisi sifatida aniqlash. Portal,
            foydalanuvchilarning afzalliklari, manfaatlarini tahlil qilish va
            bashorat qilish;
          </li>
          <li>
            ilmiy tadqiqot va tahliliy faoliyatni amalga oshirish, shuningdek,
            foydalanuvchilarning Foydalanuvchi shartnomasi shartlariga va
            Xizmatda ma'lumotlarni joylashtirish qoidalariga rioya qilishlarini
            ta'minlash.
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">
          4. Ma'lumotlarga kirish huquqini berish shartlari
        </h2>
        <p className="text-gray-700 mt-2">
          4.1 Xizmat O'zbekistonning amaldagi qonunchiligi talablariga muvofiq
          quyidagi maqsadlarda davlat organlari bilan ma'lumotlar almashish
          huquqini o'zida saqlab qoladi: Xizmatda firibgarlikning oldini olish,
          nizolarni hal qilish va sabab bo'lishi mumkin bo'lgan holatlarga
          oydinlik kiritish. amaldagi qonunchilikni buzish, shuningdek
          foydalanuvchilarning noqonuniy xatti-harakatlari aniqlanganda va/yoki
          uchinchi shaxslardan da'volar, shikoyatlar va so'rovlar kelib
          tushganda.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">
          5. Ma'lumotlarni himoya qilish
        </h2>
        <p className="text-gray-700 mt-2">
          5.1 Ma'lumotlarni qayta ishlashda Xizmat Ma'lumotlarni bunday
          Ma'lumotlarga ruxsatsiz va/yoki noqonuniy kirishdan, jumladan
          o'zgartirish, o'chirish, taqdim etish, tarqatish va boshqa noqonuniy
          harakatlardan himoya qilish uchun barcha zarur texnik, tashkiliy va
          huquqiy choralarni qo'llaydi.
        </p>
        <p className="text-gray-700 mt-2">
          5.2 Сервис на постоянной основе осуществляет контроль за принимаемыми
          мерами по обеспечению безопасности.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">6. Qo'shimcha shartlar</h2>
        <p className="text-gray-700 mt-2">
          6.1 Xizmat istalgan vaqtda ushbu Siyosat shartlarini o'zgartirish
          huquqini o'zida saqlab qoladi. Bunda yangilangan versiya quyidagi
          sahifada joylashtiriladi:{" "}
          <Link
            to="/privacy"
            className="text-blue-600 hover:text-blue-800 active:text-blue-900"
          >
            https://www.kattabozor.uz/privacy-policy
          </Link>
          . Agar foydalanuvchi o'zgarishlarga rozi bo'lmasa, u darhol Xizmat
          bilan o'zaro aloqani to'xtatish majburiyatini oladi.
        </p>
        <p className="text-gray-700 mt-2">
          6.2 Xizmat ushbu Siyosat shartlarini noto'g'ri tushunish yoki
          tushunmaslik natijasida Foydalanuvchi yoki uchinchi shaxslar tomonidan
          etkazilgan har qanday zarar yoki zarar uchun javobgar bo'lmaydi.
        </p>
        <p className="text-gray-700 mt-2">
          6.3 Agar ushbu Siyosatning har qanday qoidasi, jumladan, har qanday
          hukm, band yoki uning bir qismi O'zbekistonning amaldagi
          qonunchiligiga zid yoki haqiqiy emasligi aniqlansa, bu qolgan
          qoidalarga ta'sir qilmaydi, ular to'liq kuchda qoladi va har qanday
          haqiqiy bo'lmagan qoida yoki Tomonlar tomonidan keyingi harakatlarsiz
          bajarilishi mumkin bo'lmagan qoida, uning haqiqiyligi va bajarilishini
          ta'minlash uchun zarur bo'lgan darajada o'zgartirilgan yoki tuzatilgan
          deb hisoblanadi.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
