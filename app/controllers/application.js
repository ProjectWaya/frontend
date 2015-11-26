    const languages = [
      { name: 'English',  iso: 'gb' },
      { name: 'French',  iso: 'fr' },
      { name: 'Spanish',  iso: 'es' },
      { name: 'German',  iso: 'de' },
      { name: 'Turkish',  iso: 'tr' },
      { name: 'Russian',  iso: 'ru' },
      { name: 'Chinese',  iso: 'cn' },
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