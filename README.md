# gitbook-plugin-feed

[![npm](https://img.shields.io/npm/v/gitbook-plugin-feed.svg?style=plastic)](https://npmjs.org/package/gitbook-plugin-feed) [![npm](https://img.shields.io/npm/dm/gitbook-plugin-feed.svg?style=plastic)](https://npmjs.org/package/gitbook-plugin-feed) [![npm](https://img.shields.io/npm/dt/gitbook-plugin-feed.svg?style=plastic)](https://npmjs.org/package/gitbook-plugin-feed)

This plugin will add feed(RSS 2.0/Atom 1.0) for your GitBook.

**Under development, use it just for test.**

## Sample config

```
{
    "plugins": [
        "feed"
    ],
    "pluginsConfig": {
        "feed": {
            "hostname": "http://algorithm.yuanbin.me",
            "title": "GitBook Test",
            "filename": "rss2.xml",
            "feed_type": "rss",
            "author": "billryan",
            "description": "Test for GitBook",
            "categories": [
              "programming",
              "algorithm",
              "leetcode"
            ]
        }
    }
}
```
