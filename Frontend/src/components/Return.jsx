import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Return() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl mb-8 container mx-auto md:px-20 px-4">
        <h1 className="text-3xl mt-28 text-center font-bold underline">
          Return & Replace Policy
        </h1>
        <h2 className="mt-10">
          Only if the books are damaged then our Return/Replacement/Refund
          policy be applicable. It is valid for three days. We are unable to
          offer you a refund or exchange after 3 days have passed since
          delivery.
        </h2>
        <p className="mt-5">
          The consumer is required to record a brief video of the order being
          unpacked. The unpacking video is mandatory if the consumer wants to
          return/replace or refund. Customers without any of the videos will not
          be eligible for any refund from us.
        </p>
        <p className="mt-5">
          Damages covered under refund/return/replacement policy only include:
        </p>
        <ul className="mt-3 list-disc list-inside">
          <li>Severe spine damages, due to which pages are coming apart.</li>
          <li className="mt-3">
            In transit damages [corner bents/little dents/cover scratches do not
            come under this]
          </li>
          <li className="mt-3"> More than 2 pages are misprinted.</li>
          <li className="mt-3"> More than 2 pages are torn.</li>
          <li className="mt-3"> More than 2 pages are missing</li>
          <li className="mt-3">
            {" "}
            Smudge making the pages unreadable. There should be more than 2
            pages like this to qualify for replacement.
          </li>
        </ul>
        <h1 className="mt-3">
          PS: Sets like Harry Potter/Lord Of The Rings include boxes, which is
          delicate and might get damaged in transit. Our
          return/refund/replacement policy does not cover the damages if any to
          the outer box. If books are damaged, it will come under our policy. No
          Return/Replacement for Mystery Box.
        </h1>
        <h1 className="mt-3 font-semibold">
          In addition to the aforementioned problems, a Reshipment/Refund will
          be granted in cases of "Missing Book" or "Wrong Book Delivered" cases.
          This one as well requires the unpacking video.
        </h1>
        <h3 className="mt-3">
          Return/Replacement Process time 7-14 Days. For online payment, refunds
          will be made in the same form in which the payment is received. For
          COD orders refund will be made by UPI/Bank Transfer in the name of the
          Customer. In the case of COD orders, we may ask customers for their
          UPI ID via SMS/mail/call to initiate a return. Our courier boy will
          pick up the "Returned Book" from the customer’s doorstep. We will pay
          the shipping costs for returning the book. Customers will receive a
          full refund in situations where a package is returned to us by the
          courier or not delivered due to one of their reasons.
        </h3>
        <h1 className="mt-3 font-semibold">
          If the customer refuses to accept the order and the parcel is returned
          to us, we will deduct the shipping charge at the time of refund. If
          the customer puts wrong contact number or wrong pin code and the
          parcel is returned to us, we will deduct the shipping charge at the
          time of refund.
        </h1>
        <h2 className="mt-3">
          Customers are requested to drop a Mail at "query.kitabey@gmail.com"{" "}
        </h2>
        <h2 className="mt-3"> to claim returns/refunds/replacements.</h2>
        <h1 className="mt-3 font-semibold">For outright cancellations by you :</h1>- On
        receipt of the cancellation notice we shall cancel the order and refund
        the entire amount if the order has not been processed by us.
        Cancellation of the order can't be made/accepted once the products under
        your order are released for dispatch/ shipped out from our delivery
        location. In such cases, a replacement request can be initiated post
        receipt of the products. In case of cancellation before shipment, the
        amount shall be refunded to you through the same mode of payment (in
        case of Prepaid) or via credit to your store credit account (in case of
        COD) which can be used for subsequent purchases.
        <h1 className="font-semibold mt-3">Cancellations by 99Bookstore :</h1>
        <h2 className="mt-3">In some cases, 99Bookstore will cancel orders and refund full payment to the customers. Those reasons are given below.</h2>
        <ol className="list-decimal pl-5">
            <li className="mt-3"> If there is any kind of stock issue on the latest edition.</li>
            <li className="mt-3"> If the product is in damaged condition.</li>
            <li className="mt-3"> If there is any delivery issue in the customer's location at that time (e.g. Lockdown, Strikes).</li>
            <h1 className="font-semibold mt-3">Wrongly Delivered marked Shipments:</h1>
            <h2 className="mt-3">It has come to our notice that few courier service marks shipments as "Delivered", although the shipment has not been received by our buyers. In such case we request our buyer to inform us about the order AS SOON AS POSSIBLE, preferably on the day on which it was marked delivered, so that we could raised a Dispute against the courier service.</h2>
        </ol>
      </div>
      <Footer />
    </>
  );
}
