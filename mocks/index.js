export const navbarData = [
  {
    icon: 'memo',
    text: '自分の記録',
    link: '/my-record',
  },
  {
    icon: 'challenge',
    text: 'チャレンジ',
    link: '/',
  },
  {
    icon: 'info',
    text: 'お知らせ',
    link: '/',
  },
];

export const menuData = [
  {
    text: '自分の記録',
    link: '/',
  },
  {
    text: '体重グラフ',
    link: '/',
  },
  {
    text: '目標',
    link: '/',
  },
  {
    text: '選択中のコース',
    link: '/',
  },
  {
    text: 'コラム一覧',
    link: '/',
  },
  {
    text: '設定',
    link: '/',
  },
];

export const dailyAchievement = {
  date: '2022-05-21',
  percent: '75',
};

const bodyScoreChartLabels = [
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
];

export const bodyScoreChart = {
  labels: bodyScoreChartLabels,
  datasets: [
    {
      label: 'データ 1',
      data: [104, 137, 106, 206, 104, 29, 42, 179, 238, 196, 52, 215],
      borderColor: 'rgb(255, 204, 33)',
      backgroundColor: 'rgb(255, 204, 33)',
    },
    {
      label: 'データ 2',
      data: [159, 187, 163, 53, 230, 137, 29, 65, 208, 111, 167, 214],
      borderColor: 'rgb(143, 233, 208)',
      backgroundColor: 'rgb(143, 233, 208)',
    },
  ],
};

export const transitionButtonData = [
  {
    icon: 'knife',
    title: 'Morning',
  },
  {
    icon: 'knife',
    title: 'Lunch',
  },
  {
    icon: 'knife',
    title: 'Dinner',
  },
  {
    icon: 'cup',
    title: 'Snack',
  },
];

export const mealHistoryData = [
  {
    image: '/images/m01.jpg',
    date: '2022-05-21',
    type: 'Morning',
  },
  {
    image: '/images/l01.jpg',
    date: '2022-05-21',
    type: 'Lunch',
  },
  {
    image: '/images/d01.jpg',
    date: '2022-05-21',
    type: 'Dinner',
  },
  {
    image: '/images/l03.jpg',
    date: '2022-05-21',
    type: 'Snack',
  },
  {
    image: '/images/m03.jpg',
    date: '2022-05-21',
    type: 'Morning',
  },
  {
    image: '/images/l02.jpg',
    date: '2022-05-21',
    type: 'Lunch',
  },

  {
    image: '/images/d02.jpg',
    date: '2022-05-21',
    type: 'Dinner',
  },

  {
    image: '/images/s01.jpg',
    date: '2022-05-21',
    type: 'Snack',
  },
];

export const footerLinkData = [
  {
    content: '会員登録',
    link: '/',
  },
  {
    content: '運営会社',
    link: '/',
  },
  {
    content: '利用規約',
    link: '/',
  },
  {
    content: '個人情報の取扱について',
    link: '/',
  },
  {
    content: '特定商取引法に基づく表記',
    link: '/',
  },
  {
    content: 'お問い合わせ',
    link: '/',
  },
];

export const menuMyRecordData = [
  {
    image: 'images/MyRecommend-1.jpg',
    title: 'BODY RECORD',
    content: '自分のカラダの記録',
  },
  {
    image: 'images/MyRecommend-2.jpg',
    title: 'MY EXERCISE',
    content: '自分の運動の記録',
  },
  {
    image: 'images/MyRecommend-3.jpg',
    title: 'MY DIARY',
    content: '自分の日記',
  },
];

export const bodyRecordDataChart = {
  chart: {
    labels: bodyScoreChartLabels,
    datasets: [
      {
        label: 'データ 1',
        data: [104, 137, 106, 206, 104, 29, 42, 179, 238, 196, 52, 215],
        borderColor: 'rgb(255, 204, 33)',
        backgroundColor: 'rgb(255, 204, 33)',
      },
      {
        label: 'データ 2',
        data: [159, 187, 163, 53, 230, 137, 29, 65, 208, 111, 167, 214],
        borderColor: 'rgb(143, 233, 208)',
        backgroundColor: 'rgb(143, 233, 208)',
      },
    ],
  },
  type: 'YEAR',
  date: '2022-05-21',
};

export const bodyRecordType = [
  {
    type: 'DAY',
    label: '日',
  },
  {
    type: 'WEEK',
    label: '週',
  },
  {
    type: 'MONTH',
    label: '月',
  },
  {
    type: 'YEAR',
    label: '年',
  },
];
