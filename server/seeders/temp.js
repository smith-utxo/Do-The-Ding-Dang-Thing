const mongoose = require("mongoose");
const { User, Service, Review } = require("../models");

// db.once is a one-time listener for an event. This listener is invoked only the next time the event is fired, after which it is removed.

//per module 18
mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb://127.0.0.1:27017/do-the-ding-dang-thing",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch((err) => {
    console.error("Error connecting to Mongo", err);
  });

const serviceData = [
  {
    title: "Cleaning",
    description:
      "Houses, stores, cars... whatever's dirty, someone out there can clean it for you.",
  },
  {
    title: "Electrical",
    description: "One of these skilled electricians might spark your interest!",
  },
  {
    title: "Lawn and Garden",
    description:
      "These green-thumbed gurus keep the great outdoors looking great!",
  },
  {
    title: "Plumbing",
    description:
      "These pipemasters will help you achieve a state of flow again.",
  },
  {
    title: "Web Development",
    description: "Taking your business global? They're here to help.",
  },
];

const userData = [
  {
    username: "Alfonso20",
    email: "Alfonso20.Collier@gmail.com",
    password: "pRwj13uebRUw",
    phone: "276-489-0379",
    services: { _id: "633c5cade9b7d911e4bcc213" },
  },
  {
    username: "Raphael.MacGyver",
    email: "Raphael.MacGyver_Schamberger@hotmail.com",
    password: "bZnHp2xEY73t",
    phone: "707-065-8533",
    services: { _id: "633c5cade9b7d911e4bcc213" },
  },
  {
    username: "Devon.Stracke25",
    email: "Devon.Stracke25_Cummerata@yahoo.com",
    password: "SVqe3AnVYY_Z",
    phone: "105-559-8819",
    services: { _id: "633c5cade9b7d911e4bcc213" },
  },
  {
    username: "Kayden_Beer",
    email: "Kayden_Beer13@hotmail.com",
    password: "VjVW2HNBU0ka",
    phone: "374-840-3659",
    services: { _id: "633c5cade9b7d911e4bcc213" },
  },
  {
    username: "Julien.Dibbert22",
    email: "Julien.Dibbert22.Sporer@gmail.com",
    password: "MHfq2akFsRjg",
    phone: "139-348-0984",
    services: { _id: "633c5cade9b7d911e4bcc213" },
  },
  {
    username: "Carmella.Feest33",
    email: "Carmella.Feest33.Trantow11@yahoo.com",
    password: "0OpAYMLDIwvc",
    phone: "200-101-9145",
    services: { _id: "633c5cade9b7d911e4bcc213" },
  },
  {
    username: "Kavon50",
    email: "Kavon50_Leannon@hotmail.com",
    password: "QlLMXWwiNfn9",
    phone: "841-247-5176",
    services: { _id: "633c5cade9b7d911e4bcc214" },
  },
  {
    username: "Isidro.Conn77",
    email: "Isidro.Conn7775@hotmail.com",
    password: "jtiGXNMZJj_w",
    phone: "564-080-7150",
    services: { _id: "633c5cade9b7d911e4bcc214" },
  },
  {
    username: "Andre11",
    email: "Andre11_Murazik@hotmail.com",
    password: "GQHzZwDKfJsy",
    phone: "189-087-2485",
    services: { _id: "633c5cade9b7d911e4bcc214" },
  },
  {
    username: "Arne.Collins98",
    email: "Arne.Collins98.Brekke@yahoo.com",
    password: "d5cpPANvSjj_",
    phone: "633-879-2842",
    services: { _id: "633c5cade9b7d911e4bcc214" },
  },
  {
    username: "Jean_Vandervort",
    email: "Jean_Vandervort.Lindgren@gmail.com",
    password: "qawCZAnVWu4U",
    phone: "427-145-6821",
    services: { _id: "633c5cade9b7d911e4bcc214" },
  },
  {
    username: "Fleta_Schinner",
    email: "Fleta_Schinner.Smitham23@yahoo.com",
    password: "j7YB6ObATEGY",
    phone: "158-736-2043",
    services: { _id: "633c5cade9b7d911e4bcc214" },
  },
  {
    username: "Brielle_Wunsch",
    email: "Brielle_Wunsch11@hotmail.com",
    password: "sSy6Z0FdRMiq",
    phone: "457-192-0764",
    services: { _id: "633c5cade9b7d911e4bcc214" },
  },
  {
    username: "John38",
    email: "John38_Schuster@gmail.com",
    password: "LepPTEx7F3hp",
    phone: "670-018-5112",
    services: { _id: "633c5cade9b7d911e4bcc214" },
  },
  {
    username: "Antonina.McDermott",
    email: "Antonina.McDermott_Mann@hotmail.com",
    password: "MeFOrtMit8Sd",
    phone: "090-548-9215",
    services: { _id: "633c5cade9b7d911e4bcc215" },
  },
  {
    username: "Ezra21",
    email: "Ezra21.Shanahan@hotmail.com",
    password: "APt510Im3WOl",
    phone: "505-499-0096",
    services: { _id: "633c5cade9b7d911e4bcc215" },
  },
  {
    username: "Jada_Beatty28",
    email: "Jada_Beatty28.Brekke@hotmail.com",
    password: "wX_T3_IOH_FZ",
    phone: "906-453-9295",
    services: { _id: "633c5cade9b7d911e4bcc215" },
  },
  {
    username: "Kari.Schaefer9",
    email: "Kari.Schaefer9.Crooks56@gmail.com",
    password: "0XUK_SmySQNm",
    phone: "035-098-4044",
    services: { _id: "633c5cade9b7d911e4bcc215" },
  },
  {
    username: "Melody_Koelpin17",
    email: "Melody_Koelpin17.Marvin@hotmail.com",
    password: "iGCrzC4PsuhJ",
    phone: "089-525-2190",
    services: { _id: "633c5cade9b7d911e4bcc215" },
  },
  {
    username: "Jaeden_Bradtke38",
    email: "Jaeden_Bradtke3819@yahoo.com",
    password: "NvIxjgUIg4AK",
    phone: "281-569-3156",
    services: { _id: "633c5cade9b7d911e4bcc215" },
  },
  {
    username: "Ewell80",
    email: "Ewell803@yahoo.com",
    password: "XxzsgZ1k3go0",
    phone: "032-217-7972",
    services: { _id: "633c5cade9b7d911e4bcc215" },
  },
  {
    username: "Vena.Kshlerin13",
    email: "Vena.Kshlerin13.Halvorson@yahoo.com",
    password: "7vvn8Y34fK8G",
    phone: "525-166-6693",
    services: { _id: "633c5cade9b7d911e4bcc216" },
  },
  {
    username: "Theresia_Schmidt",
    email: "Theresia_Schmidt74@yahoo.com",
    password: "ibtNwNiFYdFX",
    phone: "973-024-9580",
    services: { _id: "633c5cade9b7d911e4bcc216" },
  },
  {
    username: "Eldred40",
    email: "Eldred40.Sporer83@gmail.com",
    password: "n_u1UuWuCxTq",
    phone: "316-690-8066",
    services: { _id: "633c5cade9b7d911e4bcc216" },
  },
  {
    username: "Mertie74",
    email: "Mertie7442@yahoo.com",
    password: "B1xSjBWpCy2d",
    phone: "942-427-4605",
    services: { _id: "633c5cade9b7d911e4bcc216" },
  },
  {
    username: "Cecil.Braun67",
    email: "Cecil.Braun67_Baumbach@gmail.com",
    password: "oAFmE50voGhZ",
    phone: "917-492-5154",
    services: { _id: "633c5cade9b7d911e4bcc216" },
  },
  {
    username: "Terrance.Conroy32",
    email: "Terrance.Conroy32_OConnell@hotmail.com",
    password: "jSS1yxYrpZ68",
    phone: "720-176-3260",
    services: { _id: "633c5cade9b7d911e4bcc216" },
  },
  {
    username: "General.Hirthe49",
    email: "General.Hirthe4948@hotmail.com",
    password: "p9ssFk_9LKCZ",
    phone: "716-109-7749",
    services: { _id: "633c5cade9b7d911e4bcc216" },
  },
  {
    username: "Olga.Bins79",
    email: "Olga.Bins7950@gmail.com",
    password: "dU55oBASj8Hc",
    phone: "845-005-7354",
    services: { _id: "633c5cade9b7d911e4bcc217" },
  },
  {
    username: "Kevon_Jakubowski",
    email: "Kevon_Jakubowski_Weber31@yahoo.com",
    password: "IXJtc95nONzf",
    phone: "114-874-7977",
    services: { _id: "633c5cade9b7d911e4bcc217" },
  },
  {
    username: "Marvin_Haag26",
    email: "Marvin_Haag26_Daniel@yahoo.com",
    password: "WrOeuwHYJpv7",
    phone: "109-212-4206",
    services: { _id: "633c5cade9b7d911e4bcc217" },
  },
  {
    username: "Monte_King",
    email: "Monte_King_Lemke98@hotmail.com",
    password: "Mp0fVrvv0OHJ",
    phone: "552-307-8481",
    services: { _id: "633c5cade9b7d911e4bcc217" },
  },
  {
    username: "Carson_Kuvalis",
    email: "Carson_Kuvalis.Jones82@gmail.com",
    password: "EOsjVp9tJDGO",
    phone: "761-613-8863",
    services: { _id: "633c5cade9b7d911e4bcc217" },
  },
  {
    username: "Hertha.Schuppe",
    email: "Hertha.Schuppe92@gmail.com",
    password: "SrpbDe2CGbW6",
    phone: "276-606-7997",
    services: { _id: "633c5cade9b7d911e4bcc217" },
  },
  {
    username: "Megane57",
    email: "Megane57_Ondricka@yahoo.com",
    password: "QrL38sZW5Z5g",
    phone: "855-168-0332",
    services: { _id: "633c5cade9b7d911e4bcc217" },
  },
  {
    username: "Ellen_Breitenberg30",
    email: "Ellen_Breitenberg3015@gmail.com",
    password: "XZAt4Cd0S6R_",
    phone: "178-492-6478",
    services: { _id: "633c5cade9b7d911e4bcc217" },
  },
  {
    username: "Derek.Heller15",
    email: "Derek.Heller15.Nader72@gmail.com",
    password: "mNJHPZxYx22a",
    phone: "738-498-8490",
    services: { _id: "633c5cade9b7d911e4bcc217" },
  },
];

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(userData);
  // await Service.deleteMany({ });
  // await Service.insertMany(serviceData)
};

seedDB().then(() => {
  console.log("successfully seeded database!");
});
