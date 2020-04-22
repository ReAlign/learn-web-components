const u = {
  addCssByLink(url = '') {
    const doc = document;
    const link = doc.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', url);

    const heads = doc.querySelector('head');
    if (heads.length) {
      heads[0].appendChild(link);
    } else {
      doc.documentElement.appendChild(link);
    }
  },
  insertHtmlByLink(url = '') {
    const doc = document;
    const link = doc.createElement('link');
    link.setAttribute('rel', 'import');
    link.setAttribute('href', url);

    const heads = doc.querySelector('head');
    if (heads.length) {
      heads[0].appendChild(link);
    } else {
      doc.documentElement.appendChild(link);
    }
  },
  insertJs(url = '', cb = null) {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = 'async';
    s.src = url;
    document.body.appendChild(s);
    s.onload = () => {
      cb && cb();
    };
  },
};

export default {
  init() {
    u.insertHtmlByLink('/public/components/user-card/template.html');
    u.insertJs('/public/components/webcomponents-lite.js');
  },
  app() {
    const u = {
      addAttrs(d, obj) {
        Object.keys(obj).forEach(attr => {
          d.setAttribute(attr, obj[attr]);
        });
      },
    };

    const app = document.querySelector('#app');
    const userCard = document.createElement('user-card');

    u.addAttrs(userCard, {
      image: 'https://public-bucket-realign.nos-eastchina1.126.net/image/normal/2020-04-22/img-1587526177927-8603.png',
      name: 'ReAlign',
      email: 'realignl@align.pro',
    });

    app.appendChild(userCard);
  },
};
