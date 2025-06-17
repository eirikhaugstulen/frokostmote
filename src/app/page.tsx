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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Skjema sendt inn!");
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
                  <SelectItem value="website-development">Nettside Utvikling</SelectItem>
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

            <Button type="button" disabled className="w-full">
              Send Melding
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
