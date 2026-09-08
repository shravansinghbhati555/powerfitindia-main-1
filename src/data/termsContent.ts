/**
 * PowerFit — Master Membership Agreement
 * Terms & Conditions • Informed Consent • Assumption of Risk • Member Declaration
 *
 * Source content supplied by PowerFit. Rendered by src/pages/TermsPage.tsx.
 */

export type Clause = {
  /** Clause number, e.g. "1.1." — omit for un-numbered paragraphs */
  n?: string;
  text?: string;
  bullets?: string[];
  /** Trailing sentence that continues after a bullet list */
  after?: string;
};

export type Section = {
  id: string;
  num: string;
  title: string;
  intro?: string;
  clauses?: Clause[];
  /** Special renderers */
  kind?: "clauses" | "checklist" | "emergency" | "consent" | "statements";
  items?: string[];
  note?: string;
};

export type Part = {
  id: string;
  label: string;
  title: string;
  sections: Section[];
};

export const AGREEMENT_TITLE = "Master Membership Agreement";
export const AGREEMENT_SUBTITLE =
  "Terms & Conditions • Informed Consent • Assumption of Risk • Member Declaration";
export const AGREEMENT_TAGLINE =
  "Committed to make you #ForeverFitForeverStrong #ZiddJazbaaJunoon";

export const importantNotice: string[] = [
  "PowerFit provides fitness, exercise and wellness-related services. Participation may involve cardiovascular exercise, resistance training, strength training, free weights, functional training, mobility work, stretching, group activities, personal training and other physical activities.",
  "Physical exercise carries inherent risks, including but not limited to muscle soreness, fatigue, strains, sprains, falls, dizziness, dehydration, aggravation of existing conditions, musculoskeletal injuries, cardiovascular complications and, in rare circumstances, serious injury or death.",
  "The Member is required to read this Agreement carefully before signing.",
  "By signing this Agreement, the Member confirms that they have understood its terms, have had a reasonable opportunity to seek clarification, and voluntarily agree to be bound by the applicable membership terms, facility rules and policies.",
  "Nothing in this Agreement is intended to exclude, restrict or waive any right, remedy or liability that cannot lawfully be excluded, restricted or waived under applicable law.",
];

export const parts: Part[] = [
  {
    id: "part-a",
    label: "Part A",
    title: "Membership Contract",
    sections: [
      {
        id: "s1",
        num: "1",
        title: "Nature of Membership",
        clauses: [
          {
            n: "1.1.",
            text: "A PowerFit membership is a fixed-term, personal right to access the services and facilities included in the specific membership plan purchased by the Member, subject to this Agreement and PowerFit's applicable policies.",
          },
          {
            n: "1.2.",
            text: "Membership is not a product, investment, deposit, security, subscription balance or monetary wallet.",
          },
          {
            n: "1.3.",
            text: "The Member is purchasing access to a defined fitness service for a defined period and is not purchasing a guaranteed number of visits, sessions, workouts, results or outcomes unless expressly stated otherwise in writing.",
          },
          {
            n: "1.4.",
            text: "Membership commencement and expiry dates shall be recorded by PowerFit at the time of enrollment.",
          },
          {
            n: "1.5.",
            text: "Unless expressly approved under this Agreement or by PowerFit in writing, the membership period continues to run irrespective of whether the Member attends the facility.",
          },
        ],
      },
      {
        id: "s2",
        num: "2",
        title: "Membership is Strictly Personal",
        clauses: [
          {
            n: "2.1.",
            text: "Membership is issued exclusively to the person named on the Membership Form.",
          },
          {
            n: "2.2.",
            text: "Membership may not be:",
            bullets: [
              "transferred;",
              "assigned;",
              "sold;",
              "lent;",
              "shared;",
              "gifted;",
              "exchanged;",
              "sublicensed; or",
              "used by any other person.",
            ],
          },
          {
            n: "2.3.",
            text: "Allowing another individual to use the Member's membership, identity, access credentials or membership benefits constitutes a material breach of this Agreement.",
          },
          {
            n: "2.4.",
            text: "PowerFit may suspend access immediately where unauthorized membership use is reasonably suspected.",
          },
          {
            n: "2.5.",
            text: "Membership transfer to another individual shall not be permitted unless PowerFit expressly agrees to such transfer in writing under a specific transfer policy.",
          },
        ],
      },
    ],
  },
  {
    id: "part-b",
    label: "Part B",
    title: "Fees, Payments, Refunds & Adjustments",
    sections: [
      {
        id: "s3",
        num: "3",
        title: "Membership Price",
        clauses: [
          {
            n: "3.1.",
            text: "The membership price applicable to the Member shall be the price communicated and accepted at the time of enrollment.",
          },
          {
            n: "3.2.",
            text: "The applicable price may include membership fees, taxes, enrollment charges, program charges, personal training charges or other expressly agreed charges.",
          },
          {
            n: "3.3.",
            text: "Promotional, introductory, referral, corporate, seasonal or special pricing is valid only for the specific transaction and period for which it is offered.",
          },
          {
            n: "3.4.",
            text: "A promotional price does not establish an entitlement to the same price for future purchases, renewals, extensions or additional services.",
          },
        ],
      },
      {
        id: "s4",
        num: "4",
        title: "Payment Terms",
        clauses: [
          {
            n: "4.1.",
            text: "Unless expressly agreed otherwise in writing, membership fees are payable in full before membership activation.",
          },
          {
            n: "4.2.",
            text: "Where PowerFit permits installment or deferred payment, the Member remains responsible for the full agreed membership price regardless of attendance.",
          },
          {
            n: "4.3.",
            text: "Failure to attend the facility does not cancel or suspend the Member's payment obligations.",
          },
          {
            n: "4.4.",
            text: "Any applicable taxes, statutory charges or government levies shall be payable in addition to the applicable fee where required.",
          },
          {
            n: "4.5.",
            text: "Membership access may be suspended where amounts due remain unpaid.",
          },
        ],
      },
      {
        id: "s5",
        num: "5",
        title: "Finality of Purchase",
        clauses: [
          {
            n: "5.1.",
            text: "Membership is a fixed-term service commitment. Once the membership has been activated, the Member cannot cancel the membership merely because they subsequently change their mind, change their personal plans, stop attending, lose interest, find it inconvenient to attend, relocate, travel, become busy, have academic or professional commitments, or otherwise choose not to use the membership.",
          },
          {
            n: "5.2.",
            text: "The Member is therefore expected to evaluate their schedule, requirements and suitability of the membership before purchasing.",
          },
          {
            n: "5.3.",
            text: "Enrollment, payment and acceptance of the membership constitute confirmation that the Member has chosen the applicable membership plan voluntarily.",
          },
        ],
      },
      {
        id: "s6",
        num: "6",
        title: "Refund Policy",
        clauses: [
          {
            n: "6.1.",
            text: "Except where a refund is required by applicable law or expressly approved under this Agreement, membership fees are non-refundable after membership activation.",
          },
          {
            n: "6.2.",
            text: "In particular, no refund shall ordinarily be payable merely because the Member:",
            bullets: [
              "does not attend;",
              "attends less frequently than expected;",
              "changes their mind;",
              "becomes busy;",
              "travels;",
              "relocates;",
              "changes employment or educational commitments;",
              "has examinations;",
              "experiences a change in personal circumstances;",
              "does not achieve expected results;",
              "does not follow the recommended workout or diet plan;",
              "decides that the gym is no longer required;",
              "joins another gym;",
              "purchases another fitness program;",
              "does not like a particular Trainer;",
              "does not use all available membership days;",
              "does not use all included services;",
              "is unable to attend at preferred timings;",
              "does not use the available equipment or facilities; or",
              "otherwise chooses not to utilize the membership.",
            ],
          },
          {
            n: "6.3.",
            text: "Unused membership days have no cash value and shall not be converted into cash, refund, credit, discount or monetary compensation, except where expressly required by applicable law or approved in writing by PowerFit.",
          },
          {
            n: "6.4.",
            text: "Partial use of a membership does not create a right to a proportionate refund.",
          },
          {
            n: "6.5.",
            text: "The Member's failure to use the membership does not constitute cancellation by PowerFit and does not automatically terminate the Member's contractual payment obligations.",
          },
        ],
      },
      {
        id: "s7",
        num: "7",
        title: "Medical Conditions, Injury & Refund",
        clauses: [
          {
            n: "7.1.",
            text: "The Member is responsible for disclosing relevant medical conditions, injuries and limitations before commencing exercise.",
          },
          {
            n: "7.2.",
            text: "A medical condition, injury or illness arising or discovered after membership activation does not automatically create a right to cancellation, refund, credit or extension.",
          },
          {
            n: "7.3.",
            text: "Where the Member becomes temporarily medically unfit to exercise, PowerFit may, at its discretion and subject to its prevailing medical-freeze policy, permit a temporary membership freeze upon receipt of appropriate supporting medical documentation.",
          },
          {
            n: "7.4.",
            text: "Any such freeze:",
            bullets: [
              "is not automatic;",
              "must be approved by PowerFit;",
              "applies only for the approved period;",
              "cannot be backdated unless expressly approved;",
              "cannot be converted into cash;",
              "does not create a precedent for future cases; and",
              "does not modify any other contractual term.",
            ],
          },
          {
            n: "7.5.",
            text: "A medical freeze, where granted, is a temporary accommodation and not a refund or cancellation.",
          },
          {
            n: "7.6.",
            text: "PowerFit may determine reasonable documentation requirements for medical freeze requests.",
          },
        ],
      },
      {
        id: "s8",
        num: "8",
        title: "Membership Freeze",
        clauses: [
          {
            n: "8.1.",
            text: "Membership freeze is a discretionary facility and is available only where the applicable membership plan or PowerFit policy permits it.",
          },
          { n: "8.2.", text: "A Member has no automatic right to freeze membership." },
          {
            n: "8.3.",
            text: "Unless specifically stated in writing, the following do not automatically qualify for a freeze:",
            bullets: [
              "vacations;",
              "business travel;",
              "examinations;",
              "work commitments;",
              "personal events;",
              "weddings;",
              "festivals;",
              "relocation;",
              "temporary lack of motivation;",
              "change of schedule;",
              "lack of transportation; or",
              "ordinary personal inconvenience.",
            ],
          },
          { n: "8.4.", text: "Any approved freeze shall have a defined start and end date." },
          {
            n: "8.5.",
            text: "Once the approved freeze period ends, the membership shall automatically resume.",
          },
          {
            n: "8.6.",
            text: "A Member cannot continue to treat a membership as frozen after the approved freeze period has expired.",
          },
        ],
      },
      {
        id: "s9",
        num: "9",
        title: "Membership Extension",
        clauses: [
          {
            n: "9.1.",
            text: "Extension of membership beyond the original expiry date is permitted only where expressly approved under PowerFit's policy.",
          },
          {
            n: "9.2.",
            text: "Extension may be granted for approved freezes, specific promotional commitments, operational disruptions or other circumstances expressly recognized by PowerFit.",
          },
          {
            n: "9.3.",
            text: "An extension is not automatically granted because of non-attendance.",
          },
          { n: "9.4.", text: "Any extension granted shall be recorded by PowerFit." },
          {
            n: "9.5.",
            text: "Verbal assurances regarding extension shall not be binding unless confirmed by an authorized PowerFit representative through an appropriate record.",
          },
        ],
      },
      {
        id: "s10",
        num: "10",
        title: "Membership Adjustments",
        clauses: [
          {
            n: "10.1.",
            text: "The membership purchased is the membership selected and paid for by the Member.",
          },
          {
            n: "10.2.",
            text: "The Member may not subsequently demand conversion of one membership category into another merely because their circumstances, preferences or requirements have changed.",
          },
          {
            n: "10.3.",
            text: "Membership cannot ordinarily be converted:",
            bullets: [
              "from longer duration to shorter duration;",
              "from premium to basic;",
              "from one branch/location to another;",
              "from membership to personal training;",
              "from membership to products;",
              "from membership to supplements;",
              "from membership to cash;",
              "from membership to another person's membership; or",
              "from one service package to another,",
            ],
            after: "unless PowerFit expressly permits such conversion under its prevailing policy.",
          },
          {
            n: "10.4.",
            text: "Where PowerFit voluntarily permits an adjustment, the adjustment shall be subject to the terms, valuation and administrative conditions communicated by PowerFit.",
          },
          {
            n: "10.5.",
            text: "No adjustment shall be interpreted as creating a precedent or permanent entitlement for any other Member or future transaction.",
          },
        ],
      },
      {
        id: "s11",
        num: "11",
        title: "Branch / Location Changes",
        clauses: [
          {
            n: "11.1.",
            text: "A membership issued for a particular PowerFit location is ordinarily valid only for that location unless the purchased plan expressly provides multi-location access.",
          },
          {
            n: "11.2.",
            text: "Access to another location, if available, may be subject to additional charges, restrictions or approval.",
          },
          {
            n: "11.3.",
            text: "A Member's relocation does not automatically create a right to refund, transfer or membership conversion.",
          },
        ],
      },
      {
        id: "s12",
        num: "12",
        title: "Service Interruptions & Facility Closure",
        clauses: [
          {
            n: "12.1.",
            text: "PowerFit may temporarily restrict or suspend access to all or part of the facility for reasons including:",
            bullets: [
              "maintenance;",
              "repairs;",
              "cleaning;",
              "equipment replacement;",
              "safety;",
              "government directions;",
              "utility failure;",
              "emergency;",
              "natural events;",
              "force majeure;",
              "renovation;",
              "events;",
              "operational requirements; or",
              "circumstances beyond PowerFit's reasonable control.",
            ],
          },
          {
            n: "12.2.",
            text: "Where a temporary closure materially affects the Member's contractual membership period, PowerFit may, where appropriate, provide a reasonable extension or alternative arrangement at its discretion and subject to applicable law.",
          },
          {
            n: "12.3.",
            text: "Temporary closure of a particular area, equipment or service does not automatically create a right to refund or cancellation.",
          },
          {
            n: "12.4.",
            text: "PowerFit's obligation, where applicable, shall be limited to providing a reasonable remedy consistent with the nature and duration of the interruption and applicable law.",
          },
        ],
      },
    ],
  },
  {
    id: "part-c",
    label: "Part C",
    title: "Membership Access",
    sections: [
      {
        id: "s13",
        num: "13",
        title: "Access & Operating Hours",
        clauses: [
          {
            n: "13.1.",
            text: "Membership access is subject to published operating hours and applicable facility policies.",
          },
          {
            n: "13.2.",
            text: "PowerFit may reasonably modify operating hours due to operational, safety, staffing, maintenance, legal or other legitimate requirements.",
          },
          {
            n: "13.3.",
            text: "Members are responsible for planning their attendance within available operating hours.",
          },
          {
            n: "13.4.",
            text: "The inability of a Member to attend during their preferred time does not automatically create a right to refund or extension.",
          },
        ],
      },
      {
        id: "s14",
        num: "14",
        title: "Personal Training & Included Services",
        clauses: [
          {
            n: "14.1.",
            text: "Where personal training sessions or other services are included in a membership package, the number, validity, scheduling and usage conditions shall be governed by the applicable package terms.",
          },
          { n: "14.2.", text: "Included sessions are not automatically redeemable for cash." },
          {
            n: "14.3.",
            text: "Unused sessions do not automatically carry forward beyond their stated validity period.",
          },
          { n: "14.4.", text: "Cancellation and rescheduling requirements may apply." },
        ],
      },
    ],
  },
  {
    id: "part-d",
    label: "Part D",
    title: "Health, Medical & Fitness Declaration",
    sections: [
      {
        id: "s15",
        num: "15",
        title: "Health Disclosure",
        clauses: [
          {
            n: "15.1.",
            text: "The Member must provide complete and accurate information regarding any condition that may reasonably affect safe participation.",
          },
          {
            n: "15.2.",
            text: "This includes, where applicable:",
            bullets: [
              "cardiovascular conditions;",
              "blood pressure conditions;",
              "diabetes;",
              "respiratory conditions;",
              "asthma;",
              "seizures;",
              "fainting or dizziness;",
              "musculoskeletal injuries;",
              "chronic pain;",
              "recent surgery;",
              "pregnancy;",
              "postpartum status;",
              "neurological conditions;",
              "balance problems;",
              "rehabilitation;",
              "medications affecting exercise capacity;",
              "allergies;",
              "dietary restrictions; and",
              "other relevant conditions.",
            ],
          },
          {
            n: "15.3.",
            text: "Failure to disclose material health information may materially increase the Member's risk of injury.",
          },
          {
            n: "15.4.",
            text: "The Member must notify PowerFit if their health condition materially changes during membership.",
          },
        ],
      },
      {
        id: "s16",
        num: "16",
        title: "Medical Clearance",
        clauses: [
          {
            n: "16.1.",
            text: "PowerFit may require medical clearance before allowing participation where reasonably warranted.",
          },
          {
            n: "16.2.",
            text: "PowerFit may require clearance where there is a reasonable concern regarding the Member's ability to safely participate.",
          },
          {
            n: "16.3.",
            text: "Medical clearance does not guarantee that exercise will be risk-free.",
          },
          { n: "16.4.", text: "PowerFit does not provide medical diagnosis or medical treatment." },
        ],
      },
      {
        id: "s17",
        num: "17",
        title: "Fitness to Exercise",
        clauses: [
          {
            n: "17.1.",
            text: "The Member is responsible for exercising within their physical capabilities.",
          },
          {
            n: "17.2.",
            text: "The Member must stop exercise and notify a Trainer if they experience concerning symptoms.",
          },
          {
            n: "17.3.",
            text: "Such symptoms may include:",
            bullets: [
              "chest pain;",
              "unusual breathlessness;",
              "fainting;",
              "severe dizziness;",
              "sudden weakness;",
              "unusual or severe pain;",
              "loss of coordination; or",
              "any other concerning symptom.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "part-e",
    label: "Part E",
    title: "Assumption of Risk",
    sections: [
      {
        id: "s18",
        num: "18",
        title: "Inherent Risks",
        clauses: [
          { n: "18.1.", text: "The Member understands that exercise involves inherent risks." },
          {
            n: "18.2.",
            text: "These may include:",
            bullets: [
              "muscle soreness;",
              "fatigue;",
              "cramps;",
              "strains;",
              "sprains;",
              "joint injuries;",
              "tendon or ligament injuries;",
              "falls;",
              "collision;",
              "equipment-related injuries;",
              "dizziness;",
              "dehydration;",
              "overheating;",
              "fainting;",
              "aggravation of existing conditions;",
              "cardiovascular complications; and",
              "other physical injury.",
            ],
          },
          {
            n: "18.3.",
            text: "The Member voluntarily accepts the ordinary and inherent risks associated with physical exercise.",
          },
          {
            n: "18.4.",
            text: "This acceptance does not waive any rights or remedies that cannot legally be waived.",
          },
        ],
      },
      {
        id: "s19",
        num: "19",
        title: "Equipment Use",
        clauses: [
          { n: "19.1.", text: "Members must use equipment only for its intended purpose." },
          {
            n: "19.2.",
            text: "Members must follow instructions provided by Trainers and PowerFit staff.",
          },
          {
            n: "19.3.",
            text: "Members must not modify, tamper with, dismantle or attempt to repair equipment.",
          },
          {
            n: "19.4.",
            text: "Members must request assistance if they do not know how to use equipment safely.",
          },
          { n: "19.5.", text: "Members must immediately report defective or damaged equipment." },
          {
            n: "19.6.",
            text: "Members must not use equipment they reasonably believe to be unsafe.",
          },
        ],
      },
      {
        id: "s20",
        num: "20",
        title: "Trainer Guidance",
        clauses: [
          {
            n: "20.1.",
            text: "Trainers provide fitness guidance within the scope of their training and role.",
          },
          { n: "20.2.", text: "Trainer guidance is not medical diagnosis or medical treatment." },
          {
            n: "20.3.",
            text: "Members must communicate injuries, discomfort or limitations to their Trainer.",
          },
          {
            n: "20.4.",
            text: "Members remain responsible for communicating honestly about their ability and condition.",
          },
          {
            n: "20.5.",
            text: "Members should not deliberately exceed prescribed or reasonable training limits.",
          },
        ],
      },
    ],
  },
  {
    id: "part-f",
    label: "Part F",
    title: "Dress, Hygiene & Personal Belongings",
    sections: [
      {
        id: "s21",
        num: "21",
        title: "Clothing & Footwear",
        clauses: [
          { n: "21.1.", text: "Members must wear clean, comfortable and appropriate sportswear." },
          {
            n: "21.2.",
            text: "Jeans, formal footwear, slippers, flip-flops and unsuitable footwear are not permitted on the workout floor.",
          },
          {
            n: "21.3.",
            text: "Members are required to bring and use a clean pair of workout/gym shoes specifically for use inside the gym premises.",
          },
          {
            n: "21.4.",
            text: "Members must maintain their workout footwear in a reasonably clean and usable condition.",
          },
          {
            n: "21.5.",
            text: "Outdoor footwear should not be worn where dedicated gym footwear is required.",
          },
          {
            n: "21.6.",
            text: "Members are responsible for carrying, storing and safeguarding their footwear.",
          },
          {
            n: "21.7.",
            text: "PowerFit may provide shoe racks, lockers or storage facilities from time to time. Availability of dedicated shoe storage is not guaranteed.",
          },
          {
            n: "21.8.",
            text: "Where storage is provided, its use is subject to PowerFit's storage policy.",
          },
        ],
      },
      {
        id: "s22",
        num: "22",
        title: "Sweat Towel",
        clauses: [
          { n: "22.1.", text: "Members must carry a sweat towel while exercising." },
          { n: "22.2.", text: 'PowerFit may enforce a "No Sweat Towel, No Workout" policy.' },
          {
            n: "22.3.",
            text: "Members must wipe equipment after use using the provided cleaning materials.",
          },
        ],
      },
      {
        id: "s23",
        num: "23",
        title: "Bags & Belongings",
        clauses: [
          {
            n: "23.1.",
            text: "Bags and unnecessary personal belongings are prohibited on the workout floor.",
          },
          { n: "23.2.", text: "Members should use designated storage facilities where available." },
          { n: "23.3.", text: "Members remain responsible for their belongings." },
          { n: "23.4.", text: "PowerFit recommends not bringing valuables into the facility." },
          {
            n: "23.5.",
            text: "PowerFit shall not be responsible for loss, theft or damage to belongings except to the extent required under applicable law.",
          },
        ],
      },
      {
        id: "s24",
        num: "24",
        title: "Lockers & Storage",
        clauses: [
          {
            n: "24.1.",
            text: "Storage facilities are provided, where available, for convenience and must be used responsibly.",
          },
          { n: "24.2.", text: "Members must not store prohibited, dangerous or illegal items." },
          { n: "24.3.", text: "Members must comply with applicable locker-use rules." },
          {
            n: "24.4.",
            text: "Unattended items may be removed where reasonably necessary for safety, hygiene or operations.",
          },
          {
            n: "24.5.",
            text: "Lost property shall be dealt with under PowerFit's prevailing lost-and-found procedure and applicable law.",
          },
        ],
      },
    ],
  },
  {
    id: "part-g",
    label: "Part G",
    title: "Gym Conduct & Safety",
    sections: [
      {
        id: "s25",
        num: "25",
        title: "Weights & Equipment",
        clauses: [
          {
            n: "25.1.",
            text: "Weights, plates, dumbbells, barbells and equipment must be handled responsibly.",
          },
          {
            n: "25.2.",
            text: "Weights must not be intentionally dropped except where the equipment and exercise are specifically designed to permit controlled dropping.",
          },
          {
            n: "25.3.",
            text: "Equipment must be returned to its designated location after use.",
          },
          {
            n: "25.4.",
            text: "Deliberate, reckless or negligent damage may result in recovery of reasonable repair/replacement costs, subject to applicable law.",
          },
          {
            n: "25.5.",
            text: "Serious or repeated misuse may result in suspension or termination.",
          },
        ],
      },
      {
        id: "s26",
        num: "26",
        title: "Member Conduct",
        clauses: [
          {
            n: "26.1.",
            text: "Members must behave respectfully toward staff, Trainers, Members and visitors.",
          },
          {
            n: "26.2.",
            text: "The following are prohibited:",
            bullets: [
              "violence;",
              "threats;",
              "harassment;",
              "bullying;",
              "intimidation;",
              "sexual harassment;",
              "discriminatory conduct;",
              "abusive language;",
              "vandalism;",
              "theft;",
              "dangerous horseplay;",
              "deliberate disruption; and",
              "conduct creating an unreasonable safety risk.",
            ],
          },
          {
            n: "26.3.",
            text: "PowerFit may suspend or terminate membership for serious or repeated misconduct.",
          },
        ],
      },
      {
        id: "s27",
        num: "27",
        title: "Mobile Phones",
        clauses: [
          { n: "27.1.", text: "Mobile phones may be used responsibly." },
          { n: "27.2.", text: "Phone use must not compromise safety." },
          {
            n: "27.3.",
            text: "Members must not record or photograph another Member without appropriate consent.",
          },
          { n: "27.4.", text: "Prolonged phone use must not unnecessarily occupy equipment." },
        ],
      },
      {
        id: "s28",
        num: "28",
        title: "Alcohol, Drugs & Impairment",
        clauses: [
          {
            n: "28.1.",
            text: "Members must not exercise while materially impaired by alcohol, recreational drugs or any substance affecting judgment, coordination, alertness or physical capacity.",
          },
          {
            n: "28.2.",
            text: "PowerFit may refuse access where a Member presents a reasonable safety concern due to impairment.",
          },
        ],
      },
    ],
  },
  {
    id: "part-h",
    label: "Part H",
    title: "Emergency Procedures",
    sections: [
      {
        id: "s29",
        num: "29",
        title: "Medical Emergency",
        clauses: [
          {
            n: "29.1.",
            text: "In an apparent emergency, PowerFit may take reasonable steps to obtain emergency medical assistance.",
          },
          { n: "29.2.", text: "PowerFit may contact the Member's emergency contact." },
          {
            n: "29.3.",
            text: "Where the Member cannot provide instructions, the Member authorizes PowerFit to take reasonable emergency steps.",
          },
          { n: "29.4.", text: "PowerFit is not a hospital or emergency medical facility." },
          {
            n: "29.5.",
            text: "External medical costs are ordinarily the Member's responsibility unless applicable law provides otherwise.",
          },
        ],
      },
      {
        id: "s30",
        num: "30",
        title: "Emergency Contact",
        kind: "emergency",
        items: ["Name", "Relationship", "Phone"],
        note: "The Member must keep this information current.",
      },
    ],
  },
  {
    id: "part-i",
    label: "Part I",
    title: "Programs, Nutrition & Supplements",
    sections: [
      {
        id: "s31",
        num: "31",
        title: "Fitness Results",
        clauses: [
          { n: "31.1.", text: "PowerFit does not guarantee specific results." },
          {
            n: "31.2.",
            text: "Results depend upon multiple factors including:",
            bullets: [
              "attendance;",
              "exercise adherence;",
              "nutrition;",
              "sleep;",
              "recovery;",
              "genetics;",
              "lifestyle;",
              "medical circumstances;",
              "consistency; and",
              "individual response.",
            ],
          },
          {
            n: "31.3.",
            text: "Photographs, testimonials, transformation examples and results achieved by other Members are not guarantees of future results.",
          },
        ],
      },
      {
        id: "s32",
        num: "32",
        title: "Diet & Nutrition Guidance",
        clauses: [
          { n: "32.1.", text: "PowerFit may provide diet plans or general nutrition guidance." },
          {
            n: "32.2.",
            text: "Such guidance does not replace medical advice or individualized medical nutrition therapy where required.",
          },
          {
            n: "32.3.",
            text: "Members must disclose relevant allergies, intolerances and dietary restrictions.",
          },
          {
            n: "32.4.",
            text: "Members with medical or clinical nutrition requirements should consult an appropriate healthcare professional.",
          },
        ],
      },
      {
        id: "s33",
        num: "33",
        title: "Supplements",
        clauses: [
          { n: "33.1.", text: "PowerFit may make certain sports-nutrition products available." },
          {
            n: "33.2.",
            text: "Members are responsible for considering whether a supplement is appropriate for them.",
          },
          { n: "33.3.", text: "Members should seek professional advice where appropriate." },
          {
            n: "33.4.",
            text: "Members purchasing products outside PowerFit should use reputable sources and verify authenticity, packaging and expiry.",
          },
          {
            n: "33.5.",
            text: "PowerFit does not endorse counterfeit, adulterated, expired or improperly stored products.",
          },
        ],
      },
    ],
  },
  {
    id: "part-j",
    label: "Part J",
    title: "Photography, Video & Testimonials",
    sections: [
      {
        id: "s34",
        num: "34",
        title: "Facility Photography",
        clauses: [
          {
            n: "34.1.",
            text: "PowerFit may photograph or record its facility, events, classes and general activities for legitimate business and operational purposes.",
          },
          {
            n: "34.2.",
            text: "Members may be incidentally visible in general facility footage.",
          },
          {
            n: "34.3.",
            text: "PowerFit will not intentionally portray a Member in a misleading or materially inappropriate manner.",
          },
        ],
      },
      {
        id: "s35",
        num: "35",
        title: "Individual Marketing Consent",
        kind: "consent",
        intro:
          "Individual identifiable photographs, videos, testimonials or transformation stories intended for promotional use shall be subject to an appropriate consent mechanism.",
        // items: ["YES, I consent.", "NO, I do not consent."],
        // note: "Member Initials: ______",
      },
    ],
  },
  {
    id: "part-k",
    label: "Part K",
    title: "Personal Data & Communication",
    sections: [
      {
        id: "s36",
        num: "36",
        title: "Member Information",
        clauses: [
          {
            n: "36.1.",
            text: "PowerFit may collect and process information reasonably necessary to provide and administer its services.",
          },
          {
            n: "36.2.",
            text: "Such information may include:",
            bullets: [
              "name;",
              "contact details;",
              "membership information;",
              "payment information;",
              "emergency contact details;",
              "fitness-related information;",
              "health information voluntarily provided for program/safety purposes;",
              "photographs where separately consented to; and",
              "other information reasonably required for service administration.",
            ],
          },
          {
            n: "36.3.",
            text: "Personal information shall be handled in accordance with applicable law and PowerFit's applicable privacy notice.",
          },
          {
            n: "36.4.",
            text: "The Member shall provide accurate information and update material changes.",
          },
        ],
      },
      {
        id: "s37",
        num: "37",
        title: "WhatsApp & Digital Communication",
        clauses: [
          {
            n: "37.1.",
            text: "The Member agrees that PowerFit may use the Member's provided communication channels for membership administration and service-related communication.",
          },
          {
            n: "37.2.",
            text: "This may include:",
            bullets: [
              "payment reminders;",
              "membership expiry notifications;",
              "appointment reminders;",
              "workout communication;",
              "diet/program communication;",
              "operational announcements;",
              "customer support;",
              "emergency communication; and",
              "other service-related communication.",
            ],
          },
          {
            n: "37.3.",
            text: "Promotional communications shall be handled in accordance with applicable consent and opt-out requirements.",
          },
        ],
      },
    ],
  },
  {
    id: "part-l",
    label: "Part L",
    title: "Minor Members",
    sections: [
      {
        id: "s38",
        num: "38",
        title: "Members Below the Age of Majority",
        clauses: [
          {
            n: "38.1.",
            text: "A minor may participate only with appropriate consent from a parent or legal guardian.",
          },
          {
            n: "38.2.",
            text: "The guardian confirms that they have authority to provide such consent.",
          },
          {
            n: "38.3.",
            text: "The guardian must disclose relevant health, medical or physical information.",
          },
          {
            n: "38.4.",
            text: "PowerFit may impose additional access, supervision or program requirements for minors.",
          },
        ],
      },
    ],
  },
  {
    id: "part-m",
    label: "Part M",
    title: "Suspension & Termination",
    sections: [
      {
        id: "s39",
        num: "39",
        title: "Member Suspension",
        clauses: [
          {
            text: "PowerFit may temporarily suspend membership access where reasonably necessary due to:",
            bullets: [
              "non-payment;",
              "safety concerns;",
              "serious misconduct;",
              "unauthorized membership use;",
              "deliberate property damage;",
              "repeated breach of gym rules;",
              "harassment or threats;",
              "unlawful conduct; or",
              "other material breach of this Agreement.",
            ],
          },
        ],
      },
      {
        id: "s40",
        num: "40",
        title: "Termination by PowerFit",
        clauses: [
          {
            n: "40.1.",
            text: "PowerFit may terminate membership where a Member commits a serious or repeated material breach of this Agreement.",
          },
          {
            n: "40.2.",
            text: "Where appropriate, PowerFit may provide a warning and reasonable opportunity to rectify the breach.",
          },
          {
            n: "40.3.",
            text: "Immediate termination may be appropriate for serious misconduct, violence, threats, theft, deliberate property damage, fraud, unauthorized membership use or conduct creating a serious safety risk.",
          },
          {
            n: "40.4.",
            text: "Any refund following termination shall be determined in accordance with this Agreement, applicable PowerFit policy and applicable law.",
          },
        ],
      },
      {
        id: "s41",
        num: "41",
        title: "Termination Requested by Member",
        clauses: [
          {
            n: "41.1.",
            text: "A Member may request cancellation of membership by contacting PowerFit through the designated official channel.",
          },
          {
            n: "41.2.",
            text: "A cancellation request does not automatically create a right to refund.",
          },
          {
            n: "41.3.",
            text: "The effective date of cancellation shall be determined according to the applicable cancellation policy and any mandatory legal requirements.",
          },
          {
            n: "41.4.",
            text: "Unless a refund is legally required or specifically approved, unused membership time shall expire without cash compensation.",
          },
        ],
      },
    ],
  },
  {
    id: "part-n",
    label: "Part N",
    title: "Changes to Services & Terms",
    sections: [
      {
        id: "s42",
        num: "42",
        title: "Changes to Facilities & Services",
        clauses: [
          {
            n: "42.1.",
            text: "PowerFit may modify its:",
            bullets: [
              "equipment;",
              "layout;",
              "classes;",
              "schedules;",
              "Trainers;",
              "programs;",
              "operating procedures;",
              "policies; and",
              "other operational aspects of the facility.",
            ],
          },
          {
            n: "42.2.",
            text: "PowerFit will use reasonable efforts to maintain the general nature and quality of the services offered.",
          },
          {
            n: "42.3.",
            text: "A change to a particular Trainer, class, piece of equipment, schedule or operational feature does not automatically create a right to cancel or obtain a refund.",
          },
        ],
      },
      {
        id: "s43",
        num: "43",
        title: "Changes to These Terms",
        clauses: [
          {
            n: "43.1.",
            text: "PowerFit may reasonably update operational rules and policies from time to time.",
          },
          {
            n: "43.2.",
            text: "Material changes affecting existing contractual rights shall be communicated in an appropriate manner.",
          },
          {
            n: "43.3.",
            text: "Updated terms may be communicated through:",
            bullets: [
              "email;",
              "WhatsApp;",
              "member applications;",
              "website;",
              "facility notices;",
              "membership systems; or",
              "other reasonable communication channels.",
            ],
          },
          {
            n: "43.4.",
            text: "Changes shall not operate retrospectively to deprive Members of rights that cannot legally be modified retrospectively.",
          },
        ],
      },
    ],
  },
  {
    id: "part-o",
    label: "Part O",
    title: "Liability",
    sections: [
      {
        id: "s44",
        num: "44",
        title: "Member Responsibility",
        clauses: [
          {
            n: "44.1.",
            text: "The Member accepts responsibility for participating within their own physical capabilities.",
          },
          { n: "44.2.", text: "The Member must follow reasonable safety instructions." },
          {
            n: "44.3.",
            text: "The Member acknowledges that failure to disclose relevant medical information, misuse of equipment, ignoring safety instructions or exercising beyond their capabilities can increase the risk of injury.",
          },
        ],
      },
      {
        id: "s45",
        num: "45",
        title: "Limitation of Liability",
        clauses: [
          {
            n: "45.1.",
            text: "To the maximum extent permitted by applicable law, PowerFit shall not be liable for injury, loss or damage arising solely from:",
            bullets: [
              "inherent risks of ordinary physical exercise;",
              "the Member's own acts or omissions;",
              "undisclosed medical conditions;",
              "misuse of equipment;",
              "failure to follow reasonable instructions;",
              "unauthorized activities;",
              "failure to report symptoms or injuries; or",
              "circumstances beyond PowerFit's reasonable control.",
            ],
          },
          {
            n: "45.2.",
            text: "Nothing in this Agreement excludes liability arising from circumstances where such exclusion is prohibited by law.",
          },
          {
            n: "45.3.",
            text: "Nothing in this Agreement permits PowerFit or its personnel to disregard their legal duties or reasonable safety obligations.",
          },
          {
            n: "45.4.",
            text: "The Member retains all rights and remedies available under applicable law.",
          },
        ],
      },
    ],
  },
  {
    id: "part-p",
    label: "Part P",
    title: "Force Majeure",
    sections: [
      {
        id: "s46",
        num: "46",
        title: "Events Beyond Reasonable Control",
        clauses: [
          {
            n: "46.1.",
            text: "PowerFit shall not be treated as being in breach to the extent performance is prevented or materially affected by circumstances beyond its reasonable control.",
          },
          {
            n: "46.2.",
            text: "Such circumstances may include:",
            bullets: [
              "natural disasters;",
              "fire;",
              "flood;",
              "epidemic/pandemic;",
              "government orders;",
              "civil disturbance;",
              "utility failures;",
              "major infrastructure failures;",
              "security incidents;",
              "strikes;",
              "regulatory restrictions; or",
              "other circumstances beyond reasonable control.",
            ],
          },
          {
            n: "46.3.",
            text: "PowerFit shall use reasonable efforts to resume services as soon as practicable.",
          },
        ],
      },
    ],
  },
  {
    id: "part-q",
    label: "Part Q",
    title: "General Contractual Terms",
    sections: [
      {
        id: "s47",
        num: "47",
        title: "No Verbal Modification",
        clauses: [
          {
            n: "47.1.",
            text: "No employee, Trainer or representative may alter the Member's contractual rights, refund entitlement, membership duration or financial terms through an informal verbal assurance unless authorized and recorded by PowerFit.",
          },
          {
            n: "47.2.",
            text: "Any special exception must be documented through an authorized PowerFit communication or record.",
          },
        ],
      },
      {
        id: "s48",
        num: "48",
        title: "No Waiver",
        clauses: [
          {
            n: "48.1.",
            text: "If PowerFit does not immediately enforce a particular provision, this does not mean that PowerFit has permanently waived its right to enforce that provision.",
          },
          {
            n: "48.2.",
            text: "A one-time exception, concession or adjustment shall not automatically create a precedent or entitlement for future transactions.",
          },
        ],
      },
      {
        id: "s49",
        num: "49",
        title: "Severability",
        clauses: [
          {
            n: "49.1.",
            text: "If any provision of this Agreement is found to be invalid, unlawful or unenforceable, that provision shall be modified or severed only to the extent necessary, while the remaining provisions shall continue to operate to the extent legally permissible.",
          },
        ],
      },
      {
        id: "s50",
        num: "50",
        title: "Entire Agreement",
        clauses: [
          {
            n: "50.1.",
            text: "This Agreement, together with the Member's membership form, applicable price/package terms, policies expressly incorporated into the membership and any separately signed consent forms, constitutes the agreement governing the Member's relationship with PowerFit.",
          },
          {
            n: "50.2.",
            text: "In the event of an inconsistency, a specific written commercial term expressly agreed for the Member's membership shall prevail over a general operational rule, subject to applicable law.",
          },
        ],
      },
      {
        id: "s51",
        num: "51",
        title: "Governing Law & Dispute Resolution",
        clauses: [
          {
            n: "51.1.",
            text: "This Agreement shall be governed by the laws applicable in India.",
          },
          {
            n: "51.2.",
            text: "The parties shall initially attempt to resolve any dispute through good-faith communication with PowerFit management.",
          },
          {
            n: "51.3.",
            text: "Nothing in this clause shall prevent a consumer from exercising any statutory right or remedy available under applicable law.",
          },
          {
            n: "51.4.",
            text: "Any jurisdiction or dispute-resolution provision shall operate subject to mandatory provisions of applicable law.",
          },
        ],
      },
    ],
  },
  // {
  //   id: "part-r",
  //   label: "Part R",
  //   title: "Member Acknowledgement",
  //   sections: [
  //     {
  //       id: "s52",
  //       num: "52",
  //       title: "Member Confirmation",
  //       kind: "checklist",
  //       intro: "By signing this Agreement, I confirm that:",
  //       items: [
  //         "I have read the complete Membership Agreement.",
  //         "I have understood the membership fee and payment terms.",
  //         "I understand that membership is a fixed-term service commitment.",
  //         "I understand that non-attendance does not automatically suspend, extend or cancel my membership.",
  //         "I understand the refund policy.",
  //         "I understand that unused membership days ordinarily have no cash value.",
  //         "I understand that membership adjustments, transfers and freezes are subject to the applicable PowerFit policy and are not automatic rights.",
  //         "I understand that medical conditions or injuries do not automatically create a refund or cancellation right.",
  //         "I understand that approved medical freezes, where available, are temporary accommodations and not refunds.",
  //         "I understand that I must disclose relevant medical information.",
  //         "I understand that exercise carries inherent risks.",
  //         "I voluntarily choose to participate in physical activity at PowerFit.",
  //         "I agree to follow reasonable safety instructions.",
  //         "I agree to use PowerFit equipment responsibly.",
  //         "I agree to comply with PowerFit's hygiene and conduct rules.",
  //         "I understand that PowerFit does not guarantee specific fitness or aesthetic results.",
  //         "I understand that nutrition and fitness guidance does not replace medical treatment.",
  //         "I understand the emergency procedures.",
  //         "I have provided accurate information to PowerFit.",
  //         "I have had an opportunity to ask questions before signing.",
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: "part-s",
  //   label: "Part S",
  //   title: "Medical & Emergency Consent",
  //   sections: [
  //     {
  //       id: "s-medical-consent",
  //       num: "",
  //       title: "Medical & Emergency Consent",
  //       kind: "statements",
  //       items: [
  //         "I understand that PowerFit is not a medical facility.",
  //         "In the event of an apparent emergency, I authorize PowerFit personnel to take reasonable steps to obtain emergency medical assistance and/or contact my emergency contact where reasonably necessary.",
  //         "I understand that external medical treatment, ambulance services, hospital services, investigations, medicines and related expenses are generally my responsibility unless otherwise required by applicable law.",
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: "part-u",
  //   label: "Part U",
  //   title: "Final Member Declaration",
  //   sections: [
  //     {
  //       id: "s-final-declaration",
  //       num: "",
  //       title: "Final Member Declaration",
  //       kind: "checklist",
  //       intro: "I hereby declare and confirm that:",
  //       items: [
  //         "All information provided by me to PowerFit is true and accurate to the best of my knowledge.",
  //         "I have not knowingly withheld material information relevant to my participation.",
  //         "I will inform PowerFit of any material change in my health or physical condition.",
  //         "I understand the nature of the activities provided by PowerFit.",
  //         "I understand that physical exercise involves inherent risks.",
  //         "I voluntarily choose to participate.",
  //         "I agree to comply with PowerFit's applicable rules and reasonable instructions.",
  //         "I understand that results are not guaranteed.",
  //         "I understand the financial, cancellation, refund, freeze, extension and adjustment provisions of this Agreement.",
  //         "I understand that unused membership time ordinarily expires at the end of the membership period and has no cash value.",
  //         "I have had adequate opportunity to read and understand this Agreement.",
  //         "I have had the opportunity to seek independent medical and/or legal advice before signing if I considered it necessary.",
  //         "I voluntarily accept and agree to the terms of this Agreement.",
  //       ],
  //     },
  //   ],
  // },
];

export const commitment = {
  heading: "PowerFit Member Commitment",
  intro: "At PowerFit, we believe sustainable transformation comes from:",
  pillars: ["Consistency", "Discipline", "Training", "Nutrition", "Recovery"],
  body: [
    "We encourage every Member to train with focus, respect the facility and the people around them, follow their prescribed program, communicate openly with their Trainer and take responsibility for their own fitness journey.",
    "We are committed to providing an environment that helps you become stronger, healthier and more confident.",
  ],
  slogan: "Train smart. Train consistently. Stay strong.",
  hashtags: "#ForeverFitForeverStrong #ZiddJazbaaJunoon",
};
