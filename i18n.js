const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
  otherLanguages: ["ru"],
  localeSubpaths: {
    ru: "ru",
  },
  shallowRender: true,
});
