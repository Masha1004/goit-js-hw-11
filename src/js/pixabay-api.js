export const getImg = query => {
  return fetch(
    `https://pixabay.com/api/?key=42682169-5194f534d6ac320016f3b6be7&q=${query}&image_type=photo&pretty=true`
  );
};
