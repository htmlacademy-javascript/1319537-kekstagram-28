'use strict'

const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 5;
const COMMENT_TEXTS = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !'
];

const PICTURE_DESCRIPTIONS = [
  'Вот так проводят свое свободное время программисты. #timetorelax',
  'Работа и удовольствие в одном флаконе. #сочи',
  '- Как проверить, станет ли человек успешным программистом? - Ест-но, нужно поверить его аппетит! #mcdonalds',
  'Мастхэв для работы. #юмор',
  'Покупка нового прикида. #одежда',
  'Вид сбоку. #работа',
  'Этапы нашего роста. #успех,',
  'Люблю грозу в начале мая. #караси',
  'Почему здесь голое тело? #массаж,',
  'Лучшая школа программирования. #следуй_за_мной',
  'Новое на нашем канале. #подпишись',
  'Дзен и программирование. #я',
  'В Англии сейчас дожди - на работе нас не жди! #memes',
  'Кручу Динамо. #football',
  'Как вам новенькое? #fashion',
  'Счастье есть... #happy',
  'Красота спасет мир #beautiful',
  'Новое - это всегда хорошо! #switzerland',
  'Восхитительный пейзаж. #nature',
  'Вот как можно все изменить за один клик! #photoshop',
  'Мясной пирог для всей Семьи. #food',
  'Без друзей меня чуть-чуть, а с друзьями - много! #L4L',
  'Старые фотографии. #tbt',
  'Делу - время, а потехе - час. #cooldown',
  'И такое бывает. #сюр'
];

const NAMES = [
  'Назар',
  'Артем',
  'Андрей',
  'Владлен',
  'Аминадав',
  'Глобилениус',
  'Андроник',
  'Беовульф',
  'Электроник',
  'Мурзилоид',
  'Нафаня',
  'Гендапендер'
];


const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const createIdGenerator = function() {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const getRandomArrayElement = (array) => array[getRandomPositiveInteger(0, array.length - 1)];


const generateCommentId = createIdGenerator();

const createMessage = () =>
  Array.from({ length: getRandomPositiveInteger(1, 2) }, () =>
    getRandomArrayElement(COMMENT_TEXTS)
  ).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomPositiveInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(PICTURE_DESCRIPTIONS),
  likes: getRandomPositiveInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomPositiveInteger(0, COMMENT_COUNT) },
    createComment
  ),
});

const getPictures = () =>
  Array
    .from({ length: PICTURE_COUNT }, (_, pictureIndex) =>
      createPicture(pictureIndex + 1)
    );

getPictures();
