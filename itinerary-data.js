const PAX = "HALL / SHEILAGH MACMILLAN MRS";
const TKT = "176 2215024839-40";

export const bookings = [
  { group: "Flights", id: "f1", date: "2026-12-03", mon: "Dec", day: "03", title: "Cape Town → Dubai", sub: "Emirates EK 771 · 18:30", status: "Confirmed",
    kicker: "Flight · leg 1 of 4", panelTitle: "CPT → DXB", panelSub: "Thursday 3 December 2026", isFlight: true,
    carrier: "Emirates · EK 771", from: "CPT", fromName: "Cape Town International", to: "DXB", toName: "Dubai Intl, Terminal 3",
    depTime: "18:30", arrTime: "05:55", duration: "10h 25m · overnight",
    passStats: [ { label: "Class", value: "Economy Saver" }, { label: "Seat", value: "At check-in" }, { label: "Check-in", value: "14:30" }, { label: "Bags", value: "2 pieces" } ],
    eticket: TKT,
    fields: [ { label: "Booking ref", value: "KPA3JW" }, { label: "Ticket number", value: TKT }, { label: "Passenger", value: PAX }, { label: "Skywards", value: "EK1046946821" }, { label: "Checked bags", value: "2 × 23 kg" }, { label: "Cabin bag", value: "1 × 7 kg" }, { label: "Total fare", value: "ZAR 15 305.80 · credit card" } ],
    note: "Check-in opens at 14:30. Emirates asks you to be at Cape Town International three hours before departure.", docName: "ticket" },

  { group: "Flights", id: "f2", date: "2026-12-04", mon: "Dec", day: "04", title: "Dubai → Zürich", sub: "Emirates EK 087 · 08:25", status: "Confirmed",
    kicker: "Flight · leg 2 of 4", panelTitle: "DXB → ZRH", panelSub: "Friday 4 December 2026", isFlight: true,
    carrier: "Emirates · EK 087", from: "DXB", fromName: "Dubai Intl, Terminal 3", to: "ZRH", toName: "Zürich-Kloten",
    depTime: "08:25", arrTime: "12:25", duration: "6h 00m · direct",
    passStats: [ { label: "Class", value: "Economy Saver" }, { label: "Seat", value: "At check-in" }, { label: "Check-in", value: "05:25" }, { label: "Bags", value: "2 pieces" } ],
    eticket: TKT,
    fields: [ { label: "Booking ref", value: "KPA3JW" }, { label: "Ticket number", value: TKT }, { label: "Passenger", value: PAX }, { label: "Connection", value: "2h 30m in Dubai" }, { label: "Checked bags", value: "Through-checked to Zürich" } ],
    note: "", docName: "ticket" },

  { group: "Flights", id: "f3", date: "2026-12-23", mon: "Dec", day: "23", title: "Prague → Dubai", sub: "Emirates EK 140 · 14:45", status: "Confirmed",
    kicker: "Flight · leg 3 of 4", panelTitle: "PRG → DXB", panelSub: "Wednesday 23 December 2026", isFlight: true,
    carrier: "Emirates · EK 140", from: "PRG", fromName: "Václav Havel, Terminal 1", to: "DXB", toName: "Dubai Intl, Terminal 3",
    depTime: "14:45", arrTime: "23:40", duration: "5h 55m · direct",
    passStats: [ { label: "Class", value: "Economy Flex" }, { label: "Seat", value: "58C" }, { label: "Check-in", value: "11:45" }, { label: "Bags", value: "2 pieces" } ],
    eticket: TKT,
    fields: [ { label: "Booking ref", value: "KPA3JW" }, { label: "Ticket number", value: TKT }, { label: "Passenger", value: PAX }, { label: "Checked bags", value: "2 × 23 kg" }, { label: "Third bag", value: "ZAR 4 040 if added" } ],
    note: "", docName: "ticket" },

  { group: "Flights", id: "f4", date: "2026-12-24", mon: "Dec", day: "24", title: "Dubai → Cape Town", sub: "Emirates EK 772 · 03:50", status: "Confirmed",
    kicker: "Flight · leg 4 of 4", panelTitle: "DXB → CPT", panelSub: "Thursday 24 December 2026", isFlight: true,
    carrier: "Emirates · EK 772", from: "DXB", fromName: "Dubai Intl, Terminal 3", to: "CPT", toName: "Cape Town International",
    depTime: "03:50", arrTime: "11:40", duration: "9h 50m · direct",
    passStats: [ { label: "Class", value: "Economy Flex" }, { label: "Seat", value: "29C" }, { label: "Check-in", value: "00:50" }, { label: "Bags", value: "2 pieces" } ],
    eticket: TKT,
    fields: [ { label: "Booking ref", value: "KPA3JW" }, { label: "Ticket number", value: TKT }, { label: "Passenger", value: PAX }, { label: "Connection", value: "4h 10m in Dubai" }, { label: "Arrives", value: "11:40, 24 December" } ],
    note: "", docName: "ticket" },

  { group: "Flights", id: "f5", date: "2026-12-11", mon: "Dec", day: "11", title: "Zurich → Vienna", sub: "Austrian OS 134 · 10:40", status: "Confirmed",
    kicker: "Flight · Zurich to Vienna", panelTitle: "ZRH → VIE", panelSub: "Friday 11 December 2026", isFlight: true,
    carrier: "Austrian Airlines · OS 134", from: "ZRH", fromName: "Zurich Airport (ZRH)", to: "VIE", toName: "Vienna International, Terminal 3",
    depTime: "10:40", arrTime: "12:00", duration: "1h 20m · nonstop",
    passStats: [ { label: "Class", value: "Economy Comfort" }, { label: "Seat", value: "At check-in" }, { label: "Aircraft", value: "E195" }, { label: "Bags", value: "1 piece" } ],
    eticket: "8XSETE",
    fields: [ { label: "Booking ref", value: "8XSETE" }, { label: "Passenger", value: "Ms. Sheilagh Macmillan Hall" }, { label: "Operated by", value: "Austrian Airlines · Embraer 195" }, { label: "Checked baggage", value: "1 × 23 kg" }, { label: "Carry-on", value: "1 × 8 kg, max 55 × 40 × 23 cm" }, { label: "Personal item", value: "Max 40 × 30 × 15 cm" }, { label: "Seat reservation", value: "Included at check-in" }, { label: "Rebooking", value: "Max CHF 80.00 plus fare difference" }, { label: "Refundability", value: "Not allowed" }, { label: "Total price", value: "CHF 308.00" } ],
    note: "Arrival is at Vienna International Terminal 3.", docName: "ticket" },

  { group: "Stays", id: "s1", date: "2026-12-11", mon: "Dec", day: "11", title: "Boutique Hotel Das Tigra, Vienna", sub: "2 nights · Standard room · Room only", status: "Confirmed",
    kicker: "Accommodation", panelTitle: "Boutique Hotel Das Tigra", panelSub: "11 – 13 December 2026 · 2 nights", isFlight: false,
    fields: [ { label: "Booking ref", value: "AUTnjuwnzyya-6507628" }, { label: "Guest", value: "Sheilagh Macmillan Hall" }, { label: "Address", value: "Tiefer Graben 14-20, Vienna 1010, Austria" }, { label: "Phone", value: "+43 1 5339641108" }, { label: "Room", value: "Standard room, 1 person, approx. 19 m²" }, { label: "Board", value: "Room only, non-refundable" }, { label: "Guests", value: "1 adult" }, { label: "Arrival", value: "11 December 2026" }, { label: "Departure", value: "13 December 2026" }, { label: "Total cost", value: "€935.00 · paid in full" }, { label: "Balance due", value: "€0.00" } ],
    note: "Take the U3 to Herrengasse, a three-minute walk from the hotel. A taxi from Schwechat Airport takes 25 to 35 minutes.", docName: "voucher" },

  { group: "Transfers", id: "t1", date: "2026-12-11", mon: "Dec", day: "11", title: "Vienna Airport → Das Tigra", sub: "Private pickup · Meets OS 134 at 12:00", status: "Confirmed",
    kicker: "Transfer", panelTitle: "Airport pickup to Das Tigra", panelSub: "Friday 11 December 2026 · 12:00 arrival", isFlight: false,
    fields: [ { label: "Arranged by", value: "Boutique Hotel Das Tigra" }, { label: "Passenger", value: "Mrs. Sheilagh Hall" }, { label: "Arrival time", value: "12:00 noon" }, { label: "Flight number", value: "OS 134" }, { label: "Meeting point", value: "Airport service desk, Wien Schwechat" }, { label: "Where", value: "Arrivals hall, to the right, 40 m walk" }, { label: "Driver", value: "Holds a name sign in the arrival hall" }, { label: "Driver phone", value: "+43 699 190 54731" }, { label: "Transfer time", value: "30 – 40 minutes to the hotel" }, { label: "Price", value: "EUR 59.00" }, { label: "Payment", value: "Directly to the driver, cash or card" } ],
    note: "The pickup service monitors your flight time, so a delayed arrival is followed automatically. The driver waits 30 minutes. If baggage claim delays you, call the driver directly on +43 699 190 54731 to avoid additional costs. If the hotel booking is cancelled, the transfer must be cancelled separately and directly with the hotel, otherwise the full amount is charged.", docName: "voucher" },

  { group: "Tours & excursions", id: "e1", date: "2026-12-12", mon: "Dec", day: "12", title: "Classic Ensemble Vienna, St Peter's Church", sub: "20:30 · Cat. II · 1 ticket", status: "Confirmed",
    kicker: "Concert", panelTitle: "Classic Ensemble Vienna", panelSub: "Saturday 12 December 2026 · 20:30", isFlight: false,
    fields: [ { label: "Order number", value: "#111964" }, { label: "Booked with", value: "RM Europa Tickets · vienna-concert.com" }, { label: "Event", value: "St Peters Church Concerts" }, { label: "Venue", value: "Peterskirche, St. Peter's Church, Vienna" }, { label: "Date and time", value: "12-12-2026, 20:30" }, { label: "Category", value: "Cat. II" }, { label: "Tickets", value: "1" }, { label: "Price per ticket", value: "€59.00 · 0% system fee, 0% service charge" }, { label: "Total", value: "€59.00 · paid" }, { label: "Booked for", value: "Sheilagh Macmillan Hall" } ],
    note: "Entry is by the QR code emailed with the confirmation — bring that email, not the payment receipt. St. Peter's Church is a nine-minute walk from Das Tigra.", docName: "voucher" },

  { group: "Visas & documents", id: "d1", date: "2026-12-04", mon: "Dec", day: "04", title: "Passport · British citizen", sub: "Valid to 17 February 2029", status: "Valid",
    kicker: "Document", panelTitle: "United Kingdom passport", panelSub: "Sheilagh Macmillan Hall", isFlight: false,
    fields: [ { label: "Surname", value: "Hall" }, { label: "Given names", value: "Sheilagh Macmillan" }, { label: "Nationality", value: "British citizen" }, { label: "Passport number", value: "554560322" }, { label: "Type / code", value: "P · GBR" }, { label: "Sex", value: "F" }, { label: "Date of birth", value: "26 February 1971" }, { label: "Place of birth", value: "Welkom" }, { label: "Date of issue", value: "17 May 2018" }, { label: "Date of expiry", value: "17 February 2029" }, { label: "Authority", value: "HMPO" } ],
    note: "Valid well beyond the return date. Keep a photograph of this page on your phone and a printed copy in your case, separate from the passport itself.", docName: "copy" }
];

export const days = [
  { label: "Day 1", date: "4 Dec", title: "Fly to Zurich", note: "Emirates EK 771 departs Cape Town 18:30, arriving Dubai 05:55 the next morning." },
  { label: "Day 2", date: "5 Dec", title: "Arrive in Zurich", note: "EK 087 departs Dubai 08:25 and lands in Zurich 12:25. Staying with friends." },
  { label: "Day 8", date: "11 Dec", title: "Zurich to Vienna", note: "Austrian OS 134 departs Zurich 10:40, arriving Vienna 12:00.\nHotel transfer meets you at the airport service desk.\nTwo nights at Boutique Hotel Das Tigra." },
  { label: "Day 9", date: "12 Dec", title: "In Vienna", note: "Full day in Vienna, staying at Boutique Hotel Das Tigra.\nClassic Ensemble Vienna at St. Peter's Church, 20:30." },
  { label: "Day 10", date: "13 Dec", title: "Check out of Das Tigra", note: "" },
  { label: "Day 20", date: "23 Dec", title: "Fly home from Prague", note: "EK 140 departs Prague 14:45, arriving Dubai 23:40." },
  { label: "Day 21", date: "24 Dec", title: "Arrive in Cape Town", note: "EK 772 departs Dubai 03:50 and lands in Cape Town 11:40." }
];

export const notes = [
  { id: "leave", title: "Before you leave", items: [
    "Download your medical aid card and keep it available offline on your phone.",
    "Download a copy of your passport, visa and tickets to your phone so you can reach them offline.",
    "Tell your bank you are travelling so cards are not blocked on first use.",
    "Check in online 48 hours before EK 771 and save the boarding pass to your phone."
  ] },
  { id: "pack", title: "What to pack", items: [
    "December in Zurich, Vienna and Prague runs roughly -3°C to 5°C, often wet underfoot.",
    "A properly warm coat, waterproof boots with grip, gloves, scarf and a hat.",
    "Thermal base layers.",
    "One smart outfit for a concert or a dinner out.",
    "Layers you can peel off indoors; museums, cafés and restaurants are heated warm.",
    "Moisturiser and lip balm; the cold and indoor heating are drying.",
    "Plug adapters: type J for Switzerland, type C or F for Austria and Czechia.",
    "Small daypack, and a folding umbrella if you like to carry one."
  ] },
  { id: "connect", title: "Connectivity & apps", items: [
    "An eSIM bought before you fly is the cheapest option; a Europe-wide plan covers all three countries.",
    "Free wifi is normal in cafés, hotels and most trains.",
    "Switzerland is not in the EU, so an EU-only data plan will not roam there — check the coverage list.",
    "Download offline maps for each city before you land.",
    "Apps to download: Emirates and Austrian Airlines for boarding passes and delay alerts.",
    "SBB Mobile for Swiss trains, ÖBB for Austria, and PID Lítačka for Prague transport tickets.",
    "Bolt or Uber both work in Vienna and Prague; Uber is the more reliable of the two in Zurich.",
    "Google Translate with German and Czech saved for offline use."
  ] },
  { id: "money", title: "Money & payment", items: [
    "Three currencies: Swiss francs (CHF), euros in Austria (EUR) and Czech koruna (CZK).",
    "Cards are accepted almost everywhere, but Christmas market stalls are often cash only.",
    "Draw cash from bank ATMs rather than the airport bureaux; decline the conversion offer.",
    "Avoid Euronet machines in Prague — poor rates and high fees.",
    "Tipping is modest: round up, or 5–10% for table service."
  ] },
  { id: "around", title: "Getting around", items: [
    "Zurich to Vienna and Vienna to Prague are both comfortable by train — book in advance for the cheaper fares.",
    "City transport is excellent; buy a day or multi-day pass rather than single tickets.",
    "Validate or stamp your ticket before boarding trams — inspectors do check.",
    "All three centres are walkable, but pavements can be icy."
  ] },
  { id: "etiquette", title: "Destination etiquette", items: [
    "Greet on entering a shop — Grüezi in Zurich, Grüss Gott in Vienna, Dobrý den in Prague.",
    "Punctuality matters, especially in Switzerland; be on time for reservations.",
    "Keep your voice down on public transport and in restaurants.",
    "Much of Europe closes on Sundays and on 25–26 December.",
    "Ask before photographing people at markets or in churches."
  ] },
  { id: "dontforget", title: "Don't forget", items: [
    "Plug adapters: type J for Switzerland, type C or F for Austria and Czechia.",
    "Power bank, in the cabin bag only.",
    "Any prescription medication in its original packaging, with the script.",
    "Lip balm and hand cream — the cold and indoor heating are drying.",
    "Space in the case for whatever the markets produce."
  ] }
];
