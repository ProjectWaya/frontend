    const languages = [
      { name: 'en', flag: 'gb' },
      { name: 'fr', flag: 'fr' },
      { name: 'es', flag: 'es' },
      { name: 'de', flag: 'de' },
      { name: 'tr', flag: 'tr' },
      { name: 'ru', flag: 'ru' },
      { name: 'zh', flag: 'cn' },
    ];

    export default Ember.Controller.extend({
      languages: languages,
      selectedLanguage: languages[0],
      selectedCountry: $.cookie('userInfo') ? JSON.parse($.cookie('userInfo')).country.name : null,
      selectedCity: $.cookie('userInfo') ? JSON.parse($.cookie('userInfo')).city.name : null,
      selectedUserStatus: $.cookie('userInfo') ? JSON.parse($.cookie('userInfo')).userStatus.name : null,
      actions: {
        languageChanged(lang) {
          this.set('selectedLanguage', lang);
          this.set('i18n.locale', lang.name);
        }
      }
    });