import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const RED = "#dc2626";
const BG = "#0a0a0a";
const CARD = "#141414";
const BORDER = "#262626";
const WHITE = "#ffffff";
const MUTED = "#a1a1aa";

const s = StyleSheet.create({
  page: { backgroundColor: BG, padding: 36, fontFamily: "Courier", color: WHITE },
  header: { marginBottom: 24, borderBottomWidth: 1, borderBottomColor: BORDER, paddingBottom: 12 },
  headerLabel: { fontSize: 7, color: RED, letterSpacing: 3, marginBottom: 4 },
  headerTitle: { fontSize: 20, fontWeight: "bold", color: WHITE },
  headerSub: { fontSize: 8, color: MUTED, marginTop: 4 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 9, fontWeight: "bold", color: RED, letterSpacing: 2, marginBottom: 8, textTransform: "uppercase" },
  card: { backgroundColor: CARD, borderWidth: 1, borderColor: BORDER, padding: 10, marginBottom: 6 },
  cardTitle: { fontSize: 8, fontWeight: "bold", color: WHITE, marginBottom: 3 },
  cardText: { fontSize: 7, color: MUTED, lineHeight: 1.5 },
  row: { flexDirection: "row", gap: 4, marginBottom: 6 },
  bullet: { fontSize: 7, color: RED, marginTop: 1 },
  bulletText: { fontSize: 7, color: MUTED, lineHeight: 1.5, flex: 1 },
  warning: { backgroundColor: "#1a0000", borderLeftWidth: 2, borderLeftColor: RED, padding: 8, marginBottom: 6 },
  warningText: { fontSize: 7, color: WHITE, fontWeight: "bold" },
  warningSubText: { fontSize: 7, color: MUTED, marginTop: 2, lineHeight: 1.5 },
  stat: { backgroundColor: CARD, borderWidth: 1, borderColor: BORDER, padding: 10, alignItems: "center", flex: 1 },
  statValue: { fontSize: 18, fontWeight: "bold", color: RED },
  statLabel: { fontSize: 6, color: MUTED, letterSpacing: 1, marginTop: 2 },
  statRow: { flexDirection: "row", gap: 6, marginBottom: 6 },
  footer: { position: "absolute", bottom: 20, left: 36, right: 36, borderTopWidth: 1, borderTopColor: BORDER, paddingTop: 8, flexDirection: "row", justifyContent: "space-between" },
  footerText: { fontSize: 6, color: MUTED, letterSpacing: 1 },
});

const SECTIONS: Record<string, () => React.ReactElement> = {
  "before-you-go": () => (
    <View style={s.section}>
      <Text style={s.sectionTitle}>// 01 — Before You Go</Text>

      <View style={s.warning}>
        <Text style={s.warningText}>NO DEPLOYMENT ORDERS = NO ENTRY</Text>
        <Text style={s.warningSubText}>Print them the moment they arrive. Keep in a ziplock bag at all times.</Text>
      </View>
      <View style={s.warning}>
        <Text style={s.warningText}>EYE PRO ON AT ALL TIMES — INCLUDING WHILE SLEEPING</Text>
        <Text style={s.warningSubText}>Getting caught without it is an ejection offense. No exceptions.</Text>
      </View>

      <View style={s.statRow}>
        <View style={s.stat}><Text style={s.statValue}>1400</Text><Text style={s.statLabel}>CHECK-IN OPENS · 2PM</Text></View>
        <View style={s.stat}><Text style={s.statValue}>1800</Text><Text style={s.statLabel}>CHECK-IN CLOSES · 6PM</Text></View>
        <View style={s.stat}><Text style={s.statValue}>2200</Text><Text style={s.statLabel}>GAME KICKS OFF · 10PM</Text></View>
      </View>

      {[
        "Join your faction's private Facebook group after purchase — platoon assignment posted there",
        "Want to team up with a friend? Request it early or add their name in ticket comments",
        "Arrive 1400–1500. Eat, hydrate, meet your platoon, take a nap before the op",
        "Do NOT go to your car to sleep after in-processing — you will be removed from the event",
        "Bring a separate water bottle and snacks for pre-game waiting — don't burn field rations early",
      ].map((item, i) => (
        <View key={i} style={s.row}>
          <Text style={s.bullet}>—</Text>
          <Text style={s.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  ),

  gear: () => (
    <View style={s.section}>
      <Text style={s.sectionTitle}>// 02 — Gear Guide</Text>

      <View style={s.card}>
        <Text style={s.cardTitle}>REQUIRED — BAG INSPECTION (RED ITEMS)</Text>
        {[
          "Uniform — correct faction camo (NATO: Multicam only, RUFOR: Russian pattern, Militia: woodland/solid green)",
          "3x pairs of wool/outdoor socks (not cotton)",
          "Eye protection — full seal, ANSI Z87.1 rated",
          "Primary replica + mags + battery + charger + sling",
          "Red light / headlamp with red lens — mandatory for night ops",
          "Printed deployment orders + photo ID (ziplock bag)",
          "Medical card — left shoulder pocket",
          "Notepad + pen or pencil",
          "Wristwatch",
          "Sleeping bag + cold/wet weather gear",
          "Food and water for two days",
          "2x heavy-duty garbage bags",
        ].map((item, i) => (
          <View key={i} style={[s.row, { marginBottom: 3 }]}>
            <Text style={s.bullet}>✓</Text>
            <Text style={s.bulletText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={s.card}>
        <Text style={s.cardTitle}>FIELD-TESTED MUST-HAVES</Text>
        {[
          "Electrolyte packs — every water refill. Water alone will not hydrate you",
          "MREs over camping food — full meal in under 30 min, no boiling needed",
          "Electric hand warmers x2 — core warm = body warm",
          "Waterproof bivy or sleeping bag cover — rain stays until sun comes out",
          "Two ponchos — one for you, one for gear",
          "Wool socks x3 + one waterproof pair",
          "Two pairs of gloves — one field pair, one dry backup",
          "Three replica batteries — one is none, two is one",
          "Compression underwear — chafing on day two is brutal without it",
          "Waterproof bags inside your ruck — sleeping bag and dry clothes sealed separately",
        ].map((item, i) => (
          <View key={i} style={[s.row, { marginBottom: 3 }]}>
            <Text style={s.bullet}>★</Text>
            <Text style={s.bulletText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={s.warning}>
        <Text style={s.warningText}>DO NOT BUY A CHEAP RUCK</Text>
        <Text style={s.warningSubText}>It will break mid-op. Get military surplus. Cadre have inspected packs at check-in for structural integrity.</Text>
      </View>
    </View>
  ),

  tactics: () => (
    <View style={s.section}>
      <Text style={s.sectionTitle}>// 03 — Tactics 101</Text>

      <View style={s.card}>
        <Text style={s.cardTitle}>COMBAT SPACING</Text>
        <Text style={s.cardText}>5–10m between each person. One grenade = 15ft kill radius. If you're stacked on your buddy, you both die. Spread out. File formation is fine in thick brush — but on open trails, offset your spacing and use the terrain. When stopped, face outward — 360 security, everyone covers a different direction.</Text>
      </View>

      <View style={s.card}>
        <Text style={s.cardTitle}>COVER VS CONCEALMENT</Text>
        <Text style={s.cardText}>Cover (concrete, berms, trees, vehicles) stops BBs. Concealment (bushes, grass, netting) only hides you — BBs go right through. Soft cover does NOT save you from grenades.</Text>
      </View>

      <View style={s.card}>
        <Text style={s.cardTitle}>REACT TO CONTACT</Text>
        {["01 — Get down immediately", "02 — Return fire in the direction of contact", "03 — Yell CONTACT + direction (e.g. CONTACT NORTH)", "04 — Wait for SL orders — don't charge on your own"].map((item, i) => (
          <View key={i} style={[s.row, { marginBottom: 2 }]}>
            <Text style={s.bulletText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={s.card}>
        <Text style={s.cardTitle}>HAND SIGNALS — PASS THEM DOWN THE LINE</Text>
        {[
          "Fist raised up → Halt",
          "Fist raised, no movement → Freeze (enemy close)",
          "One arm straight up, index finger → Column / Single File",
          "Both arms out, alternating up/down (pancake flip) → Staggered Column",
          "Two fingers to eyes, point direction → Enemy spotted",
          "Palm facing down, pushed down → Get down",
          "Arm raised forward, sweep → Move out",
        ].map((item, i) => (
          <View key={i} style={[s.row, { marginBottom: 2 }]}>
            <Text style={s.bullet}>—</Text>
            <Text style={s.bulletText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  ),

  lingo: () => (
    <View style={s.section}>
      <Text style={s.sectionTitle}>// 04 — Platoon Lingo</Text>

      <View style={s.card}>
        <Text style={s.cardTitle}>UNIT STRUCTURE</Text>
        {[
          "COMPANY — Entire faction. Commanded by CO (cadre)",
          "PLATOON — Your group. Led by PL. Know your number from the Facebook group",
          "SQUAD — 9-man element. Led by SL. If separated, yell your number: ONE FOUR = Platoon 1, Squad 4",
          "TEAM — Alpha, Bravo, Charlie. Led by ATL/BTL",
        ].map((item, i) => (
          <View key={i} style={[s.row, { marginBottom: 3 }]}>
            <Text style={s.bullet}>—</Text>
            <Text style={s.bulletText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={s.card}>
        <Text style={s.cardTitle}>KEY ROLES</Text>
        {[
          "CO — Company Commander (cadre)", "XO — Executive Officer (cadre)", "1SG — First Sergeant (cadre)",
          "PL — Platoon Leader", "PSG — Platoon Sergeant (cadre)", "RTO — Radio Telephone Operator",
          "SL — Squad Leader", "SFR — Squad First Responder (4x IV bottles)", "ATL/BTL — Team Leaders",
        ].map((item, i) => (
          <View key={i} style={[s.row, { marginBottom: 2 }]}>
            <Text style={s.bullet}>—</Text>
            <Text style={s.bulletText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={s.card}>
        <Text style={s.cardTitle}>FIELD TERMS</Text>
        {[
          "LACE — Liquids, Ammo, Casualties, Equipment (status report)",
          "SALUTE — Size, Activity, Location, Unit, Time, Equipment (enemy contact report)",
          "FRAGO — Fragmentary Order (mid-op mission change)",
          "WARNO — Warning Order (heads-up a mission is coming)",
          "ROE — Rules of Engagement",
          "CCP — Casualty Collection Point (your respawn zone)",
          "OPORD — Operations Order (full mission briefing)",
        ].map((item, i) => (
          <View key={i} style={[s.row, { marginBottom: 2 }]}>
            <Text style={s.bullet}>—</Text>
            <Text style={s.bulletText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  ),

  tacsop: () => (
    <View style={s.section}>
      <Text style={s.sectionTitle}>// 05 — TACSOP Simplified</Text>

      <View style={s.warning}>
        <Text style={s.warningText}>YOU CALL YOUR OWN HITS. NEVER CALL SOMEONE ELSE'S.</Text>
        <Text style={s.warningSubText}>Any BB that strikes your body or attached gear counts. Weapon-only hits don't count. Friendly fire counts.</Text>
      </View>

      <View style={s.card}>
        <Text style={s.cardTitle}>MEDICAL MECHANIC</Text>
        {[
          "01 — Get hit → drop, yell, display MSWTQ tourniquet",
          "02 — Buddy applies TQ within 5 min → you're 'wounded', keep fighting",
          "03 — Nobody reaches you in 5 min → you bleed out, you're dead",
          "04 — Hit again while wounded → you're dead, need medic or CCP",
          "05 — To revive: find Platoon Medic or walk to CCP, drink full 16oz IV bottle",
          "When dead and moving: hold weapon over your head",
        ].map((item, i) => (
          <View key={i} style={[s.row, { marginBottom: 2 }]}>
            <Text style={s.bulletText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={s.card}>
        <Text style={s.cardTitle}>QUICK REFERENCE</Text>
        {[
          "Standard AEG limit: 366 FPS / 0.25g BB (1.5 joules)",
          "Grenade kill radius: 15ft — soft cover does NOT save you",
          "Rocket / 40mm kill radius: 20ft",
          "MMG minimum engagement: 50ft",
          "Sniper minimum engagement: 100ft",
          "Rifleman BB allotment: 500rds",
          "EMERGENCY = cease fire. Echo it. Stop immediately.",
        ].map((item, i) => (
          <View key={i} style={[s.row, { marginBottom: 2 }]}>
            <Text style={s.bullet}>—</Text>
            <Text style={s.bulletText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={s.card}>
        <Text style={s.cardTitle}>EJECTION OFFENSES (NO REFUND)</Text>
        {[
          "Removing eye protection — even while sleeping",
          "Blind firing (no eyes on target)",
          "Disrespecting cadre or participants",
          "Alcohol or drugs at any point",
          "Going to your car to sleep after in-processing",
        ].map((item, i) => (
          <View key={i} style={[s.row, { marginBottom: 2 }]}>
            <Text style={[s.bullet, { color: RED }]}>×</Text>
            <Text style={s.bulletText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  ),

  factions: () => (
    <View style={s.section}>
      <Text style={s.sectionTitle}>// 06 — Factions</Text>
      {[
        { id: "NATO", rep: "U.S. Army / Western Coalition", uniform: "MultiCam / OCP", detail: "You pick your faction at registration. Once a faction sells out it's full — register early if you have a preferred side." },
        { id: "RUFOR", rep: "Russian Army", uniform: "EMR, Flora, KLMK", detail: "Russian-pattern kit required. AK platforms and Soviet/Russian gear are standard." },
        { id: "MILITIA", rep: "Irregular Forces / Local Militia", uniform: "Civilian clothes, mixed military gear", detail: "Most accessible entry point if you don't have a full kit. Check your specific op's deployment orders for what's allowed." },
      ].map(({ id, rep, uniform, detail }) => (
        <View key={id} style={[s.card, { marginBottom: 8 }]}>
          <View style={[s.row, { marginBottom: 4 }]}>
            <Text style={[s.cardTitle, { color: RED, fontSize: 10, marginRight: 8 }]}>{id}</Text>
            <Text style={[s.cardText, { color: WHITE }]}>{rep}</Text>
          </View>
          <Text style={[s.cardText, { color: RED, marginBottom: 4 }]}>{uniform}</Text>
          <Text style={s.cardText}>{detail}</Text>
        </View>
      ))}
    </View>
  ),
};

export const SECTION_OPTIONS = [
  { key: "before-you-go", label: "Before You Go" },
  { key: "gear", label: "Gear Guide" },
  { key: "tactics", label: "Tactics 101" },
  { key: "lingo", label: "Platoon Lingo" },
  { key: "tacsop", label: "TACSOP Simplified" },
  { key: "factions", label: "Factions" },
];

export function FieldGuidePDF({ selected }: { selected: string[] }) {
  return (
    <Document>
      <Page size="A4" style={s.page}>
        <View style={s.header}>
          <Text style={s.headerLabel}>// MILSIM READY</Text>
          <Text style={s.headerTitle}>FIELD GUIDE</Text>
          <Text style={s.headerSub}>Highlight version — key info only. Read the full guide at milsimready.com</Text>
        </View>

        {selected.map((key) => {
          const render = SECTIONS[key];
          return render ? <View key={key}>{render()}</View> : null;
        })}

        <View style={s.footer} fixed>
          <Text style={s.footerText}>MILSIM READY — FIELD GUIDE</Text>
          <Text style={s.footerText}>milsimready.com</Text>
        </View>
      </Page>
    </Document>
  );
}
