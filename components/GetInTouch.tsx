'use client'
import React, { useEffect, useState } from "react";
import SectionLabel from "./reusable/SectionLabel";
import mail from "@/assets/images/mail.png";
import call from "@/assets/images/call.png";
import location from "@/assets/images/location.png";
import Image, { StaticImageData } from "next/image";
import { errorToast, successToast } from "@/lib/reactToastify";
import { contactDetails } from "@/data/staticData";



export default function GetInTouch() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description :"",
    phoneNumber: " ",
    country: " ",
    service :" ",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let errors = { name: "", email: "", description: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
      isValid = false;
    }

    if (!formData.description.trim()) {
      errors.description = "Message is required.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("https://development4.promena.in/api/v1/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // alert("Thank you for your message! We’ll get back to you soon.");
        successToast("Thank you for contacting us! We’ll get back to you soon.");

        setFormData({ name: "", email: "", description: "", phoneNumber: " ", country: " ", service:" " });
      } else {
        errorToast("There was an issue submitting your message. Please try again.");
      }
    } catch (error) {
      errorToast("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="w-full flex justify-center bg-white" id="getInTouch">
      <div className="containerTypeOne py-[100px]  grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-[auto_auto] justify-between  gap-[30px]">
        <div className="">
          <div>
            <SectionLabel label="Contact Us" />
          </div>
          <div className="sectionHeading text-[#101118] mt-[25px] mb-[15px]">
            Get in Touch with Us
          </div>
          <p className="sectionDescription text-[#54565A] md:w-[338px] 3xl:w-auto mb-[30px]">
            Reach out to us for inquiries, support opportunities. We're here to
            assist you!
          </p>
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="md:w-[488px] lg:w-[400px] xl:w-[488px] min-h-[71px] border border-[#94979E40] rounded-[10px] px-[15px] py-[12px] flex gap-[8px] items-center mb-[20px]"
            >
              <div className="relative w-[45px] h-[47px]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-fit">
                <p className="font-normal text-[14px] 3xl:text-[20px] text-[#94979E] leading-[30px] 3xl:leading-[35px] ">
                  {item.title}
                </p>
                <p className="font-medium text-[16px] 3xl:text-[24px] text-[#101118] leading-[25px] 3xl:leading-[35px]">
                  {item.redirect}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="contactInputsSection rounded-[20px] p-[40px] max-md:p-[40px_20px]">
          <div className="w-full">
            <p className="font-normal text-[20px] 3xl:text-[24px] text-[#101118] leading-[25px] 3xl:leading-[35px] mb-[10px]">
              Send us a Message
            </p>
            <p className="font-normal text-[18px] 3xl:text-[20px] text-[#54565A] leading-[30px] 3xl:leading-[40px] mb-[25px]">
              Use our convenient contact form to reach out with questions,
              feedback
            </p>
            <form onSubmit={handleSubmit}>
              <input
                className="w-full px-[25px] py-[18px] font-normal text-[14px] 3xl:text-[24px] text-[#94979E] leading-[30px] bg-[#F7F7FA] rounded-[6px]"
                placeholder="Enter your name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && <p className="text-red-500 mt-[20px]">{formErrors.name}</p>}
              <input
                className="w-full my-[20px] px-[25px] py-[18px] font-normal text-[14px] 3xl:text-[24px] text-[#94979E] leading-[30px] bg-[#F7F7FA] rounded-[6px]"
                placeholder="Enter your email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <p className="text-red-500 mb-[20px]">{formErrors.email}</p>}
              <textarea
                name="description"
                placeholder="Enter your message"
                className="w-full px-[25px] py-[18px] font-normal text-[14px] 3xl:text-[24px] text-[#94979E] leading-[30px] bg-[#F7F7FA] rounded-[6px]"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
              {formErrors.description && <p className="text-red-500 mt-[15px]">{formErrors.description}</p>}
              <button type="submit" className="w-full bg-[#1A71FF] py-[10px] mt-[30px] mx-auto text-[#E0E0ED] border border-[#F7F7FA] rounded-[6px] 3xl:text-[24px]">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
