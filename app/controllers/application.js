import Ember from 'ember';

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
      selectedLanguage: Ember.computed('i18n.locale', {
        get() {
          return languages.findBy('name', this.get('i18n.locale'))
        }
      }),
      selectedCountry: null,
      selectedCity: null,
      selectedUserStatus: null,
      actions: {
        languageChanged(lang) {
          this.set('selectedLanguage', lang);
          this.set('i18n.locale', lang.name);
          // TODO: uncomment before deploy to change URL when language changes
          // var pathWithoutLanguage = window.location.hash.substr(5)
          // window.location.hash = "#/" + lang.name + "/" + pathWithoutLanguage;
          // location.reload()
        }
      }
    });
