import React from 'react'
import { defaultMessages } from '@consent-manager/interface-default'

export class i18n {
  constructor() {
    // Hack, since write-translations doesn't work with objects/nested strings, yet!
    const
      introduction_title = "consent-manager.introduction.title",
      introduction_description = "consent-manager.introduction.description",
      introduction_learnMore = "consent-manager.introduction.learn-more",
      introduction_enableAll = "consent-manager.introduction.enable-all",

      form_headline = "consent-manager.form.headline",
      form_description = "consent-manager.form.description",
      form_reset = "consent-manager.form.reset",
      form_enableAll = "consent-manager.form.enable-all",
      form_disableAll = "consent-manager.form.disable-all",
      form_save = "consent-manager.form.save"



    defaultMessages[introduction_title] = "Datenschutz aktiviert"
    defaultMessages[introduction_description] = "Einige Webseitenfunktionen sind zum Schutz Ihrer Privatsphäre deaktiviert."
    defaultMessages[introduction_learnMore] = "Mehr erfahren"

    defaultMessages[introduction_enableAll] = "Alle Funktionen aktivieren"

    defaultMessages[form_headline] = "Webseitenfunktionen und Cookies"
    defaultMessages[form_description] = () => {
      return (
        <>
          <p>
              Standardmäßig sind Funktionen von Drittanbietern deaktiviert, um Ihre Privatsphäre zu schützen.
          </p>
          <p>
              Um Inhalte von Drittanbietern anzuzeigen, müssen Sie zunächst deren Geschäftsbedingungen akzeptieren.
              Dazu gehören Cookie-Richtlinien,
              die sich jederzeit ändern können und auf die wir keinen Einfluss haben.
            <br />
              Wenn Sie diese Inhalte nicht anzeigen, werden keine Cookies von Drittanbietern
              auf Ihrem Gerät installiert.
          </p>
          <p>
              Durch die Aktivierung der Funktionen erklären Sie sich mit den Nutzungsbedingungen der Anbieter
              und deren Cookie Richtlinien einverstanden.
              Sie können diese Funktionen jederzeit wieder deaktivieren.
          </p>
        </>
      )
    }
    defaultMessages[form_reset] = "Einstellungen zurückzusetzen"
    defaultMessages[form_enableAll] = "Alle Funktionen aktivieren"
    defaultMessages[form_disableAll] = "Alle Funktionen deaktivieren"
    defaultMessages[form_save] = "Speichern und schließen"
  }
}
