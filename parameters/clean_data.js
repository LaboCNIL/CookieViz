function cleanCache() {
    function clearPlugins() {
        for (const loaded_plugin of loaded_plugins) {
            if (loaded_plugin.clean) {
                loaded_plugin.clean();
            }
        }
    }

    function clearChrome() {
        window.nw.App.clearCache();

        // cause significantly increase of shutdown duration
        window.chrome.browsingData.remove({
            since: 0
        }, {
            appcache: true,
            cache: true,
            cookies: true,
            downloads: true,
            fileSystems: true,
            formData: true,
            history: true,
            indexedDB: true,
            localStorage: true,
            pluginData: true,
            passwords: true,
            serverBoundCertificates: true,
            serviceWorkers: true,
            webSQL: true
        });
    }

    clearPlugins();
    clearChrome();
}

createDropdownElt('parameter-menus', "{{'browser.parameters.CLEAN_DATA' | translate}}", cleanCache, "clean_data");