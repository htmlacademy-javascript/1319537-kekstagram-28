import { getRandomPositiveInteger } from './util.js';
import { createIdGenerator } from './util.js';
import { getRandomArrayElement } from './util.js';
import { PICTURE_COUNT, AVATAR_COUNT, LIKE_MIN_COUNT, LIKE_MAX_COUNT, COMMENT_COUNT, COMMENT_TEXTS, PICTURE_DESCRIPTIONS, NAMES } from './setup.js';

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

export { getPictures };
