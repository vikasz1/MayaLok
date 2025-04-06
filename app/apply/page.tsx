import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Apply For Fellowship</h1>
          <p className="text-xl text-gray-300 mb-16 text-center">
            Join our fellowship program and get the resources, guidance, and support you need to build and scale your
            venture.
          </p>

          <div className="border border-purple-900/50 rounded-lg p-8 bg-gradient-to-b from-purple-950/40 to-black/40">
            <form className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" className="bg-gray-900 border-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" className="bg-gray-900 border-gray-700" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" className="bg-gray-900 border-gray-700" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Your phone number" className="bg-gray-900 border-gray-700" />
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Venture Information</h2>
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company/Project Name</Label>
                  <Input
                    id="companyName"
                    placeholder="Your company or project name"
                    className="bg-gray-900 border-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website (if available)</Label>
                  <Input id="website" placeholder="https://yourcompany.com" className="bg-gray-900 border-gray-700" />
                </div>
                <div className="space-y-2">
                  <Label>Stage of Your Venture</Label>
                  <RadioGroup defaultValue="idea">
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
                    placeholder="Tell us about your venture, its mission, and vision"
                    className="bg-gray-900 border-gray-700"
                    rows={5}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="problem">What Problem Are You Solving?</Label>
                  <Textarea
                    id="problem"
                    placeholder="Describe the problem your venture is addressing"
                    className="bg-gray-900 border-gray-700"
                    rows={3}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Additional Information</h2>
                <div className="space-y-2">
                  <Label htmlFor="hear">How Did You Hear About Us?</Label>
                  <Input
                    id="hear"
                    placeholder="e.g., Social Media, Referral, etc."
                    className="bg-gray-900 border-gray-700"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions and privacy policy
                  </Label>
                </div>
              </div>

              <Button className="w-full bg-purple-700 hover:bg-purple-600">Submit Application</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

