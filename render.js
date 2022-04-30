const SitePrerender = require('site-prerender');

const sp = new SitePrerender({
    staticPath: './src',
    outputFolder: './dist',
    routes: ['/']
})

async function exec() {
    await sp.init()
    await sp.start()
    await sp.close()
}

return exec();
