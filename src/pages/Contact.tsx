import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import HeroSection from "@/components/ui/hero-section";
import { NavLink } from "react-router-dom";
import { useSEO } from "@/hooks/use-seo";

const Contact = () => {
  useSEO('contact');

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    honeypot: "", // Spam protection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    // Validation
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      toast.error("Vennligst fyll ut alle påkrevde felt");
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success("Takk for din henvendelse! Vi tar kontakt så snart som mulig.");

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        honeypot: "",
      });
    } catch (error) {
      toast.error("Noe gikk galt. Prøv igjen eller ring oss direkte.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="theme-light bg-background text-foreground">
      {/* Hero Section */}
      <HeroSection className="min-h-[50vh]" backgroundImage="/references/10.jpg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Kontakt oss
          </h1>
          <p className="text-lg text-white max-w-4xl mx-auto">
            Ta kontakt for en uforpliktende samtale om ditt byggeprosjekt.
            Vi svarer raskt og gir deg en ærlig vurdering.
          </p>
        </div>
      </HeroSection>

      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-900">Kontaktinformasjon</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-brand/10 rounded-lg">
                      <Phone className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Telefon</div>
                      <a
                        href="tel:+4790996432"
                        className="text-muted-foreground hover:text-brand transition-colors"
                      >
                        +47 909 96 432
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-brand/10 rounded-lg">
                      <Mail className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">E-post</div>
                      <a
                        href="mailto:sverre@r-s.no"
                        className="text-muted-foreground hover:text-brand transition-colors"
                      >
                        sverre@r-s.no
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-brand/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Adresse</div>
                      <div className="text-muted-foreground">
                        Lillevarskogen 4<br />
                        3160 Stokke
                      </div>
                    </div>
                  </div>


                </CardContent>
              </Card>

              {/* Response Info */}
              <Card className="bg-brand/5 border-brand/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-brand mb-2">Rask respons</h3>
                  <p className="text-sm text-muted-foreground">
                    Vi tar kontakt så snart som mulig, vanligvis innen samme arbeidsdag.
                    For hastende saker, ring oss direkte.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Send oss en melding</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-900">Navn *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ditt navn"
                        className="bg-white border-gray-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-900">Telefon *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+47 xxx xx xxx"
                        className="bg-white border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-900">E-post *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="bg-white border-gray-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-900">Melding *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Beskriv ditt prosjekt eller spørsmål..."
                      rows={6}
                      className="bg-white border-gray-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sender..." : "Send melding"}
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    * Påkrevde felt. Vi behandler dine personopplysninger i henhold til vår{" "}
                    <a href="/privacy" className="text-brand hover:underline">
                      personvernpolicy
                    </a>
                    .
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042.4652455777223!2d10.3050389!3d59.208237800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646b866b5c9385d%3A0x872d7e85531845ab!2sRasmussen%20%26%20Skjelbred%20AS!5e0!3m2!1sen!2sph!4v1758025541648!5m2!1sen!2sph"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Rasmussen & Skjelbred location"
        />
      </div>
    </div>
  );
};

export default Contact;
