!(function () {
    var _key = "_data-cache";
    try {
        if (window.localStorage) {
            try {
                if (localStorage.getItem(_key)) {
                    // three days
                    if (new Date().getTime() - localStorage.getItem(_key) > 259200000) {
                        // clear all
                        localStorage.clear();
                    }
                } else {
                    localStorage.setItem(_key, new Date().getTime());
                }
            } catch (e) {

            }
        }
    } catch (e) {

    }
})();
