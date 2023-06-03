// ==UserScript==
// @name           Atılım Identity Portal Autocomplete
// @namespace      https://kimlik.atilim.edu.tr
// @version        1.0
// @description    This script provides autocomplete functionality on the Atılım University Identity Portal. It facilitates logging in by using the password saved in your password manager.
// @description:tr Bu script, Atılım Üniversitesi Kimlik Portalı'nda otomatik tamamlama işlevselliği sağlar. Şifre yöneticinizde kaydedilmiş olan şifrenizi kullanarak giriş yapmanızı kolaylaştırır.
// @author         Babico
// @match          https://kimlik.atilim.edu.tr*
// @icon           https://www.atilim.edu.tr/assets/frontend/img/favicon/android-icon-192x192.png
// @grant          none
// ==/UserScript==

(function() {
    /*
     * Kullandığınız tarayıcıya göre şifrenizi https://kimlik.atilim.edu.tr/ sitesine kaydedin.
     * Aşağıdaki linklerden tarayıcınızın şifre yöneticisine ulaşabilirisiz:
     *
     * Depending on the browser you use, save your password for https://kimlik.atilim.edu.tr/ in your password manager.
     * You can access your browser's password manager using the following links:
     *
     * Chrome:     chrome://settings/passwords/
     * Opera:      opera://settings/passwords/
     * Safari Mac: https://support.apple.com/en-us/HT211145
     * Firefox:    about:logins
     */
    var passElement = document.body.querySelector("input.passwd.dx-texteditor-input");

    passElement.autocomplete = "on";
    passElement.type = "password";
})();
