browser.downloads.onCreated.addListener(downloadItem => {
    browser.downloads.cancel(downloadItem.id).then(() => {
      console.log(`Download prevented by Download Lock: ${downloadItem.url}`);
    });
});
