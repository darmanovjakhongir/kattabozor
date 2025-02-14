import { Link } from "react-router-dom";

const Guide = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-300 my-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Qo'llanma</h2>
      <ul className="mb-6 space-y-2">
        <li>
          <Link
            to="/help/help"
            className="text-blue-600 hover:text-blue-800 active:text-blue-900"
          >
            KATTABOZOR u nima?
          </Link>
        </li>
        <li>
          <Link
            to="/help/help"
            className="text-blue-600 hover:text-blue-800 active:text-blue-900"
          >
            Do'kon taklifi
          </Link>
        </li>
        <li>
          <Link
            to="/help/help"
            className="text-blue-600 hover:text-blue-800 active:text-blue-900"
          >
            Mahsulot kartasi
          </Link>
        </li>
        <li>
          <Link
            to="/help/help"
            className="text-blue-600 hover:text-blue-800 active:text-blue-900"
          >
            Do'kon egalarga
          </Link>
        </li>
        <li>
          <Link
            to="/help/help"
            className="text-blue-600 hover:text-blue-800 active:text-blue-900"
          >
            Bot
          </Link>
        </li>
        <li>
          <Link
            to="/help/help"
            className="text-blue-600 hover:text-blue-800 active:text-blue-900"
          >
            Aloqa raqamlari
          </Link>
        </li>
      </ul>
      <div className="space-y-6 text-gray-700">
        <section>
          <h3 className="text-xl font-semibold text-gray-900">
            KATTABOZOR u nima?
          </h3>
          <p>
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 active:text-blue-900"
            >
              KATTABOZOR
            </Link>{" "}
            - bu O'zbekiston internet-do'konlaridan mahsulotlar qidirish
            xizmati. 100 mingdan ortiq takliflar: elektronika, maishiy texnika,
            kompyuter va kiyim-kechaklar. Bu yerda qaysi do`kondan smartfon
            xarid qilish foydali ekanligini bilib olishingiz mumkin va qayerdan
            televizor yoki noutbuk. Sotuvchiga qarab, to'lovni naqd, karta yoki
            kredit orqali bajarish mumkin. Yetkazib berish va olib ketish
            imkoniyati mavjud. Narxlar har kuni yangilanadi. Biz ushbu xizmatni
            sizning xaridingiz sodda va qulay bo'lishi uchun yaratdik.
          </p>
        </section>
        <section>
          <h3 className="text-xl font-semibold text-gray-900">
            Do'kon taklifi
          </h3>
          <p>
            Do'kon taklifi, bu fotosurat, narx va boshqa shartlar berilgan
            mahsulot malumotlari (masalan, tovarni borligi, kredit mavjudligi).
            Siz takliflarni sahifalarda yoki qidiruv orqali ko`rishingiz mumkin.
            Har bir taklifda, "Do'konga" degan havola mavjud, u orqali siz
            tanlangan mahsulot haqida ko'proq ma'lumot olishingiz va do'kon
            veb-saytida sotib olishingiz mumkin. Eng ommabop toifalarda do'kon
            takliflari tovarlar kartalariga birlashtirilgan.
          </p>
        </section>
        <section>
          <h3 className="text-xl font-semibold text-gray-900">
            Mahsulot kartasi
          </h3>
          <p>
            Mahsulot kartasi - bu mahsulot haqida batafsil ma'lumot va barcha
            xarajatlar narxi mavjud bo'lgan sahifa. Sahifada bir nechta
            yorliqlar mavjud. "Tavsif" yorlig'i siz do'konlardan tavsif,
            fotosuratlar, bir nechta takliflarni topasiz. "Xususiyatlari"
            yorlig'i, batafsil mahsulot tavsifini taqdim etiladi. "Narxlar"
            yorlig'ida tovar uchun barcha do'konlardagi narxlar ko'rsatiladi.
            Masalan:{" "}
            <Link
              to="*"
              className="text-blue-600 hover:text-blue-800 active:text-blue-900"
            >
              smartfon kartasi
            </Link>
            .
          </p>
        </section>
        <section>
          <h3 className="text-xl font-semibold text-gray-900">
            Do'kon egalarga
          </h3>
          <p>
            Siz do'kon egasimisiz? Biz sizning mahsulotingizni KATTABOZORga
            joylashtira olamiz. Bu <strong>bepul</strong>. Batafsil ma'lumot
            olish uchun bizga Telegram dan yozing{" "}
            <a
              href="https://t.me/kattabozoruz_manager"
              className="text-blue-600 hover:text-blue-800 active:text-blue-900"
            >
              @kattabozoruz_manager.
            </a>
            .
          </p>
        </section>
        <section>
          <h3 className="text-xl font-semibold text-gray-900">Bot</h3>
          <p>
            Biz ma'lumotlarni avtomatik ravishda web bot yordamida yig'ib
            olamiz.
          </p>
        </section>
        <section>
          <h3 className="text-xl font-semibold text-gray-900">
            Aloqa raqamlari
          </h3>
          <p>
            Email:{" "}
            <a
              href="mailto:info@kattabozor.uz"
              className="text-blue-600 hover:text-blue-800 active:text-blue-900"
            >
              info@kattabozor.uz
            </a>
          </p>
          <p>
            Telegram:{" "}
            <a
              href="https://t.me/kattabozoruz_manager"
              className="text-blue-600 hover:text-blue-800 active:text-blue-900"
            >
              @kattabozoruz_manager
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Guide;
