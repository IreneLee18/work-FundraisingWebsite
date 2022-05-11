const app = Vue.createApp({
  data() {
    return {
      hideNavbar: true,
      showLogin: false,
      propertyHover: [
        { good1: true },
        { good2: true },
        { good3: true },
        { good4: true },
      ],
      tabs: ["專案介紹", "常見問答", "目前進度", "留言"],
      currentTab: "專案介紹",
      question: [
        {
          id: "Q1",
          title: "影片拍完之後可以編輯嗎？",
          content:
            "可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！",
        },
        {
          id: "Q2",
          title: "有提供保固或維修服務嗎？",
          content:
            "可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！",
        },
        {
          id: "Q3",
          title: "補充包底片要去哪裡購買呢？",
          content:
            "可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！",
        },
        {
          id: "Q4",
          title: "印出來的拍立得照片需要充電嗎？",
          content:
            "可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！",
        },
        {
          id: "Q5",
          title: "運送方式及付款方式有哪些呢？",
          content:
            "可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！",
        },
        {
          id: "Q6",
          title: "退換貨方式及規則",
          content:
            "可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！",
        },
      ],
      currentQuestion: "Q1",
      currentProgress: [
        {
          img: "https://hexschool.github.io/boootstrap5WebLayout/assets/news01.jpg",
          id: "new1",
          title: "高雄體驗會｜免費參加送帆布袋",
          date: "2021-6-20",
          text: "大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！",
        },
        {
          img: "https://hexschool.github.io/boootstrap5WebLayout/assets/news02.jpg",
          id: "new2",
          title: "高雄體驗會｜免費參加送帆布袋",
          date: "2021-6-20",
          text: "大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！",
        },
        {
          img: "https://hexschool.github.io/boootstrap5WebLayout/assets/news03.jpg",
          id: "new3",
          title: "高雄體驗會｜免費參加送帆布袋",
          date: "2021-6-20",
          text: "大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！",
        },
      ],
      messageData: [
        {
          user: "廖小杰",
          userId: "user1",
          img: "https://hexschool.github.io/boootstrap5WebLayout/assets/user_img01.jpg",
          date: "2020年5月22日 11:32",
          userText:
            "晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！",
          replyText: "你要嘛起床的時候開燈，要嘛給我們更多錢開發阿",
        },
        {
          user: "卡阿伯",
          userId: "user2",
          img: "https://hexschool.github.io/boootstrap5WebLayout/assets/user_img02.jpg",
          date: "2020年5月22日 11:32",
          userText: "希望有更多花色可以選擇！我女兒最近喜歡綠色",
          replyText: "",
        },
        {
          user: "賈師",
          userId: "user3",
          img: "https://hexschool.github.io/boootstrap5WebLayout/assets/user_img02.jpg",
          date: "2020年5月22日 11:32",
          userText:
            "可以做個相簿功能嗎？拍出好看的影片再讓我們選擇要印出哪一張這樣",
          replyText: "",
        },
        {
          user: "俊俊",
          userId: "user4",
          img: "https://hexschool.github.io/boootstrap5WebLayout/assets/user_img02.jpg",
          date: "2020年5月22日 11:32",
          userText: "test123 看一下我是不是真的可以留言",
          replyText: "",
        },
      ],
      aside: [
        {
          id: "plan1",
          img: "https://hexschool.github.io/boootstrap5WebLayout/assets/plan_img.jpg",
          title: "買一送一，只有兩百組別錯過",
          price: "NT$ 1600",
          sponsorNum: "88",
          limitedNum: "200",
          text: "受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。",
        },
        {
          id: "plan2",
          img: "https://hexschool.github.io/boootstrap5WebLayout/assets/plan_img.jpg",
          title: "買一送一，只有兩百組別錯過",
          price: "NT$ 1600",
          sponsorNum: "88",
          limitedNum: "200",
          text: "受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。",
        },
        {
          id: "plan3",
          img: "https://hexschool.github.io/boootstrap5WebLayout/assets/plan_img.jpg",
          title: "買一送一，只有兩百組別錯過",
          price: "NT$ 1600",
          sponsorNum: "88",
          limitedNum: "200",
          text: "受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。",
        },
      ],
    };
  },
  methods: {
    showContent() {
      // this[key] = !this[key];
      console.log("click");
    },
    clickQuestion(item) {
      this.currentQuestion = item;
    },
  },
});

// 元件：專案介紹
app.component("introduce", {
  template: `
  <ul class="list-unstyled text-dark" id="專案介紹">
    <li>
    <div class="w-100">
    <img class="mb-2 img-fluid" src="https://hexschool.github.io/boootstrap5WebLayout/assets/p1.jpg"
      alt="p1">
    </div>
      <h4 class="border-start border-4 border-primary  mt-4 mb-2"><span
          class="ms-3 letter-space">施了魔法的照片</span></h4>
      <p class="lh-lg letter-space">
        受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。
      </p>
    </li>
    <li>
      <img class="mb-2 mt-md-3 img-fluid"
        src="https://hexschool.github.io/boootstrap5WebLayout/assets/p2.jpg" alt="p2">
      <h4 class="border-start border-4 border-primary  mt-4 mb-2"><span
          class="ms-3 letter-space">留下當下的美好</span></h4>
      <p class="lh-lg letter-space">
        受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。
      </p>
    </li>
  </ul>`,
});

// 元件：常見問答
app.component("question", {
  props: ["questionProps", "currentQuestion"],
  emits: ["questionEmit"],
  methods: {
    emitQuestion(item) {
      // 帶入question.id的參數
      this.$emit("questionEmit", item);
      console.log(item);
    },
  },
  template: `
  <div class="accordion" id="常見問答">
    <div class="accordion-item border rounded-3 mb-4 accordion-item-active"
      v-for="item in questionProps" :key="item.id">
      <h2 class="accordion-header">
        <button class="accordion-button rounded-3 btn-focus border-color-E5 bg-white text-body pe-2 ps-3 px-md-5 collapsed" type="button"
        @click.preventDefault="emitQuestion(item.id)"
        :class="{accordionActive:currentQuestion===item.id}"
        >
          <span class="btn btn-primary question font-baloo fs-7 fw-bold darkGray lh-lg me-4"
          >{{ item.id }}</span>
          {{ item.title }}
        </button>
      </h2>
      <div class="border-color-E5 bg-white accordion-collapse collapse"
      :class="{show:currentQuestion===item.id}"
      >
        <div class="accordion-body text-gray border-top pb-0">
          <p class="ps-md-10 fs-6 lh-lg">
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </div>`,
});

// 元件：目前進度
app.component("current-progress", {
  props: ["currentProgress"],
  template: `
  <div class="card mb-3" id="目前進度"
    v-for="item in currentProgress" :key="item.id"
  >
    <div class="row g-0">
      <div class="col-5 col-md-4">
        <img :src="item.img" alt="item.id" class="img-fluid">
      </div>
      <div class="col-7 col-md-8">
        <div class="card-body p-2 p-md-4">
          <h5 class="card-title mb-0 mb-md-0 fs-6">{{ item.title }}</h5>
          <small class="text-muted font-baloo text-gray ">2021-6-20</small>
          <p class="card-text text-gray fs-7 mt-2 d-none d-md-block">{{ item.text }}</p>
          <a href="#" class="color-ff785e font-baloo fw-bold d-block">More</a>
        </div>
      </div>
    </div>
  </div>`,
});

// 元件：留言
app.component("message", {
  props: ["message"],
  template: `
  <div class="message" id="留言">
    <div class="border-color-E5 border rounded-3 px-3 pt-3 p-md-3 mb-4" v-for="item in message">
      <div class="d-flex align-items-center">
        <div class="photo">
          <img :src="item.img" alt="{{ item.userId }}">
        </div>
        <h5 class="lh-base ps-4 text-body mt-md-2">{{ item.user }}
          <br>
          <span class="fs-7 fw-lighter letter-space text-gray">{{ item.date }}</span>
        </h5>
      </div>
      <p class="text text-dark my-2 mt-md-0">{{ item.userText }}</p>
      <div class="bg-light mb-4 p-4" :class="{'d-none':item.replyText==''}">
        <h4 class="color-ff785e fs-7 fw-normal">提案者回覆</h4>
        <p class="text-dark fs-6 mb-0">{{ item.replyText }}</p>
      </div>
    </div>
  </div>
  `,
});

app.mount("#app");

// 贊助表單
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
