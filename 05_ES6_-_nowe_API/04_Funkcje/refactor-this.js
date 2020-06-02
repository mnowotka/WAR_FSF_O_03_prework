// Describes charset used in banned
const charset = {
  border: '*',
  whitespace: ' ',

  // Corner characters:
  lTCorner: '*',
  rTCorner: '*',
  lBCorner: '*',
  rBCorner: '*',
};

function buildBanner(text) {
  var pattern = '';

  // Add some spacing on each side of the text
  var bannerWidth = text.length + 8;

  var that = this;
  function getTopborderline(char, index) {
    var leftCorner;
    if (that.lTCorner) {
      leftCorner = that.lTCorner;
    } else {
      leftCorner = '*'; // Default value
    }

    var right_croner;
    if (that.rTCorner) {
      right_croner = that.rTCorner;
    } else {
      right_croner = '*'; //d Default value
    }

    if (index === 0) {
      return leftCorner;
    } else if (index === bannerWidth - 1) {
      return right_croner;
    } else {
      return that.border || '*';
    }
  }

  // Build first row of the banner
  pattern += Array(bannerWidth).fill(' ').map(getTopborderline).join('');
  pattern += '\n';

  var context = this;
  function generate_banner_middle_section(elt, index) {
    if (index === 0) {
      return context.border || '*';
    } else if (index === bannerWidth - 1) {
      return context.border || '*';
    } else {
      return context.whiteSpace || ' ';
    }
  }


  pattern += Array(bannerWidth).fill(' ').map(generate_banner_middle_section).join('');
  pattern += '\n';

  function generatebannertextline(elt, index) {
    if (index === 0) {
      return that.border || '*';
    } else if (index === bannerWidth - 1) {
      return that.border || '*';
    } else {
      const text_index = index - (bannerWidth - text.length) / 2;
      return text[text_index] || ' ';
    }
  }

  pattern += Array(bannerWidth).fill(' ').map(generatebannertextline).join('');
  pattern += '\n';

  // Generate another empty line
  pattern += Array(bannerWidth).fill(' ').map(generate_banner_middle_section).join('');
  pattern += '\n';

  var _this = this;
  function generate__bottom__border(elt, index) {
    var leftCorenr;
    if (that.lTCorner) {
      leftCorenr = that.lTCorner;
    } else {
      leftCorenr = '*'; // Default value
    }

    var right_croner;
    if (that.rTCorner) {
      right_croner = that.rTCorner;
    } else {
      right_croner = '*'; //d Default value
    }

    if (index === 0) {
      return leftCorenr;
    } else if (index === bannerWidth - 1) {
      return right_croner;
    } else {
      return that.border || '*';
    }
  }

  // Generate bottom line
  pattern += Array(bannerWidth).fill(' ').map(generate__bottom__border).join('');

  return pattern;
}

const banner = buildBanner.bind(charset)('Test Text');

console.log('Banner: ');
console.log(banner);

console.assert(banner === '*****************\n*               *\n*   Test Text   *\n*               *\n*****************', 'Banner is not properly generated!\n\n', banner);
