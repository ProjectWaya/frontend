    const languages = [
      { name: 'English',  iso: 'gb' },
      { name: 'French',  iso: 'fr' },
      { name: 'German',  iso: 'de' }
    ];

    export default Ember.Controller.extend({
      languages: languages,
      selectedLanguage: languages[0],
      actions: {
        languageChanged(lang) {
          this.set('selectedLanguage', lang);
        }
      }
    });