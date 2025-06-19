"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Skjema sendt inn!");
    } catch {
      alert("Det oppstod en feil. Prøv igjen.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Kontakt oss</CardTitle>
          <CardDescription>
            Ta kontakt med vårt team
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Bedriftsnavn *</Label>
              <Input
                type="text"
                id="name"
                required
                placeholder="Ditt bedriftsnavn"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-postadresse *</Label>
              <Input
                type="email"
                id="email"
                required
                placeholder="din@epost.no"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Tjeneste Interesse</Label>
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger>
                  <SelectValue placeholder="Velg en tjeneste" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="digital-marketing">Digital Markedsføring</SelectItem>
                  <SelectItem value="business-consulting">Bedriftsrådgivning</SelectItem>
                  <SelectItem value="website-development">Nettsideutvikling</SelectItem>
                  <SelectItem value="all-services">Alle Tjenester</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Melding *</Label>
              <Textarea
                id="message"
                rows={4}
                required
                placeholder="Hvordan kan vi hjelpe deg?"
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Melding"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
