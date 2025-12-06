export interface ChartDataPoint {
  month: string;
  value: number;
}

export const LEVERAGE_DATA: ChartDataPoint[] = [
  { month: 'Jan', value: 3.20 },
  { month: 'Feb', value: 3.35 },
  { month: 'Mar', value: 3.30 },
  { month: 'Apr', value: 3.45 },
  { month: 'May', value: 3.60 },
  { month: 'Jun', value: 3.75 },
  { month: 'Jul', value: 3.80 },
  { month: 'Aug', value: 3.85 },
  { month: 'Sep', value: 3.95 },
  { month: 'Oct', value: 4.10 },
  { month: 'Nov', value: 4.35 },
  { month: 'Dec', value: 4.52 },
];

export const COVENANT_THRESHOLD = 4.00;

export const RESERVATION_OF_RIGHTS_TEMPLATE = `STRICTLY PRIVATE AND CONFIDENTIAL

[Date]

To: The Directors, Solaris Energy Ltd (the "Company")
Cc: The Lenders

Dear Sirs,

Re: US$500,000,000 Facility Agreement dated 12 January 2024 (the "Facility Agreement")

We refer to the Facility Agreement. Terms defined in the Facility Agreement shall have the same meaning in this letter unless explicitly defined otherwise.

We refer to the Compliance Certificate dated [Current Date] delivered by the Company pursuant to Clause 21.2 (Compliance Certificate) of the Facility Agreement, which indicates that the Leverage Ratio for the Relevant Period ending on [Date] was 4.52:1.00. 

This constitutes a breach of the financial covenant set out in Clause 22.1 (Financial Condition) of the Facility Agreement, which requires the Leverage Ratio not to exceed 4.00:1.00 (the "Event of Default").

The Agent (acting on the instructions of the Majority Lenders) hereby expressly reserves all rights, remedies, powers, and discretions available to the Finance Parties under the Finance Documents and applicable law in respect of the Event of Default and any other Default or Event of Default that may have occurred and is continuing.

Nothing in this letter, nor any delay or failure by the Agent or any Finance Party to exercise any right, remedy, power, or discretion, shall be construed as a waiver, consent, or acquiescence with respect to the Event of Default or any other breach.

Yours faithfully,

For and on behalf of
LMA Pulse Agency Services Ltd`;

export const WAIVER_REQUEST_TEMPLATE = `DRAFT WAIVER REQUEST

[Date]

To: The Agent
From: Solaris Energy Ltd

Dear Sirs,

We refer to the Facility Agreement dated 12 January 2024.

We hereby request a temporary waiver regarding the breach of Clause 22.1 (Financial Condition)...
`;