module.exports = {
  'package.json': ['sort-package-json'],
  '**/*.md': ['markdownlint', 'prettier --write'],
  '*.{js,css}': 'prettier --write',
};
