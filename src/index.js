import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider, addLocaleData} from 'react-intl';
import esLocaleData from 'react-intl/locale-data/es';
import enLocaleData from 'react-intl/locale-data/en';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import detectBrowserLanguage from 'detect-browser-language'

import JobsList from "./components/jobsList";
addLocaleData(esLocaleData, enLocaleData);
	console.log(detectBrowserLanguage())
	let i18nConfig = {
    locale: detectBrowserLanguage(),
    messages: localeEsMessages,
		offers: [
	    {
	      "id": "0001",
	      "name": "Gerente",
	      "company": "Schneider Electric",
	      "salary": 4.5,
	      "city": "Bogotá, Colombia",
	      "date": "2019-03-26",
	      "views": 1805
	    },
	    {
	      "id": "0002",
	      "name": "Ingeniero de Software",
	      "company": "Google Inc.",
	      "salary": 20,
	      "city": "Palo Alto, CA, USA",
	      "date": "2019-03-27",
	      "views": 1900999
	    },
	    {
	      "id": "0003",
	      "name": "Enfermera",
	      "company": "Clínica La Aurora",
	      "salary": 1,
	      "city": "Cali, Colombia",
	      "date": "2019-03-28",
	      "views": 2900999
	    }
	  ]
};
	if(detectBrowserLanguage()=='es-419'){
		i18nConfig.messages=localeEsMessages;
	}
	else {
		i18nConfig.messages=localeEnMessages;
	}
let 	onChangeLanguage = (lang) => {
        switch (lang) {
            case 'es': i18nConfig.messages = localeEsMessages; break;
            case 'en': i18nConfig.messages = localeEnMessages; i18nConfig.offers = [
					    {
					      "id": "0001",
					      "name": "Manager",
					      "company": "Schneider Electric",
					      "salary": 4.5,
					      "city": "Bogotá, Colombia",
					      "date": "2019-03-26",
					      "views": 1805
					    },
					    {
					      "id": "0002",
					      "name": "Software Engineer",
					      "company": "Google Inc.",
					      "salary": 20,
					      "city": "Palo Alto, CA, USA",
					      "date": "2019-03-27",
					      "views": 1900999
					    },
					    {
					      "id": "0003",
					      "name": "Nurse",
					      "company": "Clínica La Aurora",
					      "salary": 1,
					      "city": "Cali, Colombia",
					      "date": "2019-03-28",
					      "views": 2900999
					    }
					  ]; break;
        }
        i18nConfig.locale = lang;
				console.log(i18nConfig.messages);
};
ReactDOM.render(
	<IntlProvider locale={ i18nConfig.locale}  messages={ i18nConfig.messages}>
		<JobsList onChangeLanguage={onChangeLanguage(detectBrowserLanguage())} data={i18nConfig}/>
	</IntlProvider>, document.getElementById("root")
);
