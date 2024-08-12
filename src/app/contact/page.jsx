"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+37065054548",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "inga.banaityte1@gmail.com",
  },
];
function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col  gap-8">
          <div className="flex text-center mb-8 mt-8 text-lg">
            If you have any questions or would like to discuss work-related
            matters, please feel free to contact me.
          </div>
          <div className="xl:h-[54%] xl:order-none">
            <form
              action="https://getform.io/f/3a75f912-8e9c-4c0c-84c7-3382bddaaefd"
              method="post"
              encType="multipart/form-data"
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-xl text-pink-600">Let's talk!</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  name="name"
                  required
                  placeholder="Firstname"
                />
                <Input type="lastname" placeholder="Lastname" />
                <Input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                />
                <Input type="phone" name="phone" placeholder="Phone number" />
              </div>
              <Textarea
                className="h-[100px]"
                name="message"
                required
                placeholder="Type your message here."
              ></Textarea>
              <Button size="lg" className="max-w-40 rounded-xl">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
