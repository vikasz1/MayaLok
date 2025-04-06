"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    stage: "idea",
    description: "",
    problem: "",
    hear: "",
    terms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just reset the form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        website: "",
        stage: "idea",
        description: "",
        problem: "",
        hear: "",
        terms: false,
      });

      // You could redirect to a thank you page or show a message here
      alert(
        "Application submitted successfully! Our team will review your application and contact you shortly."
      );
    } catch (error) {
      console.error("Failed to submit application:", error);
      alert("Failed to submit application. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            Apply For Fellowship
          </h1>
          <p className="text-xl text-gray-300 mb-16 text-center">
            Join our fellowship program and get the resources, guidance, and
            support you need to build and scale your venture.
          </p>

          <div className="border border-purple-900/50 rounded-lg p-8 bg-gradient-to-b from-purple-950/40 to-black/40">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your first name"
                      className="bg-gray-900 border-gray-700"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      className="bg-gray-900 border-gray-700"
                      required
                    />
                  </div>
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
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="bg-gray-900 border-gray-700"
                    required
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Venture Information</h2>
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company/Project Name</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your company or project name"
                    className="bg-gray-900 border-gray-700"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website (if available)</Label>
                  <Input
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourcompany.com"
                    className="bg-gray-900 border-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Stage of Your Venture</Label>
                  <RadioGroup
                    defaultValue="idea"
                    value={formData.stage}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, stage: value }))
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="idea" id="idea" />
                      <Label htmlFor="idea">Idea Stage</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="prototype" id="prototype" />
                      <Label htmlFor="prototype">Prototype/MVP</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="early" id="early" />
                      <Label htmlFor="early">Early Traction</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="growth" id="growth" />
                      <Label htmlFor="growth">Growth Stage</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Describe Your Venture</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us about your venture, its mission, and vision"
                    className="bg-gray-900 border-gray-700"
                    rows={5}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="problem">What Problem Are You Solving?</Label>
                  <Textarea
                    id="problem"
                    name="problem"
                    value={formData.problem}
                    onChange={handleChange}
                    placeholder="Describe the problem your venture is addressing"
                    className="bg-gray-900 border-gray-700"
                    rows={3}
                    required
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Additional Information</h2>
                <div className="space-y-2">
                  <Label htmlFor="hear">How Did You Hear About Us?</Label>
                  <Input
                    id="hear"
                    name="hear"
                    value={formData.hear}
                    onChange={handleChange}
                    placeholder="e.g., Social Media, Referral, etc."
                    className="bg-gray-900 border-gray-700"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.terms}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        terms: checked as boolean,
                      }))
                    }
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions and privacy policy
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-600"
                disabled={!formData.terms}
              >
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
