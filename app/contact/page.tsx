"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { CheckCircle2, XCircle } from "lucide-react";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://formsubmit.co/vikasmaury225@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(response);

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form

        toast({
          title: "Message Sent Successfully!",
          description: "Our team will contact you shortly.",
          duration: 5000,
          className:
            "border-purple-500/20 bg-purple-950/90 text-white backdrop-blur-sm",
          action: (
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-green-400 mr-2" />
            </div>
          ),
        });

        // Reset button state after 5 seconds
        setTimeout(() => {
          setIsSent(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
        duration: 5000,
        className:
          "border-red-500/20 bg-red-950/90 text-white backdrop-blur-sm",
        action: (
          <div className="flex items-center">
            <XCircle className="h-5 w-5 text-red-400 mr-2" />
          </div>
        ),
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 mb-16 text-center">
            Have a question or want to collaborate? Get in touch with our team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-900/30 p-3 rounded-md mr-4">
                    <svg
                      className="w-5 h-5 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">mauryvikas12345@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-900/30 p-3 rounded-md mr-4">
                    <svg
                      className="w-5 h-5 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-300">South Delhi</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-900/30 p-3 rounded-md mr-4">
                    <svg
                      className="w-5 h-5 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office Hours</h3>
                    <p className="text-gray-300">
                      Monday - Saturday: 9am - 5pm IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-gray-900 border-gray-700"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="bg-gray-900 border-gray-700"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="bg-gray-900 border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      className="bg-gray-900 border-gray-700"
                      rows={5}
                      required
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className={`w-full ${
                    isSent
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-purple-700 hover:bg-purple-600"
                  }`}
                  disabled={isSent}
                >
                  {isSent ? "Sent" : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
