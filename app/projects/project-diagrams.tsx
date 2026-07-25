import type { Project } from "./project-data";

type DiagramProps = { type: Project["diagram"] };

export function ProjectDiagram({ type }: DiagramProps) {
  const common = { fill: "none", stroke: "currentColor", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (type === "thesis") return (
    <svg className="diagram-svg" viewBox="0 0 420 320" aria-hidden="true">
      <g {...common} strokeWidth="1.3" opacity=".76">
        <rect x="39" y="63" width="101" height="46" rx="6" /><rect x="39" y="137" width="101" height="46" rx="6" /><rect x="39" y="211" width="101" height="46" rx="6" />
        <path d="M140 86h55M140 160h55M140 234h55" /><circle cx="230" cy="160" r="50" />
        <path d="M195 86 215 113M195 160h-15M195 234l20-27M280 160h54" /><path d="m325 152 9 8-9 8" />
        <rect x="334" y="126" width="54" height="68" rx="7" />
      </g>
      <g fill="currentColor"><circle cx="230" cy="160" r="7" /><circle cx="39" cy="86" r="3" /><circle cx="39" cy="160" r="3" /><circle cx="39" cy="234" r="3" /></g>
      <g className="diagram-label" fill="currentColor"><text x="58" y="90">EVALUATE</text><text x="61" y="164">DIAGNOSE</text><text x="64" y="238">CONTROL</text><text x="202" y="164">CTNLI</text><text x="340" y="154">VALID</text><text x="339" y="171">TRACE</text></g>
    </svg>
  );

  if (type === "agents") return (
    <svg className="diagram-svg" viewBox="0 0 420 320" aria-hidden="true">
      <g {...common} strokeWidth="1.3" opacity=".72">
        <rect x="30" y="132" width="82" height="48" rx="24" /><path d="M112 156h49" />
        <path d="m153 149 8 7-8 7" /><circle cx="195" cy="156" r="34" />
        <path d="M219 132 263 91M226 150l38-8M226 163l38 8M219 180l44 41" />
        <rect x="264" y="67" width="113" height="45" rx="8" /><rect x="264" y="119" width="113" height="45" rx="8" />
        <rect x="264" y="171" width="113" height="45" rx="8" /><rect x="264" y="223" width="113" height="45" rx="8" />
      </g>
      <g fill="currentColor"><circle cx="195" cy="156" r="5" /><circle cx="30" cy="156" r="3" /><circle cx="377" cy="90" r="3" /><circle cx="377" cy="142" r="3" /><circle cx="377" cy="194" r="3" /><circle cx="377" cy="246" r="3" /></g>
      <g className="diagram-label" fill="currentColor"><text x="55" y="160">CASE</text><text x="174" y="205">ROUTE</text><text x="284" y="95">CAUSAL</text><text x="284" y="147">GROUND</text><text x="284" y="199">VERIFY</text><text x="284" y="251">RISK</text></g>
    </svg>
  );

  if (type === "probe") return (
    <svg className="diagram-svg" viewBox="0 0 420 320" aria-hidden="true">
      <g {...common} strokeWidth="1.4" opacity=".75"><path d="M55 72v194h322" /><path d="M80 223 130 142l52 19 53-83 58 124 57-37" strokeDasharray="5 7" /><path d="M80 118l50 13 52-9 53 6 58-3 57 4" /></g>
      <g fill="currentColor"><circle cx="80" cy="118" r="5" /><circle cx="130" cy="131" r="5" /><circle cx="182" cy="122" r="5" /><circle cx="235" cy="128" r="5" /><circle cx="293" cy="125" r="5" /><circle cx="350" cy="129" r="5" /></g>
      <g className="diagram-label" fill="currentColor"><text x="76" y="101">KNOWLEDGE</text><text x="244" y="220">REASONING</text><text x="57" y="291">SAME FACTS · DIFFERENT INFERENCE</text></g>
    </svg>
  );

  if (type === "prompts") return (
    <svg className="diagram-svg" viewBox="0 0 420 320" aria-hidden="true">
      <g {...common} strokeWidth="1.3" opacity=".75"><rect x="150" y="77" width="132" height="165" rx="16" /><path d="M58 98h92M58 143h92M58 188h92M282 160h82" /><path d="m140 92 10 6-10 6m0 33 10 6-10 6m0 33 10 6-10 6m214-34 10 6-10 6" /><path d="M175 112h82M175 137h55M175 162h82M175 187h44M175 212h69" /></g>
      <g className="diagram-label" fill="currentColor"><text x="57" y="84">DIRECT</text><text x="57" y="129">COT</text><text x="57" y="174">ABSTRACT</text><text x="311" y="145">NLI</text><text x="177" y="267">ADAPT + COMPARE</text></g>
    </svg>
  );

  if (type === "retrieval") return (
    <svg className="diagram-svg" viewBox="0 0 420 320" aria-hidden="true">
      <g {...common} strokeWidth="1.3" opacity=".76"><circle cx="72" cy="159" r="39" /><path d="M111 159h57M159 151l9 8-9 8" /><path d="M184 86h78l31 73-31 73h-78l31-73-31-73Z" /><path d="M293 159h48M332 151l9 8-9 8" /><rect x="341" y="78" width="48" height="52" rx="5" /><rect x="341" y="134" width="48" height="52" rx="5" /><rect x="341" y="190" width="48" height="52" rx="5" /></g>
      <g fill="currentColor"><circle cx="61" cy="150" r="4" /><circle cx="83" cy="150" r="4" /><path d="M55 171c9-10 26-10 35 0" /></g>
      <g className="diagram-label" fill="currentColor"><text x="42" y="222">PATIENT</text><text x="199" y="154">SET-GUIDED</text><text x="207" y="170">REASONING</text><text x="336" y="263">RANKED TRIALS</text></g>
    </svg>
  );

  if (type === "safety") return (
    <svg className="diagram-svg" viewBox="0 0 420 320" aria-hidden="true">
      <g {...common} strokeWidth="1.4" opacity=".76"><path d="M210 56 321 94v70c0 65-45 97-111 116-66-19-111-51-111-116V94l111-38Z" /><path d="M210 93v149M135 145h150" /><path d="m50 91 49 18m-42 62 42-7m-27 77 41-31m257-119-49 18m42 62-42-7m27 77-41-31" strokeDasharray="5 7" /></g>
      <g fill="currentColor"><circle cx="50" cy="91" r="4" /><circle cx="57" cy="171" r="4" /><circle cx="72" cy="241" r="4" /><circle cx="370" cy="91" r="4" /><circle cx="363" cy="171" r="4" /><circle cx="348" cy="241" r="4" /></g>
      <g className="diagram-label" fill="currentColor"><text x="157" y="136">PERTURB</text><text x="164" y="175">MEASURE</text><text x="180" y="210">VERIFY</text></g>
    </svg>
  );

  if (type === "evidence") return (
    <svg className="diagram-svg" viewBox="0 0 420 320" aria-hidden="true">
      <g {...common} strokeWidth="1.3" opacity=".74"><rect x="41" y="55" width="128" height="210" rx="6" /><path d="M67 87h76M67 110h59M67 133h76M67 156h46M67 179h76M67 202h63M67 225h76" /><rect x="61" y="145" width="91" height="22" rx="3" strokeWidth="2.2" /><path d="M169 156h55M216 148l8 8-8 8" /><rect x="224" y="112" width="154" height="88" rx="10" /></g>
      <path d="m267 157 17 17 40-42" {...common} strokeWidth="3" />
      <g className="diagram-label" fill="currentColor"><text x="61" y="287">TRIAL REPORT</text><text x="248" y="221">ENTAILMENT + EVIDENCE</text></g>
    </svg>
  );

  if (type === "benchmark") return (
    <svg className="diagram-svg" viewBox="0 0 420 320" aria-hidden="true">
      <g {...common} strokeWidth="1.3" opacity=".75"><rect x="52" y="72" width="316" height="190" rx="7" /><path d="M52 126h316M171 72v190" /><path d="M195 158h137M195 181h93M195 204h116M195 227h76" /><circle cx="111" cy="172" r="26" /><path d="M100 172h22m-11-11v22" /><circle cx="111" cy="224" r="14" /></g>
      <g className="diagram-label" fill="currentColor"><text x="78" y="105">TWO TASKS</text><text x="197" y="105">1,000+ SUBMISSIONS</text><text x="78" y="298">ENTAILMENT · EVIDENCE SELECTION</text></g>
    </svg>
  );

  return (
    <svg className="diagram-svg" viewBox="0 0 420 320" aria-hidden="true">
      <g {...common} strokeWidth="1.3" opacity=".76"><circle cx="210" cy="160" r="108" /><circle cx="210" cy="160" r="72" /><circle cx="210" cy="160" r="34" /><path d="M210 52v74M210 194v74M102 160h74M244 160h74M134 84l51 52m50 49 51 52m0-153-51 52m-50 49-51 52" /></g>
      <g fill="currentColor"><circle cx="210" cy="160" r="8" /><circle cx="210" cy="52" r="4" /><circle cx="318" cy="160" r="4" /><circle cx="210" cy="268" r="4" /><circle cx="102" cy="160" r="4" /></g>
      <g className="diagram-label" fill="currentColor"><text x="174" y="164">ENTITY</text><text x="170" y="35">ABSTRACT</text><text x="327" y="164">EVENT</text><text x="173" y="294">QUALITY</text><text x="48" y="164">OBJECT</text></g>
    </svg>
  );
}
