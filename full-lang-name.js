function getFullLangName(lang){

  switch (lang.toLowevCase()) {
      case 'af':      return 'Afrikaans'; 
      case 'sq':      return 'Albanian'; 
      case 'am':      return 'Amharic'; 
      case 'ar':      return 'Arabic'; 
      case 'ar-dz':   return 'Arabic - Algeria'; 
      case 'ar-bh':   return 'Arabic - Bahrain'; 
      case 'ar-eg':   return 'Arabic - Egypt'; 
      case 'ar-iq':   return 'Arabic - Iraq'; 
      case 'ar-jo':   return 'Arabic - Jordan'; 
      case 'ar-kw':   return 'Arabic - Kuwait'; 
      case 'ar-lb':   return 'Arabic - Lebanon'; 
      case 'ar-ly':   return 'Arabic - Libya'; 
      case 'ar-ma':   return 'Arabic - Morocco'; 
      case 'ar-om':   return 'Arabic - Oman'; 
      case 'ar-qa':   return 'Arabic - Qatar'; 
      case 'ar-sa':   return 'Arabic - Saudi Arabia'; 
      case 'ar-sy':   return 'Arabic - Syria'; 
      case 'ar-tn':   return 'Arabic - Tunisia'; 
      case 'ar-ae':   return 'Arabic - United Arab Emirates'; 
      case 'ar-ye':   return 'Arabic - Yemen'; 
      case 'hy':      return 'Armenian'; 
      case 'as':      return 'Assamese'; 
      case 'az':      return 'Azeri'; 
      case 'az-az':   return 'Azeri'; 
      case 'eu':      return 'Basque'; 
      case 'be':      return 'Belarusian'; 
      case 'bn':      return 'Bengali'; 
      case 'bs':      return 'Bosnian'; 
      case 'bg':      return 'Bulgarian'; 
      case 'my':      return 'Burmese'; 
      case 'ca':      return 'Catalan'; 
      case 'zh':      return 'Chinese'; 
      case 'zh-cn':   return 'Chinese - China'; 
      case 'zh-hk':   return 'Chinese - Hong Kong SAR'; 
      case 'zh-mo':   return 'Chinese - Macau SAR'; 
      case 'zh-sg':   return 'Chinese - Singapore'; 
      case 'zh-tw':   return 'Chinese - Taiwan'; 
      case 'hr':      return'Croatian'; 
      case 'cs':      return'Czech'; 
      case 'da':      return'Danish'; 
      case 'Dhivehi': return 'Divehi'; 
      case 'Maldivian': return 'Divehi'; 
      case 'nl':      return 'Dutch'; 
      case 'nl-be':   return 'Dutch - Belgium'; 
      case 'nl-nl':   return 'Dutch - Netherlands'; 
      case 'en':      return 'English'; 
      case 'en-au':   return 'English - Australia'; 
      case 'en-bz':   return 'English - Belize'; 
      case 'en-ca':   return 'English - Canada'; 
      case 'en-cb':   return 'English - Caribbean'; 
      case 'en-gb':   return 'English - Great Britain'; 
      case 'en-in':   return 'English - India'; 
      case 'en-ie':   return 'English - Ireland'; 
      case 'en-jm':   return 'English - Jamaica'; 
      case 'en-nz':   return 'English - New Zealand'; 
      case 'en-ph':   return 'English - Philippines'; 
      case 'en-za':   return 'English - Southern Africa'; 
      case 'en-tt':   return 'English - Trinidad'; 
      case 'en-us':   return 'English - United States'; 
      case 'et':      return 'Estonian'; 
      case 'mk':      return 'FYRO Macedonia'; 
      case 'fo':      return 'Faroese'; 
      case 'fa':      return 'Farsi - Persian'; 
      case 'fi':      return 'Finnish'; 
      case 'fr':      return 'French'; 
      case 'fr-be':   return 'French - Belgium'; 
      case 'fr-ca':   return 'French - Canada'; 
      case 'fr-fr':   return 'French - France'; 
      case 'fr-lu':   return 'French - Luxembourg'; 
      case 'fr-ch':   return 'French - Switzerland'; 
      case 'gd':      return 'Gaelic'; 
      case 'gd-ie':   return 'Gaelic - Ireland'; 
      case 'gl':      return 'Galician'; 
      case 'ka':      return 'Georgian'; 
      case 'de':      return 'German'; 
      case 'de-at':   return 'German - Austria'; 
      case 'de-de':   return 'German - Germany'; 
      case 'de-li':   return 'German - Liechtenstein'; 
      case 'de-lu':   return 'German - Luxembourg'; 
      case 'de-ch':   return 'German - Switzerland'; 
      case 'el':      return 'Greek'; 
      case 'gn':      return 'Guarani - Paraguay'; 
      case 'gu':      return 'Gujarati'; 
      case 'he':      return 'Hebrew'; 
      case 'hi':      return 'Hindi'; 
      case 'hu':      return 'Hungarian'; 
      case 'is':      return 'Icelandic'; 
      case 'id':      return 'Indonesian'; 
      case 'it':      return 'Italian'; 
      case 'it-it':   return 'Italian - Italy'; 
      case 'it-ch':   return 'Italian - Switzerland'; 
      case 'ja':      return 'Japanese'; 
      case 'kn':      return 'Kannada'; 
      case 'ks':      return 'Kashmiri'; 
      case 'kk':      return 'Kazakh'; 
      case 'km':      return 'Khmer'; 
      case 'ko':      return 'Korean'; 
      case 'lo':      return 'Lao'; 
      case 'la':      return 'Latin'; 
      case 'lv':      return 'Latvian'; 
      case 'lt':      return 'Lithuanian'; 
      case 'ms':      return 'Malay'; 
      case 'ms-bn':   return 'Malay - Brunei'; 
      case 'ms-my':   return 'Malay - Malaysia'; 
      case 'ml':      return 'Malayalam'; 
      case 'mt':      return 'Maltese'; 
      case 'mi':      return 'Maori'; 
      case 'mr':      return 'Marathi'; 
      case 'mn':      return 'Mongolian'; 
      case 'ne':      return 'Nepali'; 
      case 'nb':      return 'Norwegian - Bokml'; 
      case 'nn':      return 'Norwegian - Nynorsk'; 
      case 'no-no':   return 'Norwegian'; 
      case 'or':      return 'Oriya'; 
      case 'pl':      return 'Polish'; 
      case 'pt':      return 'Portuguese'; 
      case 'pt-br':   return 'Portuguese - Brazil'; 
      case 'pt-pt':   return 'Portuguese - Portugal'; 
      case 'pa':      return 'Punjabi'; 
      case 'rm':      return 'Raeto-Romance'; 
      case 'ro-mo':   return 'Romanian - Moldova'; 
      case 'ro':      return 'Romanian - Romania'; 
      case 'ro':      return 'Romanian - Romania'; 
      case 'ru':      return 'Russian'; 
      case 'ru-mo':   return 'Russian - Moldova'; 
      case 'sa':      return 'Sanskrit'; 
      case 'sr':      return 'Serbian'; 
      case 'tn':      return 'Setsuana'; 
      case 'sd':      return 'Sindhi'; 
      case 'Sinhalese': return 'Sinhala'; 
      case 'si':      return 'Sinhala'; 
      case 'sk':      return 'Slovak'; 
      case 'sl':      return 'Slovenian'; 
      case 'so':      return 'Somali'; 
      case 'sb':      return 'Sorbian'; 
      case 'es':      return 'Spanish'; 
      case 'es-ar':   return 'Spanish - Argentina'; 
      case 'es-bo':   return 'Spanish - Bolivia'; 
      case 'es-cl':   return 'Spanish - Chile'; 
      case 'es-co':   return 'Spanish - Colombia'; 
      case 'es-cr':   return 'Spanish - Costa Rica'; 
      case 'es-do':   return 'Spanish - Dominican Republic'; 
      case 'es-ec':   return 'Spanish - Ecuador'; 
      case 'es-sv':   return 'Spanish - El Salvador'; 
      case 'es-gt':   return 'Spanish - Guatemala'; 
      case 'es-hn':   return 'Spanish - Honduras'; 
      case 'es-mx':   return 'Spanish - Mexico'; 
      case 'es-ni':   return 'Spanish - Nicaragua'; 
      case 'es-pa':   return 'Spanish - Panama'; 
      case 'es-py':   return 'Spanish - Paraguay'; 
      case 'es-pe':   return 'Spanish - Peru'; 
      case 'es-pr':   return 'Spanish - Puerto Rico'; 
      case 'es-es':   return 'Spanish - Spain'; 
      case 'es-uy':   return 'Spanish - Uruguay'; 
      case 'es-ve':   return 'Spanish - Venezuela'; 
      case 'es-sw':   return 'Spanish - Swahili'; 
      case 'sv':      return 'Swedish'; 
      case 'sv-fi':   return 'Swedish - Finland'; 
      case 'sv-se':   return 'Swedish - Sweden'; 
      case 'tg':      return 'Tajik'; 
      case 'ta':      return 'Tamil'; 
      case 'tt':      return 'Tatar'; 
      case 'te':      return 'Telugu'; 
      case 'th':      return 'Thai'; 
      case 'bo':      return 'Tibetan'; 
      case 'ts':      return 'Tsonga'; 
      case 'tr':      return 'Turkish'; 
      case 'tk':      return 'Turkmen'; 
      case 'uk':      return 'Ukrainian'; 
      case 'ur':      return 'Urdu'; 
      case 'uz':      return 'Uzbek'; 
      case 'uz-uz':   return 'Uzbek'; 
      case 'vi':      return 'Vietnamese'; 
      case 'cy':      return 'Welsh'; 
      case 'xh':      return 'Xhosa'; 
      case 'yi':      return 'Yiddish'; 
      case 'zu':      return 'Zulu'; 
  
      default:        return lang; 
  }
}
