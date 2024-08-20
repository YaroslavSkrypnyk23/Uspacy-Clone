import {
  vector1,
  vector2,
  vector3,
  vector4,
  reward,
  target,
  settings,
  lighting,
  check,
  message,
  instagram,
  chat,
  chat2,
  messenger,
  viber,
  telegram,
  api,
  crm,
  coworking,
  payspace,
  ain,
  aljazeera,
  dev_ua,
  forbes,
  full_card,
  mango,
  mezha,
  optima,
  respublic,
  speka,
  startup,
  vector,
  weblium,
  mezhaImage,
  war,
  man,
  flagma,
  arrowRight,
} from "../assets/index";

import Button from "../components/Button";

export const navLinks = [
  {
    id: "1",
    link: "#what",
    title: "Що це?",
    dropdownd: true,
  },
  {
    id: "2",
    link: "#forwhom",
    title: "Для кого?",
    dropdownd: true,
  },
  {
    id: "3",
    link: "#prices",
    title: "Ціни",
  },
  {
    id: "4",
    link: "#improvment",
    title: "Впровадження",
  },
  {
    id: "5",
    link: "#support",
    title: "Підтримка",
  },
  {
    id: "6",
    title: (
      <Button
        textContent={"Увійти"}
        padding={"px-3 py-[2px]"}
        border={"border border-[2px]"}
        background={"bg-transparent"}
        hover={"hover:bg-white hover:text-black hover:border-transparent"}
      />
    ),
    button: true,
  },
  {
    id: "7",
    title: (
      <Button
        textContent={"Спробувати безкоштовно"}
        textColor={"text-black"}
        hover={"hover:text-white hover:bg-black"}
      />
    ),
    button: true,
  },
];

export const hiddenContent = [
  {
    whatCards: [
      {
        title: "Що таке Uspacy?",
        subtitle:
          "Повноцінна платформа для спільної роботи, комунікації та взаємодії з клієнтами в компаніях малого та середнього бізнесу.",
        button: (
          <Button
            textContent={"Дізнатись більше "}
            background={"bg-transparent"}
            hover={"hover:bg-white"}
          />
        ),
        cards: [
          {
            icon: arrowRight,
            title: "CRM",
            text: "Система управління продажами та взаємодією з клієнтами",
          },
          {
            icon: arrowRight,
            title: "Завдання",
            text: "Організація спільної роботи та виконавчої дисципліни",
          },
          {
            icon: arrowRight,
            title: "Центр комунікацій",
            text: "Об'єднання всіх каналів комунікації зі світом в єдиній точці",
          },
          {
            icon: arrowRight,
            title: "Автоматизація",
            text: "Розумні рішення для рутинних завдань та процесів",
          },
          {
            icon: arrowRight,
            title: "Компанія та люди",
            text: "Спілкування з колегами та вся структура компанії як на долоні",
          },
          {
            icon: arrowRight,
            title: "Застосунки",
            text: "Мобільні та десктопні застосунки для командної роботи",
          },
          {
            icon: arrowRight,
            title: "Інтеграції",
            text: "Можливість інтеграції з іншими продуктами та сервісами",
          },
          {
            icon: arrowRight,
            title: "Міграція",
            text: "Швидке і безболісне перенесення ваших даних з інших продуктів",
          },
          {
            icon: arrowRight,
            title: "Історія версій",
            text: "та плани розвитку Uspacy",
          },
        ],
      },
    ],
    forCards: [
      {
        title: "Для кого Uspacy?",
        subtitle:"Наш продукт допомагає впорядкувати щоденні процеси та підвищити ефективність роботи кожного співробітника — від продавців та HR-спеціалістів до керівників і власників малого та середнього бізнесу.",
        button: (
          <Button
            textContent={"Дізнатись більше "}
            background={"bg-transparent"}
            hover={"hover:bg-white"}
          />
        ),
        cards: [
          {
            icon: arrowRight,
            title: "Галузі",
            text: "Можливості використання Uspacy у компаніях різних галузей",
          },
          {
            icon: arrowRight,
            title: "Ролі",
            text: "Як Uspacy ИМоже допомогти різнис фахівцям в командах",
          },
          {
            icon: arrowRight,
            title: "Історії успіхів",
            text: "Успішні історії впровадження Uspacy в компаніях наших клієнтів",
          },
        ],
      },
    ],
  },
];

export const heroText = ["Комунікація,спільна робота та CRM.Все в одному."];

export const aboutContent = [
  {
    icon: vector1,
    text: "Повноцінна платформа Uspacy — це комунікація, спільна робота та CRM в одному продукті. Більше не потрібно витрачати час на пошук важливих даних та переносити їх між різними системами.",
  },
  {
    icon: vector2,
    text: "Uspacy дозволяє економити на онлайн-передплатах та їх підтримці. Наш онлайн-сервіс самостійно впорається з тим, що раніше могли зробити лише окремі численні продукти, за кожен з яких доводилося платити.",
  },
  {
    icon: vector3,
    text: "Платформа, що побудована на відкритому API, дозволяє легко інтегрувати Uspacy з будь-якими сервісами та створювати рішення, що суттєво розширюють наші можливості.",
  },
  {
    icon: vector4,
    text: "Uspacy відповідає закону України «Про захист персональних даних» та GDPR, найсуворішому європейському законодавству. Ми збираємо, обробляємо та зберігаємо дані так, що ви можете не турбуватися про конфіденційність довіреної нам інформації.",
  },
];

export const companyContent = [
  {
    icon: check,
    text: "Взаємодія з колегами",
  },
  {
    icon: check,
    text: "Стрічка новин",
  },
  {
    icon: check,
    text: "Структура компанії",
  },
  {
    icon: check,
    text: "Списки працівників",
  },
  {
    icon: check,
    text: "Профіль співробітника",
  },
];
export const comonWork = [
  {
    title: "Спільна робота",
    text: "Будуйте ефективну роботу на основі завдань та контролю їх виконання",
    image: coworking,
  },
];

export const srmContent = [
  {
    title: "CRM",
    text: "Впорядковуйте відносини з клієнтами від першого кроку до повторних продажів",
    image: crm,
  },
];

export const automationProcess = [
  {
    title: "Автоматизація процесів",
    subtitle1:
      "Полегшуйте рутинні операції за рахунок розумної автоматизації через простоту та швидкість.",
    subtitle2: "Зосередьтесь на результаті, а не на монотонних процесах",
    boxes: [
      {
        id: "1",
        icon: target,
        text: "Визначте тригер",
      },
      {
        id: "2",
        icon: settings,
        text: "Встановіть умови",
      },
      {
        id: "3",
        icon: lighting,
        text: "Призначте дії",
      },
    ],
  },
];

export const comunication = [
  {
    title: "Центр комунікацій",
    subtitle:
      "Спілкуйтеся з колегами та клієнтами через сучасні канали цифрової комунікації",
    images: [
      {
        id: "messenger",
        icon: messenger,
        bg: "linear-gradient(96deg, rgba(26,123,255,1) 10%, rgba(162,40,255,1) 52%, rgba(255,0,202,1) 100%)",
      },
      {
        id: "message",
        icon: message,
        bg: "#0078ff",
      },
      {
        id: "instagram",
        icon: instagram,
        bg: "linear-gradient(96deg, rgba(26,123,255,1) 10%, rgba(162,40,255,1) 52%, rgba(255,0,202,1) 100%)",
      },
      {
        id: "chat",
        icon: chat,
        bg: "#0078ff",
      },
      {
        id: "viber",
        icon: viber,
        bg: "#b422fc ",
      },
      {
        id: "chat2",
        icon: chat2,
        bg: "#0078ff",
      },
      {
        id: "telegram",
        icon: telegram,
        bg: "#63acff",
      },
      {
        id: "comunication",
        icon: viber,
        bg: "#05ff00",
      },
    ],
  },
];

export const openApi = [
  {
    title: "Відкритий API",
    text: "Розширюйте можливості свого Uspacy за рахунок інтеграцій з іншими сервісами та створення нових функцій",
    image: api,
  },
];

export const publications = [
  {
    id: "1",
    title:
      "«Ми шукаємо можливості для динамічного руху»: інтерв’ю зі співзасновником стартапу Uspacy, переможцем конкурсу Glovo Startup Lab",
    subtitle:
      "Стартап Uspacy, який пропонує CRM-систему для малого та середнього бізнесу, здобув друге місце на конкурсі Glovo Startup Lab, отримавши 10 000 євро та стажування в Барселоні.",
    logo: payspace,
  },
  {
    id: "2",
    title:
      "Як українському стартапу потрапити на міжнародну конференцію? Досвід Uspacy на TechChill Riga 2024",
    image: mezhaImage,
    logo: mezha,
  },
  {
    id: "3",
    title:
      "Uspacy, a single online workspace helping companies with collaboration and communication, was founded in Estonia by Ukrainian e-⁠residents to support location independent management",
    subtitle:
      "For Ukrainians, the full-scale invasion by Russia that began two years ago is a line in time, a dividing point that demarcates everything into a before and after.",
    logo: respublic,
  },
  {
    id: "4",
    title:
      "‘I have no fear’: How Ukrainian tech founders are outlasting Russia’s war",
    subtitle:
      "Nearly two years after Russia’s invasion began, entrepreneurs have adapted their strategies to navigate chaos.",
    logo: aljazeera,
    image: war,
  },
  {
    id: "5",
    title:
      "Відчайдухи. Forbes зібрав історії підприємців, які запустили бізнес у розпал великої війни. Чим вони керувалися",
    logo: forbes,
  },
  {
    id: "6",
    title: "Uspacy: Заснувати IT-стартап і вкласти $197 000 під час війни",
    image: full_card,
    logo: "https://uspacy-stage-s3-bucket.s3.eu-west-1.amazonaws.com/full_card_title_3aa1de0ab3.png",
  },
  {
    id: "7",
    title:
      "Всі процеси в одному місці: як зявився онлайн-сервіс для бізнесу Uspacy",
    subtitle: (
      <>
        Коли ми з партнерами замислили зробити новий продукт, то одразу
        розуміли, що створюємо не просто{" "}
        <span className="text-green-600">
          заміну популярним російським онлайн-сервісам
        </span>{" "}
        ...
      </>
    ),
    logo: speka,
  },
  {
    id: "8",
    title:
      "Українська CRM-система Uspacy має 100 комерційних клієнтів: рефлексії засновника Дмитра Суслова про перші 6 місяців",
    subtitle:
      "Дмитро Суслов у вересні 2022 року анонсував роботу над стартапом Uspacy — це робочий простір для малого та середнього бізнесу.",
    logo: ain,
  },
  {
    id: "9",
    title:
      "Українська CRM-система Uspacy має 100 комерційних клієнтів: рефлексії засновника Дмитра Суслова про перші 6 місяців",
    image: man,
    logo: vector,
  },
  {
    id: "10",
    title: "Як українці запустили стартап Uspasy у війну",
    subtitle:
      "Директор і співзасновник українського стартапу Дмитро Суслов в інтерв’ю The Mango розповідає про ідею створення та становлення сервіс-продукту Uspasy.",
    logo: mango,
  },
  {
    id: "11",
    title: "Ukrainian startups at Web Summit 2022",
    subtitle: (
      <>
        <div>
          Europe’s biggest tech conference Web Summit, is back in Lisbon from
          November 1-4.
          <ul>
            <li className="">
              {" "}
              Ukrainian start-ups and tech companies raised almost €351 mln in
              the first six months of 2022{" "}
            </li>
            <li>
              {" "}
              The country’s tech talent pool counts nearly 300,000 developers{" "}
            </li>
            <li>
              {" "}
              The export volume of computer services for the first half of 2022
              has reached €3.75 bln, which is 23% more than for the same period
              of 2021{" "}
            </li>
          </ul>
        </div>
      </>
    ),
    logo: startup,
  },
  {
    id: "12",
    title: "Чи відкривається новий ринок для українського ІТ",
    subtitle:
      "На другий рік повномасштабної війни український бізнес все ще використовує російське програмне забезпечення. Верховна Рада хоче заборонити використання та штрафувати за це. Яка альтернатива 1С та іншого російського програмного забезпечення?",
    logo: forbes,
  },
  {
    id: "13",
    title:
      "Ексдиректор українського «Бітрікс24» запустив стартап Uspacy. Це симбіоз CRM-системи й таск-менеджера, що конкуруватиме з месенджерами та Exel",
    subtitle:
      "Проєкт анонсували ще у 2022 році, офіційна презентаціявідбулася 14 лютого 2023 року.",
    logo: dev_ua,
  },
];

export const clients = [
  {
    id: "1",
    logo: optima,
  },
  {
    id: "2",
    logo: flagma,
  },
  {
    id: "3",
    logo: weblium,
  },
];

export const footerLinks = [
  {
    id: "1",
    title: "Що таке Uspacy?",
    links: [
      {
        name: "CRM",
        link: "/",
      },
      {
        name: "Завдання",
        link: "/",
      },
      {
        name: "Центр комунікацій",
        link: "/",
      },
      {
        name: "Компанія та люди",
        link: "/",
      },
      {
        name: "Застосунки",
        link: "/",
      },
      {
        name: "Інтеграції",
        link: "/",
      },
      {
        name: "Безпека",
        link: "/",
      },
      {
        name: "Міграція",
        link: "/",
      },
      {
        name: "Історія версій",
        link: "/",
      },
    ],
  },
  {
    id: "2",
    title: "Для кого?",
    links: [
      {
        name: "Галузі",
        link: "/",
      },
      {
        name: "Ролі",
        link: "/",
      },
      {
        name: "Історії успіху",
        link: "/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "title",
    title: "Telegram",
    href: "https://t.me/uspacyua",
  },
  {
    id: "title",
    title: "Linkedin",
    href: "https://www.linkedin.com/company/uspacy/",
  },
  {
    id: "title",
    title: "Facebook",
    href: "https://www.facebook.com/uspacy.ukraine",
  },
  {
    id: "title",
    title: "Instagram",
    href: "https://www.instagram.com/uspacy.global/",
  },
  {
    id: "title",
    title: "Twitter",
    href: "ttps://twitter.com/uspacycom",
  },
  {
    id: "title",
    title: "Youtube",
    href: "https://www.youtube.com/@uspacyukraine",
  },
];
