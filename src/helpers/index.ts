export const getCookie = (name: string) => {
  const matches = document.cookie.match(
    new RegExp(
      // eslint-disable-next-line
    `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`
    ),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

import { DATE_OPTIONS } from 'const';

export const capitalize = (word: string) => {
  if (!word) return word;

  return word[0].toUpperCase() + word.slice(1);
};

export const snakeToCamelCase = (name: string) => name
  .split('_')
  .map((word, index) => index === 0 ? word : capitalize(word))
  .join('');

export const formateDate = (
  date: Date,
  locale = 'en-US',
  dateOptions = DATE_OPTIONS,
) => date.toLocaleString(locale, dateOptions);

export const formateIsoDate = (isoDateString: string, locale?: string, dateOptions = DATE_OPTIONS) => {
  const date = new Date(isoDateString.slice(0, 10));

  return formateDate(date, locale, dateOptions);
};

export const checkUrlString = (urlString: string) => {
  return /(http[s]?:\/\/)?[^\s(["<,>]*\.[^\s[",><]*/i.test(urlString);
};
