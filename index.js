var url = require('url');
var Feed = require('feed');
var desc = require('get-md-desc')

var feed = null;
var feed_cfg = null;

module.exports = {
  book: {
    assets: './assets',
    js: [
      "plugin.js"
    ]
  },
  hooks: {
    // Get and init RSS configuration
    'init': function () {
      if (this.output.name != 'website') return;
      var lang = this.isLanguageBook()? this.config.values.language : '';
      if (lang) lang = lang + '/';
      feed_cfg = this.config.get('pluginsConfig.feed');
      feed_cfg.description = feed_cfg.description || feed_cfg.title;
      feed_cfg.hostname = url.resolve(feed_cfg.hostname, '/') + lang;
      feed_cfg.id = feed_cfg.id || feed_cfg.hostname;
      feed_cfg.link = feed_cfg.link || feed_cfg.hostname;
      feed_cfg.author.name = feed_cfg.author;
      feed_cfg.author.link = feed_cfg.author;
      feed_cfg.author.email = feed_cfg.author;
      feed = new Feed(feed_cfg);
    },

    "page:before": function (page) {
      if (this.output.name != 'website') return page;
      var _title = page.title;
      var _desc = desc(page.content);
      var _url = feed_cfg.hostname + this.output.toURL(page.path);
      var _id = _url;

      feed.addItem({
        title: _title,
        description: _desc ? _desc.text : 'description',
        link: _url,
        id: _url
      });

      return page;
    },

    "finish": function () {
      if (this.output.name != 'website') return;
      var lang = this.isLanguageBook()? this.config.values.language : '';
      var feed_content = feed.render('rss-2.0');
      return this.output.writeFile(feed_cfg.filename, feed_content);
    }
  }
};
