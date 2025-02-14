import { useState } from "react";
import { Link } from "react-router-dom";
import favorite from "../../assets/icons/favorite.svg";
import favoritered from "../../assets/icons/favorite-red.svg";
import visibility from "../../assets/icons/visibility.svg";
// import  from "../../assets/videos/";

const TabMenuUnboxing = () => {
  const tabs = [
    { name: "Barchasi", link: "/" },
    { name: "Aksiyalar/Chegirmlar", link: "/" },
    { name: "Sharhlar", link: "/" },
    { name: "Qadoqni ochish/Unboxing", link: "/" },
    { name: "Yumor", link: "*" },
    { name: "Voqealar", link: "/" },
    { name: "Maslahatlar/Layfhaklar", link: "/" },
  ];

  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "U",
      userName: "Unboxing",
      date: "7 fevral 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/fd3efb5ae55011efa2040242c0a81117.mp4",
      title: "Smartfon Apple iPhone 16 Pro Max 256GB",
      likes: 0,
      liked: false,
      views: 10,
    },
    {
      id: 2,
      user: "SP",
      userName: "SP PHONE",
      date: "5 fevral 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/d1041110e39311ef91870242c0a81117.mp4",
      title: "😳 Trendga hoco naushnigi bilan erishing",
      likes: 0,
      liked: false,
      views: 15,
    },
    {
      id: 3,
      user: "V",
      userName: "Vertu",
      date: "28 yanvar 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/949a2060dd7711efbb1e0242c0a81117.mp4",
      title:
        "Vertu Aster P – символ вашего безупречного вкуса и высокого статуса.",
      likes: 0,
      liked: false,
      views: 43,
    },
    {
      id: 4,
      user: "A",
      userName: "asaxiy",
      date: "6 fevral 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/4be5dfc0e45311ef91870242c0a81117.mp4",
      title: "Sportda ham, kundalik hayotda ham ideal hamrohingiz — 2E Alpha X",
      likes: 0,
      liked: false,
      views: 3,
    },
    {
      id: 5,
      user: "O",
      userName: "olcha.uz",
      date: "6 fevral 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/224db8dee44b11ef91870242c0a81117.mp4",
      title: "Navbatdagi ASMR videolavhamizga tayyormisiz? Qani ketdik.",
      likes: 0,
      liked: false,
      views: 9,
    },
    {
      id: 6,
      user: "SP",
      userName: "SP PHONE",
      date: "7 fevral 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/f36d8bd8e55911efa2040242c0a81117.mp4",
      title: "Baseus Kamera Detektor",
      likes: 0,
      liked: false,
      views: 4,
    },
    {
      id: 7,
      user: "O",
      userName: "OPENSHOP",
      date: "27 yanvar 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/9d762a02dcb511ef9f090242c0a81117.mp4",
      title: "Yangi Poco X 7 Pro smartfoni.",
      likes: 0,
      liked: false,
      views: 24,
    },
    {
      id: 8,
      user: "SP",
      userName: "SP PHONE",
      date: "28 yanvar 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/2ea7edcedd3511ef9f090242c0a81117.mp4",
      title: "Bo'yin uchun maxsus HOLDER",
      likes: 0,
      liked: false,
      views: 23,
    },
    {
      id: 9,
      user: "O",
      userName: "OPENSHOP",
      date: "7 fevral 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/5a7aa08ce55911efa2040242c0a81117.mp4",
      title: "Openshopdan va Opendan yangi AKSIYA❗️",
      likes: 0,
      liked: false,
      views: 9,
    },
    {
      id: 10,
      user: "U",
      userName: "UPD_STORE.UZ",
      date: "24 yanvar 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/baba9db0da3e11ef9f090242c0a81117.mp4",
      title:
        "Galaxy S25 Ultra, очень скоро в самом дружелюбном магазине техники и гаджетов – @UPD_Store 🫡",
      likes: 0,
      liked: false,
      views: 46,
    },
    {
      id: 11,
      user: "U",
      userName: "Unboxing",
      date: "6 fevral 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/5d71eea2e47e11ef91870242c0a81117.mp4",
      title: "Smartfon Apple iPhone 16 128GB",
      likes: 0,
      liked: false,
      views: 21,
    },
    {
      id: 12,
      user: "A",
      userName: "asaxiy",
      date: "7 fevral 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/4ca0d966e55b11efa2040242c0a81117.mp4",
      title: "Changyutgich emas, haqiqiy kelinlardek😉",
      likes: 0,
      liked: false,
      views: 6,
    },
    {
      id: 13,
      user: "SP",
      userName: "SP PHONE",
      date: "4 fevral 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/fcf720b0e2bb11efb13f0242c0a81117.mp4",
      title: "👀 hoco Fenli taroq",
      likes: 0,
      liked: false,
      views: 17,
    },
    {
      id: 14,
      user: "O",
      userName: "OPENSHOP",
      date: "4 fevral 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/63f60cd8e2bf11efb13f0242c0a81117.mp4",
      title: "Instagram rekomendatsiyasini to’g’irlash 😁",
      likes: 0,
      liked: false,
      views: 15,
    },
    {
      id: 15,
      user: "U",
      userName: "UPD_STORE.UZ",
      date: "15 yanvar 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/160f6d5ed33b11ef960a0242c0a81117.mp4",
      title: "Открыли вам маааленький секрет 🤫",
      likes: 0,
      liked: false,
      views: 54,
    },
    {
      id: 16,
      user: "B",
      userName: "Brostore",
      date: "7 fevral 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/bf90be12e55811efa2040242c0a81117.mp4",
      title: "Top Galaxy S25 Ultra smartfoni — allaqachon MacBro’da!",
      likes: 0,
      liked: false,
      views: 3,
    },
    {
      id: 17,
      user: "J",
      userName: "JOYBOX",
      date: "22 yanvar 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/ac75a13ed8ac11ef9f090242c0a81117.mp4",
      title: "💪Ishda ham, uyda ham a'lo darajada!",
      likes: 0,
      liked: false,
      views: 32,
    },
    {
      id: 18,
      user: "T",
      userName: "TECHNOHOUSE",
      date: "10 yanvar 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/34ea944acf4111ef97cb0242c0a81117.mp4",
      title: "Green lion 6 L 50$ 1 dona Green lion 9 L 75$ 1 dona",
      likes: 0,
      liked: false,
      views: 160,
    },
    {
      id: 19,
      user: "O",
      userName: "OPENSHOP",
      date: "28 yanvar 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/99398240dd7811efbb1e0242c0a81117.mp4",
      title: "Qizlar yangi telefon olganida…",
      likes: 0,
      liked: false,
      views: 25,
    },
    {
      id: 20,
      user: "T",
      userName: "texnomart*",
      date: "9 yanvar 2025",
      videoSrc:
        "https://kattabozor.fra1.cdn.digitaloceanspaces.com/posts/a0cbfac4ce7311ef97cb0242c0a81117.mp4",
      title: "👀 Asalni o'zi aybdor, to'g'rimi?",
      likes: 0,
      liked: false,
      views: 31,
    },
  ]);

  const [muted] = useState(true);

  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    );
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen gap-6">
      <div className="max-w-4xl mx-auto p-4 border border-gray-300 shadow-md bg-white rounded-lg flex flex-wrap gap-2 justify-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:text-gray-900 hover:bg-gray-300 active:bg-gray-400"
          >
            <Link
              to={tab.link}
              className="flex justify-center items-center w-full h-full text-gray-700"
            >
              {tab.name}
            </Link>
          </button>
        ))}
      </div>

      {posts.map((post) => (
        <div
          key={post.id}
          className="w-full max-w-4xl bg-white shadow-md rounded-lg border border-gray-300 overflow-hidden"
        >
          <div className="p-6 border-b flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {post.user}
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">{post.userName}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
          <div className="relative w-full bg-black flex items-center justify-center">
            <video
              className="w-full h-auto max-h-[500px] relative z-10"
              controls
              muted={muted}
            >
              <source src={post.videoSrc} type="video/mp4" />
            </video>
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-gray-900">{post.title}</h3>
            <div className="flex items-center gap-6 mt-3 text-gray-700">
              <button
                className="flex items-center gap-2 focus:outline-none"
                onClick={() => handleLike(post.id)}
              >
                <img
                  src={post.liked ? favoritered : favorite}
                  alt="Favorite"
                  className="w-5 h-5"
                />
                <span>{post.likes}</span>
              </button>
              <div className="flex items-center gap-2">
                <img src={visibility} alt="Views" className="w-5 h-5" />
                <span>{post.views}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabMenuUnboxing;
