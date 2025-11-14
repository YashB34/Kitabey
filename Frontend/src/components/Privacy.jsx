import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Privacy() {
  return (
    <>
      <Navbar />

      <div className="mt-28 max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <h1 className="text-3xl mb-10 font-semibold text-center underline">Privacy policy</h1>
        <h2>
          We value the trust you place in us. That's why we insist upon the
          highest standards for secure transactions and customer information
          privacy. Please read the following statement to learn about our
          information gathering and dissemination practices.
        </h2>
        <h1 className="text-xl mt-5 mb-5 underline">Note</h1>
        <h2>
          Our privacy policy is subject to change at any time without notice. To
          make sure you are aware of any changes, please review this policy
          periodically. By visiting this Website, you agree to be bound by the
          terms and conditions of this Privacy Policy. If you do not agree,
          please do not use or access our Website. By mere use of the Website,
          you specifically consent to our use and disclosure of your personal
          information in accordance with this Privacy Policy. This Privacy
          Policy is incorporated into and subject to the Terms of Use.
        </h2>
        <h1 className="text-xl mt-5 mb-5 underline">
          Personal information we collect
        </h1>
        <h2>
          When you visit the Site, we automatically collect certain information
          about your device, including information about your web browser, IP
          address, time zone, and some of the cookies that are installed on your
          device. Additionally, as you browse the Site, we collect information
          about the individual web pages or products that you view, what
          websites or search terms referred you to the Site, and information
          about how you interact with the Site. We refer to this
          automatically-collected information as “Device Information”. We
          collect Device Information using the following technologies: -
          “Cookies” are data files that are placed on your device or computer
          and often include an anonymous unique identifier. For more information
          about cookies, and how to disable cookies, visit
          http://www.allaboutcookies.org. - “Log files” track actions occurring
          on the Site, and collect data including your IP address, browser type,
          Internet service provider, referring/exit pages, and date/time stamps.
          - “Web beacons”, “tags”, and “pixels” are electronic files used to
          record information about how you browse the Site.
        </h2>
        <h1 className="text-xl mt-5 mb-5 underline">Your Consent</h1>
        <h2>
          By using the Website and/ or by providing your information, you
          consent to the collection and use of the information you disclose on
          the Website in accordance with this Privacy Policy, including but not
          limited to your consent for sharing your information as per this
          privacy policy.
        </h2>
        <h1 className="text-xl mt-5 mb-5 underline">Security Precautions</h1>
        <h2>
            Our Website has stringent security measures in place to protect the loss, misuse, and alteration of the information under our control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in our possession, we adhere to strict security guidelines, protecting it against unauthorised access.
        </h2>
        <h2 className="mb-8">
          If we decide to change our privacy policy, we will post those changes
          on this page so that you are always aware of what information we
          collect, how we use it, and under what circumstances we disclose it.
        </h2>
      </div>
      <Footer/>
    </>
  );
}
