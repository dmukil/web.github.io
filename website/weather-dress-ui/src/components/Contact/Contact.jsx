/**
 * `Contact` Page for the Weather Dress App
 * Created on April 7, 2019
 *
 * @author Ralph Florent <r.florent@jacobs-university.de>
 */
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GoogleMaps from './GoogleMaps';

/**
 * `Contact` Component definition
 * @see {link https://react-bootstrap.netlify.com/components/forms/#forms}
 * for more info on react-bootstrap/Form
 */
export default class Contact extends Component {

    render() {
        return (
            <div className="container" style={{ margin: '1%' }}>
                <div className="row">
                    <div className="col-md-6">
                        <GoogleMaps />
                    </div>
                    <div className="col-md-6" >
                        <h2><i class="fa fa-info-circle"></i> &nbsp; Contact Us</h2>
                        <hr />
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Select topic</Form.Label>
                                <Form.Control as="select">
                                    <option>Billing</option>
                                    <option>General inquiries</option>
                                    <option>Terms and conditions</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Write here your question</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>

                <div className="row col-sm-12" style={{ marginTop: 20, display: 'block'}}>
                    <h3>Legal Imprint</h3>

                    <p>{ `Diese Webpräsenz ist eine studentische Übungaufgabe, repräsentiert in keiner
                        Weise Jacobs University Bremen gGmbH und wird nicht von ihr überwacht.
                        Nachfolgend möchten wir Sie über den Umgang mit Ihren Daten gem. Art. 13
                        Datenschutzgrundverordnung (DSGVO) informieren.` }
                    </p>

                    <h5>Verantwortlicher</h5>
                    <p>{`Verantwortlich für die nachfolgend dargestellte Datenerhebung und Verarbeitung ist die im Impressum genannte Stelle.`}</p>

                    <h5>Nutzungsdaten</h5>
                    <p>Wir speichern keine Nutzungsdaten.</p>

                    <h5>{`Datenübermittlung an Dritte`}</h5>
                    <p>{`Wir übermitteln Ihre personenbezogenen Daten nicht an Dritte.`}</p>

                    <h5>{`Ihre Rechte als Nutzer`}</h5>
                    <p>{`Bei Verarbeitung Ihrer personenbezogenen Daten gewährt die DSGVO Ihnen als Webseitennutzer bestimmte Rechte:`}</p>

                    <ol className="list-style">
                        <li>Auskunftsrecht (Art. 15 DSGVO):
                            <p>{`Sie haben das Recht eine Bestätigung darüber zu verlangen, ob sie betreffende personenbezogene Daten verarbeitet werden; ist dies der Fall, so haben Sie ein Recht auf Auskunft über diese personenbezogenen Daten und auf die in Art. 15 DSGVO im einzelnen aufgeführten Informationen.`}</p>
                        </li>
                        <li>{`Recht auf Berichtigung und Löschung (Art. 16 und 17 DSGVO):`}
                            <p>{` Sie haben das Recht, unverzüglich die Berichtigung sie betreffender unrichtiger personenbezogener Daten und ggf. die Vervollständigung unvollständiger personenbezogener Daten zu verlangen.
                                Sie haben zudem das Recht, zu verlangen, dass sie betreffende personenbezogene Daten unverzüglich gelöscht werden, sofern einer der in Art. 17 DSGVO im einzelnen aufgeführten Gründe zutrifft, z. B. wenn die Daten für die verfolgten Zwecke nicht mehr benötigt werden.`}</p>
                        </li>
                        <li>
                            {`Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):`}
                            <p>{`Sie haben das Recht, die Einschränkung der Verarbeitung zu verlangen, wenn eine der in Art. 18 DSGVO aufgeführten Voraussetzungen gegeben ist, z. B. wenn Sie Widerspruch gegen die Verarbeitung eingelegt haben, für die Dauer einer etwaigen Prüfung.`}</p>
                        </li>
                        <li>
                            {`Recht auf Datenübertragbarkeit (Art. 20 DSGVO):`}
                            <p>{`In bestimmten Fällen, die in Art. 20 DSGVO im Einzelnen aufgeführt werden, haben Sie das Recht, die sie betreffenden personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten bzw. die Übermittlung dieser Daten an einen Dritten zu verlangen.`}</p>
                        </li>
                        <li>
                            {`Widerspruchsrecht (Art. 21 DSGVO):`}
                            <p>{`Werden Daten auf Grundlage von Art. 6 Abs. 1 lit. f erhoben (Datenverarbeitung zur Wahrung berechtigter Interessen), steht Ihnen das Recht zu, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Widerspruch einzulegen. Wir verarbeiten die personenbezogenen Daten dann nicht mehr, es sei denn, es liegen nachweisbar zwingende schutzwürdige Gründe für die Verarbeitung vor, die die Interessen, Rechte und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.`}</p>
                        </li>
                        <li>
                            {`Beschwerderecht bei einer Aufsichtsbehörde:`}
                            <p>{`Sie haben gem. Art. 77 DSGVO das Recht auf Beschwerde bei einer Aufsichtsbehörde, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden Daten gegen datenschutzrechtliche Bestimmungen verstößt. Das Beschwerderecht kann insbesondere bei einer Aufsichtsbehörde in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes geltend gemacht werden.`}</p>
                        </li>
                    </ol>

                    <h5>{`Kontaktdaten:`}</h5>
                    <p>Contact Details: contact at weatherdress dot de,
                        d dot ayresdeoliveira at jacobs-university dot de,
                        f dot mammo at jacobs-university dot de,
                        g dot ciodaro at jacobs-university dot de,
                        m dot deivamani at jacobs-university dot de,
                        r dot florent at jacobs-university dot de,
                        PROTECTED AGAINST SPAM BOTS
                    </p>

                    <hr/>
                    <h5>English Version</h5>
                    <p>
                        {`This website represents student homework, it does not represent Jacobs
                        University Bremen gGmbH in any way, nor is it checked by it. We would like to
                        inform you about the management of your personal data in accordance with Art. 13
                        General Data Protection Regulation (GDPR).`}
                    </p>

                    <h5>Controller</h5>
                    <p>The controller responsible for the described data collection and processing is named in the imprint.</p>

                    <h5>Storage of Your IP address</h5>
                    <p>We do not store the IP address transmitted by your web browser.</p>

                    <h5>Usage Data</h5>
                    <p>We do not store any usage data.</p>

                    <h5>Data Transfer to Third Parties</h5>
                    <p>We do not transfer your personal data to third parties.</p>

                    <h5>Your Rights as a User</h5>
                    <p>As a website user, the GDPR grants you certain rights when processing your personal data.</p>

                    <ol className="list-style">
                        <li>Right of access (Art. 15 GDPR):
                            <p>You have the right to obtain confirmation at to whether or not personal data concerning you is being processed, and, where that is the case access to the personal data and the information specified in Art. 15 GDPR.</p>
                        </li>
                        <li>Right to rectification and erasure (Art. 16 and 17 GDPR):
                            <p>You have the right to obtain without undue delay the rectification of inaccurate personal data concerning you and, if necessary, the right to have incomplete person-al data completed.
                            You also have the right to obtain an erasure of the personal data concerning you without undue delay, if one of the reasons listed in Art. 17 GDPR applies, e.g. if the data is no longer necessary for the intended purpose.</p>
                        </li>
                        <li>
                        Right to restriction of processing (Art. 18 GDPR):
                            <p>If one of the conditions set forth in Art. 18 GDPR applies, you shall have the right to restrict the processing of your data to mere storage, e.g. if you revoke consent, to the processing, for the duration of a possible examination.</p>
                        </li>
                        <li>
                        Right to data portability (Art. 20 GDPR):
                            <p>In certain situations, listed in Art. 20 GDPR, you have the right to receive the personal data concerning you in a structured, common and machine-readable format or demand a transmission of the data to another third party.</p>
                        </li>
                        <li>
                        Right to object (Art. 21 GDPR):
                            <p>If the data is processed pursuant to Art. 6 para. 1 s. 1 lit. f GDPR (data processing for the purposes of the legitimate interests), you have the right to object to the processing at any time for reasons arising out of your particular situation. We will then no longer process personal data, unless there are demonstrably compelling legitimate grounds for processing, which override the interests, rights and freedoms of the person concerned, or the processing serves the purpose of asserting, exercising or defending legal claims.</p>
                        </li>
                        <li>
                        Right to lodge a complaint with a supervisory authority:
                            <p>Pursuant to Art. 77 GDPR, you have the right to lodge a complaint with a supervisory authority if you consider the processing of the data concerning you infringes data protection regulations. The right to lodge a complaint may be invoked in particular in the Member State of your habitual residence, place of work or the place of the alleged infringement.</p>
                        </li>
                    </ol>

                    <h5>Contact Details</h5>
                    <p>Contact Details: contact at weatherdress dot de,
                        d dot ayresdeoliveira at jacobs-university dot de,
                        f dot mammo at jacobs-university dot de,
                        g dot ciodaro at jacobs-university dot de,
                        m dot deivamani at jacobs-university dot de,
                        r dot florent at jacobs-university dot de,
                        PROTECTED AGAINST SPAM BOTS
                    </p>
                </div>
            </div>
        );
    }
}