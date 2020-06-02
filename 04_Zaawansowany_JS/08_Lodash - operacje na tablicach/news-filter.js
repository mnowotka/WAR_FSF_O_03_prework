import _ from 'lodash';

/**
 * Filters news streams and returns two arrays - important news and less important ones
 * Modify the function so that it returns proper data
 * @returns {*[]}
 */
function newsFilter(newsStreams) {
  return [[], []]; // First entry is important news, second entry - less important ones
}

const fbStream = [{
  id: 13,
  title: 'Corrupted politics',
  isImportant: true
}, {
  id: 11,
  title: 'Another disaster in the middle of nowhere',
}, '', {
  id: 139,
  title: 'New-found facts about Galileo',
  isImportant: true
}, '', {
  id: 2,
  title: 'You would not believe how does she look right now'
}];

const googleNewsStream = ['', {
  id: 111,
  title: 'Floods in Australia after months of fires',
  isImportant: true
}, '', {
  id: 13,
  title: 'Politician found guilty',
  isImportant: true
}, {
  id: 55,
  title: 'Technological breakthrough - new artificial intelligence advancements',
  isImportant: true
}];

const twitterStream = [{
  id: 120,
  title: 'X releases new, ultimate product',
  isImportant: true
}, {
  id: 89,
  title: 'Expansion of raccoons in Europe causes endemic species to migrate',
  isImportant: true
}, {
  id: 13,
  title: 'More about corrupted politician',
  isImportant: true
}, {
  id: 331,
  title: 'You do not want to see that cute otter',
  isImportant: true
}, '', '', {
  id: 139,
  title: 'Galileo\'s grave sheds new light on his life',
  isImportant: true
}];

const newsGroups = newsFilter([fbStream, googleNewsStream, twitterStream]);

console.assert(newsGroups[0].length === 7, 'Should have 7 important news!', newsGroups[0].length);
console.assert(newsGroups[1].length === 2, 'Should have 2 not-so-important news!', newsGroups[1].length);
