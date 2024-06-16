import ConsentStatus from '@/components/CookieConsentStatus'
import { LegalLayout } from '@/components/LegalLayout'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Datenschutzerklärung',
}

export default function Datenschutz() {
  return (
    <LegalLayout>
      <h1 className="mb-6 break-words text-4xl font-bold">
        Datenschutzerklärung
      </h1>

      <h2 className="mb-4 mt-6 text-2xl font-semibold">
        1. Datenschutz auf einen Blick
      </h2>
      <h3 className="mb-2 mt-4 text-xl font-semibold">Allgemeine Hinweise</h3>
      <p className="mb-4">
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
        Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
        Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
        identifiziert werden können. Ausführliche Informationen zum Thema
        Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
        Datenschutzerklärung.
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">
        Datenerfassung auf dieser Website
      </h3>
      <h4 className="mb-2 mt-2 text-lg font-medium">
        Wer ist verantwortlich für die Datenerfassung auf dieser Website?
      </h4>
      <p className="mb-4">
        Die Datenverarbeitung auf dieser Website erfolgt durch den
        Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis
        zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
      </p>

      <h4 className="mb-2 mt-2 text-lg font-medium">
        Wie erfassen wir Ihre Daten?
      </h4>
      <p className="mb-4">
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
        mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein
        Kontaktformular eingeben.
      </p>
      <p className="mb-4">
        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch
        der Website durch unsere IT-Systeme erfasst. Das sind vor allem
        technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
        Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald
        Sie diese Website betreten.
      </p>

      <h4 className="mb-2 mt-2 text-lg font-medium">
        Wofür nutzen wir Ihre Daten?
      </h4>
      <p className="mb-4">
        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
        Website zu gewährleisten. Andere Daten können zur Analyse Ihres
        Nutzerverhaltens verwendet werden.
      </p>

      <h4 className="mb-2 mt-2 text-lg font-medium">
        Welche Rechte haben Sie bezüglich Ihrer Daten?
      </h4>
      <p className="mb-4">
        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
        Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
        erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
        dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
        Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit
        für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
        bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
        personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
        Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
      </p>
      <p className="mb-4">
        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
        jederzeit an uns wenden.
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">
        Analyse-Tools und Tools von Drittanbietern
      </h3>
      <p className="mb-4">
        Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
        ausgewertet werden. Das geschieht vor allem mit sogenannten
        Analyseprogrammen.
      </p>
      <p className="mb-4">
        Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der
        folgenden Datenschutzerklärung.
      </p>

      <h2 className="mb-4 mt-6 text-2xl font-semibold">2. Hosting</h2>
      <h3 className="mb-2 mt-4 text-xl font-semibold">Externes Hosting</h3>
      <p className="mb-4">
        Diese Website wird bei einem externen Dienstleister gehostet (Hoster).
        Die personenbezogenen Daten, die auf dieser Website erfasst werden,
        werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.
        a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
        Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten,
        die über eine Website generiert werden, handeln.
      </p>
      <p className="mb-4">
        Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
        gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1
        lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
        Bereitstellung unseres Online-Angebots durch einen professionellen
        Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende
        Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
        auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG,
        soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
        Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
        Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
      </p>
      <p className="mb-4">
        Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur
        Erfüllung seiner Leistungspflichten erforderlich ist und unsere
        Weisungen in Bezug auf diese Daten befolgen.
      </p>
      <p className="mb-4">Wir setzen folgenden Hoster ein:</p>
      <p className="mb-4">
        Namecheap Inc
        <br />
        <br />
        4600 East Washington Street Suite 305 Phoenix, AZ <br />
        85034 United States
      </p>

      <h2 className="mb-4 mt-6 text-2xl font-semibold">
        3. Allgemeine Hinweise und Pflichtinformationen
      </h2>
      <h3 className="mb-2 mt-4 text-xl font-semibold">Datenschutz</h3>
      <p className="mb-4">
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
        sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
        entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
        Datenschutzerklärung.
      </p>
      <p className="mb-4">
        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
        Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
        persönlich identifiziert werden können. Die vorliegende
        Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
        sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
      </p>
      <p className="mb-4">
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei
        der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
        lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich.
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">
        Hinweis zur verantwortlichen Stelle
      </h3>
      <p className="mb-4">
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website
        ist:
      </p>
      <p className="mb-4">
        Christoph Weissteiner
        <br />
        Waibelweg 8<br />
        87700 Memmingen
      </p>
      <p className="mb-4">
        Telefon: +49 176 30487024
        <br />
        E-Mail:{' '}
        <Link
          href="mailto:christoph@cweissteiner.de"
          className="text-blue-500 hover:underline"
        >
          christoph@cweissteiner.de
        </Link>
      </p>
      <p className="mb-4">
        Verantwortliche Stelle ist die natürliche oder juristische Person, die
        allein oder gemeinsam mit anderen über die Zwecke und Mittel der
        Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
        o. Ä.) entscheidet.
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">Speicherdauer</h3>
      <p className="mb-4">
        Soweit innerhalb dieser Datenschutzerklärung keine speziellere
        Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei
        uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
        berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
        Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir
        keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
        personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche
        Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach
        Fortfall dieser Gründe.
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">
        Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf
        dieser Website
      </h3>
      <p className="mb-4">
        Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir
        Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a
        DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
        nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer
        ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten
        in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von
        Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies
        oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via
        Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung
        zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist
        jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur
        Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir
        Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren
        verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen
        Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c
        DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres
        berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über
        die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den
        folgenden Absätzen dieser Datenschutzerklärung informiert.
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">
        Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten
      </h3>
      <p className="mb-4">
        Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA
        oder sonstigen datenschutzrechtlich nicht sicheren Drittstaaten. Wenn
        diese Tools aktiv sind, können Ihre personenbezogene Daten in diese
        Drittstaaten übertragen und dort verarbeitet werden. Wir weisen darauf
        hin, dass in diesen Ländern kein mit der EU vergleichbares
        Datenschutzniveau garantiert werden kann. Beispielsweise sind
        US-Unternehmen dazu verpflichtet, personenbezogene Daten an
        Sicherheitsbehörden herauszugeben, ohne dass Sie als Betroffener
        hiergegen gerichtlich vorgehen könnten. Es kann daher nicht
        ausgeschlossen werden, dass US-Behörden (z. B. Geheimdienste) Ihre auf
        US-Servern befindlichen Daten zu Überwachungszwecken verarbeiten,
        auswerten und dauerhaft speichern. Wir haben auf diese
        Verarbeitungstätigkeiten keinen Einfluss.
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">
        Widerruf Ihrer Einwilligung zur Datenverarbeitung
      </h3>
      <p className="mb-4">
        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
        Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
        jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
        Datenverarbeitung bleibt vom Widerruf unberührt.
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">
        Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
        gegen Direktwerbung (Art. 21 DSGVO)
      </h3>
      <p className="mb-4">
        WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F
        DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS
        IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
        PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN
        AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE
        RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE
        DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR
        IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI
        DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
        NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER
        DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG
        VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
      </p>
      <p className="mb-4">
        WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
        BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
        VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
        DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT
        ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
        WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT
        MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21
        ABS. 2 DSGVO).
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">
        Beschwerderecht bei der zuständigen Aufsichtsbehörde
      </h3>
      <p className="mb-4">
        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
        Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
        Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder
        des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
        unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
        Rechtsbehelfe.
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">
        Recht auf Datenübertragbarkeit
      </h3>
      <p className="mb-4">
        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
        oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder
        an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen
        zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen
        Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
        machbar ist.
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">
        SSL- bzw. TLS-Verschlüsselung
      </h3>
      <p className="mb-4">
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
        vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die
        Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
        TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
        dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt
        und an dem Schloss-Symbol in Ihrer Browserzeile.
      </p>
      <p className="mb-4">
        Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten,
        die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">
        Auskunft, Löschung und Berichtigung
      </h3>
      <p className="mb-4">
        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
        das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
        personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
        Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung
        dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
        Daten können Sie sich jederzeit an uns wenden.
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">
        Recht auf Einschränkung der Verarbeitung
      </h3>
      <p className="mb-4">
        Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
        personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
        an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
        folgenden Fällen:
      </p>
      <ul className="mb-4 ml-6 list-disc">
        <li>
          Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen
          Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu
          überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
          Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen.
        </li>
        <li>
          Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
          geschah/geschieht, können Sie statt der Löschung die Einschränkung der
          Datenverarbeitung verlangen.
        </li>
        <li>
          Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie
          jedoch zur Ausübung, Verteidigung oder Geltendmachung von
          Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung
          die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen.
        </li>
        <li>
          Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben,
          muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen
          werden. Solange noch nicht feststeht, wessen Interessen überwiegen,
          haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen.
        </li>
      </ul>
      <p className="mb-4">
        Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt
        haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit
        Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung
        von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
        natürlichen oder juristischen Person oder aus Gründen eines wichtigen
        öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats
        verarbeitet werden.
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">
        Widerspruch gegen Werbe-E-Mails
      </h3>
      <p className="mb-4">
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
        Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
        Werbung und Informationsmaterialien wird hiermit widersprochen. Die
        Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
        Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
        Spam-E-Mails, vor.
      </p>

      <h2 className="mb-4 mt-6 text-2xl font-semibold">
        4. Datenerfassung auf dieser Website
      </h2>
      <h3 className="mb-2 mt-4 text-xl font-semibold">Cookies</h3>
      <p className="mb-4">
        Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind
        kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie
        werden entweder vorübergehend für die Dauer einer Sitzung
        (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät
        gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch
        gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis
        Sie diese selbst löschen oder eine automatische Löschung durch Ihren
        Webbrowser erfolgt.
      </p>
      <p className="mb-4">
        Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät
        gespeichert werden, wenn Sie unsere Seite betreten
        (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung
        bestimmter Dienstleistungen des Drittunternehmens (z. B. Cookies zur
        Abwicklung von Zahlungsdienstleistungen).
      </p>
      <p className="mb-4">
        Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch
        notwendig, da bestimmte Websitefunktionen ohne diese nicht funktionieren
        würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere
        Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung
        anzuzeigen.
      </p>
      <p className="mb-4">
        Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs,
        zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B.
        für die Warenkorbfunktion) oder zur Optimierung der Website (z. B.
        Cookies zur Messung des Webpublikums) erforderlich sind (notwendige
        Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
        gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der
        Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von
        notwendigen Cookies zur technisch fehlerfreien und optimierten
        Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung
        von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt
        wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG); die
        Einwilligung ist jederzeit widerrufbar.
      </p>
      <ConsentStatus />
      <p className="mb-4">
        Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
        Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
        Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie
        das automatische Löschen der Cookies beim Schließen des Browsers
        aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
        dieser Website eingeschränkt sein.
      </p>
      <p className="mb-4">
        Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt
        werden, werden wir Sie hierüber im Rahmen dieser Datenschutzerklärung
        gesondert informieren und ggf. eine Einwilligung abfragen.
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">Kontaktformular</h3>
      <p className="mb-4">
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
        Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
        Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
        Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
        Ihre Einwilligung weiter.
      </p>
      <p className="mb-4">
        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
        lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
        zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
        erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
        unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
        gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde;
        die Einwilligung ist jederzeit widerrufbar.
      </p>
      <p className="mb-4">
        Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns,
        bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
        widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach
        abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
        Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">
        Anfrage per E-Mail, Telefon oder Telefax
      </h3>
      <p className="mb-4">
        Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
        Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
        (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
        gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
        Einwilligung weiter.
      </p>
      <p className="mb-4">
        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
        lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
        zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
        erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
        unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
        gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde;
        die Einwilligung ist jederzeit widerrufbar.
      </p>
      <p className="mb-4">
        Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben
        bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
        Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
        (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
        gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen
        – bleiben unberührt.
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">
        Kommunikation via WhatsApp
      </h3>
      <p className="mb-4">
        Für die Kommunikation mit unseren Kunden und sonstigen Dritten nutzen
        wir unter anderem den Instant-Messaging-Dienst WhatsApp. Anbieter ist
        die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour,
        Dublin 2, Irland.
      </p>
      <p className="mb-4">
        Die Kommunikation erfolgt über eine Ende-zu-Ende-Verschlüsselung
        (Peer-to-Peer), die verhindert, dass WhatsApp oder sonstige Dritte
        Zugriff auf die Kommunikationsinhalte erlangen können. WhatsApp erhält
        jedoch Zugriff auf Metadaten, die im Zuge des Kommunikationsvorgangs
        entstehen (z. B. Absender, Empfänger und Zeitpunkt). Wir weisen ferner
        darauf hin, dass WhatsApp nach eigener Aussage, personenbezogene Daten
        seiner Nutzer mit seiner in den USA ansässigen Konzernmutter Meta teilt.
        Weitere Details zur Datenverarbeitung finden Sie in der
        Datenschutzrichtlinie von WhatsApp unter:{' '}
        <Link
          href="https://www.whatsapp.com/legal/#privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://www.whatsapp.com/legal/#privacy-policy
        </Link>
        .
      </p>
      <p className="mb-4">
        Der Einsatz von WhatsApp erfolgt auf Grundlage unseres berechtigten
        Interesses an einer möglichst schnellen und effektiven Kommunikation mit
        Kunden, Interessenten und sonstigen Geschäfts- und Vertragspartnern
        (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung
        abgefragt wurde, erfolgt die Datenverarbeitung ausschließlich auf
        Grundlage der Einwilligung; diese ist jederzeit mit Wirkung für die
        Zukunft widerrufbar.
      </p>
      <p className="mb-4">
        Die zwischen uns auf WhatsApp ausgetauschten Kommunikationsinhalte
        verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
        Einwilligung zur Speicherung widerrufen oder der Zweck für die
        Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer
        Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere
        Aufbewahrungsfristen – bleiben unberührt.
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">Google Forms</h3>
      <p className="mb-4">
        Wir haben Google Forms auf dieser Website eingebunden. Anbieter ist die
        Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland
        (nachfolgend Google).
      </p>
      <p className="mb-4">
        Google Forms ermöglicht es uns, Online-Formulare zu erstellen um
        Nachrichten, Anfragen und sonstige Eingaben unserer Websitebesucher
        strukturiert zu erfassen. Alle von Ihnen getätigten Eingaben werden auf
        den Servern von Google verarbeitet. Google Forms speichert ein Cookie in
        Ihrem Browser, das eine eindeutige ID enthält (NID-Cookie). Dieses
        Cookie speichert verschiedene Informationen wie beispielsweise Ihre
        Spracheinstellungen.
      </p>
      <p className="mb-4">
        Der Einsatz von Google Forms erfolgt auf Grundlage unseres berechtigten
        Interesses an einer möglichst nutzerfreundlichen Ermittlung Ihres
        Anliegens (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende
        Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
        auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG,
        soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
        Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
        Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
      </p>
      <p className="mb-4">
        Die von Ihnen im Formular eingegebenen Daten verbleiben bei uns, bis Sie
        uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
        widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach
        abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
        Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
      </p>
      <p className="mb-4">
        Weitere Informationen entnehmen Sie der Datenschutzerklärung von Google
        unter{' '}
        <Link
          href="https://policies.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://policies.google.com/
        </Link>
        .
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">Calendly</h3>
      <p className="mb-4">
        Auf unserer Website haben Sie die Möglichkeit, Termine mit uns zu
        vereinbaren. Für die Terminbuchung nutzen wir das Tool „Calendly“.
        Anbieter ist die Calendly LLC, 271 17th St NW, 10th Floor, Atlanta,
        Georgia 30363, USA (nachfolgend „Calendly“).
      </p>
      <p className="mb-4">
        Zum Zweck der Terminbuchung geben Sie die abgefragten Daten und den
        Wunschtermin in die dafür vorgesehene Maske ein. Die eingegebenen Daten
        werden für die Planung, Durchführung und ggf. für die Nachbereitung des
        Termins verwendet. Die Termindaten werden für uns auf den Servern von
        Calendly gespeichert, dessen Datenschutzerklärung Sie hier einsehen
        können:{' '}
        <Link
          href="https://calendly.com/de/pages/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://calendly.com/de/pages/privacy
        </Link>
        .
      </p>
      <p className="mb-4">
        Die von Ihnen eingegebenen Daten verbleiben bei uns, bis Sie uns zur
        Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder
        der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche
        Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
      </p>
      <p className="mb-4">
        Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f
        DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer
        möglichst unkomplizierten Terminvereinbarung mit Interessenten und
        Kunden. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt
        die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
        DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von
        Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z.
        B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung
        ist jederzeit widerrufbar.
      </p>
      <p className="mb-4">
        Die Datenübertragung in die USA wird auf die Standardvertragsklauseln
        der EU-Kommission gestützt. Details finden Sie hier:{' '}
        <Link
          href="https://calendly.com/pages/dpa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://calendly.com/pages/dpa
        </Link>
        .
      </p>

      <h2 className="mb-4 mt-6 text-2xl font-semibold">
        5. Analyse-Tools und Werbung
      </h2>
      <h3 className="mb-2 mt-4 text-xl font-semibold">Google Tag Manager</h3>
      <p className="mb-4">
        Wir setzen den Google Tag Manager ein. Anbieter ist die Google Ireland
        Limited, Gordon House, Barrow Street, Dublin 4, Irland.
      </p>
      <p className="mb-4">
        Der Google Tag Manager ist ein Tool, mit dessen Hilfe wir Tracking- oder
        Statistik-Tools und andere Technologien auf unserer Website einbinden
        können. Der Google Tag Manager selbst erstellt keine Nutzerprofile,
        speichert keine Cookies und nimmt keine eigenständigen Analysen vor. Er
        dient lediglich der Verwaltung und Ausspielung der über ihn
        eingebundenen Tools. Der Google Tag Manager erfasst jedoch Ihre
        IP-Adresse, die auch an das Mutterunternehmen von Google in die
        Vereinigten Staaten übertragen werden kann.
      </p>
      <p className="mb-4">
        Der Einsatz des Google Tag Managers erfolgt auf Grundlage von Art. 6
        Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse
        an einer schnellen und unkomplizierten Einbindung und Verwaltung
        verschiedener Tools auf seiner Website. Sofern eine entsprechende
        Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
        auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG,
        soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
        Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
        Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">Google Analytics</h3>
      <p className="mb-4">
        Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics.
        Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow
        Street, Dublin 4, Irland.
      </p>
      <p className="mb-4">
        Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der
        Websitebesucher zu analysieren. Hierbei erhält der Websitebetreiber
        verschiedene Nutzungsdaten, wie z. B. Seitenaufrufe, Verweildauer,
        verwendete Betriebssysteme und Herkunft des Nutzers. Diese Daten werden
        in einer User-ID zusammengefasst und dem jeweiligen Endgerät des
        Websitebesuchers zugeordnet.
      </p>
      <p className="mb-4">
        Des Weiteren können wir mit Google Analytics u. a. Ihre Maus- und
        Scrollbewegungen und Klicks aufzeichnen. Ferner verwendet Google
        Analytics verschiedene Modellierungsansätze, um die erfassten Datensätze
        zu ergänzen und setzt Machine-Learning-Technologien bei der Datenanalyse
        ein.
      </p>
      <p className="mb-4">
        Google Analytics verwendet Technologien, die die Wiedererkennung des
        Nutzers zum Zwecke der Analyse des Nutzerverhaltens ermöglichen (z. B.
        Cookies oder Device-Fingerprinting). Die von Google erfassten
        Informationen über die Benutzung dieser Website werden in der Regel an
        einen Server von Google in den USA übertragen und dort gespeichert.
      </p>
      <p className="mb-4">
        Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung
        nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG. Die Einwilligung
        ist jederzeit widerrufbar.
      </p>
      <p className="mb-4">
        Die Datenübertragung in die USA wird auf die Standardvertragsklauseln
        der EU-Kommission gestützt. Details finden Sie hier:{' '}
        <Link
          href="https://privacy.google.com/businesses/controllerterms/mccs/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://privacy.google.com/businesses/controllerterms/mccs/
        </Link>
        .
      </p>

      <h4 className="mb-2 mt-2 text-lg font-medium">Browser Plugin</h4>
      <p className="mb-4">
        Sie können die Erfassung und Verarbeitung Ihrer Daten durch Google
        verhindern, indem Sie das unter dem folgenden Link verfügbare
        Browser-Plugin herunterladen und installieren:{' '}
        <Link
          href="https://tools.google.com/dlpage/gaoptout?hl=de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://tools.google.com/dlpage/gaoptout?hl=de
        </Link>
        .
      </p>
      <p className="mb-4">
        Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics
        finden Sie in der Datenschutzerklärung von Google:{' '}
        <Link
          href="https://support.google.com/analytics/answer/6004245?hl=de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://support.google.com/analytics/answer/6004245?hl=de
        </Link>
        .
      </p>

      <h4 className="mb-2 mt-2 text-lg font-medium">Google-Signale</h4>
      <p className="mb-4">
        Wir nutzen Google-Signale. Wenn Sie unsere Website besuchen, erfasst
        Google Analytics u. a. Ihren Standort, Suchverlauf und YouTube-Verlauf
        sowie demografische Daten (Besucherdaten). Diese Daten können mit Hilfe
        von Google-Signal für personalisierte Werbung verwendet werden. Wenn Sie
        über ein Google-Konto verfügen, werden die Besucherdaten von
        Google-Signal mit Ihrem Google-Konto verknüpft und für personalisierte
        Werbebotschaften verwendet. Die Daten werden außerdem für die Erstellung
        anonymisierter Statistiken zum Nutzerverhalten unserer User verwendet.
      </p>

      <h4 className="mb-2 mt-2 text-lg font-medium">Auftragsverarbeitung</h4>
      <p className="mb-4">
        Wir haben mit Google einen Vertrag zur Auftragsverarbeitung
        abgeschlossen und setzen die strengen Vorgaben der deutschen
        Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">LinkedIn Insight Tag</h3>
      <p className="mb-4">
        Diese Website nutzt das Insight-Tag von LinkedIn. Anbieter dieses
        Dienstes ist die LinkedIn Ireland Unlimited Company, Wilton Plaza,
        Wilton Place, Dublin 2, Irland.
      </p>

      <h4 className="mb-2 mt-2 text-lg font-medium">
        Datenverarbeitung durch LinkedIn Insight Tag
      </h4>
      <p className="mb-4">
        Mit Hilfe des LinkedIn Insight Tags erhalten wir Informationen über die
        Besucher unserer Website. Ist ein Websitebesucher bei LinkedIn
        registriert, können wir u. a. die beruflichen Eckdaten (z. B.
        Karrierestufe, Unternehmensgröße, Land, Standort, Branche und
        Berufsbezeichnung) unserer Websitebesucher analysieren und so unsere
        Seite besser auf die jeweiligen Zielgruppen ausrichten. Ferner können
        wir mit Hilfe von LinkedIn Insight Tags messen, ob die Besucher unserer
        Webseiten einen Kauf oder eine sonstige Aktion tätigen
        (Conversion-Messung). Die Conversion-Messung kann auch
        geräteübergreifend erfolgen (z. B. von PC zu Tablet). LinkedIn Insight
        Tag bietet außerdem eine Retargeting-Funktion an, mit deren Hilfe wir
        den Besuchern unserer Website zielgerichtete Werbung außerhalb der
        Website anzeigen lassen können, wobei laut LinkedIn keine Identifikation
        des Werbeadressaten stattfindet.
      </p>
      <p className="mb-4">
        LinkedIn selbst erfasst außerdem sogenannte Logfiles (URL, Referrer-URL,
        IP-Adresse, Geräte- und Browsereigenschaften und Zeitpunkt des
        Zugriffs). Die IP-Adressen werden gekürzt oder (sofern sie genutzt
        werden, um LinkedIn-Mitglieder geräteübergreifend zu erreichen) gehasht
        (pseudonymisiert). Die direkten Kennungen der LinkedIn-Mitglieder werden
        nach sieben Tagen von LinkedIn gelöscht. Die verbleibenden
        pseudonymisierten Daten werden dann innerhalb von 180 Tagen gelöscht.
      </p>
      <p className="mb-4">
        Die von LinkedIn erhobenen Daten können von uns als Websitebetreiber
        nicht bestimmten Einzelpersonen zugeordnet werden. LinkedIn wird die
        erfassten personenbezogenen Daten der Websitebesucher auf seinen Servern
        in den USA speichern und sie im Rahmen eigener Werbemaßnahmen nutzen.
        Details entnehmen Sie der Datenschutzerklärung von LinkedIn unter{' '}
        <Link
          href="https://www.linkedin.com/legal/privacy-policy#choices-oblig"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://www.linkedin.com/legal/privacy-policy#choices-oblig
        </Link>
        .
      </p>

      <h4 className="mb-2 mt-2 text-lg font-medium">Rechtsgrundlage</h4>
      <p className="mb-4">
        Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der Einsatz
        des o. g. Dienstes ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
        DSGVO und § 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Soweit
        keine Einwilligung eingeholt wurde, erfolgt die Verwendung dieses
        Dienstes auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO; der
        Websitebetreiber hat ein berechtigtes Interesse an effektiven
        Werbemaßnahmen unter Einschluss der sozialen Medien.
      </p>
      <p className="mb-4">
        Die Datenübertragung in die USA wird auf die Standardvertragsklauseln
        der EU-Kommission gestützt. Details finden Sie hier:{' '}
        <Link
          href="https://www.linkedin.com/legal/l/dpa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://www.linkedin.com/legal/l/dpa
        </Link>{' '}
        und{' '}
        <Link
          href="https://www.linkedin.com/legal/l/eu-sccs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://www.linkedin.com/legal/l/eu-sccs
        </Link>
        .
      </p>

      <h4 className="mb-2 mt-2 text-lg font-medium">
        Widerspruch gegen die Verwendung von LinkedIn Insight Tag
      </h4>
      <p className="mb-4">
        Der Analyse des Nutzungsverhaltens sowie zielgerichtete Werbung durch
        LinkedIn unter folgendem Link widersprechen:{' '}
        <Link
          href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
        </Link>
        .
      </p>
      <p className="mb-4">
        Des Weiteren können Mitglieder von LinkedIn die Nutzung ihrer
        personenbezogenen Daten zu Werbezwecken in den Kontoeinstellungen
        steuern. Um einer Verknüpfung von auf unserer Website erhobenen Daten
        durch LinkedIn und Ihrem LinkedIn Account zu vermeiden, müssen Sie sich
        aus Ihrem LinkedIn-Account ausloggen bevor Sie unsere Website aufsuchen.
      </p>

      <h2 className="mb-4 mt-6 text-2xl font-semibold">6. Plugins und Tools</h2>
      <h3 className="mb-2 mt-4 text-xl font-semibold">Google Web Fonts</h3>
      <p className="mb-4">
        Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
        genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf
        einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren
        Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
      </p>
      <p className="mb-4">
        Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den
        Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber,
        dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung
        von Google WebFonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
        DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der
        einheitlichen Darstellung des Schriftbildes auf seiner Website. Sofern
        eine entsprechende Einwilligung abgefragt wurde, erfolgt die
        Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO
        und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von
        Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z.
        B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung
        ist jederzeit widerrufbar.
      </p>
      <p className="mb-4">
        Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift
        von Ihrem Computer genutzt.
      </p>
      <p className="mb-4">
        Weitere Informationen zu Google Web Fonts finden Sie unter{' '}
        <Link
          href="https://developers.google.com/fonts/faq"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://developers.google.com/fonts/faq
        </Link>{' '}
        und in der Datenschutzerklärung von Google:{' '}
        <Link
          href="https://policies.google.com/privacy?hl=de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://policies.google.com/privacy?hl=de
        </Link>
        .
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">Font Awesome</h3>
      <p className="mb-4">
        Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten und
        Symbolen Font Awesome. Anbieter ist die Fonticons, Inc., 6 Porter Road
        Apartment 3R, Cambridge, Massachusetts, USA.
      </p>
      <p className="mb-4">
        Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in ihren
        Browsercache, um Texte, Schriftarten und Symbole korrekt anzuzeigen. Zu
        diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den
        Servern von Font Awesome aufnehmen. Hierdurch erlangt Font Awesome
        Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen
        wurde. Die Nutzung von Font Awesome erfolgt auf Grundlage von Art. 6
        Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an der
        einheitlichen Darstellung des Schriftbildes auf unserer Website. Sofern
        eine entsprechende Einwilligung abgefragt wurde, erfolgt die
        Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO
        und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von
        Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z.
        B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung
        ist jederzeit widerrufbar.
      </p>
      <p className="mb-4">
        Wenn Ihr Browser Font Awesome nicht unterstützt, wird eine
        Standardschrift von Ihrem Computer genutzt.
      </p>
      <p className="mb-4">
        Weitere Informationen zu Font Awesome finden Sie in der
        Datenschutzerklärung von Font Awesome unter:{' '}
        <Link
          href="https://fontawesome.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://fontawesome.com/privacy
        </Link>
        .
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">Google reCAPTCHA</h3>
      <p className="mb-4">
        Wir nutzen „Google reCAPTCHA“ (im Folgenden „reCAPTCHA“) auf dieser
        Website. Anbieter ist die Google Ireland Limited („Google“), Gordon
        House, Barrow Street, Dublin 4, Irland.
      </p>
      <p className="mb-4">
        Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf dieser
        Website (z. B. in einem Kontaktformular) durch einen Menschen oder durch
        ein automatisiertes Programm erfolgt. Hierzu analysiert reCAPTCHA das
        Verhalten des Websitebesuchers anhand verschiedener Merkmale. Diese
        Analyse beginnt automatisch, sobald der Websitebesucher die Website
        betritt. Zur Analyse wertet reCAPTCHA verschiedene Informationen aus (z.
        B. IP-Adresse, Verweildauer des Websitebesuchers auf der Website oder
        vom Nutzer getätigte Mausbewegungen). Die bei der Analyse erfassten
        Daten werden an Google weitergeleitet.
      </p>
      <p className="mb-4">
        Die reCAPTCHA-Analysen laufen vollständig im Hintergrund.
        Websitebesucher werden nicht darauf hingewiesen, dass eine Analyse
        stattfindet.
      </p>
      <p className="mb-4">
        Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6
        Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse
        daran, seine Webangebote vor missbräuchlicher automatisierter Ausspähung
        und vor SPAM zu schützen. Sofern eine entsprechende Einwilligung
        abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage
        von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die
        Einwilligung die Speicherung von Cookies oder den Zugriff auf
        Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
        Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
      </p>
      <p className="mb-4">
        Weitere Informationen zu Google reCAPTCHA entnehmen Sie den
        Google-Datenschutzbestimmungen und den Google Nutzungsbedingungen unter
        folgenden Links:{' '}
        <Link
          href="https://policies.google.com/privacy?hl=de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://policies.google.com/privacy?hl=de
        </Link>{' '}
        und{' '}
        <Link
          href="https://policies.google.com/terms?hl=de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://policies.google.com/terms?hl=de
        </Link>
        .
      </p>

      <h2 className="mb-4 mt-6 text-2xl font-semibold">
        7. Audio- und Videokonferenzen
      </h2>
      <h4 className="mb-2 mt-2 text-lg font-medium">Datenverarbeitung</h4>
      <p className="mb-4">
        Für die Kommunikation mit unseren Kunden setzen wir unter anderen
        Online-Konferenz-Tools ein. Die im Einzelnen von uns genutzten Tools
        sind unten aufgelistet. Wenn Sie mit uns per Video- oder Audiokonferenz
        via Internet kommunizieren, werden Ihre personenbezogenen Daten von uns
        und dem Anbieter des jeweiligen Konferenz-Tools erfasst und verarbeitet.
      </p>
      <p className="mb-4">
        Die Konferenz-Tools erfassen dabei alle Daten, die Sie zur Nutzung der
        Tools bereitstellen/einsetzen (E-Mail-Adresse und/oder Ihre
        Telefonnummer). Ferner verarbeiten die Konferenz-Tools die Dauer der
        Konferenz, Beginn und Ende (Zeit) der Teilnahme an der Konferenz, Anzahl
        der Teilnehmer und sonstige „Kontextinformationen“ im Zusammenhang mit
        dem Kommunikationsvorgang (Metadaten).
      </p>
      <p className="mb-4">
        Des Weiteren verarbeitet der Anbieter des Tools alle technischen Daten,
        die zur Abwicklung der Online-Kommunikation erforderlich sind. Dies
        umfasst insbesondere IP-Adressen, MAC-Adressen, Geräte-IDs, Gerätetyp,
        Betriebssystemtyp und -version, Client-Version, Kameratyp, Mikrofon oder
        Lautsprecher sowie die Art der Verbindung.
      </p>
      <p className="mb-4">
        Sofern innerhalb des Tools Inhalte ausgetauscht, hochgeladen oder in
        sonstiger Weise bereitgestellt werden, werden diese ebenfalls auf den
        Servern der Tool-Anbieter gespeichert. Zu solchen Inhalten zählen
        insbesondere Cloud-Aufzeichnungen, Chat-/ Sofortnachrichten, Voicemails
        hochgeladene Fotos und Videos, Dateien, Whiteboards und andere
        Informationen, die während der Nutzung des Dienstes geteilt werden.
      </p>
      <p className="mb-4">
        Bitte beachten Sie, dass wir nicht vollumfänglich Einfluss auf die
        Datenverarbeitungsvorgänge der verwendeten Tools haben. Unsere
        Möglichkeiten richten sich maßgeblich nach der Unternehmenspolitik des
        jeweiligen Anbieters. Weitere Hinweise zur Datenverarbeitung durch die
        Konferenztools entnehmen Sie den Datenschutzerklärungen der jeweils
        eingesetzten Tools, die wir unter diesem Text aufgeführt haben.
      </p>

      <h4 className="mb-2 mt-2 text-lg font-medium">
        Zweck und Rechtsgrundlagen
      </h4>
      <p className="mb-4">
        Die Konferenz-Tools werden genutzt, um mit angehenden oder bestehenden
        Vertragspartnern zu kommunizieren oder bestimmte Leistungen gegenüber
        unseren Kunden anzubieten (Art. 6 Abs. 1 lit. b DSGVO). Des Weiteren
        dient der Einsatz der Tools der allgemeinen Vereinfachung und
        Beschleunigung der Kommunikation mit uns bzw. unserem Unternehmen
        (berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO). Soweit
        eine Einwilligung abgefragt wurde, erfolgt der Einsatz der betreffenden
        Tools auf Grundlage dieser Einwilligung; die Einwilligung ist jederzeit
        mit Wirkung für die Zukunft widerrufbar.
      </p>

      <h4 className="mb-2 mt-2 text-lg font-medium">Speicherdauer</h4>
      <p className="mb-4">
        Die unmittelbar von uns über die Video- und Konferenz-Tools erfassten
        Daten werden von unseren Systemen gelöscht, sobald Sie uns zur Löschung
        auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
        für die Datenspeicherung entfällt. Gespeicherte Cookies verbleiben auf
        Ihrem Endgerät, bis Sie sie löschen. Zwingende gesetzliche
        Aufbewahrungsfristen bleiben unberührt.
      </p>
      <p className="mb-4">
        Auf die Speicherdauer Ihrer Daten, die von den Betreibern der
        Konferenz-Tools zu eigenen Zwecken gespeichert werden, haben wir keinen
        Einfluss. Für Einzelheiten dazu informieren Sie sich bitte direkt bei
        den Betreibern der Konferenz-Tools.
      </p>

      <h4 className="mb-2 mt-2 text-lg font-medium">
        Eingesetzte Konferenz-Tools
      </h4>
      <p className="mb-4">Wir setzen folgende Konferenz-Tools ein:</p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">Zoom</h3>
      <p className="mb-4">
        Wir nutzen Zoom. Anbieter dieses Dienstes ist die Zoom Communications
        Inc., San Jose, 55 Almaden Boulevard, 6th Floor, San Jose, CA 95113,
        USA. Details zur Datenverarbeitung entnehmen Sie der
        Datenschutzerklärung von Zoom:{' '}
        <Link
          href="https://zoom.us/de-de/privacy.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://zoom.us/de-de/privacy.html
        </Link>
        .
      </p>
      <p className="mb-4">
        Die Datenübertragung in die USA wird auf die Standardvertragsklauseln
        der EU-Kommission gestützt. Details finden Sie hier:{' '}
        <Link
          href="https://zoom.us/de-de/privacy.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://zoom.us/de-de/privacy.html
        </Link>
        .
      </p>

      <h3 className="mb-2 mt-4 text-xl font-semibold">Google Meet</h3>
      <p className="mb-4">
        Wir nutzen Google Meet. Anbieter ist die Google Ireland Limited, Gordon
        House, Barrow Street, Dublin 4, Irland. Details zur Datenverarbeitung
        entnehmen Sie der Datenschutzerklärung von Google:{' '}
        <Link
          href="https://policies.google.com/privacy?hl=de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://policies.google.com/privacy?hl=de
        </Link>
        .
      </p>

      <h2 className="mb-4 mt-6 text-2xl font-semibold">8. Eigene Dienste</h2>
      <h3 className="mb-2 mt-4 text-xl font-semibold">Google Drive</h3>
      <p className="mb-4">
        Wir haben Google Drive auf dieser Website eingebunden. Anbieter ist die
        Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin
        4, Irland.
      </p>
      <p className="mb-4">
        Google Drive ermöglicht es uns, einen Uploadbereich auf unserer Website
        einzubinden, in dem Sie Inhalte hochladen können. Wenn Sie Inhalte
        hochladen, werden diese auf den Servern von Google Drive gespeichert.
        Wenn Sie unsere Website betreten, wird außerdem eine Verbindung zu
        Google Drive aufgebaut, sodass Google Drive feststellen kann, dass Sie
        unsere Website besucht haben.
      </p>
      <p className="mb-4">
        Die Verwendung von Google Drive erfolgt auf Grundlage von Art. 6 Abs. 1
        lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an
        einem zuverlässigen Uploadbereich auf seiner Website. Sofern eine
        entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
        ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die
        Einwilligung ist jederzeit widerrufbar.
      </p>
    </LegalLayout>
  )
}
