"use client"
import { useState } from "react";
import "../../styles/policies.css";
import { Metadata } from "next";


export const metadata: Metadata = {
  //metadataBase: new URL("put the home url here later"),
  title: "",
  description: "",
  openGraph:{ // og:title and so on
    title: "",
    description: "",
    type:"website",
    locale:"en_US",
    //url:"" to be added later
    siteName:"Sport Endorse"
  },
};

export default function PrivacyPolicyPage() {

  const [showPrivacy, setShowPrivacy] = useState(true);
  const [showCookie, setShowCookie] = useState(false);

  return (
    <>
      <main>
        <div className="section">
          <h2 onClick={() => setShowPrivacy((v) => !v)}>
            Privacy Policy {showPrivacy ? "▲" : "▼"}
          </h2>
          <div className={showPrivacy ? "" : "hidden"}>
            <p>
              <strong>Privacy Policy - Overview</strong><br />
              Sport Endorse Ltd. takes data privacy seriously and we are committed to protecting and respecting your privacy. This privacy notice describes how and why we, as data controller, obtain, store and process personal data. For the purpose of this Privacy Notice, we&apos;ll just call them our “Services”. Personal data is information relating to you that enables us to identify you, for example, your name, email address, payment details and information about your access to this website.
              <br /><br />
              We will process your personal data fairly, lawfully and transparently. This privacy notice describes the personal data we are collecting about you and how it is used. We will only collect and use your personal data for the following purposes, to:
              <br />· provide our services
              <br />· improve our services
              <br />· make our marketing more relevant to you and your interests
              <br />· meet our legal responsibilities
              <br /><br />
              We may update this notice from time to time and we will notify you of any changes.
              <br /><br />
              Please do not hesitate to contact us if you have questions in addition to the information provided in this notice - info@sportendorse.com
              <br /><br />
              <strong>Who Are We?</strong><br />
              When we refer to &apos;we&apos;(or &apos;our&apos;or &apos;us&apos;), that means Sport Endorse Ltd. Our headquarters are in Dublin, Ireland.
              <br /><br />
              For more information about who we are and what we do, visit the Sport Endorse Ltd. website.
              <br /><br />
              <strong>Your Rights & Our Commitment to You</strong><br />
              Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA)
              <br /><br />
              Under Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA) your rights include, with certain legal restrictions, the below:
              <br /><br />
              Right of Access or Rectification: you have the right to ask us for copies of the personal data we hold about you. You are also entitled to have your personal data corrected or updated if it is inaccurate.
              <br /><br />
              Right to Withdraw Consent: in cases where we are relying on your consent for the processing of your personal data, you have the right to withdraw your consent at any time. In respect of the e-marketing we conduct, an unsubscribe (withdraw consent) option is included with every e-marketing communication we send.
              <br /><br />
              <strong>EEA and UK General Data Protection Regulation (EU GDPR and UK GDPR)</strong><br />
              Users located in the UK or European Economic Area (EEA) have the above rights as well as the below under the EU GDPR and UK GDPR.
              <br /><br />
              Right of erasure: you have the right of access to personal data erased if we do not have a legitimate reason for retaining your data.
              <br /><br />
              Right to data portability: you have the right to obtain a digital copy of your personal data, request the transfer of your personal data to another company or request to move your data from one IT system to another in a safe and secure way. This right only applies to personal data you provide to us, and we process it with your consent or in order to fulfil our contract with you by automated means. It also only applies to the extent that it does not affect the rights and freedoms of others.
              <br /><br />
              Right to restriction of processing: you have the right to restrict the processing of your personal data where you are contesting the accuracy of that information, you have objected to processing (as described below), or where the processing is unlawful. Where processing is restricted, we are may need to retain sufficient information about you to ensure that the restriction is respected in future.
              <br /><br />
              Right to object to processing: you have the right to object to the processing of your personal information in certain circumstances such as where your personal data is being processed based on our legitimate interests or the legitimate interests of a third party.
              <br /><br />
              To object to automated decision-making including profiling: you have the right not to be the subject of any automated decision-making or profiling by us.
              <br /><br />
              To complain to the relevant supervisory authority: should you have any concerns or complaints regarding the way in which we process your data, you also have the right to make a complaint to the relevant European Supervisory Authority. We would, however, appreciate the chance to deal with your concerns before you approach a Supervisory Authority, so please do contact us in the first instance on info@sportendorse.com. The contact details of European Supervisory Authorities can be found here: https://edpb.europa.eu/about-edpb/about-edpb/members_en#member-lv
              <br /><br />
              <strong>Cookie Preferences:</strong> you can accept or reject cookies by navigating to the &apos;Cookie Preferences&apos;Area in our Privacy Center on our website. You can also do so by adjusting your web browser controls.
              <br /><br />
              Please consult our Cookie Policy for more information about our use of cookies on the website and how to accept and reject them.
              <br /><br />
              <strong>The Personal Data We Collect</strong><br />
              Personal data means any information about an individual from which that person can be identified. It does not include anonymised data, where the identity and identifying information has been removed.
              <br /><br />
              Depending on the type and level of engagement you have with us, we may collect the following categories of personal data:
              <br /><br />
              <strong>From the Services:</strong> We receive and store information you provide directly to us. For example, when setting up new users, we collect Personal Information, such as name and e-mail address, to provide them with the Services. The types of information we may collect directly from our customers and their users include: name, email address gender, date of birth, other registration details, transactional information (including Services purchased), as well as any other contact or other information they choose to provide us or upload to our systems in connection with the Services.
              <br /><br />
              <strong>From our Website:</strong> We may collect any Personal Information that you choose to send to us or provide to us, for example, on our “GET IN TOUCH” online form. If you contact us through the Website, we will keep a record of our correspondence.
              <br /><br />
              <strong>Information We Automatically Collect:</strong>
              <br /><br />
              <strong>When you use our Services:</strong>
              <br />· Usage information - we keep track of user activity in relation to the types of Services our customers and their users use, the configuration of their computers, and performance metrics related to their use of our Services.
              <br />· Log information - we log information about our customers and their users when you use one of our Services including Internet Protocol (“IP”) address.
              <br />· Information collected by cookies and other similar technologies - we use various technologies to collect information which may include saving cookies to users&apos;computers.
              <br />· Customer Feedback - While using our Services, you may be asked to provide feedback (e.g. in the software directly or after receiving help from our support team). Providing this feedback is entirely optional.
              <br /><br />
              <strong>When you use the Website:</strong> When you visit the Website, we collect certain information related to your device, such as your device&apos;s IP address, referring website, what pages your device visited, and the time that your device visited our Website.
              <br /><br />
              <strong>How We Collect Your Data</strong><br />
              We may collect your personal data in one of the following ways:
              <br />· When you visit our website
              <br />· When you create an account
              <br />· When you engage with us on social media
              <br />· When you contact us with queries
              <br />· When you review our services
              <br />· When you apply for an employment vacancy with Sport Endorse Ltd.
              <br /><br />
              <strong>Data from Third parties</strong><br />
              We may also receive personal data about you from various third parties, including:
              <br />· Technical Data from third parties, including analytics providers such as Google. Please see further information in the section entitled &apos;Marketing preferences, adverts and cookies&apos;below.
              <br />· Technical Data from affiliate networks through whom you have accessed our website.
              <br />· Identity and Contact Data from social media platforms when you log in to our website using such social media platforms.
              <br />· Contact, Financial and Transaction Data from providers of technical, payment and delivery services.
              <br /><br />
              <strong>How We Use Your Personal Data</strong><br />
              The legal basis for processing your personal data
              <br /><br />
              We will only collect and process your personal data where we have a legal basis to do so. As a data controller, the legal basis for our collection and use of your personal data varies depending on the manner and purpose for which we collected it. We will only collect personal data from you when:
              <br />· we have your consent to do so, or
              <br />· we need your personal data to perform a contract with you. For example, to provide you with our service to you, or
              <br />· pursuing our legitimate interests in a way that you might reasonably expect to be a part of running our business and that does not significantly impact your interests, rights and freedoms, for example, showing Sport Endorse Ltd. advertisements to you as you browse the internet.
              <br />· we have a legal obligation to collect or disclose personal data from you (e.g. in suspected instances of fraud where we need to give personal data to An Garda Siochana or a government body).
              <br /><br />
              This is why we process your personal data:
              <br />· Set up a user account
              <br />· Provide, operate and maintain our services
              <br />· Process and complete transactions, and send related information, including transaction confirmations and invoices
              <br />· Manage our customers&apos;use of our services, respond to enquiries and comments and provide customer service and support;
              <br />· Send customers technical alerts, updates, security notifications, and administrative communications
              <br />· Investigate and prevent fraudulent activities, unauthorised access to our services, and other illegal activities; and
              <br />· For any other purposes about which we notify customers and users.
              <br />· We use your Personal Information in this context based on the contract that we have in place with you or our legitimate interest for security purposes (e.g. the prevention and investigation of fraudulent activities). Personal Information will be deleted based on the terms of the contract.
              <br /><br />
              <strong>How We Share Your Data</strong><br />
              We sometimes share your personal data with our trusted categories of third parties we use to conduct our business, for example, to provide our Privacy Centre services to you; to handle feedback and complaints; and to help us understand your behaviour in order to customise and maximise our services, advertising, marketing, competitions and offers to you.
              <br /><br />
              Our trusted categories of third parties include website hosts, cloud service providers, social media providers, professional services providers, customer survey service providers and advertising partners.
              <br /><br />
              As part of our e-marketing methods and on the basis of our legitimate business interests, we use some Google services products in accordance with the practices explained in the Google terms and privacy notices. In order to protect your personal data by pseudonymising it, Google ensure that a hashing algorithm is applied automatically at the point of sharing personal data with Google. Please consult their relevant terms and privacy notices for further information and your options. If we can help you in any way please do not hesitate to contact us at info@sportendorse.com.
              <br /><br />
              As part of our fraud monitoring, detection and prevention methods and on the basis of our legitimate business interests, we use a third-party fraud monitoring, detection and prevention service provider for all website/online sales. As part of this service, we may share personal data that is required to make identity checks and personal data that we obtain from making identity checks (including data relating to your age, name and location), together with account information, with third party organisations (including law enforcement agencies), involved in fraud prevention and detection and credit risk reduction. Please note that these third parties may retain a record of the information that we provide to them for this purpose.
              <br /><br />
              We may share your personal data with government bodies and law enforcement.
              <br /><br />
              We may also share your personal data with our professional advisers including lawyers, bankers, auditors and insurers who provide consultancy, banking, legal, insurance and accounting services.
              <br /><br />
              <strong>Marketing Preferences, Adverts and Cookies</strong><br /><br />
              <strong>Marketing - Your Preferences</strong><br />
              We may send you marketing communications and promotional offers:
              <br />· if you have created an account with us or subscribed to our services, and you have not opted out of receiving marketing (in accordance with your preferences, as explained below);
              <br />· by email if you have signed up for email newsletters;
              <br /><br />
              We may use your personal data (as outlined in the &apos;Personal Data We Collect&apos;section) to form a view on what we think you may like, or what may be of interest to you, and to send you details of services which may be relevant for you.
              <br /><br />
              We will ask you for your preferences in relation to receiving marketing communications by email, and other communication channels.
              <br /><br />
              You will always have full control of your marketing preferences. If you do not wish to continue receiving marketing information from us (or any third party, if applicable) at any time:
              <br />· you can unsubscribe or &apos;opt-out&apos;by using the unsubscribe button and following the link included in the footer of any marketing email; or
              <br />· account holders may withdraw their consent by simply logging in to the Sport Endorse Ltd. Privacy Centre and managing their preferences.
              <br /><br />
              We will process all opt-out requests as soon as possible, but please note that due to the nature of our IT systems and servers it may take a few days for any opt-out request to be implemented.
              <br /><br />
              <strong>Cookies</strong><br />
              Our website uses cookies to distinguish you from other users of our website and to keep track of your visits. They help us to provide you with the very best experience when you browse our website and to make improvements to our website. They also help us and our advertising networks to make advertising relevant to you and your interests.
              <br /><br />
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of our website may become inaccessible or not function properly.
              <br /><br />
              You can manage cookies as you wish - please visit the Privacy Centre and click Manage Cookies. For detailed information on the cookies which we and our third-party providers use and the reasons why we use them, please refer to our Cookie Policy.
              <br /><br />
              <strong>Our Use of Analytics and Targeted Advertising Tools</strong><br />
              We use a range of analytics and targeted advertising tools to display relevant website content on our website and online advertisements on other websites and apps to you. We use these tools to deliver relevant content to you in marketing communications (where applicable), and to measure the effectiveness of the advertising provided. For example, we use tools such as Google Analytics to target and improve our marketing campaigns, marketing strategies and website content. We may also use tools provided by other third parties to perform similar tasks. If you would like any further information about the data collected by these third parties or the way in which the data is used, please contact us on info@sportendorse.com.
              <br /><br />
              In order to opt out of targeted advertising, please manage your preferences in the Sport Endorse Ltd. Privacy Centre.
              <br /><br />
              <strong>Links to Other Websites and Third Parties</strong><br />
              Our website may include links to and from the websites of our partner networks, advertisers and affiliates, or to social media platforms. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to their websites.
              <br /><br />
              <strong>1) Use of Google Calendar on the Platform</strong><br />
              We use Google Calendar integration on our platform solely to enhance user-facing features and improve functionality. This ensures a seamless and efficient user experience, allowing you to better manage your schedule and optimise platform interactions.
              <br /><br />
              <strong>2) Non-Use of Google User Data</strong><br />
              We strictly adhere to Google&apos;s data usage policies and do not use Google user data for the following purposes:
              <br />Targeted advertising
              <br />Selling to data brokers
              <br />Providing data to information resellers Determining creditworthiness
              <br />Lending purposes
              <br />User advertisements
              <br />Personalised advertisements
              <br />Retargeted advertisements
              <br />Interest-based advertisements
              <br />Creating databases
              <br />Training AI models
              <br />We are committed to protecting your data and ensuring it is used only to improve your experience on our platform in compliance with Google&apos;s guidelines.
              <br /><br />
              <strong>Storing, Securing and Retaining Your Data</strong><br /><br/>
              <strong>Storing your data</strong><br />
              We need to retain your personal data to satisfy our legal obligations, to deal with complaints and queries, in order to resolve, litigate or defend a dispute and to prevent fraud and abuse.
              <br /><br />
              Having obtained your consent (or other legal basis) to contact you, we will retain your personal data for marketing and analysis purposes until you withdraw your consent. If you choose to withdraw your consent to marketing, we will delete your personal data from our systems, unless we have another legal basis to retain it, which may include performance of our contract with you.
              <br /><br />
              <strong>Securing your data</strong><br />
              The communication between your browser and our website uses a secure encrypted connection wherever your personal data is involved.
              <br /><br />
              We have put in place physical, electronic and managerial security procedures in the storage and disclosure of your personal data to protect it against accidental loss, destruction or damage. Nevertheless, any data transmission over the internet or by any other means can never be fully secure, such is the character of the internet, and provision of personal data by you to us is at your own risk. We take all reasonable measures to protect your personal data by putting appropriate technical and operational security measures in place.
              <br /><br />
              When we disclose your personal data to trusted third parties (for the purposes set out in this notice), we require all third parties to have appropriate technical and operational security measures in place to protect your personal data, and we work with them to ensure that your data protection and privacy rights are respected. Where your personal data is shared with a third party, it must only be used for the purposes for which it was supplied.
              <br /><br />
              In the unfortunate event of a personal data breach, we will notify you and any applicable regulator when we are legally required to do so.
              <br /><br />
              <strong>Retaining your data</strong><br />
              Your personal data will be deleted when it is no longer reasonably required for the provision of the Services described above or when you withdraw your consent (where applicable) and we are not legally required or otherwise permitted to continue storing such data.
              <br /><br />
              The length of time we keep your personal data depends on what it is and whether we have an ongoing business need to retain it (for example, to provide you with a service you&apos;ve requested or to comply with applicable legal or regulatory requirements).
              <br /><br />
              We&apos;ll retain your personal data for as long as we have a relationship with you and for a period of time afterwards where we have an ongoing business need to retain it, in accordance with our data retention policies and practices. For example, where you ask to be unsubscribed from marketing communications, we may keep a record of your email address and the fact that you have unsubscribed to ensure that you are not sent any further emails in the future.
              <br /><br />
              <strong>Age Restriction</strong><br />
              No person under 16 maybe a User and Brands must use best endeavours to ensure that no personal information in respect of a person who is under the age of 16 years is submitted to Sport Endorse. We will not knowingly accept any data from a Brand or Agency in respect of a person who is under the age of 16 years
              <br /><br />
              <strong>The California Consumer Privacy Act (CCPA)</strong><br />
              The California Consumer Privacy Act (“CCPA”) provides consumers with specific rights regarding their Personal Information. You have the right to request that businesses subject to the CCPA (which may include our Merchants with whom you have a relationship) disclose certain information to you about their collection and use of your Personal Information over the past 12 months. In addition, you have the right to ask such businesses to delete Personal Information collected from you, subject to certain exceptions. If the business sells Personal Information, you have a right to opt-out of that sale. Finally, a business cannot discriminate against you for exercising a CCPA right.
              <br /><br />
              When oﬀering services to its Merchants, Sport Endorse Ltd. acts as a “service provider” under the CCPA and our receipt and collection of any consumer Personal Information is completed on behalf of our Merchants in order for us to provide the Service. Please direct any requests for access or deletion of your Personal Information under the CCPA to the Member with whom you have a direct relationship.
              <br /><br />
              Consistent with California law, if you choose to exercise your applicable CCPA rights, we won&apos;t charge you diﬀerent prices or provide you a diﬀerent quality of services. If we ever oﬀer a financial incentive or product enhancement that is contingent upon you providing your Personal Information, we will not do so unless the benefits to you are reasonably related to the value of the Personal Information that you provide to us.
              <br /><br />
              <strong>Changes to This Privacy Notice</strong><br />
              From time to time we may change this privacy notice. If there are any significant changes we will post updates on our website, applications or let you know by email at info@sportendorse.com
              <br /><br />
              <strong>How to Contact Us</strong><br />
              We welcome feedback and are happy to answer any questions you may have about your data.
              <br /><br />
              You can contact us at:
              <br /><br />
              Email: info@sportendorse.com
              <br />Sport Endorse Ltd. is registered with the CRO in Ireland: 593768
              <br /><br />
              This notice was most recently updated: 3 December 2024<br /><br />
            </p>
          </div>
        </div>
        <div className="section">
          <h2 onClick={() => setShowCookie((v) => !v)}>
            Cookie Policy {showCookie ? "▲" : "▼"}
          </h2>
          <div className={showCookie ? "" : "hidden"}>
            <p>
              <strong>Overview of Cookie Notice</strong><br />
              To make this website work properly, we sometimes place small data files called cookies on your device. Most big websites do this too. This notice describes what information cookies on our website gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored, however this may downgrade or limit certain elements of the website&apos;s functionality.
              <br /><br />
              <strong>What are cookies?</strong><br />
              A cookie is a small text file that a website saves on your device such as desktop, mobile or tablet when you visit the website. It enables the website to remember your actions and preferences (such as login, language, font size and other display preferences) for a period of time, so you don&apos;t have to keep re-entering them whenever you come back to the site or browse from one page to another.
              <br /><br />
              When you browse and accept this cookie notice, pieces of code will be stored on your device(s).
              <br /><br />
              Cookies can be or contain personal data.
              <br /><br />
              <strong>How do we use cookies?</strong><br />
              The collection of cookies allows us to better understand your interaction with our website and helps us to improve the service we provide to you. Cookies can also aid in better User Experience.
              <br /><br />
              <strong>The Cookies We Set</strong><br />
              Necessary Cookies: these cookies help make our website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
              <br /><br />
              Preference Cookies: these cookies enable our website to remember information that changes the way the website behaves or looks, like the region that you are in.
              <br /><br />
              Statistic Cookies: these cookies help us, as website owners, to understand how visitors interact with our website by collecting and reporting information anonymously. For example, visitors&apos;IP addresses are collected by Google Analytics who then provide general statistical reporting to us, to allows us to better understand the geographical breakdown of our customers and how they are interacting with our website.
              <br /><br />
              Marketing Cookies: these cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.
              <br /><br />
              Some other examples of the ways in which we use cookies are:
              <br /><br />
              ● If you create an account with us, we use cookies throughout the sign-up process and general administration. These cookies will usually be deleted when you log out however in some cases, they may remain afterwards to remember your website preferences when logged out.
              <br /><br />
              ● We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.
              <br /><br />
              ● We offer payment facilities via our control panel for subscribed customers and some cookies are essential to ensure that your order is remembered between pages so that we can process it properly.
              <br /><br />
              ● When you submit data through our contact form, cookies may be set to remember your user details for future correspondence.
              <br /><br />
              Enabling these cookies is not strictly necessary for the website to work but it will provide you with a better browsing experience. You can delete or block these cookies, but if you do that some features of this site may not work as intended.
              <br /><br />
              The cookie-related information is not used to identify you personally and the pattern data is fully under our control. These cookies are not used for any purpose other than those described here.
              <br /><br />
              <strong>Third Party Cookies</strong><br />
              In some cases, we also use cookies provided by trusted third parties, who place cookies on your device when visiting our website.
              <br /><br />
              For example, we use Google Analytics, which is one of the most common and trusted analytics solutions on the internet for helping us to understand how you use our website and ways that we can improve your experience. These cookies may track things such as how long you spend on the website and the pages that you visit using a persistent ID for a single user across multiple devices, so we can continue to produce engaging content.
              <br /><br />
              We have tried to be as clear as possible within this cookie policy. Each third party provider we use to provide our services to you has their own privacy and cookie notices, which will tell you how they use cookies.
              <br /><br />
              As our own cookies and third-party cookies are subject to change, we will do our best to update this notice and our complete and current list of cookies as required.
              <br /><br />
              <strong>How to control cookies</strong><br />
              You can manage cookies as you wish - please visit the Privacy Centre and click Manage Cookies. However, please note that disabling cookies can result in also disabling certain functionality and features of this website.
              <br /><br />
              You may also manage cookies on your specific browser, we suggest you visit some or all of the following websites to find out how to do this:
              <br /><br />
              Google Chrome: https://support.google.com/chrome/answer/95647
              <br /><br />
              Safari: https://support.apple.com/en-ie/guide/safari/sfri11471/mac
              <br /><br />
              Internet Explorer: https://support.microsoft.com/en-ie/help/17442/windows-internet-explorer-delete-manage-cookies
              <br /><br />
              <strong>More Information</strong><br />
              Hopefully this has clarified things for you. However, if you are still looking for more information, then you can contact Sport Endorse Ltd., the data controller, at:
              <br /><br />
              Email: info@sportendorse.com
              <br /><br />
              This notice was most recently updated: 15 December 2022
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

